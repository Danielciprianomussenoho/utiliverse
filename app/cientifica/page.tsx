import { Sigma, Calculator, Binary, AlertTriangle, GraduationCap, Rocket, FlaskConical } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ScientificCalculator from '@/components/tools/ScientificCalculator';

export const metadata = {
  title: 'Calculadora Científica Online - Funções Avançadas | Utiliverse',
  description: 'Calculadora científica gratuita com funções trigonométricas, logaritmos, potências e mais. Ideal para estudantes e profissionais.',
  keywords: 'calculadora científica, funções trigonométricas, logaritmos, calculadora avançada, matemática, utiliverse',
};

export default function CientificaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6">
            <Sigma className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora Científica Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculadora científica completa com funções avançadas, trigonométricas e matemáticas para cálculos complexos
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Use a Calculadora Científica
          </h2>
          <ScientificCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Calculadora Científica - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Sigma className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Calculadora Científica - Funcionalidades Avançadas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>calculadora científica online</strong> oferece um conjunto completo de funções 
                matemáticas avançadas essenciais para estudos acadêmicos, pesquisas científicas e 
                aplicações profissionais. Desenvolvida com algoritmos precisos, ela reproduz 
                fielmente as funcionalidades das calculadoras científicas físicas mais modernas.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Para Diferentes Áreas
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Estudantes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para cursos de engenharia, matemática, física e ciências 
                    que exigem cálculos trigonométricos e funções avançadas.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FlaskConical className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Pesquisadores</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essencial em laboratórios, análises estatísticas, cálculos 
                    científicos e pesquisas que demandam precisão matemática.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Rocket className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Engenheiros</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crucial em projetos de engenharia, cálculos estruturais, 
                    análises técnicas e desenvolvimento de soluções complexas.
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
                Precisão e Considerações Técnicas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Limitações e Características Técnicas
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Precisão numérica:</strong> Baseada em ponto flutuante de 64 bits (padrão IEEE 754)</li>
                <li><strong>Funções trigonométricas:</strong> Suporte a radianos e graus com toggle RAD/DEG</li>
                <li><strong>Limite de cálculo:</strong> Números muito grandes usam notação científica automática</li>
                <li><strong>Memória:</strong> Sistema de memória com funções MC, MR, M+, M-</li>
                <li><strong>Performance:</strong> Cálculos instantâneos para a maioria das operações</li>
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
                      <strong>Esta calculadora científica fornece resultados para fins educacionais e de pesquisa.</strong> 
                      Para aplicações críticas em engenharia, medicina, aviação ou cálculos financeiros importantes, 
                      sempre valide os resultados com ferramentas especializadas e consulte profissionais qualificados. 
                      O Utiliverse não se responsabiliza por decisões ou consequências de uso em aplicações críticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Funções */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Funções Científicas Disponíveis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Funções Trigonométricas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>sin, cos, tan</span>
                  <span className="text-gray-500">Seno, Cosseno, Tangente</span>
                </li>
                <li className="flex justify-between">
                  <span>sin⁻¹, cos⁻¹, tan⁻¹</span>
                  <span className="text-gray-500">Arco-seno, Arco-cosseno, Arco-tangente</span>
                </li>
                <li className="flex justify-between">
                  <span>sinh, cosh, tanh</span>
                  <span className="text-gray-500">Hiperbólicas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Funções Logarítmicas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>log</span>
                  <span className="text-gray-500">Logaritmo base 10</span>
                </li>
                <li className="flex justify-between">
                  <span>ln</span>
                  <span className="text-gray-500">Logaritmo natural (base e)</span>
                </li>
                <li className="flex justify-between">
                  <span>exp</span>
                  <span className="text-gray-500">Exponencial eˣ</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Funções Matemáticas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>√x, x², x³</span>
                  <span className="text-gray-500">Raiz, Quadrado, Cubo</span>
                </li>
                <li className="flex justify-between">
                  <span>x^y, x!</span>
                  <span className="text-gray-500">Potência, Fatorial</span>
                </li>
                <li className="flex justify-between">
                  <span>1/x, π, e</span>
                  <span className="text-gray-500">Inverso, Pi, Euler</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Uso da Calculadora Científica
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Cálculos Trigonométricos</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use RAD para cálculos em radianos (padrão em matemática)</li>
                <li>• Use DEG para cálculos em graus (comum em engenharia)</li>
                <li>• Verifique sempre a unidade angular antes do cálculo</li>
                <li>• Funções inversas retornam na mesma unidade da entrada</li>
                <li>• Para π, use o botão dedicado para maior precisão</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Funções Avançadas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use parênteses para expressões complexas</li>
                <li>• Memória útil para cálculos sequenciais</li>
                <li>• Fatorial funciona apenas com números inteiros</li>
                <li>• Potência (x^y) para qualquer expoente real</li>
                <li>• Logaritmos apenas para números positivos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Matemáticas no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas fundamentais</p>
              </div>
            </Link>
            <Link 
              href="/bases" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-violet-300 dark:hover:border-violet-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mr-4">
                <Binary className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Bases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Binário, decimal, hexadecimal</p>
              </div>
            </Link>
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Sigma className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
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