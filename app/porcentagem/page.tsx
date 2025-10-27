import { Percent, Calculator, PieChart, DollarSign } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import PercentageCalculator from '@/components/tools/PercentageCalculator';

export const metadata = {
  title: 'Calculadora de Porcentagem Online - Cálculos Rápidos e Precisos | Utiliverse',
  description: 'Calculadora de porcentagem gratuita para aumentos, descontos, variações e cálculos percentuais. Ferramenta essencial para finanças, compras e análise de dados.',
  keywords: 'calculadora porcentagem, calcular porcentagem, aumento percentual, desconto porcentagem, variação percentual, cálculo porcentagem online',
};

export default function PercentagePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Percent className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de Porcentagem Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule porcentagens, aumentos, descontos e variações percentuais com precisão para suas necessidades do dia a dia
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calculadora de Porcentagem Completa
          </h2>
          <PercentageCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Importância das Porcentagens */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <PieChart className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Importância das Porcentagens no Dia a Dia
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As porcentagens são uma das ferramentas matemáticas mais utilizadas no cotidiano, 
                presentes em praticamente todas as áreas das nossas vidas. Desde as compras do supermercado 
                até complexas análises financeiras, o entendimento de porcentagens é fundamental para 
                tomada de decisões conscientes e planejamento eficiente.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Práticas em Diferentes Contextos
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Finanças Pessoais</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Juros de empréstimos:</strong> Calcule o custo real do crédito</li>
                    <li><strong>Rendimentos:</strong> Avalie investimentos e poupança</li>
                    <li><strong>Orçamento doméstico:</strong> Distribua receitas e despesas</li>
                    <li><strong>Impostos:</strong> Entenda descontos na folha de pagamento</li>
                    <li><strong>Financiamentos:</strong> Calcule parcelas e taxas</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Compras e Vendas</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Descontos:</strong> Compare promoções e ofertas</li>
                    <li><strong>Acréscimos:</strong> Calcule juros do cartão</li>
                    <li><strong>Cashback:</strong> Avalie programas de fidelidade</li>
                    <li><strong>Comissões:</strong> Calcule ganhos em vendas</li>
                    <li><strong>Margem de lucro:</strong> Estabeleça preços competitivos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Cálculos Percentuais */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tipos de Cálculos Percentuais e Suas Fórmulas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Métodos de Cálculo Explicados
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cálculos Básicos</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                    <li>
                      <strong>Porcentagem de um valor:</strong><br/>
                      <code className="text-purple-600">(porcentagem ÷ 100) × valor total</code>
                    </li>
                    <li>
                      <strong>Aumento percentual:</strong><br/>
                      <code className="text-green-600">valor original × (1 + porcentagem ÷ 100)</code>
                    </li>
                    <li>
                      <strong>Desconto percentual:</strong><br/>
                      <code className="text-red-600">valor original × (1 - porcentagem ÷ 100)</code>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cálculos Avançados</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                    <li>
                      <strong>Variação percentual:</strong><br/>
                      <code className="text-blue-600">[(novo - antigo) ÷ antigo] × 100</code>
                    </li>
                    <li>
                      <strong>Porcentagem de porcentagem:</strong><br/>
                      <code className="text-orange-600">(porcentagem1 ÷ 100) × (porcentagem2 ÷ 100) × 100</code>
                    </li>
                    <li>
                      <strong>Valor original a partir do final:</strong><br/>
                      <code className="text-teal-600">valor final ÷ (1 ± porcentagem ÷ 100)</code>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dicas Práticas */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                      Dicas para Cálculos Percentuais
                    </h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      💡 <strong>Regra prática:</strong> Para calcular 10% de qualquer valor, basta mover a vírgula uma casa para a esquerda.<br/>
                      💡 <strong>Comparação de descontos:</strong> Um desconto de 50% seguido de 20% não é 70%, e sim 60% no total.<br/>
                      💡 <strong>Análise crítica:</strong> Sempre verifique se a porcentagem se aplica ao valor correto para evitar erros.
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
            Exemplos Práticos de Aplicação
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Situação</th>
                  <th className="px-6 py-4 font-semibold">Cálculo</th>
                  <th className="px-6 py-4 font-semibold">Resultado</th>
                  <th className="px-6 py-4 font-semibold">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Desconto em loja</td>
                  <td className="px-6 py-4">15% de R$ 200,00</td>
                  <td className="px-6 py-4">R$ 30,00</td>
                  <td className="px-6 py-4">Preço final: R$ 170,00</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Aumento salarial</td>
                  <td className="px-6 py-4">8% de R$ 2.500,00</td>
                  <td className="px-6 py-4">R$ 200,00</td>
                  <td className="px-6 py-4">Novo salário: R$ 2.700,00</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Variação de preço</td>
                  <td className="px-6 py-4">De R$ 80 para R$ 100</td>
                  <td className="px-6 py-4">+25%</td>
                  <td className="px-6 py-4">Aumento de 25% no preço</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Juros de cartão</td>
                  <td className="px-6 py-4">12% de R$ 1.000,00</td>
                  <td className="px-6 py-4">R$ 120,00</td>
                  <td className="px-6 py-4">Dívida mensal com juros</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Meta de vendas</td>
                  <td className="px-6 py-4">75% de R$ 10.000,00</td>
                  <td className="px-6 py-4">R$ 7.500,00</td>
                  <td className="px-6 py-4">Valor atingido da meta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Cálculo no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
              </div>
            </Link>
            <Link 
              href="/moedas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Moedas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cotações em tempo real</p>
              </div>
            </Link>
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas</p>
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