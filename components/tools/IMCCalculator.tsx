// components/tools/IMCCalculator.js - Versão Otimizada
'use client';
import { useState, useCallback } from 'react';
import { Calculator, AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface IMCResult {
  imc: number;
  classification: string;
  risk: string;
  color: string;
  description: string;
}

// Mover cálculo para fora do componente para melhor performance
const calculateIMCResult = (weight: string, height: string): IMCResult | null => {
  const weightNum = parseFloat(weight.replace(',', '.'));
  const heightNum = parseFloat(height.replace(',', '.'));

  if (!weightNum || !heightNum || heightNum === 0) {
    return null;
  }

  const imc = weightNum / (heightNum * heightNum);
  let classification = '';
  let risk = '';
  let color = '';
  let description = '';

  if (imc < 18.5) {
    classification = 'Abaixo do peso';
    risk = 'Baixo (mas atenção a desnutrição)';
    color = 'text-yellow-600';
    description = 'Recomenda-se avaliação nutricional para verificar possíveis deficiências';
  } else if (imc < 25) {
    classification = 'Peso normal';
    risk = 'Normal';
    color = 'text-green-600';
    description = 'Parabéns! Mantenha hábitos saudáveis para preservar este estado';
  } else if (imc < 30) {
    classification = 'Sobrepeso';
    risk = 'Aumentado';
    color = 'text-orange-600';
    description = 'Momento ideal para prevenir progressão para obesidade';
  } else if (imc < 35) {
    classification = 'Obesidade Grau I';
    risk = 'Moderado';
    color = 'text-red-600';
    description = 'Recomenda-se acompanhamento profissional para perda de peso';
  } else if (imc < 40) {
    classification = 'Obesidade Grau II';
    risk = 'Grave';
    color = 'text-red-700';
    description = 'Necessária intervenção para redução de riscos à saúde';
  } else {
    classification = 'Obesidade Grau III';
    risk = 'Muito grave';
    color = 'text-red-800';
    description = 'Acompanhamento médico especializado é essencial';
  }

  return {
    imc: parseFloat(imc.toFixed(2)),
    classification,
    risk,
    color,
    description
  };
};

export default function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<IMCResult | null>(null);

  // useCallback para otimizar performance
  const calculateIMC = useCallback(() => {
    const imcResult = calculateIMCResult(weight, height);
    setResult(imcResult);
  }, [weight, height]);

  const resetForm = useCallback(() => {
    setWeight('');
    setHeight('');
    setResult(null);
  }, []);

  const isFormValid = weight && height;

  return (
    <div className="space-y-8">
      {/* Formulário */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Peso (kg)
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value.replace(/[^0-9,.]/g, ''))}
            placeholder="Ex: 70.5 ou 70,5"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
            aria-describedby="weight-help"
          />
          <p id="weight-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Digite seu peso em quilogramas
          </p>
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Altura (metros)
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value.replace(/[^0-9,.]/g, ''))}
            placeholder="Ex: 1.75 ou 1,75"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
            aria-describedby="height-help"
          />
          <p id="height-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Digite sua altura em metros (ex: 1.75 para 1 metro e 75cm)
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calculateIMC}
          disabled={!isFormValid}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Calcular Índice de Massa Corporal"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calcular IMC
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Limpar Campos
        </button>
      </div>

        {/* Resultado  */}
        {result && (
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="text-center space-y-4">
              <div className={`text-5xl font-bold ${result.color} mb-2`}>
                {result.imc}
              </div>
              <div className="flex items-center justify-center mb-2">
                {result.imc >= 18.5 && result.imc < 25 ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                )}
                <span className={`text-xl font-semibold ${result.color}`}>
                  {result.classification}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Risco de doenças:</strong> {result.risk}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {result.description}
                </p>
              </div>
            </div>
          </div>
        )}

      {/* Aviso Legal */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Importante:</strong> Esta calculadora fornece uma estimativa baseada no Índice de Massa Corporal. 
            O IMC não considera composição corporal, idade, sexo ou massa muscular. 
            <strong> Esta ferramenta não substitui avaliação médica profissional.</strong> Consulte sempre um profissional de saúde para avaliação completa.
          </p>
        </div>
      </div>
    </div>
  );
}