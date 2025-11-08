'use client';
import { useState, useCallback } from 'react';
import { Calculator, Droplets, Activity, Sun, Mountain, RefreshCw } from 'lucide-react';

type NivelAtividade = 'sedentario' | 'leve' | 'moderado' | 'intenso';
type Clima = 'temperado' | 'quente' | 'muito-quente';

export default function AguaCalculator() {
  const [peso, setPeso] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState<NivelAtividade>('moderado');
  const [clima, setClima] = useState<Clima>('temperado');
  const [resultado, setResultado] = useState<number | null>(null);

  const niveisAtividade = {
    sedentario: { label: 'Sedentário', multiplier: 30, desc: 'Escritório, pouca atividade' },
    leve: { label: 'Leve', multiplier: 35, desc: 'Caminhadas leves, atividades domésticas' },
    moderado: { label: 'Moderado', multiplier: 40, desc: 'Exercícios 3-5x por semana' },
    intenso: { label: 'Intenso', multiplier: 45, desc: 'Atleta, treinos diários intensos' }
  };

  const climas = {
    temperado: { label: 'Temperado', multiplier: 1, desc: '20-25°C' },
    quente: { label: 'Quente', multiplier: 1.2, desc: '26-32°C' },
    'muito-quente': { label: 'Muito Quente', multiplier: 1.4, desc: '33°C+' }
  };

  const calcularAgua = useCallback(() => {
    const pesoNum = parseFloat(peso);
    if (!pesoNum) return;

    // Fórmula base: 35ml por kg + ajustes
    const aguaBase = pesoNum * niveisAtividade[nivelAtividade].multiplier;
    const aguaAjustada = aguaBase * climas[clima].multiplier;

    // Converter para litros e arredondar
    const litros = aguaAjustada / 1000;
    setResultado(Math.round(litros * 10) / 10); // 1 casa decimal
  }, [peso, nivelAtividade, clima]);

  const resetar = useCallback(() => {
    setPeso('');
    setResultado(null);
  }, []);

  const podeCalcular = peso && !isNaN(parseFloat(peso));

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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 70"
            min="30"
            max="200"
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(niveisAtividade).map(([key, { label, desc }]) => (
              <option key={key} value={key}>
                {label} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Clima */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Clima Atual
          </label>
          <select
            value={clima}
            onChange={(e) => setClima(e.target.value as Clima)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(climas).map(([key, { label, desc }]) => (
              <option key={key} value={key}>
                {label} - {desc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calcularAgua}
          disabled={!podeCalcular}
          className="flex-1 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Calcular Minha Água
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
        <div className="bg-linear-to-br from-cyan-500 to-blue-500 text-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <Droplets className="w-16 h-16 mx-auto mb-4" />
            <div className="text-5xl font-bold mb-2">{resultado}L</div>
            <div className="text-xl font-semibold mb-4">por dia</div>
            <p className="text-cyan-100">
              Esta é a quantidade ideal de água para manter sua hidratação
            </p>
            
            {/* Divisão em copos */}
            <div className="mt-6 p-4 bg-white/20 rounded-xl">
              <h4 className="font-semibold mb-3">Equivale a aproximadamente:</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">{Math.round(resultado * 4)}</div>
                  <div>copos de 250ml</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{Math.round(resultado * 2)}</div>
                  <div>garrafas de 500ml</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{resultado}</div>
                  <div>garrafas de 1L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dicas de Hidratação */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-3">
            <Activity className="w-8 h-8 text-green-600 mr-3" />
            <h4 className="font-semibold text-green-800 dark:text-green-300">Durante Exercícios</h4>
          </div>
          <p className="text-sm text-green-700 dark:text-green-400">
            Beba 500ml 2h antes do exercício e 200-300ml a cada 20min durante
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center mb-3">
            <Sun className="w-8 h-8 text-orange-600 mr-3" />
            <h4 className="font-semibold text-orange-800 dark:text-orange-300">Dias Quentes</h4>
          </div>
          <p className="text-sm text-orange-700 dark:text-orange-400">
            Aumente em 20-40% sua ingestão em temperaturas acima de 30°C
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center mb-3">
            <Mountain className="w-8 h-8 text-purple-600 mr-3" />
            <h4 className="font-semibold text-purple-800 dark:text-purple-300">Em Altitude</h4>
          </div>
          <p className="text-sm text-purple-700 dark:text-purple-400">
            Em grandes altitudes, beba 1-2L extras devido ao ar seco
          </p>
        </div>
      </div>
    </div>
  );
}