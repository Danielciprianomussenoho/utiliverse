import { Calculator, Scale, AlertTriangle, Lightbulb, School, Target } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import RegraTresCalculator from '@/components/tools/RegraTresCalculator';

export const metadata = {
  title: 'Calculadora de Regra de Três Online - Simples e Composta | Utiliverse',
  description: 'Calculadora de regra de três online gratuita para cálculos simples e compostos. Resolva problemas de proporção direta e inversa com explicações passo a passo. Ferramenta essencial para estudantes.',
  keywords: 'regra de três, calculadora proporção, matemática, cálculos proporção, regra três simples, regra três composta, estudante, ensino médio',
};

export default function RegraTresPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de Regra de Três
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Resolva problemas de proporção direta e inversa com nossa calculadora online gratuita. Simples, composta e com explicações detalhadas.
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calcule Regra de Três Agora
          </h2>
          <RegraTresCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Regra de Três - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O que é Regra de Três e Como Aplicar
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A <strong>Regra de Três</strong> é um método matemático fundamental para resolver problemas envolvendo grandezas proporcionais. Desenvolvida desde a antiguidade, essa técnica permite encontrar um valor desconhecido quando se conhecem três outros valores que mantêm uma relação de proporcionalidade.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Tipos de Regra de Três e Aplicações Práticas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Regra de Três Simples</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Envolve apenas duas grandezas. Pode ser direta (quando as grandezas aumentam juntas) ou inversa (quando uma aumenta e a outra diminui).
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    <strong>Exemplo:</strong> Se 3 cadernos custam R$ 15, quanto custam 5 cadernos?
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <School className="w-5 h-5 text-pink-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Regra de Três Composta</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Envolve três ou mais grandezas. Requer análise individual de cada relação de proporcionalidade com a grandeza desconhecida.
                  </p>
                  <p className="text-xs text-pink-600 dark:text-pink-400">
                    <strong>Exemplo:</strong> Se 5 trabalhadores constroem um muro em 10 dias, em quantos dias 8 trabalhadores constroem o mesmo muro?
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Passo a Passo para Resolver Regra de Três
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</span>
                  <p><strong>Identifique as grandezas:</strong> Liste todas as grandezas envolvidas no problema</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</span>
                  <p><strong>Analise a proporcionalidade:</strong> Determine se cada relação é direta ou inversa</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</span>
                  <p><strong>Monte a proporção:</strong> Organize os valores mantendo a coerência das grandezas</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</span>
                  <p><strong>Calcule o valor desconhecido:</strong> Use multiplicação cruzada e isole a incógnita</p>
                </div>
              </div>
            </div>
          </section>

          {/* Aplicações Práticas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <School className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Aplicações da Regra de Três no Dia a Dia
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Aplicações Financeiras</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Cálculo de juros e descontos</li>
                  <li>• Conversão de moedas</li>
                  <li>• Cálculo de preços por unidade</li>
                  <li>• Planejamento de orçamentos</li>
                  <li>• Cálculo de dividendos e investimentos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Aplicações Acadêmicas</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Cálculos químicos e estequiometria</li>
                  <li>• Problemas de física e velocidade</li>
                  <li>• Escalas e mapas em geografia</li>
                  <li>• Cálculos de dosagem em medicina</li>
                  <li>• Proporções em receitas culinárias</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitações e Dicas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dicas e Cuidados Importantes
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Erros Comuns a Evitar
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Confundir proporcionalidade:</strong> Identificar erroneamente se é direta ou inversa</li>
                <li><strong>Unidades inconsistentes:</strong> Misturar diferentes unidades de medida</li>
                <li><strong>Ordem incorreta:</strong> Não manter a coerência na montagem da proporção</li>
                <li><strong>Arredondamentos precoces:</strong> Arredondar valores durante o cálculo</li>
                <li><strong>Análise superficial:</strong> Não considerar todas as variáveis do problema</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Dica para Identificar Proporcionalidade
                    </h4>
                    <p className="text-blue-700 dark:text-blue-400">
                      <strong>Teste mental:</strong> Se aumentar uma grandeza e a outra também aumentar, é proporcionalidade direta. Se aumentar uma e a outra diminuir, é inversa. Sempre analise relação a relação com a grandeza desconhecida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Exemplos Práticos */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Exemplos Práticos de Regra de Três
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Situação</th>
                  <th className="px-6 py-4 font-semibold">Tipo</th>
                  <th className="px-6 py-4 font-semibold">Proporcionalidade</th>
                  <th className="px-6 py-4 font-semibold">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Receita culinária</td>
                  <td className="px-6 py-4">Simples</td>
                  <td className="px-6 py-4">Direta</td>
                  <td className="px-6 py-4 text-sm">Ajustar quantidades para mais ou menos porções</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Velocidade e tempo</td>
                  <td className="px-6 py-4">Simples</td>
                  <td className="px-6 py-4">Inversa</td>
                  <td className="px-6 py-4 text-sm">Calcular tempo de viagem com diferentes velocidades</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Produção industrial</td>
                  <td className="px-6 py-4">Composta</td>
                  <td className="px-6 py-4">Mista</td>
                  <td className="px-6 py-4 text-sm">Calcular produção com máquinas, tempo e trabalhadores</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Dosagem medicamentosa</td>
                  <td className="px-6 py-4">Simples</td>
                  <td className="px-6 py-4">Direta</td>
                  <td className="px-6 py-4 text-sm">Ajustar dose conforme peso do paciente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Calculadoras no Utiliverse
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule porcentagens, aumentos e descontos</p>
              </div>
            </Link>
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
              </div>
            </Link>
            <Link 
              href="/cientifica" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Científica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Funções avançadas e trigonométricas</p>
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