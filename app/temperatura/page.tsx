import { Thermometer, Snowflake, Sun, AlertTriangle, Cloud, CookingPot, FlaskConical } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import TemperaturaConverter from '@/components/tools/TemperaturaConverter';

export const metadata = {
  title: 'Conversor de Temperatura Online - Celsius, Fahrenheit, Kelvin | Utiliverse',
  description: 'Converta entre Celsius, Fahrenheit e Kelvin gratuitamente. Ferramenta precisa para conversões de temperatura no dia a dia, culinária e ciência.',
  keywords: 'conversor temperatura, celsius fahrenheit, kelvin, converter temperatura, utiliverse',
};

export default function TemperaturaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
            <Thermometer className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Temperatura Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta entre Celsius, Fahrenheit e Kelvin instantaneamente com precisão científica
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Converter Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Converta Temperaturas Agora
          </h2>
          <TemperaturaConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Conversor de Temperatura - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Thermometer className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Escalas de Temperatura e Suas Aplicações
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As <strong>escalas de temperatura</strong> são sistemas de medida essenciais em diversas áreas do conhecimento. 
                Desenvolvidas em diferentes períodos históricos, cada escala possui características específicas 
                que as tornam ideais para determinadas aplicações no dia a dia, na ciência e na indústria.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Usos Práticos Para Diferentes Contextos
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CookingPot className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Uso Doméstico</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para receitas culinárias, controle de temperatura ambiente, 
                    configuração de ar condicionado e verificação de febre.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FlaskConical className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Ciência e Educação</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essencial em laboratórios, experimentos científicos, cálculos físicos 
                    e aplicações que requerem precisão absoluta em Kelvin.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Cloud className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Meteorologia</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crucial para previsão do tempo, estudos climáticos, comparação de 
                    temperaturas entre regiões e análise de dados atmosféricos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitações e Avisos Expandidos */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Precisão e Considerações Importantes
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Limitações das Conversões de Temperatura
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Arredondamentos:</strong> Decimais podem ser arredondados para melhor legibilidade</li>
                <li><strong>Precisão instrumental:</strong> Depende da precisão do instrumento de medição original</li>
                <li><strong>Contexto de uso:</strong> Aplicações científicas podem requerer mais casas decimais</li>
                <li><strong>Variações regionais:</strong> Padrões de arredondamento podem variar entre países</li>
                <li><strong>Temperatura percebida:</strong> A sensação térmica não é considerada nas conversões</li>
              </ul>

              {/* Aviso Legal Reforçado */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                      Aviso Legal e Isenção de Responsabilidade
                    </h4>
                    <p className="text-red-700 dark:text-red-400">
                      <strong>Este conversor fornece cálculos para fins educacionais e informativos.</strong> 
                      Para aplicações científicas, médicas ou industriais críticas, sempre consulte 
                      padrões internacionais e profissionais qualificados. O Utiliverse não se responsabiliza 
                      por decisões tomadas com base nestas conversões.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Referência */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Referência - Pontos Importantes de Temperatura
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Descrição</th>
                  <th className="px-6 py-4 font-semibold">Celsius (°C)</th>
                  <th className="px-6 py-4 font-semibold">Fahrenheit (°F)</th>
                  <th className="px-6 py-4 font-semibold">Kelvin (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Zero Absoluto</td>
                  <td className="px-6 py-4">-273.15</td>
                  <td className="px-6 py-4">-459.67</td>
                  <td className="px-6 py-4">0</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Congelamento da Água</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">32</td>
                  <td className="px-6 py-4">273.15</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Temperatura Corporal Humana</td>
                  <td className="px-6 py-4">37</td>
                  <td className="px-6 py-4">98.6</td>
                  <td className="px-6 py-4">310.15</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Ebulição da Água</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">212</td>
                  <td className="px-6 py-4">373.15</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Temperatura Ambiente Confortável</td>
                  <td className="px-6 py-4">22</td>
                  <td className="px-6 py-4">71.6</td>
                  <td className="px-6 py-4">295.15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Conversões Precisas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Uso Cotidiano</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Para cozinhar: 180°C = 356°F (forno médio)</li>
                <li>• Para clima: 20°C = 68°F (temperatura agradável)</li>
                <li>• Para febre: 38°C = 100.4°F (estado febril)</li>
                <li>• Para freezer: -18°C = 0°F (congelamento)</li>
                <li>• Para banho: 37°C = 98.6°F (temperatura corporal)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Aplicações Científicas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Kelvin é absoluto: 0K = -273.15°C</li>
                <li>• Use Kelvin para cálculos físicos</li>
                <li>• Mantenha casas decimais para precisão</li>
                <li>• Verifique fórmulas específicas por aplicação</li>
                <li>• Considere a escala apropriada para cada contexto</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Conversão no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/unidades" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <Thermometer className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Unidades</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta diversas unidades de medida</p>
              </div>
            </Link>
            <Link 
              href="/moedas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4">
                <Snowflake className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Moedas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta entre diferentes moedas</p>
              </div>
            </Link>
            <Link 
              href="/tempo" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Sun className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Tempo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta unidades de tempo</p>
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