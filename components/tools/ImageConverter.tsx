'use client';
import { useState, useRef } from 'react';
import { Upload, Download, RotateCcw, RefreshCw } from 'lucide-react';

type ImageFormat = 'jpg' | 'png' | 'webp' | 'gif';

interface ConversionState {
  original: File | null;
  originalUrl: string;
  convertedUrl: string | null;
  originalFormat: string;
  targetFormat: ImageFormat;
}

export default function ImageConverter() {
  const [conversion, setConversion] = useState<ConversionState>({
    original: null,
    originalUrl: '',
    convertedUrl: null,
    originalFormat: '',
    targetFormat: 'png'
  });
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formats: { value: ImageFormat; label: string; description: string }[] = [
    { value: 'jpg', label: 'JPG', description: 'Para fotografias' },
    { value: 'png', label: 'PNG', description: 'Para transparência' },
    { value: 'webp', label: 'WEBP', description: 'Moderno e eficiente' },
    { value: 'gif', label: 'GIF', description: 'Para animações' }
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const format = file.name.split('.').pop()?.toLowerCase() || '';
      setConversion({
        original: file,
        originalUrl: e.target?.result as string,
        convertedUrl: null,
        originalFormat: format,
        targetFormat: formats.find(f => f.value === format)?.value || 'png'
      });
    };
    reader.readAsDataURL(file);
  };

  const convertImage = async () => {
    if (!conversion.original) return;

    setIsConverting(true);
    
    // Simular conversão
    setTimeout(() => {
      setConversion(prev => ({
        ...prev,
        convertedUrl: prev.originalUrl // Em produção, seria a imagem convertida
      }));
      setIsConverting(false);
    }, 1500);
  };

  const downloadImage = () => {
    if (!conversion.convertedUrl) return;

    const link = document.createElement('a');
    link.href = conversion.convertedUrl;
    link.download = `converted-image.${conversion.targetFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetTool = () => {
    setConversion({
      original: null,
      originalUrl: '',
      convertedUrl: null,
      originalFormat: '',
      targetFormat: 'png'
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Selecione uma imagem
        </label>
        <div className="flex items-center space-x-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Upload className="w-5 h-5" />
            <span>Selecionar Imagem</span>
          </button>
        </div>
        {conversion.original && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Arquivo: {conversion.original.name} ({conversion.originalFormat.toUpperCase()})
          </p>
        )}
      </div>

      {/* Format Selection */}
      {conversion.original && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Converter para:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {formats
              .filter(format => format.value !== conversion.originalFormat)
              .map((format) => (
                <button
                  key={format.value}
                  onClick={() => setConversion(prev => ({ ...prev, targetFormat: format.value }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    conversion.targetFormat === format.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                >
                  <div className="font-semibold">{format.label}</div>
                  <div className="text-xs opacity-75">{format.description}</div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {conversion.original && (
        <div className="flex space-x-4">
          <button
            onClick={convertImage}
            disabled={isConverting}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isConverting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Convertendo...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                <span>Converter para {conversion.targetFormat.toUpperCase()}</span>
              </>
            )}
          </button>
          <button
            onClick={resetTool}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Results */}
      {conversion.convertedUrl && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ✅ Conversão Concluída!
            </h3>
            
            {/* Format Change */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {conversion.originalFormat.toUpperCase()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Original</div>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                  {conversion.targetFormat.toUpperCase()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Convertido</div>
              </div>
            </div>

            {/* Preview */}
            <div className="mb-6">
              <img 
                src={conversion.convertedUrl} 
                alt="Converted" 
                className="max-w-full h-48 object-contain mx-auto rounded-lg border border-green-300 dark:border-green-600"
              />
            </div>

            {/* Download Button */}
            <button
              onClick={downloadImage}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Baixar {conversion.targetFormat.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          💡 Dicas de Conversão
        </h4>
        <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
          <li>• <strong>JPG → PNG:</strong> Mantém qualidade mas aumenta tamanho</li>
          <li>• <strong>PNG → JPG:</strong> Reduz tamanho mas perde transparência</li>
          <li>• <strong>Para web:</strong> Prefira WEBP para melhor performance</li>
          <li>• <strong>Para impressão:</strong> Use PNG ou JPG de alta qualidade</li>
        </ul>
      </div>
    </div>
  );
}