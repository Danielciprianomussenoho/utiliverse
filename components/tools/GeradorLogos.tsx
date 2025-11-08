'use client';
import { useState, useCallback, useRef } from 'react';
import { Download, Copy, RefreshCw, Eye, EyeOff, Sparkles, Plus, Minus } from 'lucide-react';

type EstiloLogo = 'minimal' | 'modern' | 'classic' | 'bold' | 'elegant';
type FormaLogo = 'circle' | 'square' | 'rounded' | 'organic';
type FormatoExportacao = 'png' | 'svg' | 'jpg';

interface ConfiguracaoLogo {
  texto: string;
  corPrimaria: string;
  corSecundaria: string;
  estilo: EstiloLogo;
  forma: FormaLogo;
  tamanho: number;
  mostrarTexto: boolean;
  corFundo: string;
  quantidadeLetras: number;
}

export default function GeradorLogos() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [config, setConfig] = useState<ConfiguracaoLogo>({
    texto: 'MinhaMarca',
    corPrimaria: '#3B82F6',
    corSecundaria: '#1E40AF',
    estilo: 'modern',
    forma: 'rounded',
    tamanho: 200,
    mostrarTexto: true,
    corFundo: 'transparent',
    quantidadeLetras: 2 // Novo campo: quantidade de letras
  });
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [gerando, setGerando] = useState(false);

  const estilos = {
    minimal: { nome: 'Minimalista', desc: 'Limpo e simples' },
    modern: { nome: 'Moderno', desc: 'Inovador e arrojado' },
    classic: { nome: 'Clássico', desc: 'Elegante e atemporal' },
    bold: { nome: 'Ousado', desc: 'Forte e impactante' },
    elegant: { nome: 'Elegante', desc: 'Sofisticado e refinado' }
  };

  const formas = {
    circle: { nome: 'Circular', desc: 'Forma redonda' },
    square: { nome: 'Quadrado', desc: 'Forma quadrada' },
    rounded: { nome: 'Arredondado', desc: 'Cantos suaves' },
    organic: { nome: 'Orgânico', desc: 'Forma fluida' }
  };

  const coresPopulares = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
  ];

  const atualizarConfig = useCallback((campo: keyof ConfiguracaoLogo, valor: any) => {
    setConfig(prev => ({ ...prev, [campo]: valor }));
  }, []);

  const gerarIniciais = useCallback((texto: string, quantidade: number) => {
    const palavras = texto.trim().split(/\s+/);
    
    // Se o usuário digitou apenas uma palavra
    if (palavras.length === 1) {
      return texto.substring(0, quantidade).toUpperCase();
    }
    
    // Se o usuário digitou múltiplas palavras
    let iniciais = '';
    
    if (quantidade === 1) {
      // Apenas a primeira letra da primeira palavra
      iniciais = palavras[0][0];
    } else if (quantidade === 2) {
      // Primeira letra da primeira e segunda palavras (comportamento original)
      iniciais = (palavras[0][0] + (palavras[1]?.[0] || palavras[0][1] || '')).toUpperCase();
    } else if (quantidade === 3) {
      // Primeira letra das três primeiras palavras
      iniciais = (palavras[0][0] + (palavras[1]?.[0] || '') + (palavras[2]?.[0] || palavras[0][1] || '')).toUpperCase();
    } else if (quantidade >= 4) {
      // Primeira letra das palavras até atingir a quantidade desejada
      for (let i = 0; i < quantidade && i < palavras.length; i++) {
        iniciais += palavras[i][0];
      }
      // Se não tiver palavras suficientes, completa com letras da primeira palavra
      if (iniciais.length < quantidade) {
        const primeiraPalavra = palavras[0];
        for (let i = iniciais.length; i < quantidade && i < primeiraPalavra.length; i++) {
          iniciais += primeiraPalavra[i];
        }
      }
      iniciais = iniciais.toUpperCase();
    }
    
    return iniciais.substring(0, quantidade);
  }, []);

  const desenharLogo = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { tamanho, corPrimaria, corSecundaria, estilo, forma, texto, mostrarTexto, corFundo, quantidadeLetras } = config;
    
    // Configurar canvas
    canvas.width = tamanho;
    canvas.height = tamanho;
    ctx.clearRect(0, 0, tamanho, tamanho);

    // Fundo
    if (corFundo !== 'transparent') {
      ctx.fillStyle = corFundo;
      ctx.fillRect(0, 0, tamanho, tamanho);
    }

    const centroX = tamanho / 2;
    const centroY = tamanho / 2;
    const raio = tamanho * 0.4;

    // Desenhar forma base
    ctx.fillStyle = corPrimaria;
    
    switch (forma) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(centroX, centroY, raio, 0, 2 * Math.PI);
        ctx.fill();
        break;
      
      case 'square':
        const lado = raio * 1.4;
        ctx.fillRect(centroX - lado/2, centroY - lado/2, lado, lado);
        break;
      
      case 'rounded':
        const roundedSize = raio * 1.4;
        const borderRadius = raio * 0.2;
        ctx.beginPath();
        ctx.roundRect(centroX - roundedSize/2, centroY - roundedSize/2, roundedSize, roundedSize, borderRadius);
        ctx.fill();
        break;
      
      case 'organic':
        ctx.beginPath();
        ctx.ellipse(centroX, centroY, raio * 0.8, raio * 1.2, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        break;
    }

    // Elementos decorativos baseados no estilo
    ctx.fillStyle = corSecundaria;
    
    switch (estilo) {
      case 'minimal':
        // Linha simples
        ctx.strokeStyle = corSecundaria;
        ctx.lineWidth = tamanho * 0.03;
        ctx.beginPath();
        ctx.moveTo(centroX - raio * 0.3, centroY);
        ctx.lineTo(centroX + raio * 0.3, centroY);
        ctx.stroke();
        break;
      
      case 'modern':
        // Pontos modernos
        ctx.beginPath();
        ctx.arc(centroX - raio * 0.2, centroY, raio * 0.15, 0, 2 * Math.PI);
        ctx.arc(centroX + raio * 0.2, centroY, raio * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        break;
      
      case 'classic':
        // Borda clássica
        ctx.strokeStyle = corSecundaria;
        ctx.lineWidth = tamanho * 0.02;
        ctx.beginPath();
        ctx.arc(centroX, centroY, raio * 0.7, 0, 2 * Math.PI);
        ctx.stroke();
        break;
      
      case 'bold':
        // Forma ousada
        ctx.beginPath();
        ctx.moveTo(centroX, centroY - raio * 0.4);
        ctx.lineTo(centroX + raio * 0.4, centroY + raio * 0.4);
        ctx.lineTo(centroX - raio * 0.4, centroY + raio * 0.4);
        ctx.closePath();
        ctx.fill();
        break;
      
      case 'elegant':
        // Linha elegante
        ctx.strokeStyle = corSecundaria;
        ctx.lineWidth = tamanho * 0.015;
        ctx.beginPath();
        ctx.arc(centroX, centroY, raio * 0.6, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();
        break;
    }

    // Texto
    if (mostrarTexto && texto) {
      const iniciais = gerarIniciais(texto, quantidadeLetras);
      ctx.fillStyle = '#FFFFFF';
      
      // Ajustar tamanho da fonte baseado na quantidade de letras
      let tamanhoFonte = tamanho * 0.3;
      if (quantidadeLetras === 1) {
        tamanhoFonte = tamanho * 0.4;
      } else if (quantidadeLetras === 2) {
        tamanhoFonte = tamanho * 0.3;
      } else if (quantidadeLetras === 3) {
        tamanhoFonte = tamanho * 0.25;
      } else if (quantidadeLetras >= 4) {
        tamanhoFonte = tamanho * 0.2;
      }
      
      ctx.font = `bold ${tamanhoFonte}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(iniciais, centroX, centroY);
    }

    // Atualizar preview
    setPreviewUrl(canvas.toDataURL('image/png'));
  }, [config, gerarIniciais]);

  // Gerar logo quando configurações mudarem
  useState(() => {
    desenharLogo();
  });

  const exportarLogo = useCallback(async (formato: FormatoExportacao) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setGerando(true);
    
    try {
      let dataUrl: string;
      let extensao: string;
      
      switch (formato) {
        case 'png':
          dataUrl = canvas.toDataURL('image/png');
          extensao = 'png';
          break;
        case 'jpg':
          dataUrl = canvas.toDataURL('image/jpeg', 0.9);
          extensao = 'jpg';
          break;
        case 'svg':
          // Para SVG, criar um SVG simples baseado no canvas
          const svgContent = criarSVG();
          dataUrl = 'data:image/svg+xml;base64,' + btoa(svgContent);
          extensao = 'svg';
          break;
        default:
          return;
      }

      const link = document.createElement('a');
      link.download = `logo-${config.texto.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.${extensao}`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao exportar logo:', error);
    } finally {
      setGerando(false);
    }
  }, [config, desenharLogo]);

  const criarSVG = useCallback(() => {
    const { tamanho, corPrimaria, corSecundaria, estilo, forma, texto, mostrarTexto, quantidadeLetras } = config;
    const iniciais = gerarIniciais(texto, quantidadeLetras);
    
    // Ajustar tamanho da fonte baseado na quantidade de letras
    let tamanhoFonte = tamanho * 0.3;
    if (quantidadeLetras === 1) {
      tamanhoFonte = tamanho * 0.4;
    } else if (quantidadeLetras === 2) {
      tamanhoFonte = tamanho * 0.3;
    } else if (quantidadeLetras === 3) {
      tamanhoFonte = tamanho * 0.25;
    } else if (quantidadeLetras >= 4) {
      tamanhoFonte = tamanho * 0.2;
    }
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${tamanho}" height="${tamanho}" viewBox="0 0 ${tamanho} ${tamanho}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${config.corFundo === 'transparent' ? 'none' : config.corFundo}"/>
  ${criarFormaSVG(forma, tamanho, corPrimaria)}
  ${criarElementoSVG(estilo, tamanho, corSecundaria)}
  ${mostrarTexto ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-weight="bold" font-size="${tamanhoFonte}">${iniciais}</text>` : ''}
</svg>`;
  }, [config, gerarIniciais]);

  const criarFormaSVG = (forma: FormaLogo, tamanho: number, cor: string) => {
    const centro = tamanho / 2;
    const raio = tamanho * 0.4;
    
    switch (forma) {
      case 'circle':
        return `<circle cx="${centro}" cy="${centro}" r="${raio}" fill="${cor}"/>`;
      case 'square':
        const lado = raio * 1.4;
        return `<rect x="${centro - lado/2}" y="${centro - lado/2}" width="${lado}" height="${lado}" fill="${cor}"/>`;
      case 'rounded':
        const roundedSize = raio * 1.4;
        const borderRadius = raio * 0.2;
        return `<rect x="${centro - roundedSize/2}" y="${centro - roundedSize/2}" width="${roundedSize}" height="${roundedSize}" rx="${borderRadius}" fill="${cor}"/>`;
      case 'organic':
        return `<ellipse cx="${centro}" cy="${centro}" rx="${raio * 0.8}" ry="${raio * 1.2}" transform="rotate(45 ${centro} ${centro})" fill="${cor}"/>`;
      default:
        return '';
    }
  };

  const criarElementoSVG = (estilo: EstiloLogo, tamanho: number, cor: string) => {
    const centro = tamanho / 2;
    const raio = tamanho * 0.4;
    
    switch (estilo) {
      case 'minimal':
        return `<line x1="${centro - raio * 0.3}" y1="${centro}" x2="${centro + raio * 0.3}" y2="${centro}" stroke="${cor}" stroke-width="${tamanho * 0.03}"/>`;
      case 'modern':
        return `
          <circle cx="${centro - raio * 0.2}" cy="${centro}" r="${raio * 0.15}" fill="${cor}"/>
          <circle cx="${centro + raio * 0.2}" cy="${centro}" r="${raio * 0.1}" fill="${cor}"/>
        `;
      case 'classic':
        return `<circle cx="${centro}" cy="${centro}" r="${raio * 0.7}" stroke="${cor}" stroke-width="${tamanho * 0.02}" fill="none"/>`;
      case 'bold':
        return `<polygon points="${centro},${centro - raio * 0.4} ${centro + raio * 0.4},${centro + raio * 0.4} ${centro - raio * 0.4},${centro + raio * 0.4}" fill="${cor}"/>`;
      case 'elegant':
        return `<path d="M ${centro + raio * 0.6 * Math.cos(-Math.PI/4)} ${centro + raio * 0.6 * Math.sin(-Math.PI/4)} A ${raio * 0.6} ${raio * 0.6} 0 0 1 ${centro + raio * 0.6 * Math.cos(Math.PI/4)} ${centro + raio * 0.6 * Math.sin(Math.PI/4)}" stroke="${cor}" stroke-width="${tamanho * 0.015}" fill="none"/>`;
      default:
        return '';
    }
  };

  const copiarParaAreaTransferencia = useCallback(async () => {
    if (!previewUrl) return;

    try {
      const response = await fetch(previewUrl);
      const blob = await response.blob();
      
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      
      // Feedback visual (pode ser implementado com estado)
      alert('Logo copiado para a área de transferência!');
    } catch (err) {
      console.error('Falha ao copiar imagem: ', err);
      // Fallback: copiar data URL como texto
      try {
        await navigator.clipboard.writeText(previewUrl);
        alert('URL da imagem copiada!');
      } catch (err2) {
        console.error('Falha ao copiar URL: ', err2);
      }
    }
  }, [previewUrl]);

  const aumentarLetras = useCallback(() => {
    if (config.quantidadeLetras < 4) {
      atualizarConfig('quantidadeLetras', config.quantidadeLetras + 1);
    }
  }, [config.quantidadeLetras, atualizarConfig]);

  const diminuirLetras = useCallback(() => {
    if (config.quantidadeLetras > 1) {
      atualizarConfig('quantidadeLetras', config.quantidadeLetras - 1);
    }
  }, [config.quantidadeLetras, atualizarConfig]);

  return (
    <div className="space-y-8">
      {/* Preview do Logo */}
      <div className="flex justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600">
          <canvas
            ref={canvasRef}
            className="max-w-full h-auto"
            style={{ 
              width: config.tamanho, 
              height: config.tamanho,
              background: config.corFundo === 'transparent' ? 'transparent' : config.corFundo
            }}
          />
        </div>
      </div>

      {/* Controles de Personalização */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Texto */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Nome da Marca
          </label>
          <input
            type="text"
            value={config.texto}
            onChange={(e) => atualizarConfig('texto', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Digite o nome da marca"
            maxLength={20}
          />
        </div>

        {/* Quantidade de Letras */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Letras no Logo: {config.quantidadeLetras}
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={diminuirLetras}
              disabled={config.quantidadeLetras <= 1}
              className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <div className="flex-1 text-center">
              <span className="text-lg font-bold text-amber-600">
                {config.quantidadeLetras} letra{config.quantidadeLetras !== 1 ? 's' : ''}
              </span>
            </div>
            
            <button
              onClick={aumentarLetras}
              disabled={config.quantidadeLetras >= 4}
              className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {config.quantidadeLetras === 1 ? 'Apenas a primeira letra' :
             config.quantidadeLetras === 2 ? 'Primeira letra de cada palavra' :
             config.quantidadeLetras === 3 ? 'Três primeiras letras' :
             'Quatro primeiras letras'}
          </p>
        </div>

        {/* Estilo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Estilo do Logo
          </label>
          <select
            value={config.estilo}
            onChange={(e) => atualizarConfig('estilo', e.target.value as EstiloLogo)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(estilos).map(([key, { nome, desc }]) => (
              <option key={key} value={key}>
                {nome} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Forma */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Forma Base
          </label>
          <select
            value={config.forma}
            onChange={(e) => atualizarConfig('forma', e.target.value as FormaLogo)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(formas).map(([key, { nome, desc }]) => (
              <option key={key} value={key}>
                {nome} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Cor Primária */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Cor Primária
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="color"
              value={config.corPrimaria}
              onChange={(e) => atualizarConfig('corPrimaria', e.target.value)}
              className="w-12 h-12 rounded-lg cursor-pointer"
            />
            <div className="flex-1 grid grid-cols-5 gap-1">
              {coresPopulares.map(cor => (
                <button
                  key={cor}
                  onClick={() => atualizarConfig('corPrimaria', cor)}
                  className="w-8 h-8 rounded border-2 border-gray-300 hover:scale-110 transition-transform"
                  style={{ backgroundColor: cor }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cor Secundária */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Cor Secundária
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="color"
              value={config.corSecundaria}
              onChange={(e) => atualizarConfig('corSecundaria', e.target.value)}
              className="w-12 h-12 rounded-lg cursor-pointer"
            />
            <div className="flex-1 grid grid-cols-5 gap-1">
              {coresPopulares.map(cor => (
                <button
                  key={cor}
                  onClick={() => atualizarConfig('corSecundaria', cor)}
                  className="w-8 h-8 rounded border-2 border-gray-300 hover:scale-110 transition-transform"
                  style={{ backgroundColor: cor }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Configurações Adicionais */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Mostrar Texto
          </span>
          <button
            onClick={() => atualizarConfig('mostrarTexto', !config.mostrarTexto)}
            className={`p-2 rounded-lg transition-colors ${
              config.mostrarTexto
                ? 'bg-amber-500 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
            }`}
          >
            {config.mostrarTexto ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Cor de Fundo
          </label>
          <select
            value={config.corFundo}
            onChange={(e) => atualizarConfig('corFundo', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="transparent">Transparente</option>
            <option value="#FFFFFF">Branco</option>
            <option value="#000000">Preto</option>
            <option value="#F3F4F6">Cinza Claro</option>
            <option value="#1F2937">Cinza Escuro</option>
          </select>
        </div>
      </div>

      {/* Tamanho */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Tamanho: {config.tamanho}px
        </label>
        <input
          type="range"
          min="100"
          max="500"
          step="50"
          value={config.tamanho}
          onChange={(e) => atualizarConfig('tamanho', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => desenharLogo()}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Atualizar Preview
        </button>

        <button
          onClick={copiarParaAreaTransferencia}
          disabled={!previewUrl}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors"
        >
          <Copy className="w-5 h-5" />
          Copiar Logo
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => exportarLogo('png')}
            disabled={gerando}
            className="flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors"
          >
            <Download className="w-5 h-5" />
            PNG
          </button>
          
          <button
            onClick={() => exportarLogo('svg')}
            disabled={gerando}
            className="flex items-center gap-2 px-4 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors"
          >
            <Download className="w-5 h-5" />
            SVG
          </button>
        </div>
      </div>

      {/* Dicas de Design */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
        <div className="flex items-start">
          <Sparkles className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
              💡 Dicas para Escolher as Letras do Logo
            </h4>
            <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1">
              <li>• <strong>1 letra:</strong> Ideal para marcas com nomes longos ou quando você quer um visual minimalista</li>
              <li>• <strong>2 letras:</strong> Clássico e versátil, perfeito para a maioria das marcas</li>
              <li>• <strong>3 letras:</strong> Bom para siglas ou quando você quer incluir mais caracteres</li>
              <li>• <strong>4 letras:</strong> Excelente para marcas com nomes curtos ou siglas memoráveis</li>
              <li>• O tamanho da fonte ajusta automaticamente para caber perfeitamente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}