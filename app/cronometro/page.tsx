import { Clock, Play, Square, RotateCcw, AlarmClock, Timer } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import CronometroTemporizador from '@/components/tools/CronometroTemporizador';

export const metadata = {
  title: 'Cronômetro Online e Temporizador - Contador de Tempo Grátis | Utiliverse',
  description: 'Cronômetro online preciso e temporizador com alarme. Ferramenta essencial para esportes, estudos, cozinha e produtividade. Interface simples e funcional.',
  keywords: 'cronômetro online, temporizador, contador tempo, cronômetro digital, timer, alarme, contagem regressiva, esportes, cozinha, estudos',
};

export default function CronometroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl mb-6 shadow-lg">
            <Clock className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Cronômetro & Temporizador
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Cronômetro preciso e temporizador com alarme para <span className="font-semibold text-indigo-600">esportes</span>, <span className="font-semibold text-purple-600">estudos</span> e <span className="font-semibold text-pink-600">produtividade</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-indigo-200 dark:border-indigo-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mr-4">
                  <Timer className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Controle de Tempo
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cronômetro para contagem progressiva e temporizador para contagem regressiva
                  </p>
                </div>
              </div>
              <CronometroTemporizador />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Modos de Uso */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Play className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quando Usar</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Treinos e exercícios</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Técnica Pomodoro</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Cozinha e receitas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Apresentações</span>
                </li>
              </ul>
            </div>

            {/* Dicas de Produtividade */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <AlarmClock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Técnicas Populares</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Pomodoro: 25min trabalho + 5min pausa</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>52/17: 52min foco + 17min descanso</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>90/20: 90min trabalho + 20min pausa</span>
                </li>
              </ul>
            </div>

            {/* Tempos Úteis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tempos de Referência</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Ovo cozido</span>
                  <span className="font-bold">8-12 min</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Meditação</span>
                  <span className="font-bold">10-20 min</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Alongamento</span>
                  <span className="font-bold">5-15 min</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Pausa ativa</span>
                  <span className="font-bold">5 min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Benefícios do Controle de Tempo */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-indigo-200 dark:border-indigo-800 p-8">
            <div className="flex items-center mb-6">
              <Timer className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Por que Controlar o Tempo?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O controle preciso do tempo é uma ferramenta poderosa para <strong>aumentar a produtividade</strong>, <strong>melhorar o foco</strong> e <strong>reduzir a procrastinação</strong>.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Foco Aprimorado</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tempo limitado ajuda a manter a concentração nas tarefas</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Produtividade</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A técnica Pomodoro pode aumentar produtividade em 25%</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">😌</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Redução de Estresse</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pausas programadas previnem burnout e fadiga mental</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-8">
            <div className="flex items-center mb-6">
              <AlarmClock className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas de Produtividade
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/tempo" 
                className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Tempo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Converta entre horas, minutos e segundos</p>
                </div>
              </Link>
              
              <Link 
                href="/calculadora" 
                className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas simples</p>
                </div>
              </Link>

              <Link 
                href="/idade" 
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Idade</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Idade exata em anos, meses e dias</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Técnicas de Estudo */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Técnicas de Gestão de Tempo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">25/5</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pomodoro Clássico</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                25 minutos de foco + 5 minutos de pausa. Ideal para tarefas complexas.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">52/17</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ritmo Natural</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                52 minutos de trabalho + 17 minutos de descanso. Baseado em estudos de produtividade.
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">90/20</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Foco Profundo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                90 minutos de imersão + 20 minutos de pausa. Perfeito para trabalho criativo.
              </p>
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