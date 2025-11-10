'use client';
import { useState, useCallback, useMemo } from 'react';
import { TrendingUp, DollarSign, Calendar, Target, AlertCircle, BarChart3 } from 'lucide-react';

interface InvestmentResult {
  finalAmount: number;
  totalInvested: number;
  totalInterest: number;
  projections: Array<{
    year: number;
    amount: number;
    invested: number;
    interest: number;
  }>;
}

export default function InvestmentSimulator() {
  const [initialAmount, setInitialAmount] = useState<string>('1000');
  const [monthlyAmount, setMonthlyAmount] = useState<string>('500');
  const [interestRate, setInterestRate] = useState<string>('0.8');
  const [investmentTerm, setInvestmentTerm] = useState<string>('10');

  const calculateInvestment = useCallback(() => {
    const initial = parseFloat(initialAmount);
    const monthly = parseFloat(monthlyAmount);
    const rate = parseFloat(interestRate) / 100;
    const term = parseInt(investmentTerm);

    if (!initial || !monthly || !rate || !term) return null;

    let amount = initial;
    const projections = [];
    const totalInvested = initial + (monthly * 12 * term);

    for (let year = 1; year <= term; year++) {
      for (let month = 1; month <= 12; month++) {
        amount = amount * (1 + rate) + monthly;
      }
      
      const yearInvested = initial + (monthly * 12 * year);
      const yearInterest = amount - yearInvested;
      
      projections.push({
        year,
        amount,
        invested: yearInvested,
        interest: yearInterest
      });
    }

    return {
      finalAmount: amount,
      totalInvested,
      totalInterest: amount - totalInvested,
      projections
    };
  }, [initialAmount, monthlyAmount, interestRate, investmentTerm]);

  const result = useMemo(() => calculateInvestment(), [calculateInvestment]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="initialAmount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Investimento Inicial (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="initialAmount"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
        </div>

        <div>
          <label htmlFor="monthlyAmount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Aporte Mensal (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="monthlyAmount"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Taxa de Juros Mensal (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
            min="0.1"
            max="10"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="investmentTerm" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Período (Anos)
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="investmentTerm"
              value={investmentTerm}
              onChange={(e) => setInvestmentTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
              min="1"
              max="50"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800 dark:text-green-300">Valor Final</h3>
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {formatCurrency(result.finalAmount)}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">Total Investido</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {formatCurrency(result.totalInvested)}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-800 dark:text-purple-300">Juros Ganhos</h3>
              </div>
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>
          </div>

          {/* Projeções */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Projeção Anual
                </h3>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Ano</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Total Investido</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Juros Acumulados</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Valor Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {result.projections.map((projection) => (
                    <tr key={projection.year}>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">{projection.year}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {formatCurrency(projection.invested)}
                      </td>
                      <td className="px-6 py-4 text-green-600 dark:text-green-400">
                        {formatCurrency(projection.interest)}
                      </td>
                      <td className="px-6 py-4 text-blue-600 dark:text-blue-400 font-semibold">
                        {formatCurrency(projection.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Legal Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Importante:</strong> Esta simulação é meramente informativa e considera juros compostos mensais. 
            Valores reais podem variar conforme taxas administrativas, impostos e condições de mercado. 
            Consulte sempre um advisor financeiro para orientações personalizadas.
          </p>
        </div>
      </div>
    </div>
  );
}