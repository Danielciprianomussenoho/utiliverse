import { TrendingUp, DollarSign, Target, BarChart3, Clock, Shield, Calculator, Home, PieChart, Zap, Users } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import InvestmentSimulator from '@/components/tools/InvestmentSimulator';

export const metadata = {
  title: 'Simulador de Investimentos 2024 - Juros Compostos e Projeções | Utiliverse',
  description: 'Simule investimentos com juros compostos. Calcule projeções de renda, compare CDB, Tesouro Direto, Ações e mais. Planeje seu futuro!',
  keywords: 'simulador investimentos, juros compostos, calculadora investimento, projeção renda, CDB, tesouro direto, ações, renda fixa, renda variável, calcular investimento, planejamento financeiro, aplicações financeiras',
};

export default function InvestimentosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Simulador de Investimentos Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Use nosso simulador de investimentos gratuito para calcular juros compostos, projetar seu patrimônio e planejar seu futuro financeiro com precisão
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Simulador de Investimentos com Juros Compostos
            </h2>
          </div>
          <InvestmentSimulator />
        </section>

        {/* Conteúdo Textual Expandido para SEO */}
        <div className="space-y-8 mb-12">
          {/* O Poder dos Juros Compostos */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O Poder dos Juros Compostos no Seu Patrimônio
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>simulador de investimentos</strong> que desenvolvemos utiliza o conceito de <strong>juros compostos</strong>, 
                considerado por Albert Einstein como a maior invenção da humanidade. Esta ferramenta de <strong>calculadora de investimentos</strong> 
                demonstra como pequenos aportes mensais, quando submetidos à capitalização constante, podem transformar-se em patrimônios significativos ao longo do tempo.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Funciona a Calculadora de Investimentos?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nosso <strong>simulador de juros compostos</strong> considera quatro variáveis essenciais para calcular suas <strong>projeções de renda</strong>: 
                <strong>investimento inicial</strong>, <strong>aportes mensais regulares</strong>, <strong>taxa de juros mensal</strong> e <strong>prazo de aplicação</strong>. 
                A cada mês, os juros são calculados sobre o capital acumulado, criando um efeito exponencial que acelera o crescimento do seu patrimônio.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Iniciantes em Investimentos</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Comece com <strong>investimentos de renda fixa</strong> como CDB e Tesouro Direto. Use nosso simulador para entender 
                    como pequenos valores mensais podem crescer com o tempo através dos juros compostos.
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <PieChart className="w-5 h-5 text-pink-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Investidores Experientes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Otimize sua <strong>carteira de investimentos</strong> testando diferentes cenários de alocação entre 
                    <strong>renda fixa</strong> e <strong>renda variável</strong>. Compare estratégias de acumulação patrimonial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Estratégias de Investimento */}
          <section className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Estratégias de Investimento para Diferentes Perfis
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Utilizar um <strong>simulador de investimentos online</strong> é o primeiro passo para um <strong>planejamento financeiro eficiente</strong>. 
                Diferentes estratégias de aplicação podem ser testadas em nossa <strong>calculadora de juros compostos</strong> para identificar 
                a abordagem mais adequada ao seu perfil de risco e objetivos financeiros.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Tipos de Investimento Disponíveis
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800 dark:text-green-300">Renda Fixa</h3>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>CDB</strong>, <strong>LCI</strong>, <strong>LCA</strong>, <strong>Tesouro Direto</strong>. Investimentos mais seguros 
                    e previsíveis, ideais para <strong>reserva de emergência</strong> e objetivos de curto prazo.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">Renda Variável</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <strong>Ações</strong>, <strong>FIIs</strong>, <strong>ETFs</strong>. Maior potencial de retorno com risco elevado. 
                    Recomendado para investidores com tolerância à volatilidade.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="font-semibold text-orange-800 dark:text-orange-300">Longo Prazo</h3>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-400">
                    <strong>Previdência privada</strong>, <strong>ETFs</strong> setoriais. Foco em acumulação patrimonial para 
                    aposentadoria e objetivos distantes.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800 dark:text-red-300">Reserva Emergencial</h3>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    <strong>Poupança</strong>, <strong>CDB com liquidez diária</strong>. Destinado a cobrir imprevistos e despesas inesperadas, 
                    mantendo alta liquidez.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Dicas para Maximizar Seus Investimentos
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Comece cedo: o tempo é seu maior aliado nos <strong>juros compostos</strong></li>
                <li>Mantenha <strong>aportes mensais regulares</strong>, mesmo que pequenos</li>
                <li>Diversifique entre <strong>renda fixa</strong> e <strong>renda variável</strong></li>
                <li>Reinvista os rendimentos para potencializar o efeito dos <strong>juros sobre juros</strong></li>
                <li>Use nosso <strong>simulador de investimentos</strong> regularmente para acompanhar suas projeções</li>
                <li>Considere a inflação em seus cálculos de <strong>retorno real</strong></li>
              </ul>
            </div>
          </section>

          {/* Importância do Planejamento */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Importância do Planejamento Financeiro com Nossa Calculadora
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nosso <strong>simulador de investimentos online gratuito</strong> foi desenvolvido para democratizar o acesso ao 
                <strong>planejamento financeiro inteligente</strong>. Ao utilizar esta ferramenta de <strong>cálculo de juros compostos</strong>, 
                você pode visualizar concretamente como diferentes estratégias de investimento impactam seu patrimônio futuro.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Seja para planejar sua <strong>aposentadoria</strong>, acumular recursos para a <strong>educação dos filhos</strong>, 
                realizar a <strong>compra de um imóvel</strong> ou simplesmente construir uma <strong>reserva patrimonial</strong>, 
                nosso <strong>simulador de projeções financeiras</strong> oferece insights valiosos para sua tomada de decisão.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  💡 Dica do Especialista em Investimentos
                </h4>
                <p className="text-blue-700 dark:text-blue-400">
                  Utilize nosso <strong>simulador de investimentos</strong> regularmente para testar diferentes cenários. 
                  Ajuste os <strong>aportes mensais</strong> conforme sua capacidade financeira evolui e monitore como pequenos 
                  aumentos podem impactar significativamente seu <strong>patrimônio final</strong> graças ao poder dos 
                  <strong>juros compostos</strong>.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Financeiras no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/emprestimos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Empréstimos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule parcelas de empréstimos pessoais e compare taxas</p>
              </div>
            </Link>
            <Link href="/financiamentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Financiamentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule financiamentos de imóveis, veículos e mais</p>
              </div>
            </Link>
            <Link href="/juros" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros simples e compostos para diferentes aplicações</p>
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