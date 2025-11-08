'use client';
import { useState, useCallback } from 'react';
import { FileText, Copy, Shuffle, Type, Quote, BookOpen, Check, Download } from 'lucide-react';

type TipoTexto = 'lorem' | 'paragrafos' | 'citacoes' | 'placeholder';
type Formato = 'html' | 'markdown' | 'texto';

interface TextoGerado {
  conteudo: string;
  tipo: string;
  copiado: boolean;
}

export default function GeradorTextos() {
  const [tipoTexto, setTipoTexto] = useState<TipoTexto>('lorem');
  const [formato, setFormato] = useState<Formato>('texto');
  const [quantidade, setQuantidade] = useState(3);
  const [textosGerados, setTextosGerados] = useState<TextoGerado[]>([]);
  const [gerando, setGerando] = useState(false);
  const [todosCopiados, setTodosCopiados] = useState(false);

  // Banco de dados de textos
  const bancosTextos = {
    lorem: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    ],
    
    citacoes: [
      "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
      "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
      "Não espere por circunstâncias ideais. Comece onde você está, use o que você tem. - Arthur Ashe",
      "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
      "A persistência é o caminho do êxito. - Charles Chaplin",
      "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho. - C.S. Lewis"
    ],
    
    palavras: [
      "tecnologia", "inovação", "criatividade", "sustentabilidade", "colaboração", "eficiência",
      "qualidade", "performance", "estratégia", "visão", "missão", "valor", "solução", "processo",
      "resultado", "impacto", "crescimento", "desenvolvimento", "transformação", "evolução",
      "moderno", "contemporâneo", "futurista", "inteligente", "automático", "digital", "virtual"
    ],
    
    frases: [
      "A solução perfeita para suas necessidades",
      "Desenvolvido com as mais modernas tecnologias",
      "Focado em resultados e performance",
      "Inovação que transforma negócios",
      "Qualidade e excelência em cada detalhe",
      "Sustentabilidade e responsabilidade ambiental",
      "Colaboração que gera valor real"
    ]
  };

  const gerarLoremIpsum = useCallback((qtd: number) => {
    const textos = [];
    for (let i = 0; i < qtd; i++) {
      const randomIndex = Math.floor(Math.random() * bancosTextos.lorem.length);
      textos.push(bancosTextos.lorem[randomIndex]);
    }
    return textos.join(' ');
  }, []);

  const gerarParagrafos = useCallback((qtd: number) => {
    const paragrafos = [];
    for (let i = 0; i < qtd; i++) {
      const numFrases = Math.floor(Math.random() * 3) + 2; // 2-4 frases por parágrafo
      const frases = [];
      
      for (let j = 0; j < numFrases; j++) {
        const palavras = [];
        const numPalavras = Math.floor(Math.random() * 15) + 8; // 8-22 palavras por frase
        
        for (let k = 0; k < numPalavras; k++) {
          const palavra = bancosTextos.palavras[Math.floor(Math.random() * bancosTextos.palavras.length)];
          palavras.push(palavra);
        }
        
        // Capitalizar primeira palavra
        palavras[0] = palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1);
        frases.push(palavras.join(' ') + '.');
      }
      
      paragrafos.push(frases.join(' '));
    }
    return paragrafos;
  }, []);

  const gerarCitacoes = useCallback((qtd: number) => {
    const citacoes = [];
    const citacoesUnicas = [...bancosTextos.citacoes];
    
    for (let i = 0; i < qtd; i++) {
      if (citacoesUnicas.length === 0) break;
      const randomIndex = Math.floor(Math.random() * citacoesUnicas.length);
      citacoes.push(citacoesUnicas.splice(randomIndex, 1)[0]);
    }
    
    return citacoes;
  }, []);

  const gerarPlaceholder = useCallback((qtd: number) => {
    const placeholders = [];
    for (let i = 0; i < qtd; i++) {
      const tipo = Math.random() > 0.5 ? 'frase' : 'paragrafo';
      
      if (tipo === 'frase') {
        const frase = bancosTextos.frases[Math.floor(Math.random() * bancosTextos.frases.length)];
        placeholders.push(frase);
      } else {
        const numFrases = Math.floor(Math.random() * 2) + 1;
        const frases = [];
        
        for (let j = 0; j < numFrases; j++) {
          const frase = bancosTextos.frases[Math.floor(Math.random() * bancosTextos.frases.length)];
          frases.push(frase);
        }
        
        placeholders.push(frases.join(' '));
      }
    }
    return placeholders;
  }, []);

  const formatarConteudo = useCallback((conteudo: string | string[], tipo: TipoTexto, formato: Formato) => {
    if (formato === 'texto') {
      if (Array.isArray(conteudo)) {
        return conteudo.join('\n\n');
      }
      return conteudo;
    }
    
    if (formato === 'html') {
      if (Array.isArray(conteudo)) {
        if (tipo === 'paragrafos') {
          return conteudo.map(p => `<p>${p}</p>`).join('\n');
        } else if (tipo === 'citacoes') {
          return conteudo.map(c => `<blockquote>${c}</blockquote>`).join('\n');
        }
        return conteudo.map(item => `<p>${item}</p>`).join('\n');
      }
      return `<p>${conteudo}</p>`;
    }
    
    if (formato === 'markdown') {
      if (Array.isArray(conteudo)) {
        if (tipo === 'paragrafos') {
          return conteudo.join('\n\n');
        } else if (tipo === 'citacoes') {
          return conteudo.map(c => `> ${c}`).join('\n\n');
        }
        return conteudo.join('\n\n');
      }
      return conteudo;
    }
    
    return conteudo;
  }, []);

  const gerarTextos = useCallback(() => {
    setGerando(true);
    setTodosCopiados(false);
    
    setTimeout(() => {
      let conteudo: string | string[] = '';
      let tipoLabel = '';
      
      switch (tipoTexto) {
        case 'lorem':
          conteudo = gerarLoremIpsum(quantidade);
          tipoLabel = 'Lorem Ipsum';
          break;
        case 'paragrafos':
          conteudo = gerarParagrafos(quantidade);
          tipoLabel = 'Parágrafos Realistas';
          break;
        case 'citacoes':
          conteudo = gerarCitacoes(quantidade);
          tipoLabel = 'Citações Inspiradoras';
          break;
        case 'placeholder':
          conteudo = gerarPlaceholder(quantidade);
          tipoLabel = 'Texto Placeholder';
          break;
      }
      
      const conteudoFormatado = formatarConteudo(conteudo, tipoTexto, formato);
      
      setTextosGerados([{
        conteudo: conteudoFormatado,
        tipo: tipoLabel,
        copiado: false
      }]);
      setGerando(false);
    }, 500);
  }, [tipoTexto, formato, quantidade, gerarLoremIpsum, gerarParagrafos, gerarCitacoes, gerarPlaceholder, formatarConteudo]);

  const copiarTexto = useCallback(async (index: number) => {
    try {
      await navigator.clipboard.writeText(textosGerados[index].conteudo);
      setTextosGerados(prev => 
        prev.map((item, i) => 
          i === index ? { ...item, copiado: true } : item
        )
      );
      
      setTimeout(() => {
        setTextosGerados(prev => 
          prev.map((item, i) => 
            i === index ? { ...item, copiado: false } : item
          )
        );
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }, [textosGerados]);

  const baixarTexto = useCallback((index: number) => {
    const texto = textosGerados[index];
    const extensao = formato === 'html' ? 'html' : formato === 'markdown' ? 'md' : 'txt';
    const blob = new Blob([texto.conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `texto-gerado-${Date.now()}.${extensao}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [textosGerados, formato]);

  const getTipoIcon = (tipo: TipoTexto) => {
    switch (tipo) {
      case 'lorem': return <BookOpen className="w-5 h-5" />;
      case 'paragrafos': return <FileText className="w-5 h-5" />;
      case 'citacoes': return <Quote className="w-5 h-5" />;
      case 'placeholder': return <Type className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTipoLabel = (tipo: TipoTexto) => {
    const labels = {
      lorem: 'Lorem Ipsum',
      paragrafos: 'Parágrafos Realistas',
      citacoes: 'Citações Inspiradoras',
      placeholder: 'Texto Placeholder'
    };
    return labels[tipo];
  };

  return (
    <div className="space-y-8">
      {/* Controles */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Tipo de Texto */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Tipo de Texto
          </label>
          <select
            value={tipoTexto}
            onChange={(e) => setTipoTexto(e.target.value as TipoTexto)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="lorem">Lorem Ipsum</option>
            <option value="paragrafos">Parágrafos Realistas</option>
            <option value="citacoes">Citações Inspiradoras</option>
            <option value="placeholder">Texto Placeholder</option>
          </select>
        </div>

        {/* Formato */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Formato
          </label>
          <select
            value={formato}
            onChange={(e) => setFormato(e.target.value as Formato)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="texto">Texto Puro</option>
            <option value="html">HTML</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>

        {/* Quantidade */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {tipoTexto === 'lorem' ? 'Palavras Aprox.' : 
             tipoTexto === 'paragrafos' ? 'Parágrafos' :
             tipoTexto === 'citacoes' ? 'Citações' : 'Itens'}
          </label>
          <select
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {tipoTexto === 'lorem' ? (
              <>
                <option value="50">50 palavras</option>
                <option value="100">100 palavras</option>
                <option value="200">200 palavras</option>
                <option value="500">500 palavras</option>
              </>
            ) : (
              <>
                <option value="1">1 item</option>
                <option value="3">3 itens</option>
                <option value="5">5 itens</option>
                <option value="10">10 itens</option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* Botão Gerar */}
      <div className="flex justify-center">
        <button
          onClick={gerarTextos}
          disabled={gerando}
          className="bg-linear-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          {gerando ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Gerando...
            </>
          ) : (
            <>
              <FileText className="w-6 h-6 mr-3" />
              Gerar Texto
            </>
          )}
        </button>
      </div>

      {/* Resultados */}
      {textosGerados.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Texto Gerado
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => copiarTexto(0)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  textosGerados[0].copiado
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {textosGerados[0].copiado ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {textosGerados[0].copiado ? 'Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={() => baixarTexto(0)}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Baixar
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mr-4">
                {getTipoIcon(tipoTexto as TipoTexto)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {textosGerados[0].tipo}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Formato: {formato.toUpperCase()} • {quantidade} {tipoTexto === 'lorem' ? 'palavras' : tipoTexto === 'paragrafos' ? 'parágrafos' : tipoTexto === 'citacoes' ? 'citações' : 'itens'}
                </div>
              </div>
            </div>
            
            <div className={`whitespace-pre-wrap font-mono text-sm leading-relaxed ${
              formato === 'html' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}>
              {textosGerados[0].conteudo}
            </div>
          </div>
        </div>
      )}

      {/* Informações do Formato */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center mb-2">
            <Type className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-blue-800 dark:text-blue-300">Texto Puro</h4>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            Ideal para uso geral, emails e documentos simples
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center mb-2">
            <FileText className="w-5 h-5 text-orange-600 mr-2" />
            <h4 className="font-semibold text-orange-800 dark:text-orange-300">HTML</h4>
          </div>
          <p className="text-sm text-orange-700 dark:text-orange-400">
            Perfeito para websites, blogs e aplicações web
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-2">
            <BookOpen className="w-5 h-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-green-800 dark:text-green-300">Markdown</h4>
          </div>
          <p className="text-sm text-green-700 dark:text-green-400">
            Excelente para documentação, GitHub e plataformas modernas
          </p>
        </div>
      </div>
    </div>
  );
}