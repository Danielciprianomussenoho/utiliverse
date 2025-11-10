'use client';
import { useState, useCallback } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, AlertCircle} from 'lucide-react';

interface SimulationResult {
  monthlyPayment: number;
  totalAmount: number;
  totalInterest: number;
  installments: Array<{
    month: number;
    payment: number;
    remaining: number;
  }>;
}

export default function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState<string>('10000');
  const [interestRate, setInterestRate] = useState<string>('2.5');
  const [loanTerm, setLoanTerm] = useState<string>('12');
  const [result, setResult] = useState<SimulationResult | null>(null);

  const calculateLoan = useCallback(() => {
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const term = parseInt(loanTerm);

    if (!amount || !rate || !term) {
      setResult(null);
      return;
    }

    const monthlyRate = rate / 12;
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    const totalAmount = monthlyPayment * term;
    const totalInterest = totalAmount - amount;

    // Gerar tabela de amortização
    const installments = [];
    let remaining = amount;
    
    for (let month = 1; month <= term; month++) {
      const interest = remaining * monthlyRate;
      const principal = monthlyPayment - interest;
      remaining -= principal;
      
      installments.push({
        month,
        payment: monthlyPayment,
        remaining: Math.max(0, remaining)
      });
    }

    setResult({
      monthlyPayment,
      totalAmount,
      totalInterest,
      installments
    });
  }, [loanAmount, interestRate, loanTerm]);

  const resetSimulator = useCallback(() => {
    setLoanAmount('10000');
    setInterestRate('2.5');
    setLoanTerm('12');
    setResult(null);
  }, []);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  const isFormValid = loanAmount && interestRate && loanTerm;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Valor do Empréstimo (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="100"
              max="1000000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Taxa de Juros Mensal (%)
          </label>
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="0.1"
              max="50"
              step="0.1"
            />
          </div>
        </div>

        <div>
          <label htmlFor="loanTerm" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Prazo (Meses)
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="1"
              max="360"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calculateLoan}
          disabled={!isFormValid}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Simular Empréstimo
        </button>
        <button
          onClick={resetSimulator}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Limpar
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800 dark:text-green-300">Parcela Mensal</h3>
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {formatCurrency(result.monthlyPayment)}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">Total a Pagar</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {formatCurrency(result.totalAmount)}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-800 dark:text-purple-300">Juros Totais</h3>
              </div>
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>
          </div>

          {/* Amortization Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tabela de Amortização
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Mês</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Parcela</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Saldo Devedor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {result.installments.slice(0, 12).map((installment) => (
                    <tr key={installment.month}>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{installment.month}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {formatCurrency(installment.payment)}
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {formatCurrency(installment.remaining)}
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
            <strong>Importante:</strong> Esta simulação é meramente informativa e educacional. 
            Os valores reais podem variar conforme a instituição financeira, análise de crédito e condições de mercado. 
            Consulte sempre as instituições financeiras para propostas oficiais.
          </p>
        </div>
      </div>
    </div>
  );
}