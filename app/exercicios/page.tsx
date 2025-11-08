import { Activity, Flame, Heart, Clock, Target } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ExerciciosCalculator from '@/components/tools/ExerciciosCalculator';

export const metadata = {
  title: 'Calculadora de Calorias em Exercícios - Queima Calórica | Utiliverse',
  description: 'Calcule quantas calorias você queima em diferentes exercícios e atividades físicas. Descubra o gasto calórico de corrida, natação, musculação e mais.',
  keywords: 'calculadora exercícios, calorias queimadas, gasto calórico, queima calórica, atividades físicas, fitness, emagrecimento',
};

export default function ExerciciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl mb-6 shadow-lg">
            <Flame className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Calculadora de Exercícios
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubra quantas <span className="font-semibold text-red-600">calorias você queima</span> em diferentes atividades físicas e otimize seus <span className="font-semibold text-orange-600">treinos</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-red-200 dark:border-red-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-2xl flex items-center justify-center mr-4">
                  <Activity className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Calorias Queimadas
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Calcule o gasto calórico dos seus exercícios
                  </p>
                </div>
              </div>
              <ExerciciosCalculator />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Intensidade dos Exercícios */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Intensidade</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-700 dark:text-green-300">Leve</span>
                  <span className="font-bold text-green-600">3-5 METs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="text-yellow-700 dark:text-yellow-300">Moderada</span>
                  <span className="font-bold text-yellow-600">5-7 METs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-700 dark:text-red-300">Intensa</span>
                  <span className="font-bold text-red-600">7+ METs</span>
                </div>
              </div>
            </div>

            {/* Fatores que Influenciam */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fatores</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Peso corporal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Intensidade do exercício</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Duração da atividade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Condicionamento físico</span>
                </li>
              </ul>
            </div>

            {/* Dicas para Queimar Mais */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Flame className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Treino intervalado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Exercícios compostos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Mantenha a frequência</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Combine cardio e força</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional - Integrado com Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tipos de Exercício */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-red-500" />
                Tipos de Exercício
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💪 Exercícios de Força</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Desenvolvem massa muscular e aumentam metabolismo basal. Ex: musculação, calistenia
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🏃‍♂️ Exercícios Cardiovasculares</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Melhoram condicionamento e queimam calorias. Ex: corrida, natação, ciclismo
                  </p>
                </div>
              </div>
            </div>

            {/* Ferramentas Relacionadas */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-orange-500" />
                Ferramentas de Saúde
              </h2>
              <div className="grid gap-4">
                <Link 
                  href="/calorias" 
                  className="flex items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Calorias</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Necessidades diárias</p>
                  </div>
                </Link>
                
                <Link 
                  href="/agua" 
                  className="flex items-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Água</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hidratação ideal</p>
                  </div>
                </Link>
                
                <Link 
                  href="/imc" 
                  className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de IMC</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Índice de Massa Corporal</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}