'use client';
import { useState, useCallback, useMemo } from 'react';
import { Users, DollarSign, Target, TrendingUp, BarChart3, Zap, Calculator, PieChart } from 'lucide-react';

interface CACResult {
  cac: number;
  ltvCacRatio: number;
  paybackPeriod: number;
  marketingEfficiency: string;
  recommendations: string[];
  benchmarks: {
    industry: string;
    averageCAC: number;
    idealLtvCac: number;
  };
}

export default function CACCalculator() {
  const [marketingSpend, setMarketingSpend] = useState<string>('50000');
  const [salesSpend, setSalesSpend] = useState<string>('30000');
  const [newCustomers, setNewCustomers] = useState<string>('200');
  const [customerLifetimeValue, setCustomerLifetimeValue] = useState<string>('1500');
  const [businessType, setBusinessType] = useState<'saas-b2b' | 'saas-b2c' | 'ecommerce' | 'marketplace'>('saas-b2b');

  const calculateCAC = useCallback(() => {
    const marketing = parseFloat(marketingSpend);
    const sales = parseFloat(salesSpend);
    const customers = parseInt(newCustomers);
    const ltv = parseFloat(customerLifetimeValue);

    if (!marketing || !sales || !customers || customers === 0) return null;

    const totalAcquisitionCost = marketing + sales;
    const cac = totalAcquisitionCost / customers;
    const ltvCacRatio = ltv > 0 ? (ltv / cac) : 0;
    const paybackPeriod = ltv > 0 ? (cac / (ltv / 12)) : 0; // meses para payback

    let marketingEfficiency = '';
    if (ltvCacRatio > 3) {
      marketingEfficiency = '🎉 Excelente - Modelo muito saudável';
    } else if (ltvCacRatio > 2) {
      marketingEfficiency = '✅ Bom - Modelo sustentável';
    } else if (ltvCacRatio > 1) {
      marketingEfficiency = '⚠️ Atenção - Margem baixa';
    } else {
      marketingEfficiency = '❌ Crítico - Prejuízo por cliente';
    }

    const recommendations = [];
    if (ltvCacRatio < 3) {
      recommendations.push('Considere aumentar o LTV através de upsell/cross-sell');
      recommendations.push('Otimize campanhas para reduzir custos de aquisição');
    }
    if (paybackPeriod > 12) {
      recommendations.push('Explore estratégias para acelerar o payback do CAC');
    }
    if (cac > getIndustryBenchmark(businessType).averageCAC * 1.5) {
      recommendations.push('Seu CAC está acima da média do setor - revise canais');
    }

    const benchmarks = getIndustryBenchmark(businessType);

    return {
      cac,
      ltvCacRatio,
      paybackPeriod,
      marketingEfficiency,
      recommendations,
      benchmarks
    };
  }, [marketingSpend, salesSpend, newCustomers, customerLifetimeValue, businessType]);

  const getIndustryBenchmark = (type: string) => {
    switch (type) {
      case 'saas-b2b':
        return { industry: 'SaaS B2B', averageCAC: 3500, idealLtvCac: 3 };
      case 'saas-b2c':
        return { industry: 'SaaS B2C', averageCAC: 500, idealLtvCac: 3 };
      case 'ecommerce':
        return { industry: 'E-commerce', averageCAC: 125, idealLtvCac: 4 };
      case 'marketplace':
        return { industry: 'Marketplace', averageCAC: 300, idealLtvCac: 3 };
      default:
        return { industry: 'Geral', averageCAC: 1000, idealLtvCac: 3 };
    }
  };

  const result = useMemo(() => calculateCAC(), [calculateCAC]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  return (
    <div className="space-y-8">
      {/* Business Type Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {(['saas-b2b', 'saas-b2c', 'ecommerce', 'marketplace'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setBusinessType(type)}
            className={`p-4 border rounded-lg text-center transition-all ${
              businessType === type
                ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-teal-300'
            }`}
          >
            <div className="text-sm font-semibold">
              {type === 'saas-b2b' && 'SaaS B2B'}
              {type === 'saas-b2c' && 'SaaS B2C'}
              {type === 'ecommerce' && 'E-commerce'}
              {type === 'marketplace' && 'Marketplace'}
            </div>
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="marketingSpend" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Investimento em Marketing (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="marketingSpend"
              value={marketingSpend}
              onChange={(e) => setMarketingSpend(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Campanhas, anúncios, conteúdo, etc.
          </p>
        </div>

        <div>
          <label htmlFor="salesSpend" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Custos de Vendas (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="salesSpend"
              value={salesSpend}
              onChange={(e) => setSalesSpend(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Salários comercial, ferramentas, etc.
          </p>
        </div>

        <div>
          <label htmlFor="newCustomers" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Novos Clientes (período)
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="newCustomers"
              value={newCustomers}
              onChange={(e) => setNewCustomers(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Clientes adquiridos no mesmo período
          </p>
        </div>

        <div>
          <label htmlFor="customerLifetimeValue" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            LTV do Cliente (R$)
          </label>
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="customerLifetimeValue"
              value={customerLifetimeValue}
              onChange={(e) => setCustomerLifetimeValue(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Receita média durante vida do cliente
          </p>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <Calculator className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">CAC</h3>
              </div>
              <p className="text-3xl font-bold">
                {formatCurrency(result.cac)}
              </p>
              <p className="text-sm opacity-90 mt-1">
                Custo por Aquisição
              </p>
            </div>

            <div className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <PieChart className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">LTV:CAC</h3>
              </div>
              <p className="text-3xl font-bold">
                {result.ltvCacRatio.toFixed(1)}:1
              </p>
              <p className="text-sm opacity-90 mt-1">
                Razão Lifetime Value
              </p>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Payback</h3>
              </div>
              <p className="text-3xl font-bold">
                {result.paybackPeriod.toFixed(1)}m
              </p>
              <p className="text-sm opacity-90 mt-1">
                Meses para retorno
              </p>
            </div>

            <div className="bg-linear-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Eficiência</h3>
              </div>
              <p className="text-xl font-bold">
                {result.marketingEfficiency.split(' - ')[0]}
              </p>
              <p className="text-sm opacity-90 mt-1">
                {result.marketingEfficiency.split(' - ')[1]}
              </p>
            </div>
          </div>

          {/* Benchmarks Comparison */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Comparação com Benchmarks do Setor
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Seu Negócio vs {result.benchmarks.industry}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Seu CAC:</span>
                      <span className="font-semibold">{formatCurrency(result.cac)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-teal-500 h-2 rounded-full" 
                        style={{ width: `${Math.min((result.cac / (result.benchmarks.averageCAC * 2)) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CAC Médio do Setor:</span>
                      <span className="font-semibold">{formatCurrency(result.benchmarks.averageCAC)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Meta LTV:CAC</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Seu LTV:CAC:</span>
                      <span className={`font-semibold ${result.ltvCacRatio >= 3 ? 'text-green-600' : result.ltvCacRatio >= 1 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {result.ltvCacRatio.toFixed(1)}:1
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${result.ltvCacRatio >= 3 ? 'bg-green-500' : result.ltvCacRatio >= 1 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min((result.ltvCacRatio / 5) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>LTV:CAC Ideal:</span>
                      <span className="font-semibold text-green-600">{result.benchmarks.idealLtvCac}:1</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 p-6">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                💡 Recomendações Para Melhorar Seu CAC
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-400 space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Educational Tips */}
      <div className="bg-linear-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
        <div className="flex items-center mb-4">
          <BarChart3 className="w-5 h-5 text-teal-600 mr-2" />
          <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">
            📈 Por Que o CAC é Crucial Para Seu Negócio?
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">Para Startups e Investidores</h4>
            <ul className="text-teal-600 dark:text-teal-300 space-y-1">
              <li>• <strong>LTV:CAC &gt; 3:1</strong> atrai investimentos</li>
<li>• <strong>CAC Payback &lt; 12 meses</strong> indica saúde financeira</li>
              <li>• <strong>CAC decrescente</strong> mostra eficiência em scaling</li>
              <li>• <strong>Benchmarks setoriais</strong> validam modelo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Para Gestão e Scaling</h4>
            <ul className="text-cyan-600 dark:text-cyan-300 space-y-1">
              <li>• Otimize <strong>alocação de orçamento</strong> por canal</li>
              <li>• Identifique <strong>canais mais eficientes</strong></li>
              <li>• Planeje <strong>contratações comerciais</strong></li>
              <li>• Defina <strong>metas realistas de growth</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}