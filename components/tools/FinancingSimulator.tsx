'use client';
import { useState, useCallback, useMemo } from 'react';
import { Home, Car, DollarSign, Calendar, AlertCircle } from 'lucide-react';

interface FinancingResult {
  monthlyPayment: number;
  totalAmount: number;
  totalInterest: number;
  downPayment: number;
  financedAmount: number;
}

export default function FinancingSimulator() {
  const [propertyValue, setPropertyValue] = useState<string>('200000');
  const [downPayment, setDownPayment] = useState<string>('40000');
  const [interestRate, setInterestRate] = useState<string>('0.8');
  const [loanTerm, setLoanTerm] = useState<string>('360');
  const [financingType, setFinancingType] = useState<'vehicle' | 'property'>('property');

  const calculateFinancing = useCallback(() => {
    const value = parseFloat(propertyValue);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100;
    const term = parseInt(loanTerm);

    if (!value || !down || !rate || !term) return null;

    const financedAmount = value - down;
    const monthlyRate = rate / 12;
    const monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    const totalAmount = monthlyPayment * term;
    const totalInterest = totalAmount - financedAmount;

    return {
      monthlyPayment,
      totalAmount,
      totalInterest,
      downPayment: down,
      financedAmount
    };
  }, [propertyValue, downPayment, interestRate, loanTerm]);

  const result = useMemo(() => calculateFinancing(), [calculateFinancing]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  return (
    <div className="space-y-8">
      {/* Financing Type */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFinancingType('property')}
          className={`flex-1 flex items-center justify-center p-4 border rounded-lg transition-all ${
            financingType === 'property'
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
              : 'border-gray-300 dark:border-gray-600 hover:border-green-300'
          }`}
        >
          <Home className="w-5 h-5 mr-2" />
          Imóvel
        </button>
        <button
          onClick={() => setFinancingType('vehicle')}
          className={`flex-1 flex items-center justify-center p-4 border rounded-lg transition-all ${
            financingType === 'vehicle'
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
              : 'border-gray-300 dark:border-gray-600 hover:border-green-300'
          }`}
        >
          <Car className="w-5 h-5 mr-2" />
          Veículo
        </button>
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="propertyValue" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Valor do {financingType === 'property' ? 'Imóvel' : 'Veículo'} (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="propertyValue"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
              min="1000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="downPayment" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Entrada (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="downPayment"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            min="0.1"
            max="10"
            step="0.1"
          />
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
              min="1"
              max="360"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-1">Parcela Mensal</h3>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">
                {formatCurrency(result.monthlyPayment)}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-1">Total Financiado</h3>
              <p className="text-xl font-bold text-blue-700 dark:text-blue-400">
                {formatCurrency(result.financedAmount)}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-1">Total a Pagar</h3>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-400">
                {formatCurrency(result.totalAmount)}
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 text-sm mb-1">Juros Totais</h3>
              <p className="text-xl font-bold text-orange-700 dark:text-orange-400">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Legal Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Importante:</strong> Valores simulados podem variar conforme a instituição financeira. 
            Consulte sempre as condições reais antes de fechar qualquer contrato.
          </p>
        </div>
      </div>
    </div>
  );
}