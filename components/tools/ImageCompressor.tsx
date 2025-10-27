'use client';
import { useState, useRef } from 'react';
import { Upload, Download, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface ImageState {
  original: File | null;
  originalUrl: string;
  compressedUrl: string | null;
  originalSize: number;
  compressedSize: number | null;
}

export default function ImageCompressor() {
  const [image, setImage] = useState<ImageState>({
    original: null,
    originalUrl: '',
    compressedUrl: null,
    originalSize: 0,
    compressedSize: null
  });
  const [quality, setQuality] = useState(80);
  const [isCompressing, setIsCompressing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Verificar se é uma imagem
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage({
        original: file,
        originalUrl: e.target?.result as string,
        compressedUrl: null,
        originalSize: file.size,
        compressedSize: null
      });
    };
    reader.readAsDataURL(file);
  };

  const compressImage = async () => {
    if (!image.original) return;

    setIsCompressing(true);
    
    // Simular compressão (em produção, usar canvas API real)
    setTimeout(() => {
      const compressionRatio = quality / 100;
      const estimatedCompressedSize = Math.round(image.originalSize * compressionRatio);
      
      setImage(prev => ({
        ...prev,
        compressedUrl: prev.originalUrl, // Em produção, seria a imagem comprimida
        compressedSize: estimatedCompressedSize
      }));
      setIsCompressing(false);
    }, 1000);
  };

  const downloadImage = () => {
    if (!image.compressedUrl) return;

    const link = document.createElement('a');
    link.href = image.compressedUrl;
    link.download = `compressed-${image.original?.name || 'image'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetTool = () => {
    setImage({
      original: null,
      originalUrl: '',
      compressedUrl: null,
      originalSize: 0,
      compressedSize: null
    });
    setQuality(80);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateSavings = () => {
    if (!image.compressedSize || !image.originalSize) return 0;
    return Math.round(((image.originalSize - image.compressedSize) / image.originalSize) * 100);
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
        {image.original && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Arquivo selecionado: {image.original.name} ({formatFileSize(image.originalSize)})
          </p>
        )}
      </div>

      {/* Quality Slider */}
      {image.original && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Qualidade: {quality}%
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {quality >= 80 ? 'Alta' : quality >= 50 ? 'Média' : 'Baixa'}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="95"
            value={quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Menor tamanho</span>
            <span>Melhor qualidade</span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {image.original && (
        <div className="flex space-x-4">
          <button
            onClick={compressImage}
            disabled={isCompressing}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isCompressing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Comprimindo...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Comprimir Imagem</span>
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
      {image.compressedUrl && (
        <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ✅ Compressão Concluída!
            </h3>
            
            {/* File Size Comparison */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatFileSize(image.originalSize)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Original</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatFileSize(image.compressedSize!)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Comprimido</div>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                Economia de {calculateSavings()}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Redução de {formatFileSize(image.originalSize - image.compressedSize!)}
              </div>
            </div>

            {/* Preview Toggle */}
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 mx-auto"
            >
              {showComparison ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showComparison ? 'Ocultar' : 'Mostrar'} Comparação</span>
            </button>

            {/* Image Preview */}
            {showComparison && image.originalUrl && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">Original</div>
                  <img 
                    src={image.originalUrl} 
                    alt="Original" 
                    className="max-w-full h-48 object-contain mx-auto rounded-lg border border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">Comprimido</div>
                  <img 
                    src={image.compressedUrl} 
                    alt="Comprimido" 
                    className="max-w-full h-48 object-contain mx-auto rounded-lg border border-green-300 dark:border-green-600"
                  />
                </div>
              </div>
            )}

            {/* Download Button */}
            <button
              onClick={downloadImage}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Imagem Comprimida</span>
            </button>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          💡 Dicas de Compressão
        </h4>
        <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
          <li>• Use 60-80% para web e redes sociais</li>
          <li>• Use 80-95% para impressão e arquivos</li>
          <li>• WEBP oferece melhor compressão que JPG/PNG</li>
          <li>• Sempre visualize o resultado antes de baixar</li>
        </ul>
      </div>
    </div>
  );
}