import { Calculator, TrendingUp, PieChart, AlertCircle, BarChart3, Euro, Lightbulb, Scale } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import JurosCalculator from '@/components/tools/JurosCalculator';

export const metadata = {
  title: 'Calculadora de Juros Online - Simples e Compostos em EUR | Utiliverse',
  description: 'Calcule juros simples e compostos em Euros gratuitamente. Simule investimentos, empréstimos e veja a evolução do seu dinheiro ao longo do tempo.',
  keywords: 'calculadora juros, juros simples, juros compostos, investimentos, empréstimos, cálculo financeiro, utiliverse',
};

export default function JurosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Padronizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de Juros Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule juros simples e compostos para investimentos, empréstimos e planejamento financeiro em Euros
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calcule Seus Juros Agora
          </h2>
          <JurosCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Tipos de Juros - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <PieChart className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tipos de Juros e Aplicações Práticas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Os <strong>juros</strong> representam o custo do dinheiro no tempo e são fundamentais em operações financeiras. 
                Entender a diferença entre juros simples e compostos é crucial para tomar decisões financeiras inteligentes 
                tanto em investimentos quanto em empréstimos.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Aplicações para Diferentes Perfis Financeiros
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Investidores</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Juros compostos são seus maiores aliados. Comece cedo e deixe o tempo trabalhar a seu favor. 
                    Pequenos investimentos regulares podem gerar grandes resultados no longo prazo.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Scale className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Tomadores de Empréstimo</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefira empréstimos com juros simples quando possível. Entenda o custo total do empréstimo 
                    e compare diferentes opções antes de decidir.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Planejamento Financeiro</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use ambas as calculadoras para simular diferentes cenários. Considere a inflação e 
                    diversifique seus investimentos para equilibrar risco e retorno.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fórmulas e Cálculos Detalhados */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Fórmulas e Metodologia de Cálculo
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <PieChart className="w-5 h-5 text-green-600 mr-2" />
                  Juros Simples
                </h3>
                <code className="text-lg text-gray-800 dark:text-gray-200 font-mono block mb-4 bg-white dark:bg-gray-600 p-3 rounded">
                  J = P × i × t
                </code>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li><strong>J</strong> = Juros totais</li>
                  <li><strong>P</strong> = Capital inicial (principal)</li>
                  <li><strong>i</strong> = Taxa de juros (em decimal)</li>
                  <li><strong>t</strong> = Tempo (períodos)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  Juros Compostos
                </h3>
                <code className="text-lg text-gray-800 dark:text-gray-200 font-mono block mb-4 bg-white dark:bg-gray-600 p-3 rounded">
                  M = P × (1 + i)ᵗ
                </code>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li><strong>M</strong> = Montante final</li>
                  <li><strong>P</strong> = Capital inicial</li>
                  <li><strong>i</strong> = Taxa de juros por período</li>
                  <li><strong>t</strong> = Número de períodos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Avisos Legais Reforçados */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Limitações e Avisos Importantes
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                O que Esta Calculadora Não Considera
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Taxas administrativas</strong> e custos adicionais</li>
                <li><strong>Impostos</strong> sobre rendimentos financeiros</li>
                <li><strong>Inflação</strong> e perda do poder de compra</li>
                <li><strong>Riscos específicos</strong> de cada investimento</li>
                <li><strong>Condições de mercado</strong> variáveis</li>
              </ul>

              {/* Aviso Legal Destacado */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                      Aviso Legal e Isenção de Responsabilidade
                    </h4>
                    <p className="text-red-700 dark:text-red-400">
                      <strong>Esta ferramenta não substitui aconselhamento financeiro profissional.</strong> Os resultados 
                      fornecidos são estimativas para fins educacionais e podem diferir significativamente de valores reais. 
                      Consulte sempre um consultor financeiro qualificado antes de tomar decisões de investimento ou contrair empréstimos. 
                      O Utiliverse não se responsabiliza por decisões financeiras tomadas com base nestes cálculos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Comparação Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Comparação Detalhada: Juros Simples vs Compostos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Característica</th>
                  <th className="px-6 py-4 font-semibold">Juros Simples</th>
                  <th className="px-6 py-4 font-semibold">Juros Compostos</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Fórmula Matemática</td>
                  <td className="px-6 py-4">J = P × i × t</td>
                  <td className="px-6 py-4">M = P × (1 + i)ᵗ</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Tipo de Crescimento</td>
                  <td className="px-6 py-4">Linear e constante</td>
                  <td className="px-6 py-4">Exponencial e acelerado</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Aplicações Típicas</td>
                  <td className="px-6 py-4">Empréstimos curtos, financiamentos simples</td>
                  <td className="px-6 py-4">Investimentos longos, poupança, aplicações</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Vantagens</td>
                  <td className="px-6 py-4">Previsível, cálculo simples, melhor para dívidas</td>
                  <td className="px-6 py-4">Maior rentabilidade no longo prazo</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Exemplo: €1000 a 10% em 3 anos</td>
                  <td className="px-6 py-4">€1000 → €1100 → €1200 → €1300</td>
                  <td className="px-6 py-4">€1000 → €1100 → €1210 → €1331</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas de Investimento */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Investimentos Inteligentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Estratégias Básicas
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Comece cedo para maximizar os juros compostos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Invista regularmente (contribuições mensais)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Diversifique seus investimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Considere seu perfil de risco</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                Fatores a Considerar
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Inflação e poder de compra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Taxas e impostos sobre ganhos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Liquidez do investimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Horizonte temporal dos objetivos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ferramentas Relacionadas */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Financeiras no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/porcentagem" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de %</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule porcentagens e variações</p>
              </div>
            </Link>
            <Link 
              href="/moedas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4">
                <Euro className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Moedas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta entre diferentes moedas</p>
              </div>
            </Link>
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas básicas</p>
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