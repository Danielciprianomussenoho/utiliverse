'use client';
import { useState, useEffect } from 'react';
import { Thermometer, RefreshCw, Calculator } from 'lucide-react';

interface TemperatureResult {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

export default function TemperaturaConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState<'celsius' | 'fahrenheit' | 'kelvin'>('celsius');
  const [result, setResult] = useState<TemperatureResult | null>(null);

  const convertTemperature = () => {
    const value = parseFloat(inputValue.replace(',', '.'));

    if (isNaN(value)) {
      setResult(null);
      return;
    }

    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    switch (fromUnit) {
      case 'celsius':
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        fahrenheit = value;
        kelvin = (value - 32) * 5/9 + 273.15;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        fahrenheit = (value - 273.15) * 9/5 + 32;
        kelvin = value;
        break;
    }

    setResult({
      celsius: parseFloat(celsius.toFixed(2)),
      fahrenheit: parseFloat(fahrenheit.toFixed(2)),
      kelvin: parseFloat(kelvin.toFixed(2))
    });
  };

  const resetForm = () => {
    setInputValue('');
    setResult(null);
  };

  // Conversão automática quando o input muda
  useEffect(() => {
    if (inputValue) {
      const timeoutId = setTimeout(convertTemperature, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setResult(null);
    }
  }, [inputValue, fromUnit]);

  const getTemperatureColor = (temp: number, unit: string) => {
    let celsiusTemp = temp;
    
    if (unit === 'fahrenheit') {
      celsiusTemp = (temp - 32) * 5/9;
    } else if (unit === 'kelvin') {
      celsiusTemp = temp - 273.15;
    }

    if (celsiusTemp <= 0) return 'text-blue-600 dark:text-blue-400';
    if (celsiusTemp <= 10) return 'text-cyan-600 dark:text-cyan-400';
    if (celsiusTemp <= 20) return 'text-green-600 dark:text-green-400';
    if (celsiusTemp <= 30) return 'text-yellow-600 dark:text-yellow-400';
    if (celsiusTemp <= 40) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getTemperatureIcon = (temp: number, unit: string) => {
    let celsiusTemp = temp;
    
    if (unit === 'fahrenheit') {
      celsiusTemp = (temp - 32) * 5/9;
    } else if (unit === 'kelvin') {
      celsiusTemp = temp - 273.15;
    }

    if (celsiusTemp <= 0) return '❄️';
    if (celsiusTemp <= 10) return '☁️';
    if (celsiusTemp <= 20) return '⛅';
    if (celsiusTemp <= 30) return '☀️';
    if (celsiusTemp <= 40) return '🔥';
    return '💀';
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperatura
          </label>
          <input
            type="text"
            id="temperature"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.replace(/[^0-9,.-]/g, ''))}
            placeholder="Ex: 25.5"
            className="input-field w-full"
          />
        </div>
        
        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            De
          </label>
          <select 
            id="unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as 'celsius' | 'fahrenheit' | 'kelvin')}
            className="input-field w-full"
          >
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={convertTemperature}
          disabled={!inputValue}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed justify-center"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Converter
        </button>
        <button
          onClick={resetForm}
          className="btn-secondary justify-center sm:w-auto"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Resultados da Conversão
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Celsius */}
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="text-2xl mb-2">{getTemperatureIcon(result.celsius, 'celsius')}</div>
                <div className={`text-2xl sm:text-3xl font-bold ${getTemperatureColor(result.celsius, 'celsius')} mb-2`}>
                  {result.celsius}°C
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Celsius</p>
              </div>

              {/* Fahrenheit */}
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="text-2xl mb-2">{getTemperatureIcon(result.fahrenheit, 'fahrenheit')}</div>
                <div className={`text-2xl sm:text-3xl font-bold ${getTemperatureColor(result.fahrenheit, 'fahrenheit')} mb-2`}>
                  {result.fahrenheit}°F
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fahrenheit</p>
              </div>

              {/* Kelvin */}
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="text-2xl mb-2">{getTemperatureIcon(result.kelvin, 'kelvin')}</div>
                <div className={`text-2xl sm:text-3xl font-bold ${getTemperatureColor(result.kelvin, 'kelvin')} mb-2`}>
                  {result.kelvin}K
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Kelvin</p>
              </div>
            </div>
          </div>

          {/* Temperature Description - CORRIGIDO */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-600">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 text-center sm:text-left">
              Legenda de Temperaturas:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Frio (≤ 0°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Fresco (1-10°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Ameno (11-20°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Quente (21-30°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Muito Quente (31-40°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">Extremo (&gt; 40°C)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center px-2">
        * Conversões atualizadas automaticamente. Use ponto ou vírgula para decimais.
      </div>
    </div>
  );
}