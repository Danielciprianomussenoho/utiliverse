import { Clock, Watch, Hourglass, Calculator, Timer } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import TimeConverter from '@/components/tools/TimeConverter';

export const metadata = {
  title: 'Conversor de Tempo Online - Horas, Minutos, Segundos, Dias | Utiliverse',
  description: 'Conversor de tempo gratuito e preciso. Converta entre horas, minutos, segundos, dias e mais. Ferramenta essencial para cálculos temporais no trabalho e estudos.',
  keywords: 'conversor tempo, horas minutos segundos, converter tempo, calculadora tempo, conversor horas minutos, tempo online, calculadora horas',
};

export default function TempoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Tempo Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta instantaneamente entre horas, minutos, segundos e dias com nossa ferramenta gratuita e precisa
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conversor de Unidades de Tempo
          </h2>
          <TimeConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Unidades de Tempo - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Watch className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unidades de Tempo e Suas Aplicações
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O tempo é uma grandeza física fundamental que mede a duração dos eventos e intervalos entre eles. 
                Desde a antiguidade, a humanidade desenvolveu diversas unidades de tempo baseadas em fenômenos 
                naturais como a rotação da Terra e sua translação ao redor do Sol.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Sistema Internacional de Unidades de Tempo
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Unidades Básicas</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Segundo (s):</strong> Unidade base do SI, definida pela radiação do átomo de césio-133</li>
                    <li><strong>Minuto (min):</strong> 60 segundos - ideal para medições do cotidiano</li>
                    <li><strong>Hora (h):</strong> 60 minutos - padrão para jornadas de trabalho e agendamentos</li>
                    <li><strong>Dia:</strong> 24 horas - base do calendário civil</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Relações Entre Unidades</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>1 minuto = 60 segundos</li>
                    <li>1 hora = 60 minutos = 3.600 segundos</li>
                    <li>1 dia = 24 horas = 1.440 minutos</li>
                    <li>1 dia = 86.400 segundos</li>
                    <li>1 semana = 7 dias = 168 horas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Aplicações Práticas Expandidas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Hourglass className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Aplicações Práticas do Conversor de Tempo
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Uso Profissional e Pessoal
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">No Ambiente de Trabalho</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Controle de ponto:</strong> Converter horas extras em minutos para cálculos precisos</li>
                    <li><strong>Gestão de projetos:</strong> Calcular duração de tarefas em diferentes unidades</li>
                    <li><strong>Logística:</strong> Planejar rotas considerando tempo de deslocamento</li>
                    <li><strong>Produção:</strong> Calcular tempo de ciclo e eficiência operacional</li>
                    <li><strong>Consultoria:</strong> Faturar serviços baseados em tempo trabalhado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Uso Pessoal e Educacional</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Estudos:</strong> Planejar tempo de revisão para provas e concursos</li>
                    <li><strong>Esportes:</strong> Converter tempos de corrida e treinos</li>
                    <li><strong>Viagens:</strong> Calcular duração de voos e deslocamentos</li>
                    <li><strong>Culinária:</strong> Ajustar tempos de preparo de receitas</li>
                    <li><strong>Fitness:</strong> Controlar intervalos entre séries de exercícios</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Timer className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                      Dica de Produtividade
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                      Use a técnica Pomodoro: trabalhe por 25 minutos (1.500 segundos) e descanse 5 minutos. 
                      Nosso conversor ajuda a calcular ciclos completos de trabalho e pausas para maximizar sua produtividade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Conversões Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela Completa de Conversões de Tempo
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Descrição</th>
                  <th className="px-6 py-4 font-semibold">Horas</th>
                  <th className="px-6 py-4 font-semibold">Minutos</th>
                  <th className="px-6 py-4 font-semibold">Segundos</th>
                  <th className="px-6 py-4 font-semibold">Dias</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1 hora padrão</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">60</td>
                  <td className="px-6 py-4">3.600</td>
                  <td className="px-6 py-4">0,0417</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Jornada de trabalho (8h)</td>
                  <td className="px-6 py-4">8</td>
                  <td className="px-6 py-4">480</td>
                  <td className="px-6 py-4">28.800</td>
                  <td className="px-6 py-4">0,333</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Meio dia</td>
                  <td className="px-6 py-4">12</td>
                  <td className="px-6 py-4">720</td>
                  <td className="px-6 py-4">43.200</td>
                  <td className="px-6 py-4">0,5</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1 dia completo</td>
                  <td className="px-6 py-4">24</td>
                  <td className="px-6 py-4">1.440</td>
                  <td className="px-6 py-4">86.400</td>
                  <td className="px-6 py-4">1</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Técnica Pomodoro (25min)</td>
                  <td className="px-6 py-4">0,4167</td>
                  <td className="px-6 py-4">25</td>
                  <td className="px-6 py-4">1.500</td>
                  <td className="px-6 py-4">0,0174</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1 semana de trabalho (40h)</td>
                  <td className="px-6 py-4">40</td>
                  <td className="px-6 py-4">2.400</td>
                  <td className="px-6 py-4">144.000</td>
                  <td className="px-6 py-4">1,667</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais do Utiliverse */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Conversão no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/unidades" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Unidades</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprimento, peso, volume e mais</p>
              </div>
            </Link>
            <Link 
              href="/moedas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Moedas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real, Dólar, Euro e outras</p>
              </div>
            </Link>
            <Link 
              href="/temperatura" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Temperatura</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Celsius, Fahrenheit, Kelvin</p>
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