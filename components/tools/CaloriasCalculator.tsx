'use client';
import { useState, useCallback } from 'react';
import { Calculator, Target, Activity, TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import React from 'react'; // Importação do React adicionada

type Genero = 'masculino' | 'feminino';
type NivelAtividade = 'sedentario' | 'leve' | 'moderado' | 'ativo' | 'muito-ativo';
type Objetivo = 'perda' | 'manutencao' | 'ganho';

interface ResultadoCalorias {
  bmr: number;
  tdee: number;
  caloriasObjetivo: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
}

export default function CaloriasCalculator() {
  const [genero, setGenero] = useState<Genero>('masculino');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState<NivelAtividade>('moderado');
  const [objetivo, setObjetivo] = useState<Objetivo>('manutencao');
  const [resultado, setResultado] = useState<ResultadoCalorias | null>(null);

  const niveisAtividade = {
    sedentario: { label: 'Sedentário', multiplier: 1.2, desc: 'Pouco ou nenhum exercício' },
    leve: { label: 'Levemente Ativo', multiplier: 1.375, desc: 'Exercícios leves 1-3x/semana' },
    moderado: { label: 'Moderadamente Ativo', multiplier: 1.55, desc: 'Exercícios 3-5x/semana' },
    ativo: { label: 'Muito Ativo', multiplier: 1.725, desc: 'Exercícios intensos 6-7x/semana' },
    'muito-ativo': { label: 'Extremamente Ativo', multiplier: 1.9, desc: 'Atleta profissional' }
  };

  const objetivos = {
    perda: { label: 'Perda de Peso', deficit: 500, icon: TrendingDown, color: 'text-red-500' },
    manutencao: { label: 'Manutenção', deficit: 0, icon: Minus, color: 'text-blue-500' },
    ganho: { label: 'Ganho Muscular', deficit: -300, icon: TrendingUp, color: 'text-green-500' }
  };

  const calcularCalorias = useCallback(() => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const idadeNum = parseFloat(idade);

    if (!pesoNum || !alturaNum || !idadeNum) return;

    // Fórmula Mifflin-St Jeor para BMR
    let bmr;
    if (genero === 'masculino') {
      bmr = 10 * pesoNum + 6.25 * alturaNum - 5 * idadeNum + 5;
    } else {
      bmr = 10 * pesoNum + 6.25 * alturaNum - 5 * idadeNum - 161;
    }

    const tdee = bmr * niveisAtividade[nivelAtividade].multiplier;
    const caloriasObjetivo = tdee + objetivos[objetivo].deficit;

    // Cálculo de macronutrientes (aproximado)
    const proteina = (pesoNum * 1.8) * 4; // 1.8g/kg de proteína
    const gordura = (caloriasObjetivo * 0.25); // 25% de gordura
    const carboidrato = caloriasObjetivo - proteina - gordura;

    setResultado({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      caloriasObjetivo: Math.round(caloriasObjetivo),
      proteina: Math.round(proteina / 4), // converter calorias para gramas
      carboidrato: Math.round(carboidrato / 4),
      gordura: Math.round(gordura / 9)
    });
  }, [genero, idade, peso, altura, nivelAtividade, objetivo]);

  const resetar = useCallback(() => {
    setIdade('');
    setPeso('');
    setAltura('');
    setResultado(null);
  }, []);

  const podeCalcular = idade && peso && altura;

  // Função para renderizar ícones dinamicamente
  const renderIcon = (objetivoKey: Objetivo) => {
    const IconComponent = objetivos[objetivoKey].icon;
    return <IconComponent className="w-6 h-6 mr-2" />;
  };

  return (
    <div className="space-y-8">
      {/* Formulário em Grid Moderno */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gênero */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Gênero
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setGenero('masculino')}
              className={`p-4 rounded-xl border-2 transition-all ${
                genero === 'masculino'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                  : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400'
              }`}
            >
              Masculino
            </button>
            <button
              onClick={() => setGenero('feminino')}
              className={`p-4 rounded-xl border-2 transition-all ${
                genero === 'feminino'
                  ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300'
                  : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400'
              }`}
            >
              Feminino
            </button>
          </div>
        </div>

        {/* Idade */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Idade (anos)
          </label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 30"
            min="15"
            max="100"
          />
        </div>

        {/* Peso */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Peso (kg)
          </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 70"
            min="30"
            max="200"
          />
        </div>

        {/* Altura */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Altura (cm)
          </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 175"
            min="100"
            max="250"
          />
        </div>

        {/* Nível de Atividade */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Nível de Atividade
          </label>
          <select
            value={nivelAtividade}
            onChange={(e) => setNivelAtividade(e.target.value as NivelAtividade)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(niveisAtividade).map(([key, { label, desc }]) => (
              <option key={key} value={key}>
                {label} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Objetivo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Seu Objetivo
          </label>
          <select
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value as Objetivo)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(objetivos).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calcularCalorias}
          disabled={!podeCalcular}
          className="flex-1 bg-linear-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Calcular Minhas Calorias
        </button>
        <button
          onClick={resetar}
          className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          Limpar
        </button>
      </div>

      {/* Resultados */}
      {resultado && (
        <div className="space-y-6">
          {/* Cards de Resultados Principais */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                <Activity className="w-6 h-6 mr-2" />
                <h3 className="font-semibold">Metabolismo Basal</h3>
              </div>
              <div className="text-3xl font-bold">{resultado.bmr}</div>
              <p className="text-blue-100 text-sm mt-2">Calorias em repouso completo</p>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 mr-2" />
                <h3 className="font-semibold">Gasto Total (TDEE)</h3>
              </div>
              <div className="text-3xl font-bold">{resultado.tdee}</div>
              <p className="text-purple-100 text-sm mt-2">Calorias/dia com atividades</p>
            </div>

            <div className="bg-linear-to-br from-green-500 to-emerald-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                {renderIcon(objetivo)}
                <h3 className="font-semibold">Para {objetivos[objetivo].label.toLowerCase()}</h3>
              </div>
              <div className="text-3xl font-bold">{resultado.caloriasObjetivo}</div>
              <p className="text-green-100 text-sm mt-2">Calorias/dia recomendadas</p>
            </div>
          </div>

          {/* Macronutrientes */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-orange-500" />
              Distribuição de Macronutrientes
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{resultado.proteina}g</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Proteínas</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">~{Math.round(resultado.proteina * 4)} kcal</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{resultado.carboidrato}g</div>
                <div className="text-sm text-green-700 dark:text-green-300">Carboidratos</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">~{Math.round(resultado.carboidrato * 4)} kcal</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{resultado.gordura}g</div>
                <div className="text-sm text-orange-700 dark:text-orange-300">Gorduras</div>
                <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">~{Math.round(resultado.gordura * 9)} kcal</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dica Informativa */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
        <div className="flex items-start">
          <Info className="w-6 h-6 text-amber-600 mr-3 mt-1 shrink-0" />
          <div className="text-amber-800 dark:text-amber-300">
            <strong>💡 Dica:</strong> Estes valores são estimativas baseadas na fórmula Mifflin-St Jeor. 
            Para resultados mais precisos, acompanhe seu progresso e ajuste conforme sua resposta individual. 
            Considere consultar um nutricionista para um plano personalizado.
          </div>
        </div>
      </div>
    </div>
  );
}