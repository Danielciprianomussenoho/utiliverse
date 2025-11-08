'use client';
import { useState, useCallback } from 'react';
import { Calculator, Flame, Clock, Activity, RefreshCw } from 'lucide-react';

type TipoExercicio = 'corrida' | 'caminhada' | 'ciclismo' | 'natacao' | 'musculacao' | 'yoga' | 'danca';

interface Exercicio {
  label: string;
  met: number;
  desc: string;
}

export default function ExerciciosCalculator() {
  const [peso, setPeso] = useState('');
  const [exercicio, setExercicio] = useState<TipoExercicio>('corrida');
  const [duracao, setDuracao] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const exercicios: Record<TipoExercicio, Exercicio> = {
    corrida: { label: 'Corrida', met: 8, desc: '8 min/km' },
    caminhada: { label: 'Caminhada', met: 3.5, desc: '5 km/h' },
    ciclismo: { label: 'Ciclismo', met: 7.5, desc: '20 km/h' },
    natacao: { label: 'Natação', met: 8, desc: 'Crawl moderado' },
    musculacao: { label: 'Musculação', met: 6, desc: 'Treino de força' },
    yoga: { label: 'Yoga', met: 3, desc: 'Hatha yoga' },
    danca: { label: 'Dança', met: 5, desc: 'Dança aeróbica' }
  };

  const calcularCalorias = useCallback(() => {
    const pesoNum = parseFloat(peso);
    const duracaoNum = parseFloat(duracao);

    if (!pesoNum || !duracaoNum) return;

    // Fórmula: METs × peso (kg) × tempo (horas)
    const met = exercicios[exercicio].met;
    const horas = duracaoNum / 60; // converter minutos para horas
    const calorias = met * pesoNum * horas;

    setResultado(Math.round(calorias));
  }, [peso, exercicio, duracao]);

  const resetar = useCallback(() => {
    setPeso('');
    setDuracao('');
    setResultado(null);
  }, []);

  const podeCalcular = peso && duracao && !isNaN(parseFloat(peso)) && !isNaN(parseFloat(duracao));

  return (
    <div className="space-y-8">
      {/* Formulário */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Peso */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Seu Peso (kg)
          </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 70"
            min="30"
            max="200"
          />
        </div>

        {/* Exercício */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Tipo de Exercício
          </label>
          <select
            value={exercicio}
            onChange={(e) => setExercicio(e.target.value as TipoExercicio)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(exercicios).map(([key, { label, desc }]) => (
              <option key={key} value={key}>
                {label} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Duração */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Duração (minutos)
          </label>
          <input
            type="number"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 30"
            min="1"
            max="300"
          />
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calcularCalorias}
          disabled={!podeCalcular}
          className="flex-1 bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Calcular Calorias
        </button>
        <button
          onClick={resetar}
          className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          <RefreshCw className="w-5 h-5 mr-2 inline" />
          Limpar
        </button>
      </div>

      {/* Resultado */}
      {resultado && (
        <div className="bg-linear-to-br from-red-500 to-orange-500 text-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <Flame className="w-16 h-16 mx-auto mb-4" />
            <div className="text-5xl font-bold mb-2">{resultado}</div>
            <div className="text-xl font-semibold mb-4">calorias queimadas</div>
            <p className="text-red-100">
              Durante {duracao} minutos de {exercicios[exercicio].label.toLowerCase()}
            </p>
            
            {/* Comparações */}
            <div className="mt-6 p-4 bg-white/20 rounded-xl">
              <h4 className="font-semibold mb-3">Isso equivale a:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">{Math.round(resultado / 50)}</div>
                  <div>fatias de pão</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{Math.round(resultado / 35)}</div>
                  <div>maçãs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabela de METs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-red-500" />
          Intensidade dos Exercícios (METs)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Exercício</th>
                <th className="px-4 py-3 text-left font-semibold">Intensidade</th>
                <th className="px-4 py-3 text-left font-semibold">METs</th>
                <th className="px-4 py-3 text-left font-semibold">Calorias/hora*</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {Object.entries(exercicios).map(([key, { label, met, desc }]) => (
                <tr key={key} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 font-medium">{label}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{desc}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-red-600">{met}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold">{Math.round(met * 70)}</span>
                    <span className="text-xs text-gray-500 ml-1">*para 70kg</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          *MET (Equivalente Metabólico da Tarefa) - 1 MET = gasto energético em repouso
        </p>
      </div>
    </div>
  );
}