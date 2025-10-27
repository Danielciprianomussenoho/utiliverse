'use client';
import { useState, useEffect } from 'react';
import { Copy, Check, Shuffle, RotateCcw } from 'lucide-react';

interface GradientStop {
  color: string;
  position: number;
  id: string;
}

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState<GradientStop[]>([
    { color: '#FF6B6B', position: 0, id: '1' },
    { color: '#4ECDC4', position: 100, id: '2' }
  ]);
  const [copied, setCopied] = useState<string | null>(null);
  const [cssCode, setCssCode] = useState('');

  // Gerar CSS do gradiente
  const generateGradientCSS = () => {
    const stopsCSS = stops.map(stop => `${stop.color} ${stop.position}%`).join(', ');
    
    if (gradientType === 'linear') {
      return `background: linear-gradient(${angle}deg, ${stopsCSS});`;
    } else {
      return `background: radial-gradient(circle, ${stopsCSS});`;
    }
  };

  // Atualizar código CSS quando mudar configurações
  useEffect(() => {
    setCssCode(generateGradientCSS());
  }, [gradientType, angle, stops]);

  // Adicionar nova parada de cor
  const addStop = () => {
    const newStop: GradientStop = {
      color: '#FFFFFF',
      position: Math.min(100, stops[stops.length - 1].position + 20),
      id: Date.now().toString()
    };
    setStops([...stops, newStop]);
  };

  // Remover parada de cor
  const removeStop = (id: string) => {
    if (stops.length > 2) {
      setStops(stops.filter(stop => stop.id !== id));
    }
  };

  // Atualizar cor da parada
  const updateStopColor = (id: string, color: string) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, color } : stop
    ));
  };

  // Atualizar posição da parada
  const updateStopPosition = (id: string, position: number) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, position } : stop
    ));
  };

  // Gerar gradiente aleatório
  const generateRandomGradient = () => {
    const randomStops = stops.map(stop => ({
      ...stop,
      color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    }));
    setStops(randomStops);
    if (gradientType === 'linear') {
      setAngle(Math.floor(Math.random() * 360));
    }
  };

  // Reset para padrão
  const resetGradient = () => {
    setStops([
      { color: '#FF6B6B', position: 0, id: '1' },
      { color: '#4ECDC4', position: 100, id: '2' }
    ]);
    setAngle(90);
    setGradientType('linear');
  };

  // Copiar código CSS
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied('css');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Preview do Gradiente */}
      <div className="relative">
        <div 
          className="w-full h-64 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 transition-all duration-300"
          style={{ 
            background: gradientType === 'linear' 
              ? `linear-gradient(${angle}deg, ${stops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
              : `radial-gradient(circle, ${stops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
          }}
        />
        
        {/* Controles flutuantes no preview */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <button
            onClick={() => setGradientType('linear')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              gradientType === 'linear' 
                ? 'bg-white text-gray-900 shadow-md' 
                : 'bg-black bg-opacity-50 text-white hover:bg-opacity-70'
            }`}
          >
            Linear
          </button>
          <button
            onClick={() => setGradientType('radial')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              gradientType === 'radial' 
                ? 'bg-white text-gray-900 shadow-md' 
                : 'bg-black bg-opacity-50 text-white hover:bg-opacity-70'
            }`}
          >
            Radial
          </button>
        </div>
      </div>

      {/* Controles do Gradiente */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Tipo e Ângulo */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tipo de Gradiente
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setGradientType('linear')}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  gradientType === 'linear'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                }`}
              >
                Linear
              </button>
              <button
                onClick={() => setGradientType('radial')}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  gradientType === 'radial'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                }`}
              >
                Radial
              </button>
            </div>
          </div>

          {gradientType === 'linear' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ângulo: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>0°</span>
                <span>90°</span>
                <span>180°</span>
                <span>270°</span>
                <span>360°</span>
              </div>
            </div>
          )}
        </div>

        {/* Cores e Posições */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Cores do Gradiente
            </label>
            <button
              onClick={addStop}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
            >
              + Add Cor
            </button>
          </div>

          <div className="space-y-3 max-h-48 overflow-y-auto">
            {stops.map((stop) => (
              <div key={stop.id} className="flex items-center space-x-3">
                <input
                  type="color"
                  value={stop.color}
                  onChange={(e) => updateStopColor(stop.id, e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={stop.position}
                  onChange={(e) => updateStopPosition(stop.id, parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                  {stop.position}%
                </span>
                {stops.length > 2 && (
                  <button
                    onClick={() => removeStop(stop.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex space-x-4">
        <button
          onClick={generateRandomGradient}
          className="btn-secondary flex-1"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Aleatório
        </button>
        <button
          onClick={resetGradient}
          className="btn-secondary"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Código CSS */}
      <div className="bg-gray-900 dark:bg-black rounded-xl p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-sm font-medium">Código CSS</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {copied === 'css' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span className="text-sm">{copied === 'css' ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>
        <pre className="text-green-400 text-sm overflow-x-auto font-mono">
          {cssCode}
        </pre>
      </div>

      {/* Exemplos Rápidos */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
          Exemplos rápidos:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: 'Sunset', colors: ['#FF6B6B', '#4ECDC4'], angle: 45 },
            { name: 'Ocean', colors: ['#00B4DB', '#0083B0'], angle: 180 },
            { name: 'Forest', colors: ['#56AB2F', '#A8E6CF'], angle: 135 },
            { name: 'Royal', colors: ['#757F9A', '#D7DDE8'], angle: 90 }
          ].map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setStops(example.colors.map((color, i) => ({
                  color,
                  position: i === 0 ? 0 : 100,
                  id: (i + 1).toString()
                })));
                setAngle(example.angle);
                setGradientType('linear');
              }}
              className="text-xs bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-2 hover:border-blue-300 dark:hover:border-blue-600 transition-colors text-left"
            >
              <div 
                className="w-full h-8 rounded mb-1"
                style={{
                  background: `linear-gradient(${example.angle}deg, ${example.colors.join(', ')})`
                }}
              />
              <div className="font-medium text-gray-900 dark:text-white">{example.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Arraste as cores para ajustar a posição no gradiente
      </div>
    </div>
  );
}