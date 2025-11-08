import { Utensils, Activity, Target, Heart, Apple, Scale } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import CaloriasCalculator from '@/components/tools/CaloriasCalculator';

export const metadata = {
  title: 'Calculadora de Calorias Diárias - Meta de Peso e TDEE | Utiliverse',
  description: 'Calcule suas necessidades diárias de calorias para ganho muscular, perda de peso ou manutenção. Calculadora TDEE precisa com base em idade, peso, altura e nível de atividade.',
  keywords: 'calculadora calorias, TDEE, metabolismo basal, calorias diárias, emagrecimento, ganho muscular, dieta, nutrição, calorias para emagrecer',
};

export default function CaloriasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Moderno */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-rose-500 rounded-3xl mb-6 shadow-lg">
            <Apple className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
            Calculadora de Calorias
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubra suas necessidades calóricas diárias para <span className="font-semibold text-orange-600">perda de peso</span>, <span className="font-semibold text-green-600">ganho muscular</span> ou <span className="font-semibold text-blue-600">manutenção</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section - Largura maior */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-orange-200 dark:border-orange-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Suas Necessidades Calóricas
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Preencha seus dados para calcular seu metabolismo basal e gasto calórico total
                  </p>
                </div>
              </div>
              <CaloriasCalculator />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Card de Metas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Metas de Calorias</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-700 dark:text-green-300">Perda de Peso</span>
                  <span className="font-bold text-green-600">-500 kcal/dia</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-blue-700 dark:text-blue-300">Manutenção</span>
                  <span className="font-bold text-blue-600">TDEE Total</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <span className="text-orange-700 dark:text-orange-300">Ganho Muscular</span>
                  <span className="font-bold text-orange-600">+300 kcal/dia</span>
                </div>
              </div>
            </div>

            {/* Card de Dicas Rápidas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas Saudáveis</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Beba 2L de água por dia</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Priorize proteínas magras</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Pratique exercícios regularmente</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Durma 7-9 horas por noite</span>
                </li>
              </ul>
            </div>

            {/* Card de Macronutrientes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-cyan-200 dark:border-cyan-800 p-6">
              <div className="flex items-center mb-4">
                <Utensils className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Distribuição Ideal</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-cyan-700 dark:text-cyan-300">Proteínas</span>
                  <span className="font-bold">25-35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Carboidratos</span>
                  <span className="font-bold">45-55%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300">Gorduras</span>
                  <span className="font-bold">20-30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional Expandido */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* O que é TDEE */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-8">
            <div className="flex items-center mb-6">
              <Activity className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Entendendo o TDEE
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>Total Daily Energy Expenditure (TDEE)</strong> representa o total de calorias que seu corpo queima em 24 horas, incluindo metabolismo basal, atividades físicas e efeito térmico dos alimentos.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Componentes do Gasto Calórico
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">60%</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Taxa Metabólica Basal (BMR)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calorias queimadas em repouso para funções vitais</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">30%</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Atividade Física</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Exercícios e movimentos do dia a dia</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">10%</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Efeito Térmico dos Alimentos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Energia gasta na digestão e processamento</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Estratégias Práticas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Estratégias para Sua Meta
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">🔥 Perda de Peso (Déficit Calórico)</h4>
                <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                  <li>• Reduza 500 kcal do seu TDEE para perder ~0,5kg/semana</li>
                  <li>• Aumente proteínas para preservar massa muscular</li>
                  <li>• Combine cardio e musculação</li>
                  <li>• Mantenha déficit moderado para sustentabilidade</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">💪 Ganho Muscular (Superávit Limpo)</h4>
                <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                  <li>• Adicione 300-500 kcal ao seu TDEE</li>
                  <li>• Consuma 1,6-2,2g de proteína por kg de peso</li>
                  <li>• Foque em treinos de força progressivos</li>
                  <li>• Priorize ganho muscular com mínimo de gordura</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">⚖️ Manutenção (Equilíbrio)</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                  <li>• Consuma calorias equivalentes ao seu TDEE</li>
                  <li>• Mantenha hábitos saudáveis consistentes</li>
                  <li>• Ajuste conforme mudanças no estilo de vida</li>
                  <li>• Perfeito para quem atingiu sua meta</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Aviso Legal */}
        <section className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
              <Heart className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4">
                Aviso de Saúde Importante
              </h3>
              <p className="text-yellow-700 dark:text-yellow-400">
                <strong>Esta calculadora fornece estimativas gerais e não substitui orientação profissional.</strong> 
                Valores podem variar conforme metabolismo individual, condições de saúde e outros fatores. 
                Consulte um nutricionista ou médico antes de iniciar qualquer dieta ou programa de exercícios. 
                Resultados individuais podem variar.
              </p>
            </div>
          </div>
        </section>

        {/* Related Tools - Nova Categoria "Saúde & Fitness" */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Mais Ferramentas de Saúde & Fitness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/imc" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de IMC</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Índice de Massa Corporal</p>
              </div>
            </Link>
            
            <Link 
              href="/agua" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-cyan-300 dark:hover:border-cyan-600 transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Água</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hidratação diária ideal</p>
              </div>
            </Link>
            
            <Link 
              href="/exercicios" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-green-300 dark:hover:border-green-600 transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Exercícios</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calorias queimadas</p>
              </div>
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