'use client';
import { useState } from 'react';
import { RefreshCw, Copy, Check } from 'lucide-react';

type NumberBase = 'decimal' | 'binary' | 'hexadecimal' | 'octal';

export default function BaseConverter() {
  const [values, setValues] = useState({
    decimal: '',
    binary: '',
    hexadecimal: '',
    octal: ''
  });
  const [copied, setCopied] = useState<string | null>(null);

  const convertNumber = (fromBase: NumberBase, value: string) => {
    if (!value || value === '') {
      setValues({ decimal: '', binary: '', hexadecimal: '', octal: '' });
      return;
    }

    try {
      let decimalValue = 0;

      // Converter para decimal
      switch (fromBase) {
        case 'decimal':
          decimalValue = parseInt(value, 10);
          break;
        case 'binary':
          decimalValue = parseInt(value, 2);
          break;
        case 'hexadecimal':
          decimalValue = parseInt(value, 16);
          break;
        case 'octal':
          decimalValue = parseInt(value, 8);
          break;
      }

      if (isNaN(decimalValue)) {
        setValues({ decimal: '', binary: '', hexadecimal: '', octal: '' });
        return;
      }

      // Converter de decimal para outras bases
      setValues({
        decimal: decimalValue.toString(),
        binary: decimalValue.toString(2),
        hexadecimal: decimalValue.toString(16).toUpperCase(),
        octal: decimalValue.toString(8)
      });
    } catch (error) {
      setValues({ decimal: '', binary: '', hexadecimal: '', octal: '' });
    }
  };

  const handleInputChange = (base: NumberBase, value: string) => {
    let cleanedValue = value.toUpperCase();
    
    // Validação específica para cada base
    switch (base) {
      case 'binary':
        cleanedValue = value.replace(/[^01]/g, '');
        break;
      case 'hexadecimal':
        cleanedValue = value.replace(/[^0-9A-F]/gi, '');
        break;
      case 'octal':
        cleanedValue = value.replace(/[^0-7]/g, '');
        break;
      case 'decimal':
        cleanedValue = value.replace(/[^0-9]/g, '');
        break;
    }

    setValues(prev => ({
      ...prev,
      [base]: cleanedValue
    }));

    if (cleanedValue) {
      convertNumber(base, cleanedValue);
    } else {
      setValues({ decimal: '', binary: '', hexadecimal: '', octal: '' });
    }
  };

  const resetForm = () => {
    setValues({ decimal: '', binary: '', hexadecimal: '', octal: '' });
  };

  const copyToClipboard = async (value: string, base: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(base);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Campos de Entrada */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Decimal */}
        <div className="relative">
          <label htmlFor="decimal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Decimal (Base 10)
          </label>
          <div className="relative">
            <input
              type="text"
              id="decimal"
              value={values.decimal}
              onChange={(e) => handleInputChange('decimal', e.target.value)}
              placeholder="Ex: 255"
              className="input-field pr-20"
            />
            {values.decimal && (
              <button
                onClick={() => copyToClipboard(values.decimal, 'decimal')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'decimal' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Binário */}
        <div className="relative">
          <label htmlFor="binary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Binário (Base 2)
          </label>
          <div className="relative">
            <input
              type="text"
              id="binary"
              value={values.binary}
              onChange={(e) => handleInputChange('binary', e.target.value)}
              placeholder="Ex: 11111111"
              className="input-field pr-20"
            />
            {values.binary && (
              <button
                onClick={() => copyToClipboard(values.binary, 'binary')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'binary' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Hexadecimal */}
        <div className="relative">
          <label htmlFor="hexadecimal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Hexadecimal (Base 16)
          </label>
          <div className="relative">
            <input
              type="text"
              id="hexadecimal"
              value={values.hexadecimal}
              onChange={(e) => handleInputChange('hexadecimal', e.target.value)}
              placeholder="Ex: FF"
              className="input-field pr-20"
            />
            {values.hexadecimal && (
              <button
                onClick={() => copyToClipboard(values.hexadecimal, 'hexadecimal')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'hexadecimal' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Octal */}
        <div className="relative">
          <label htmlFor="octal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Octal (Base 8)
          </label>
          <div className="relative">
            <input
              type="text"
              id="octal"
              value={values.octal}
              onChange={(e) => handleInputChange('octal', e.target.value)}
              placeholder="Ex: 377"
              className="input-field pr-20"
            />
            {values.octal && (
              <button
                onClick={() => copyToClipboard(values.octal, 'octal')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'octal' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Botão Limpar */}
      <div className="flex space-x-4">
        <button
          onClick={resetForm}
          className="btn-secondary flex-1"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Resultados em Destaque */}
      {values.decimal && (
        <div className="bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Conversão Completa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-violet-600">{values.decimal}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Decimal</div>
            </div>
            <div>
              <div className="text-xl font-bold text-violet-600">{values.binary}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Binário</div>
            </div>
            <div>
              <div className="text-xl font-bold text-violet-600">{values.hexadecimal}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hexadecimal</div>
            </div>
            <div>
              <div className="text-xl font-bold text-violet-600">{values.octal}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Octal</div>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Todas as conversões são atualizadas automaticamente quando você digita em qualquer campo
      </div>
    </div>
  );
}