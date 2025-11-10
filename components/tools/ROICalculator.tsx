'use client';
import { useState, useCallback, useMemo } from 'react';
import { DollarSign, TrendingUp, Users, Target, BarChart3, Zap } from 'lucide-react';

interface ROIResult {
  roiPercentage: number;
  roiAmount: number;
  netProfit: number;
  cac: number;
  breakEven: number;
  recommendation: string;
}

export default function ROICalculator() {
  const [investment, setInvestment] = useState<string>('1000');
  const [revenue, setRevenue] = useState<string>('5000');
  const [conversions, setConversions] = useState<string>('50');
  const [channel, setChannel] = useState<'google' | 'facebook' | 'email' | 'organic'>('google');

  const calculateROI = useCallback(() => {
    const inv = parseFloat(investment);
    const rev = parseFloat(revenue);
    const conv = parseInt(conversions);

    if (!inv || !rev || !conv) return null;

    const netProfit = rev - inv;
    const roiPercentage = inv > 0 ? ((netProfit / inv) * 100) : 0;
    const roiAmount = netProfit;
    const cac = conv > 0 ? (inv / conv) : 0;
    const breakEven = rev > 0 ? (inv / rev) * 100 : 0;

    let recommendation = '';
    if (roiPercentage > 500) {
      recommendation = '🎉 ROI Excelente! Considere aumentar o investimento neste canal.';
    } else if (roiPercentage > 200) {
      recommendation = '✅ ROI Bom! Continue otimizando e testando novas abordagens.';
    } else if (roiPercentage > 100) {
      recommendation = '⚠️ ROI Moderado. Analise oportunidades de otimização.';
    } else if (roiPercentage > 0) {
      recommendation = '📊 ROI Baixo. Considere revisar estratégia ou testar outros canais.';
    } else {
      recommendation = '❌ ROI Negativo. Recomendamos pausar e reavaliar a estratégia.';
    }

    return {
      roiPercentage,
      roiAmount: netProfit,
      netProfit,
      cac,
      breakEven,
      recommendation
    };
  }, [investment, revenue, conversions]);

  const result = useMemo(() => calculateROI(), [calculateROI]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  const getChannelColor = (chan: string) => {
    switch (chan) {
      case 'google': return 'from-blue-500 to-cyan-500';
      case 'facebook': return 'from-blue-600 to-indigo-600';
      case 'email': return 'from-orange-500 to-red-500';
      case 'organic': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getChannelName = (chan: string) => {
    switch (chan) {
      case 'google': return 'Google Ads';
      case 'facebook': return 'Facebook/Instagram';
      case 'email': return 'Email Marketing';
      case 'organic': return 'Marketing Orgânico';
      default: return 'Outro Canal';
    }
  };

  return (
    <div className="space-y-8">
      {/* Channel Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {(['google', 'facebook', 'email', 'organic'] as const).map((chan) => (
          <button
            key={chan}
            onClick={() => setChannel(chan)}
            className={`p-4 border rounded-lg text-center transition-all ${
              channel === chan
                ? `border-${chan === 'google' ? 'blue' : chan === 'facebook' ? 'indigo' : chan === 'email' ? 'orange' : 'green'}-500 bg-linear-to-r ${getChannelColor(chan)} text-white`
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
            }`}
          >
            <div className="text-sm font-semibold">{getChannelName(chan)}</div>
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="investment" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Investimento em Marketing (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="investment"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Total gasto em campanhas, anúncios, etc.
          </p>
        </div>

        <div>
          <label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Receita Gerada (R$)
          </label>
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="revenue"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Vendas ou valor atribuído às campanhas
          </p>
        </div>

        <div>
          <label htmlFor="conversions" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Número de Conversões
          </label>
          <div className="relative">
            <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="conversions"
              value={conversions}
              onChange={(e) => setConversions(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Vendas, leads ou ações desejadas
          </p>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">ROI</h3>
              </div>
              <p className="text-3xl font-bold">
                {result.roiPercentage.toFixed(0)}%
              </p>
              <p className="text-sm opacity-90 mt-1">
                Retorno sobre investimento
              </p>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Lucro Líquido</h3>
              </div>
              <p className="text-3xl font-bold">
                {formatCurrency(result.netProfit)}
              </p>
              <p className="text-sm opacity-90 mt-1">
                Receita - Investimento
              </p>
            </div>

            <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">CAC</h3>
              </div>
              <p className="text-3xl font-bold">
                {formatCurrency(result.cac)}
              </p>
              <p className="text-sm opacity-90 mt-1">
                Custo por Aquisição
              </p>
            </div>

            <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Break Even</h3>
              </div>
              <p className="text-3xl font-bold">
                {result.breakEven.toFixed(1)}%
              </p>
              <p className="text-sm opacity-90 mt-1">
                % da receita para cobrir custos
              </p>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recomendação Estratégica
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {result.recommendation}
            </p>
          </div>

          {/* Detailed Analysis */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                📊 Interpretação do ROI
              </h4>
              <ul className="text-sm text-indigo-700 dark:text-indigo-400 space-y-2">
                <li>• <strong>ROI {result.roiPercentage.toFixed(0)}%</strong> significa que para cada R$ 1 investido, você ganhou R$ {(result.roiPercentage / 100).toFixed(2)} de volta</li>
                <li>• Seu <strong>lucro líquido</strong> foi de {formatCurrency(result.netProfit)}</li>
                <li>• O <strong>custo por aquisição (CAC)</strong> foi de {formatCurrency(result.cac)} por conversão</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                🎯 Próximos Passos Sugeridos
              </h4>
              <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-2">
                <li>• Teste diferentes <strong>criativos e copy</strong> para melhorar conversão</li>
                <li>• Otimize <strong>páginas de destino</strong> para aumentar taxa de conversão</li>
                <li>• Segmentação mais específica para reduzir <strong>CAC</strong></li>
                <li>• Considere <strong>remarketing</strong> para visitantes não convertidos</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center mb-4">
          <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
            💡 Dicas Para Melhorar Seu ROI
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Para ROI Baixo (&lt;100%)</h4>
            <ul className="text-blue-600 dark:text-blue-300 space-y-1">
              <li>• Reveja segmentação de público</li>
              <li>• Teste diferentes criativos</li>
              <li>• Otimize páginas de conversão</li>
              <li>• Reduza custos por clique</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Para ROI Alto (&gt;200%)</h4>
            <ul className="text-green-600 dark:text-green-300 space-y-1">
              <li>• Aumente investimento gradualmente</li>
              <li>• Expanda para públicos similares</li>
              <li>• Teste novos formatos de anúncio</li>
              <li>• Automatize processos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}