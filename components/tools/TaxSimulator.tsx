'use client';
import { useState, useCallback, useMemo } from 'react';
import { Calculator, User, Building, DollarSign, Users, FileText, AlertCircle } from 'lucide-react';

interface TaxResult {
  taxDue: number;
  effectiveRate: number;
  taxBrackets: Array<{
    range: string;
    rate: number;
    taxAmount: number;
  }>;
  deductions: number;
  taxableIncome: number;
}

export default function TaxSimulator() {
  const [annualIncome, setAnnualIncome] = useState<string>('50000');
  const [dependents, setDependents] = useState<string>('0');
  const [deductibleExpenses, setDeductibleExpenses] = useState<string>('0');
  const [taxType, setTaxType] = useState<'pf' | 'pj'>('pf');
  const [regime, setRegime] = useState<'simples' | 'presumido' | 'real'>('simples');

  const calculateTax = useCallback(() => {
    const income = parseFloat(annualIncome);
    const dependentsCount = parseInt(dependents);
    const expenses = parseFloat(deductibleExpenses);

    if (!income) return null;

    if (taxType === 'pf') {
      // Cálculo IRPF 2024 - Tabela Progressiva
      const basicDeduction = 2259.20;
      const dependentDeduction = dependentsCount * 2275.08;
      const totalDeductions = basicDeduction + dependentDeduction + expenses;
      
      const taxableIncome = Math.max(0, income - totalDeductions);
      
      const brackets = [
        { min: 0, max: 2259.20, rate: 0 },
        { min: 2259.21, max: 2826.65, rate: 0.075 },
        { min: 2826.66, max: 3751.05, rate: 0.15 },
        { min: 3751.06, max: 4664.68, rate: 0.225 },
        { min: 4664.69, max: Infinity, rate: 0.275 }
      ];

      let taxDue = 0;
      let remainingIncome = taxableIncome;
      const taxBrackets = [];

      for (let i = brackets.length - 1; i >= 0; i--) {
        const bracket = brackets[i];
        if (remainingIncome > bracket.min) {
          const bracketAmount = Math.min(remainingIncome, bracket.max) - bracket.min;
          const bracketTax = bracketAmount * bracket.rate;
          taxDue += bracketTax;
          
          taxBrackets.unshift({
            range: bracket.min === 0 ? `Até R$ ${bracket.max.toFixed(2)}` : 
                   bracket.max === Infinity ? `Acima de R$ ${bracket.min.toFixed(2)}` :
                   `R$ ${bracket.min.toFixed(2)} a R$ ${bracket.max.toFixed(2)}`,
            rate: bracket.rate * 100,
            taxAmount: bracketTax
          });

          remainingIncome = bracket.min;
        }
      }

      const effectiveRate = income > 0 ? (taxDue / income) * 100 : 0;

      return {
        taxDue,
        effectiveRate,
        taxBrackets,
        deductions: totalDeductions,
        taxableIncome
      };
    } else {
      // Cálculo simplificado para PJ
      let taxDue = 0;
      
      if (regime === 'simples') {
        // Simulação Simples Nacional - Anexo I (Comércio)
        if (income <= 180000) taxDue = income * 0.04;
        else if (income <= 360000) taxDue = income * 0.073;
        else if (income <= 720000) taxDue = income * 0.095;
        else if (income <= 1800000) taxDue = income * 0.107;
        else if (income <= 3600000) taxDue = income * 0.143;
        else taxDue = income * 0.19;
      } else if (regime === 'presumido') {
        // Lucro Presumido - 32% de presunção
        const presumedProfit = income * 0.32;
        taxDue = presumedProfit * 0.15; // IRPJ 15%
        taxDue += presumedProfit * 0.09; // CSLL 9%
      }

      return {
        taxDue,
        effectiveRate: (taxDue / income) * 100,
        taxBrackets: [],
        deductions: 0,
        taxableIncome: income
      };
    }
  }, [annualIncome, dependents, deductibleExpenses, taxType, regime]);

  const result = useMemo(() => calculateTax(), [calculateTax]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }, []);

  return (
    <div className="space-y-8">
      {/* Tax Type Selection */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTaxType('pf')}
          className={`flex-1 flex items-center justify-center p-4 border rounded-lg transition-all ${
            taxType === 'pf'
              ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
              : 'border-gray-300 dark:border-gray-600 hover:border-orange-300'
          }`}
        >
          <User className="w-5 h-5 mr-2" />
          Pessoa Física (IRPF)
        </button>
        <button
          onClick={() => setTaxType('pj')}
          className={`flex-1 flex items-center justify-center p-4 border rounded-lg transition-all ${
            taxType === 'pj'
              ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
              : 'border-gray-300 dark:border-gray-600 hover:border-orange-300'
          }`}
        >
          <Building className="w-5 h-5 mr-2" />
          Pessoa Jurídica
        </button>
      </div>

      {/* Regime Selection for PJ */}
      {taxType === 'pj' && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setRegime('simples')}
            className={`p-3 border rounded-lg text-center transition-all ${
              regime === 'simples'
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-green-300'
            }`}
          >
            <div className="text-sm font-semibold">Simples</div>
            <div className="text-xs text-gray-500">Nacional</div>
          </button>
          <button
            onClick={() => setRegime('presumido')}
            className={`p-3 border rounded-lg text-center transition-all ${
              regime === 'presumido'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-300'
            }`}
          >
            <div className="text-sm font-semibold">Lucro</div>
            <div className="text-xs text-gray-500">Presumido</div>
          </button>
          <button
            onClick={() => setRegime('real')}
            className={`p-3 border rounded-lg text-center transition-all ${
              regime === 'real'
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
            }`}
          >
            <div className="text-sm font-semibold">Lucro</div>
            <div className="text-xs text-gray-500">Real</div>
          </button>
        </div>
      )}

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="annualIncome" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {taxType === 'pf' ? 'Renda Anual Bruta (R$)' : 'Faturamento Anual (R$)'}
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              id="annualIncome"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              min="0"
            />
          </div>
        </div>

        {taxType === 'pf' && (
          <>
            <div>
              <label htmlFor="dependents" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Número de Dependentes
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  id="dependents"
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  max="10"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="deductibleExpenses" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Despesas Dedutíveis (Saúde, Educação, etc.)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  id="deductibleExpenses"
                  value={deductibleExpenses}
                  onChange={(e) => setDeductibleExpenses(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center mb-2">
                <Calculator className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="font-semibold text-orange-800 dark:text-orange-300">Imposto Devido</h3>
              </div>
              <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                {formatCurrency(result.taxDue)}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">Alíquota Efetiva</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {result.effectiveRate.toFixed(2)}%
              </p>
            </div>

            {taxType === 'pf' && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-300">Deduções</h3>
                </div>
                <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                  {formatCurrency(result.deductions)}
                </p>
              </div>
            )}
          </div>

          {/* Tax Brackets for PF */}
          {taxType === 'pf' && result.taxBrackets.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cálculo por Faixa - Tabela Progressiva IRPF 2024
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Faixa de Renda</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Alíquota</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white">Imposto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {result.taxBrackets.map((bracket, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{bracket.range}</td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{bracket.rate}%</td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          {formatCurrency(bracket.taxAmount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Legal Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Importante:</strong> Esta simulação é meramente informativa e educacional. 
            Os valores reais podem variar conforme situações específicas não consideradas no cálculo. 
            Para declarações oficiais e obrigações fiscais, consulte sempre um contador profissional 
            ou especialista tributário. As alíquotas e regras estão sujeitas a alterações pela legislação.
          </p>
        </div>
      </div>
    </div>
  );
}