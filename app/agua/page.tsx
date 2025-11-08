import { Droplets, Heart, Activity, Battery, Zap } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import AguaCalculator from '@/components/tools/AguaCalculator';

export const metadata = {
  title: 'Calculadora de Água Diária - Hidratação Ideal por Peso | Utiliverse',
  description: 'Calcule sua necessidade diária de água para uma hidratação ideal. Descubra quantos litros de água você deve beber por dia baseado no seu peso e nível de atividade.',
  keywords: 'calculadora água, hidratação, água diária, quanta água beber, saúde, bem-estar, litros de água, desidratação',
};

export default function AguaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl mb-6 shadow-lg">
            <Droplets className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Calculadora de Água
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubra quanta água você precisa beber por dia para manter uma <span className="font-semibold text-cyan-600">hidratação ideal</span> e <span className="font-semibold text-blue-600">saúde plena</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-cyan-200 dark:border-cyan-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center mr-4">
                  <Droplets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Sua Hidratação Diária
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Calcule quantos litros de água você precisa beber hoje
                  </p>
                </div>
              </div>
              <AguaCalculator />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Benefícios da Água */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Melhora a função cerebral</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Aumenta a energia física</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Melhora a digestão</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Desintoxica o organismo</span>
                </li>
              </ul>
            </div>

            {/* Sinais de Desidratação */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-red-200 dark:border-red-800 p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sinais de Alerta</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Boca seca e sede</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Fadiga e cansaço</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Dor de cabeça</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Urina escura</span>
                </li>
              </ul>
            </div>

            {/* Dicas de Hidratação */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <Battery className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas Práticas</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Beba ao acordar</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Tenha uma garrafa sempre</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Água antes das refeições</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Use app de lembretes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Importância da Água */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-cyan-200 dark:border-cyan-800 p-8">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-cyan-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Por que a Hidratação é Vital?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O corpo humano é composto por aproximadamente <strong>60% de água</strong>. Manter-se hidratado é essencial para praticamente todas as funções corporais, desde a regulação da temperatura até o transporte de nutrientes.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">💡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Função Cerebral</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A desidratação leve pode reduzir em até 30% a função cognitiva</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🏃</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Performance Física</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Perder apenas 2% de água corporal reduz performance em 10-20%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fatores que Influenciam */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-8">
            <div className="flex items-center mb-6">
              <Activity className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Fatores que Aumentam a Necessidade
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">🌡️ Clima Quente</h4>
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  Temperaturas elevadas aumentam a perda de água através do suor
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💪 Exercício Físico</h4>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Atividade intensa pode exigir 1-2 litros extras por hora
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🏔️ Altitude</h4>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Ar seco em grandes altitudes acelera a desidratação
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools - Integrado no conteúdo */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ferramentas Relacionadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/calorias" 
              className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Calculadora de Calorias</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Necessidades calóricas diárias</p>
            </Link>
            
            <Link 
              href="/imc" 
              className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-lg hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Calculadora de IMC</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Índice de Massa Corporal</p>
            </Link>
            
            <Link 
              href="/exercicios" 
              className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-green-300 dark:hover:border-green-600 transition-all hover:shadow-lg hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Calculadora de Exercícios</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Calorias queimadas</p>
            </Link>
            
            <Link 
              href="/calculadora" 
              className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all hover:shadow-lg hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Calculadora Básica</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas</p>
            </Link>
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