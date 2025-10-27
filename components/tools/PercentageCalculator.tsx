// components/tools/PercentageCalculator.tsx - Com tipagens completas
'use client';
import { useState, useCallback } from 'react';
import { Calculator, RefreshCw, Plus, Minus, TrendingUp, Lightbulb } from 'lucide-react';

type CalculationType = 'percentage' | 'increase' | 'decrease' | 'difference';

interface CalculationResult {
  value: number;
  description: string;
  formula?: string;
}

export default function PercentageCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>('percentage');
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = useCallback((): void => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult(null);
      return;
    }

    let calculatedValue: number;
    let description: string;
    let formula: string;

    switch (calculationType) {
      case 'percentage':
        calculatedValue = (num1 / 100) * num2;
        description = `${num1}% de ${num2.toLocaleString('pt-BR')} é`;
        formula = `(${num1} ÷ 100) × ${num2} = ${calculatedValue.toLocaleString('pt-BR')}`;
        break;

      case 'increase':
        calculatedValue = num2 + (num1 / 100) * num2;
        description = `${num2.toLocaleString('pt-BR')} com aumento de ${num1}% é`;
        formula = `${num2} × (1 + ${num1} ÷ 100) = ${calculatedValue.toLocaleString('pt-BR')}`;
        break;

      case 'decrease':
        calculatedValue = num2 - (num1 / 100) * num2;
        description = `${num2.toLocaleString('pt-BR')} com desconto de ${num1}% é`;
        formula = `${num2} × (1 - ${num1} ÷ 100) = ${calculatedValue.toLocaleString('pt-BR')}`;
        break;

      case 'difference':
        calculatedValue = ((num2 - num1) / Math.abs(num1)) * 100;
        description = `Variação de ${num1.toLocaleString('pt-BR')} para ${num2.toLocaleString('pt-BR')} é`;
        formula = `[(${num2} - ${num1}) ÷ |${num1}|] × 100 = ${calculatedValue > 0 ? '+' : ''}${calculatedValue.toFixed(2)}%`;
        break;

      default:
        return;
    }

    setResult({
      value: calculatedValue,
      description,
      formula
    });
  }, [calculationType, value1, value2]);

  const resetForm = useCallback((): void => {
    setValue1('');
    setValue2('');
    setResult(null);
  }, []);

  const getInputLabels = useCallback((): { label1: string; label2: string; placeholder1: string; placeholder2: string } => {
    switch (calculationType) {
      case 'percentage':
        return { 
          label1: 'Porcentagem (%)', 
          label2: 'Valor Total', 
          placeholder1: 'Ex: 15', 
          placeholder2: 'Ex: 200' 
        };
      case 'increase':
        return { 
          label1: 'Aumento (%)', 
          label2: 'Valor Original', 
          placeholder1: 'Ex: 10', 
          placeholder2: 'Ex: 100' 
        };
      case 'decrease':
        return { 
          label1: 'Desconto (%)', 
          label2: 'Valor Original', 
          placeholder1: 'Ex: 20', 
          placeholder2: 'Ex: 150' 
        };
      case 'difference':
        return { 
          label1: 'Valor Inicial', 
          label2: 'Valor Final', 
          placeholder1: 'Ex: 50', 
          placeholder2: 'Ex: 75' 
        };
      default:
        return { label1: '', label2: '', placeholder1: '', placeholder2: '' };
    }
  }, [calculationType]);

  const { label1, label2, placeholder1, placeholder2 } = getInputLabels();

  const quickExamples = [
    { type: 'percentage' as CalculationType, v1: '15', v2: '200', label: '15% de 200' },
    { type: 'increase' as CalculationType, v1: '10', v2: '100', label: '10% aumento' },
    { type: 'decrease' as CalculationType, v1: '20', v2: '150', label: '20% desconto' },
    { type: 'difference' as CalculationType, v1: '50', v2: '75', label: '50 → 75' },
  ];

  const isFormValid = value1 && value2;

  return (
    <div className="space-y-6">
      {/* Calculation Type Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Tipo de Cálculo
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { type: 'percentage' as CalculationType, label: 'Porcentagem', icon: TrendingUp, color: 'purple' },
            { type: 'increase' as CalculationType, label: 'Aumento', icon: Plus, color: 'green' },
            { type: 'decrease' as CalculationType, label: 'Desconto', icon: Minus, color: 'red' },
            { type: 'difference' as CalculationType, label: 'Variação', icon: TrendingUp, color: 'blue' },
          ].map(({ type, label, icon: Icon, color }) => (
            <button
              key={type}
              onClick={() => {
                setCalculationType(type);
                setResult(null);
              }}
              className={`p-3 rounded-lg border transition-colors flex items-center justify-center space-x-2 ${
                calculationType === type
                  ? `border-${color}-500 bg-${color}-50 dark:bg-${color}-900/20 text-${color}-700 dark:text-${color}-300`
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="value1" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {label1}
          </label>
          <input
            type="number"
            id="value1"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder={placeholder1}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
            aria-describedby="value1-help"
          />
        </div>
        <div>
          <label htmlFor="value2" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {label2}
          </label>
          <input
            type="number"
            id="value2"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder={placeholder2}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
            aria-describedby="value2-help"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calculate}
          disabled={!isFormValid}
          className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Calcular porcentagem"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calcular Porcentagem
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {calculationType === 'difference' 
                ? `${result.value > 0 ? '+' : ''}${result.value.toFixed(2)}%`
                : `R$ ${result.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              }
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {result.description}
            </p>
            {result.formula && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-center mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fórmula:</span>
                </div>
                <code className="text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
                  {result.formula}
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Examples */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
          <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
          Exemplos Rápidos para Testar:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {quickExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setCalculationType(example.type);
                setValue1(example.v1);
                setValue2(example.v2);
              }}
              className="p-2 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-colors text-gray-700 dark:text-gray-300"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      {/* Informação Adicional */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
          💡 <strong>Dica:</strong> Use esta calculadora para comparar descontos, calcular aumentos salariais, 
          analisar variações de preços e muito mais. As porcentagens são essenciais para decisões financeiras inteligentes.
        </p>
      </div>
    </div>
  );
}