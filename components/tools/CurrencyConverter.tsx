// components/tools/CurrencyConverter.tsx - Com tipagens completas
'use client';
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeftRight, Calculator, RefreshCw, AlertCircle, Globe, Clock } from 'lucide-react';

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface ConversionResult {
  result: number;
  rate: number;
  lastUpdated: string;
}

const popularCurrencies: Currency[] = [
  { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$' },
  { code: 'USD', name: 'Dólar Americano', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£' },
  { code: 'JPY', name: 'Iene Japonês', symbol: '¥' },
  { code: 'CAD', name: 'Dólar Canadense', symbol: 'C$' },
  { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$' },
  { code: 'CHF', name: 'Franco Suíço', symbol: 'CHF' },
  { code: 'CNY', name: 'Yuan Chinês', symbol: '¥' },
  { code: 'ARS', name: 'Peso Argentino', symbol: '$' },
  { code: 'MXN', name: 'Peso Mexicano', symbol: '$' },
  { code: 'INR', name: 'Rúpia Indiana', symbol: '₹' },
  { code: 'RUB', name: 'Rublo Russo', symbol: '₽' },
  { code: 'ZAR', name: 'Rand Sul-Africano', symbol: 'R' },
  { code: 'TRY', name: 'Lira Turca', symbol: '₺' },
  { code: 'AED', name: 'Dirham dos Emirados', symbol: 'د.إ' },
  { code: 'CLP', name: 'Peso Chileno', symbol: '$' },
  { code: 'COP', name: 'Peso Colombiano', symbol: '$' },
  { code: 'PEN', name: 'Sol Peruano', symbol: 'S/' },
  { code: 'UYU', name: 'Peso Uruguaio', symbol: '$' },
  { code: 'PYG', name: 'Guarani Paraguaio', symbol: '₲' },
  { code: 'BOB', name: 'Boliviano', symbol: 'Bs' },
  { code: 'CZK', name: 'Coroa Tcheca', symbol: 'Kč' },
  { code: 'DKK', name: 'Coroa Dinamarquesa', symbol: 'kr' },
  { code: 'NOK', name: 'Coroa Norueguesa', symbol: 'kr' },
  { code: 'SEK', name: 'Coroa Sueca', symbol: 'kr' },
  { code: 'HKD', name: 'Dólar de Hong Kong', symbol: 'HK$' },
  { code: 'SGD', name: 'Dólar de Cingapura', symbol: 'S$' },
  { code: 'NZD', name: 'Dólar Neozelandês', symbol: 'NZ$' },
  { code: 'KRW', name: 'Won Sul-Coreano', symbol: '₩' },
  { code: 'THB', name: 'Baht Tailandês', symbol: '฿' },
  { code: 'IDR', name: 'Rupia Indonésia', symbol: 'Rp' },
  { code: 'MYR', name: 'Ringgit Malaio', symbol: 'RM' },
  { code: 'PHP', name: 'Peso Filipino', symbol: '₱' },
  { code: 'VND', name: 'Dong Vietnamita', symbol: '₫' },
  { code: 'BDT', name: 'Taka de Bangladesh', symbol: '৳' },
  { code: 'PKR', name: 'Rúpia Paquistanesa', symbol: '₨' },
  { code: 'ILS', name: 'Novo Shekel Israelense', symbol: '₪' },
  { code: 'EGP', name: 'Libra Egípcia', symbol: 'E£' },
  { code: 'NGN', name: 'Naira Nigeriana', symbol: '₦' },
  { code: 'XAF', name: 'Franco CFA Central', symbol: 'FCFA' },
  { code: 'XOF', name: 'Franco CFA Ocidental', symbol: 'CFA' },
  { code: 'PLN', name: 'Zloty Polonês', symbol: 'zł' },
  { code: 'AOA', name: 'Kwanza Angolano', symbol: 'Kz' },
  { code: 'MZN', name: 'Metical Moçambicano', symbol: 'MT' },
  { code: 'CVE', name: 'Escudo Cabo-verdiano', symbol: '$' },
  { code: 'GHS', name: 'Cedi Ganês', symbol: '₵' },
  { code: 'KES', name: 'Xelim Queniano', symbol: 'KSh' },
  { code: 'ETB', name: 'Birr Etíope', symbol: 'Br' },
];

// Taxas de fallback em caso de erro na API
const sampleRates: { [key: string]: number } = {
  'USD-BRL': 5.20,
  'EUR-BRL': 5.60,
  'GBP-BRL': 6.50,
  'JPY-BRL': 0.035,
  'CAD-BRL': 3.80,
  'AUD-BRL': 3.40,
  'CHF-BRL': 5.80,
  'CNY-BRL': 0.72,
  'ARS-BRL': 0.006,
  'BRL-USD': 0.19,
  'BRL-EUR': 0.18,
  'BRL-GBP': 0.15,
  'USD-EUR': 0.93,
  'EUR-USD': 1.07,
};

const API_KEY = 'ce3d2b0a1162c67ea5388e00';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BRL');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar taxa de câmbio real
  const fetchExchangeRate = useCallback(async (): Promise<void> => {
    if (!amount || parseFloat(amount) <= 0) {
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar taxa de câmbio');
      }

      const data = await response.json();

      if (data.result === 'success') {
        const currentRate = data.conversion_rate;
        const amountNum = parseFloat(amount);
        
        setResult({
          result: amountNum * currentRate,
          rate: currentRate,
          lastUpdated: new Date().toLocaleString('pt-BR')
        });
        
        console.log('✅ Taxa obtida com sucesso:', {
          de: fromCurrency,
          para: toCurrency,
          taxa: currentRate
        });
      } else {
        throw new Error(data['error-type'] || 'Erro na API');
      }
    } catch (err) {
      console.error('❌ Erro na conversão:', err);
      setError('Erro ao obter taxa de câmbio. Usando valores de referência.');
      
      // Fallback para taxas de exemplo
      const rateKey = `${fromCurrency}-${toCurrency}`;
      const fallbackRate = sampleRates[rateKey] || 1;
      const amountNum = parseFloat(amount);
      
      setResult({
        result: amountNum * fallbackRate,
        rate: fallbackRate,
        lastUpdated: new Date().toLocaleString('pt-BR')
      });
    } finally {
      setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = useCallback((): void => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
    setError(null);
  }, [fromCurrency, toCurrency]);

  const resetForm = useCallback((): void => {
    setAmount('1');
    setFromCurrency('USD');
    setToCurrency('BRL');
    setResult(null);
    setError(null);
  }, []);

  // Buscar taxa quando mudar moedas ou valor
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchExchangeRate();
    }, 500); // Debounce de 500ms

    return () => clearTimeout(timer);
  }, [fetchExchangeRate]);

  const fromCurrencyInfo = popularCurrencies.find(c => c.code === fromCurrency);
  const toCurrencyInfo = popularCurrencies.find(c => c.code === toCurrency);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Valor para Converter
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="0.00"
            aria-describedby="amount-help"
          />
          <p id="amount-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Digite o valor que deseja converter
          </p>
        </div>

        <div>
          <label htmlFor="fromCurrency" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Moeda de Origem
          </label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white transition-colors"
            disabled={loading}
          >
            {popularCurrencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center pb-2">
          <button
            onClick={swapCurrencies}
            disabled={loading}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            aria-label="Trocar moedas"
          >
            <ArrowLeftRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div>
          <label htmlFor="toCurrency" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Moeda de Destino
          </label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white transition-colors"
            disabled={loading}
          >
            {popularCurrencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={fetchExchangeRate}
          disabled={loading}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Converter moeda"
        >
          {loading ? (
            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Calculator className="w-5 h-5 mr-2" />
          )}
          {loading ? 'Convertendo...' : 'Converter Moeda'}
        </button>
        <button
          onClick={resetForm}
          disabled={loading}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Mensagem de Erro */}
      {error && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            <span className="text-yellow-800 dark:text-yellow-200 text-sm">{error}</span>
          </div>
        </div>
      )}

      {/* Resultado da Conversão */}
      {result !== null && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resultado da Conversão</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {toCurrencyInfo?.symbol} {result.result.toFixed(2)}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              1 {fromCurrency} = {result.rate.toFixed(4)} {toCurrency}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 inline mr-1" />
              Atualizado em: {result.lastUpdated}
            </p>
            {error && (
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                * Usando taxas de referência devido a erro na API
              </p>
            )}
          </div>
        </div>
      )}

      {/* Aviso Informativo */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
          💡 <strong>Informação:</strong> Cotações em tempo real via ExchangeRate-API. 
          Para transações reais, consulte sempre instituições financeiras autorizadas.
        </p>
      </div>
    </div>
  );
}