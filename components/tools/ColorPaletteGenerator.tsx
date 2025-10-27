'use client';
import { useState, useEffect } from 'react';
import { RefreshCw, Copy, Check, Shuffle } from 'lucide-react';

interface ColorPalette {
  main: string;
  shades: string[];
  complementary: string;
}

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#3B82F6');
  const [palette, setPalette] = useState<ColorPalette | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('#3B82F6');

  // Função para validar e formatar cor HEX
  const validateAndFormatHex = (value: string): string | null => {
    // Remover # se existir
    const cleanValue = value.replace('#', '').toUpperCase();
    
    // Se estiver vazio, retornar null
    if (cleanValue === '') return null;
    
    // Se tiver 3 caracteres, expandir para 6 (ex: FFF -> FFFFFF)
    if (cleanValue.length === 3 && /^[0-9A-F]{3}$/i.test(cleanValue)) {
      return `#${cleanValue[0]}${cleanValue[0]}${cleanValue[1]}${cleanValue[1]}${cleanValue[2]}${cleanValue[2]}`;
    }
    
    // Se tiver 6 caracteres e for válido
    if (cleanValue.length === 6 && /^[0-9A-F]{6}$/i.test(cleanValue)) {
      return `#${cleanValue}`;
    }
    
    // Valor inválido
    return null;
  };

  // Função muito mais simples para gerar tons
  const generateShades = (hex: string): string[] => {
    // Converter HEX para RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Tons pré-definidos com fatores de ajuste
    const shades = [
      // Tons mais claros (aumentar valores RGB)
      `#${Math.min(255, r + 100).toString(16).padStart(2, '0')}${Math.min(255, g + 100).toString(16).padStart(2, '0')}${Math.min(255, b + 100).toString(16).padStart(2, '0')}`,
      `#${Math.min(255, r + 70).toString(16).padStart(2, '0')}${Math.min(255, g + 70).toString(16).padStart(2, '0')}${Math.min(255, b + 70).toString(16).padStart(2, '0')}`,
      `#${Math.min(255, r + 40).toString(16).padStart(2, '0')}${Math.min(255, g + 40).toString(16).padStart(2, '0')}${Math.min(255, b + 40).toString(16).padStart(2, '0')}`,
      `#${Math.min(255, r + 20).toString(16).padStart(2, '0')}${Math.min(255, g + 20).toString(16).padStart(2, '0')}${Math.min(255, b + 20).toString(16).padStart(2, '0')}`,
      
      // Cor original
      hex,
      
      // Tons mais escuros (diminuir valores RGB)
      `#${Math.max(0, r - 20).toString(16).padStart(2, '0')}${Math.max(0, g - 20).toString(16).padStart(2, '0')}${Math.max(0, b - 20).toString(16).padStart(2, '0')}`,
      `#${Math.max(0, r - 40).toString(16).padStart(2, '0')}${Math.max(0, g - 40).toString(16).padStart(2, '0')}${Math.max(0, b - 40).toString(16).padStart(2, '0')}`,
      `#${Math.max(0, r - 70).toString(16).padStart(2, '0')}${Math.max(0, g - 70).toString(16).padStart(2, '0')}${Math.max(0, b - 70).toString(16).padStart(2, '0')}`,
    ];

    return shades;
  };

  // Gerar paleta baseada na cor selecionada
  const generatePalette = (color: string) => {
    try {
      // Gerar tons da cor principal
      const shades = generateShades(color);

      // Gerar cor complementar (oposta no círculo cromático)
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      
      const compR = (255 - r).toString(16).padStart(2, '0');
      const compG = (255 - g).toString(16).padStart(2, '0');
      const compB = (255 - b).toString(16).padStart(2, '0');
      const complementary = `#${compR}${compG}${compB}`;

      setPalette({
        main: color,
        shades,
        complementary
      });
    } catch (error) {
      console.error('Erro ao gerar paleta:', error);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    
    // Validar e formatar o valor
    const formattedColor = validateAndFormatHex(value);
    
    if (formattedColor) {
      setBaseColor(formattedColor);
    }
    // Se não for válido, apenas atualiza o input mas não a paleta
  };

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setBaseColor(randomColor);
    setInputValue(randomColor);
  };

  const copyToClipboard = async (color: string, type: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  const copyAllPalette = async () => {
    if (!palette) return;
    
    const paletteText = `Paleta de Cores:
Principal: ${palette.main}
Tons: ${palette.shades.join(', ')}
Complementar: ${palette.complementary}`;

    try {
      await navigator.clipboard.writeText(paletteText);
      setCopied('all');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  const resetPalette = () => {
    setBaseColor('#3B82F6');
    setInputValue('#3B82F6');
  };

  useEffect(() => {
    generatePalette(baseColor);
  }, [baseColor]);

  // Verificar se a cor é clara ou escura para determinar a cor do texto
  const getTextColor = (hexColor: string): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'text-gray-900' : 'text-white';
  };

  return (
    <div className="space-y-6">
      {/* Controles */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="baseColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cor Base
          </label>
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <input
                type="color"
                id="baseColor"
                value={baseColor}
                onChange={(e) => {
                  setBaseColor(e.target.value);
                  setInputValue(e.target.value);
                }}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"
              placeholder="#000000"
            />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Digite 3 ou 6 caracteres HEX (ex: FFF ou FF0000)
          </div>
        </div>

        <div className="flex items-end space-x-4">
          <button
            onClick={generateRandomColor}
            className="btn-secondary flex-1"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Aleatório
          </button>
          <button
            onClick={resetPalette}
            className="btn-secondary"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          {palette && (
            <button
              onClick={copyAllPalette}
              className="btn-primary"
            >
              {copied === 'all' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Paleta Gerada */}
      {palette && (
        <div className="space-y-6">
          {/* Cor Principal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cor Principal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 mb-2 relative group cursor-pointer"
                  style={{ backgroundColor: palette.main }}
                  onClick={() => copyToClipboard(palette.main, 'main')}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Principal</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{palette.main}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tons da Cor */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tons da Cor</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {palette.shades.map((shade, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 mb-2 relative group cursor-pointer"
                    style={{ backgroundColor: shade }}
                    onClick={() => copyToClipboard(shade, `shade-${index}`)}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                      <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Indicador visual da cor */}
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Tom {index + 1}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{shade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cor Complementar */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cor Complementar</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 mb-2 relative group cursor-pointer"
                  style={{ backgroundColor: palette.complementary }}
                  onClick={() => copyToClipboard(palette.complementary, 'complementary')}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Complementar</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{palette.complementary}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview da Paleta */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preview da Paleta</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
              <div className="flex flex-col space-y-4">
                {/* Header */}
                <div 
                  className="flex justify-between items-center p-4 rounded-lg"
                  style={{ backgroundColor: palette.main }}
                >
                  <div className={`font-semibold ${getTextColor(palette.main)}`}>Header</div>
                  <div className={`opacity-80 ${getTextColor(palette.main)}`}>Menu</div>
                </div>
                
                {/* Content */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: palette.shades[1] }}
                  >
                    <div className={`font-medium ${getTextColor(palette.shades[1])}`}>Card 1</div>
                    <div className={`text-sm opacity-80 ${getTextColor(palette.shades[1])}`}>Content</div>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: palette.shades[3] }}
                  >
                    <div className={`font-medium ${getTextColor(palette.shades[3])}`}>Card 2</div>
                    <div className={`text-sm opacity-80 ${getTextColor(palette.shades[3])}`}>Content</div>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: palette.shades[5] }}
                  >
                    <div className={`font-medium ${getTextColor(palette.shades[5])}`}>Card 3</div>
                    <div className={`text-sm opacity-80 ${getTextColor(palette.shades[5])}`}>Content</div>
                  </div>
                </div>

                {/* Footer */}
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: palette.complementary }}
                >
                  <div className={`font-medium ${getTextColor(palette.complementary)}`}>Footer</div>
                  <div className={`text-sm opacity-80 ${getTextColor(palette.complementary)}`}>Additional info</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Clique em qualquer cor para copiar seu valor HEX
      </div>
    </div>
  );
}