// components/tools/RomanConverter.tsx - Com tipagens completas
'use client';
import { useState, useCallback, useMemo } from 'react';
import { RefreshCw, Copy, Check, ArrowRightLeft, BookOpen, Info } from 'lucide-react';

interface ConversionExample {
  arabic: string;
  roman: string;
  description: string;
}

export default function RomanConverter() {
  const [arabic, setArabic] = useState<string>('');
  const [roman, setRoman] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  // Converte número arábico para romano
  const arabicToRoman = useCallback((num: number): string => {
    if (num < 1 || num > 3999) {
      throw new Error('Número deve estar entre 1 e 3999');
    }

    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let result = '';
    let remaining = num;

    for (const { value, numeral } of romanNumerals) {
      while (remaining >= value) {
        result += numeral;
        remaining -= value;
      }
    }

    return result;
  }, []);

  // Converte número romano para arábico
  const romanToArabic = useCallback((romanStr: string): number => {
    const romanMap: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let result = 0;
    let previousValue = 0;

    // Converter para maiúsculas e remover espaços
    const cleanRoman = romanStr.toUpperCase().replace(/\s+/g, '');

    for (let i = cleanRoman.length - 1; i >= 0; i--) {
      const currentChar = cleanRoman[i];
      const currentValue = romanMap[currentChar];

      if (!currentValue) {
        throw new Error(`Caractere inválido: ${currentChar}`);
      }

      if (currentValue < previousValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }

      previousValue = currentValue;
    }

    // Validar se o número romano é válido
    const validatedRoman = arabicToRoman(result);
    if (validatedRoman !== cleanRoman) {
      throw new Error('Número romano inválido');
    }

    return result;
  }, [arabicToRoman]);

  // Converte quando o campo arábico muda
  const handleArabicChange = useCallback((value: string): void => {
    setArabic(value);
    setError('');

    if (!value || value === '') {
      setRoman('');
      return;
    }

    const num = parseInt(value, 10);
    
    if (isNaN(num)) {
      setError('Por favor, digite um número válido');
      setRoman('');
      return;
    }

    if (num < 1 || num > 3999) {
      setError('Número deve estar entre 1 e 3999');
      setRoman('');
      return;
    }

    try {
      const romanResult = arabicToRoman(num);
      setRoman(romanResult);
    } catch (err) {
      console.log(err)
      setError('Erro na conversão');
      setRoman('');
    }
  }, [arabicToRoman]);

  // Converte quando o campo romano muda
  const handleRomanChange = useCallback((value: string): void => {
    // Permite apenas letras romanas e converte para maiúsculas
    const cleanValue = value.toUpperCase().replace(/[^IVXLCDM]/gi, '');
    setRoman(cleanValue);
    setError('');

    if (!cleanValue || cleanValue === '') {
      setArabic('');
      return;
    }

    try {
      const arabicResult = romanToArabic(cleanValue);
      setArabic(String(arabicResult));
    } catch (err) {
      console.log(err)
      setError('Número romano inválido');
      setArabic('');
    }
  }, [romanToArabic]);

  const resetForm = useCallback((): void => {
    setArabic('');
    setRoman('');
    setError('');
    setCopied(null);
  }, []);

  const copyToClipboard = async (value: string, type: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  // Exemplos pré-definidos com descrições
  const examples: ConversionExample[] = useMemo(() => [
    { arabic: '1', roman: 'I', description: 'Unidade básica' },
    { arabic: '4', roman: 'IV', description: 'Subtração (5-1)' },
    { arabic: '9', roman: 'IX', description: 'Subtração (10-1)' },
    { arabic: '49', roman: 'XLIX', description: '40 + 9' },
    { arabic: '99', roman: 'XCIX', description: '90 + 9' },
    { arabic: '444', roman: 'CDXLIV', description: '400 + 40 + 4' },
    { arabic: '888', roman: 'DCCCLXXXVIII', description: '500 + 300 + 50 + 30 + 5 + 3' },
    { arabic: '2024', roman: 'MMXXIV', description: '2000 + 20 + 4' }
  ], []);

  const fillExample = useCallback((example: ConversionExample): void => {
    setArabic(example.arabic);
    setRoman(example.roman);
    setError('');
  }, []);

  const romanSymbols = useMemo(() => [
    { symbol: 'I', value: 1, name: 'Unus' },
    { symbol: 'V', value: 5, name: 'Quinque' },
    { symbol: 'X', value: 10, name: 'Decem' },
    { symbol: 'L', value: 50, name: 'Quinquaginta' },
    { symbol: 'C', value: 100, name: 'Centum' },
    { symbol: 'D', value: 500, name: 'Quingenti' },
    { symbol: 'M', value: 1000, name: 'Mille' }
  ], []);

  return (
    <div className="space-y-6">
      {/* Campos de Conversão */}
      <div className="grid md:grid-cols-2 gap-6 relative">
        {/* Número Arábico */}
        <div className="relative">
          <label htmlFor="arabic" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Número Arábico (Decimal)
          </label>
          <div className="relative">
            <input
              type="text"
              id="arabic"
              value={arabic}
              onChange={(e) => handleArabicChange(e.target.value)}
              placeholder="Ex: 2024"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors pr-20"
              aria-describedby="arabic-help"
            />
            {arabic && (
              <button
                onClick={() => copyToClipboard(arabic, 'arabic')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-label="Copiar número arábico"
              >
                {copied === 'arabic' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
          <p id="arabic-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Digite um número entre 1 e 3999
          </p>
        </div>

        {/* Seta de conversão (mobile) */}
        <div className="md:hidden flex justify-center items-center py-4">
          <ArrowRightLeft className="w-6 h-6 text-amber-500" />
        </div>

        {/* Seta de conversão (desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ArrowRightLeft className="w-8 h-8 text-amber-500" />
        </div>

        {/* Número Romano */}
        <div className="relative">
          <label htmlFor="roman" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Número Romano
          </label>
          <div className="relative">
            <input
              type="text"
              id="roman"
              value={roman}
              onChange={(e) => handleRomanChange(e.target.value)}
              placeholder="Ex: MMXXIV"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-colors pr-20 font-serif text-lg"
              aria-describedby="roman-help"
            />
            {roman && (
              <button
                onClick={() => copyToClipboard(roman, 'roman')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-label="Copiar número romano"
              >
                {copied === 'roman' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
          <p id="roman-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Use apenas: I, V, X, L, C, D, M
          </p>
        </div>
      </div>

      {/* Mensagem de Erro */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="text-red-800 dark:text-red-200 text-sm flex items-center">
            <Info className="w-4 h-4 mr-2" />
            {error}
          </div>
        </div>
      )}

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetForm}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar Campos
        </button>
      </div>

      {/* Resultado em Destaque */}
      {(arabic && roman && !error) && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center">
            <BookOpen className="w-5 h-5 mr-2 text-amber-600" />
            Conversão Realizada
          </h3>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">{arabic}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Arábico</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sistema Decimal</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2 font-serif">{roman}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Romano</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sistema Aditivo</div>
            </div>
          </div>
        </div>
      )}

      {/* Símbolos Romanos */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
          <Info className="w-4 h-4 mr-2 text-amber-500" />
          Símbolos Romanos e Seus Valores:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {romanSymbols.map((symbol, index) => (
            <div key={index} className="text-center bg-white dark:bg-gray-700 rounded p-2">
              <div className="text-lg font-bold text-amber-600 font-serif">{symbol.symbol}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{symbol.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{symbol.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exemplos Rápidos */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
          <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
          Exemplos Históricos e Práticos:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => fillExample(example)}
              className="text-left bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 hover:border-amber-300 dark:hover:border-amber-600 transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                  {example.arabic}
                </div>
                <div className="font-serif text-amber-600 font-semibold">
                  {example.roman}
                </div>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {example.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Informação Educacional */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
          📚 <strong>Sabia?</strong> O sistema romano não possui o número zero e foi usado por mais de 2000 anos 
          antes da adoção generalizada do sistema arábico na Europa medieval.
        </p>
      </div>
    </div>
  );
}