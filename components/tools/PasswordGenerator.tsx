'use client';
import { useState, useCallback } from 'react';
import { Copy, Check, Zap } from 'lucide-react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = lowercase;
    if (includeUppercase) chars += uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    // Garantir que pelo menos um caractere de cada tipo selecionado seja incluído
    let generatedPassword = '';
    
    if (includeUppercase) {
      generatedPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (includeNumbers) {
      generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (includeSymbols) {
      generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Completar o restante da senha
    for (let i = generatedPassword.length; i < length; i++) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    // Embaralhar a senha
    setPassword(generatedPassword.split('').sort(() => Math.random() - 0.5).join(''));
    setCopied(false);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  const getPasswordStrength = () => {
    if (password.length < 8) return { level: 'Muito Fraca', color: 'bg-red-500' };
    if (password.length < 12) return { level: 'Fraca', color: 'bg-orange-500' };
    if (password.length < 16) return { level: 'Média', color: 'bg-yellow-500' };
    if (password.length < 20) return { level: 'Forte', color: 'bg-green-500' };
    return { level: 'Muito Forte', color: 'bg-blue-500' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="space-y-6">
      {/* Password Display */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sua Senha:</span>
          {password && (
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                strength.color === 'bg-red-500' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                strength.color === 'bg-orange-500' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                strength.color === 'bg-yellow-500' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                strength.color === 'bg-green-500' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {strength.level}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-lg font-mono text-gray-900 dark:text-white"
              placeholder="Clique em gerar para criar uma senha"
            />
          </div>
          <button
            onClick={copyToClipboard}
            disabled={!password}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {/* Strength Meter */}
        {password && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span>Força da senha:</span>
              <span>{strength.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
                style={{ 
                  width: `${(password.length / 25) * 100}%` 
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Length Slider */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Comprimento: {length} caracteres
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">{length}</span>
        </div>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>4</span>
          <span>8</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
          <span>28</span>
          <span>32</span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Opções:</label>
        
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="uppercase" className="text-sm text-gray-700 dark:text-gray-300">
            Letras maiúsculas (A-Z)
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="numbers" className="text-sm text-gray-700 dark:text-gray-300">
            Números (0-9)
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="symbols" className="text-sm text-gray-700 dark:text-gray-300">
            Símbolos (!@#$%^&*)
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
      >
        <Zap className="w-5 h-5" />
        <span>Gerar Senha Segura</span>
      </button>

      {/* Quick Options */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
          Opções Rápidas:
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { length: 8, uppercase: true, numbers: true, symbols: false, label: 'Básica' },
            { length: 12, uppercase: true, numbers: true, symbols: true, label: 'Padrão' },
            { length: 16, uppercase: true, numbers: true, symbols: true, label: 'Forte' },
            { length: 20, uppercase: true, numbers: true, symbols: true, label: 'Muito Forte' },
          ].map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setLength(option.length);
                setIncludeUppercase(option.uppercase);
                setIncludeNumbers(option.numbers);
                setIncludeSymbols(option.symbols);
              }}
              className="p-2 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors text-gray-700 dark:text-gray-300"
            >
              
              {option.label} ({option.length})
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}