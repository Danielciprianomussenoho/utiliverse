import { Calculator,  Percent, TrendingUp, AlertTriangle, School, Briefcase, ShoppingCart } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import CalculatorTool from '@/components/tools/CalculatorTool';

export const metadata = {
  title: 'Calculadora Online - Operações Básicas e Avançadas | Utiliverse',
  description: 'Calculadora online gratuita com operações básicas, porcentagem, potência e mais. Interface moderna e fácil de usar.',
  keywords: 'calculadora online, calculadora, operações matemáticas, calculadora básica, calculadora avançada, utiliverse',
};

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculadora completa com operações básicas, porcentagem e funções avançadas para uso diário
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Use a Calculadora
          </h2>
          <CalculatorTool />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é a Calculadora - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Calculadora Online - Funcionalidades Completas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>calculadora online</strong> oferece uma experiência completa e intuitiva 
                para todos os tipos de cálculos matemáticos. Desenvolvida com tecnologia moderna, 
                ela combina a simplicidade das calculadoras tradicionais com funcionalidades 
                avançadas do mundo digital.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Para Diferentes Necessidades
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <School className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Estudantes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para tarefas escolares, trabalhos acadêmicos e estudos 
                    que requerem cálculos rápidos e precisos no dia a dia.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Profissionais</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essencial para cálculos comerciais, orçamentos, planejamento 
                    financeiro e análises que demandam agilidade e confiabilidade.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <ShoppingCart className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Uso Doméstico</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfeita para controle de gastos, receitas culinárias, 
                    planejamento familiar e cálculos do cotidiano.
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
                Limitações da Calculadora Online
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Precisão numérica:</strong> Limitada pela precisão de ponto flutuante do JavaScript</li>
                <li><strong>Operações complexas:</strong> Não inclui funções trigonométricas ou logarítmicas</li>
                <li><strong>Armazenamento:</strong> Histórico é perdido ao atualizar a página</li>
                <li><strong>Dispositivos móveis:</strong> Performance pode variar conforme o dispositivo</li>
                <li><strong>Conexão:</strong> Funciona offline após carregamento inicial</li>
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
                      <strong>Esta calculadora fornece resultados para fins educacionais e de uso geral.</strong> 
                      Para cálculos financeiros, científicos ou aplicações críticas, sempre consulte 
                      profissionais qualificados e valide os resultados com ferramentas especializadas. 
                      O Utiliverse não se responsabiliza por decisões tomadas com base nestes cálculos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Atalhos */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Atalhos do Teclado
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Tecla</th>
                  <th className="px-6 py-4 font-semibold">Função</th>
                  <th className="px-6 py-4 font-semibold">Descrição</th>
                  <th className="px-6 py-4 font-semibold">Equivalente</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-mono font-medium text-gray-900 dark:text-white">0-9</td>
                  <td className="px-6 py-4">Números</td>
                  <td className="px-6 py-4">Digitar números</td>
                  <td className="px-6 py-4">Botões 0-9</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-mono font-medium text-gray-900 dark:text-white">+ - * /</td>
                  <td className="px-6 py-4">Operações</td>
                  <td className="px-6 py-4">Operações básicas</td>
                  <td className="px-6 py-4">+, -, ×, ÷</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-mono font-medium text-gray-900 dark:text-white">Enter ou =</td>
                  <td className="px-6 py-4">Calcular</td>
                  <td className="px-6 py-4">Calcular resultado</td>
                  <td className="px-6 py-4">Botão =</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-mono font-medium text-gray-900 dark:text-white">Escape</td>
                  <td className="px-6 py-4">Limpar</td>
                  <td className="px-6 py-4">Limpar calculadora</td>
                  <td className="px-6 py-4">Botão C</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-mono font-medium text-gray-900 dark:text-white">Backspace</td>
                  <td className="px-6 py-4">Corrigir</td>
                  <td className="px-6 py-4">Apagar último dígito</td>
                  <td className="px-6 py-4">Botão ⌫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Uso Eficiente
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Cálculos Rápidos</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use o teclado numérico para maior velocidade</li>
                <li>• Aproveite os atalhos do teclado físico</li>
                <li>• Use % para cálculos percentuais diretos</li>
                <li>• x² para quadrados instantâneos</li>
                <li>• Histórico mostra últimos 3 cálculos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Precisão</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Verifique sempre a operação antes do =</li>
                <li>• Use CE para corrigir apenas o número atual</li>
                <li>• C limpa completamente a operação</li>
                <li>• Para decimais, use ponto (.)</li>
                <li>• Números muito grandes usam notação científica</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
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
                <Percent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de %</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cálculos percentuais avançados</p>
              </div>
            </Link>
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-red-300 dark:hover:border-red-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
              </div>
            </Link>
            <Link 
              href="/cientifica" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md"
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