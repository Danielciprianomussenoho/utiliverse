import { TrendingUp, DollarSign, Target, Users, MousePointer, BarChart3, Zap, PieChart, Smartphone, Mail } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ROICalculator from '@/components/tools/ROICalculator';

export const metadata = {
  title: 'Calculadora de ROI Marketing Digital 2024 - Calcule Retorno Investimento | Utiliverse',
  description: 'Calcule ROI de campanhas de marketing digital, tráfego pago, redes sociais e email marketing. Simule conversões, CAC e lucro para otimizar seus investimentos.',
  keywords: 'calculadora ROI marketing digital, calcular retorno investimento, ROI campanhas, CAC marketing, conversão tráfego, Google Ads ROI, Facebook Ads, métricas marketing, ROI redes sociais, afiliados marketing',
};

export default function ROIMarketingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Calculadora de ROI Marketing Digital
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule o retorno sobre investimento de suas campanhas de marketing. Otimize orçamentos e maximize resultados com nossa calculadora especializada
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Calcule o ROI das Suas Campanhas
            </h2>
          </div>
          <ROICalculator />
        </section>

        {/* Conteúdo Textual Expandido para SEO */}
        <div className="space-y-8 mb-12">
          {/* Introdução ao ROI */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O Que é ROI em Marketing Digital e Por Que é Crucial Para Seu Negócio
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>ROI (Return on Investment)</strong> é a métrica mais importante para avaliar a eficiência de suas 
                <strong> campanhas de marketing digital</strong>. Nossa <strong>calculadora de ROI especializada</strong> 
                permite que <strong>marketeiros, empreendedores e afiliados</strong> calculem com precisão o 
                <strong> retorno financeiro</strong> de cada real investido em <strong>tráfego pago</strong>, 
                <strong> redes sociais</strong>, <strong>email marketing</strong> e outras estratégias digitais. 
                Compreender seu <strong>ROI de marketing</strong> é fundamental para tomar decisões inteligentes sobre 
                <strong> alocação de orçamento</strong> e <strong>otimização de campanhas</strong>.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Nossa Calculadora de ROI Funciona?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>ferramenta de cálculo de ROI para marketing digital</strong> considera as variáveis essenciais 
                para uma análise precisa: <strong>investimento total em marketing</strong>, 
                <strong> receita gerada pelas campanhas</strong>, <strong>taxa de conversão</strong>, 
                <strong> custo por aquisição (CAC)</strong> e <strong>valor médio do pedido</strong>. 
                O algoritmo calcula automaticamente o <strong>ROI percentual</strong>, 
                <strong>ROI em reais</strong> e o <strong>tempo de retorno do investimento</strong>, 
                proporcionando insights valiosos para sua estratégia.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-indigo-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Agências de Marketing</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Demonstre <strong>resultados concretos</strong> para clientes com relatórios precisos de 
                    <strong> ROI de campanhas</strong>. Calcule <strong>eficácia de diferentes canais</strong> e 
                    optimize <strong>alocação de orçamento</strong> baseado em dados reais.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para E-commerces e Afiliados</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calcule <strong>ROI de tráfego pago</strong> no Google Ads e Facebook Ads. 
                    Simule <strong>cenários de conversão</strong> e identifique o 
                    <strong> custo ideal por aquisição</strong> para maximizar lucros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Métricas e Estratégias */}
          <section className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center mb-6">
              <PieChart className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Métricas Essenciais de ROI Para Diferentes Canais de Marketing
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cada <strong>canal de marketing digital</strong> possui métricas específicas que impactam diretamente o 
                <strong> cálculo do ROI</strong>. Nossa <strong>calculadora avançada de ROI</strong> ajuda você a 
                compreender como variáveis como <strong>CTR (Click-Through Rate)</strong>, 
                <strong> taxa de conversão</strong>, <strong>LTV (Lifetime Value)</strong> e 
                <strong> custo por lead</strong> influenciam sua <strong>lucratividade final</strong>. 
                Dominar essas métricas é essencial para <strong>otimizar campanhas</strong> e 
                <strong> aumentar o retorno sobre investimento em marketing</strong>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Canais de Marketing e Seus ROIs Típicos
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MousePointer className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">Google Ads</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <strong>ROI médio: 200-500%</strong>. Ideal para <strong>intenção de compra</strong>. 
                    Métricas: <strong>CPC, Conversão, Quality Score</strong>.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800 dark:text-green-300">Facebook/Instagram</h3>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>ROI médio: 150-400%</strong>. Excelente para <strong>branding e remarketing</strong>. 
                    Foco em <strong>engajamento e CPM</strong>.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="font-semibold text-orange-800 dark:text-orange-300">Email Marketing</h3>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-400">
                    <strong>ROI médio: 800-1200%</strong>. Melhor custo-benefício. 
                    Métricas: <strong>Open Rate, CTR, Conversão</strong>.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Smartphone className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800 dark:text-red-300">Marketing de Conteúdo</h3>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    <strong>ROI a longo prazo</strong>. Constrói <strong>autoridade e tráfego orgânico</strong>. 
                    Métricas: <strong>Tráfego, Leads, Conversões</strong>.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Estratégias Para Melhorar Seu ROI em Marketing Digital
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Otimize suas <strong>páginas de destino (landing pages)</strong> para aumentar conversões</li>
                <li>Segmento seu público-alvo para reduzir <strong>custo por aquisição (CAC)</strong></li>
                <li>Implemente <strong>remarketing estratégico</strong> para recuperar visitantes não convertidos</li>
                <li>Teste diferentes <strong>criativos e copywriting</strong> para melhorar <strong>CTR</strong></li>
                <li>Use <strong>analytics avançado</strong> para identificar canais com melhor <strong>ROI</strong></li>
                <li>Calcule regularmente seu <strong>ROI com nossa ferramenta</strong> para ajustes rápidos</li>
                <li>Foque em <strong>LTV (Lifetime Value)</strong> além da conversão inicial</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  💡 Dica do Especialista em Marketing Digital
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  Um <strong>ROI positivo em marketing digital</strong> começa com o entendimento claro do 
                  <strong> custo de aquisição de cliente (CAC)</strong> em relação ao 
                  <strong> valor do tempo de vida do cliente (LTV)</strong>. Use nossa 
                  <strong> calculadora de ROI regularmente</strong> para monitorar cada canal e realocar orçamento 
                  para as estratégias mais lucrativas. Lembre-se: um <strong>ROI de 500%</strong> significa que 
                  para cada R$ 1 investido, você ganha R$ 5 de volta!
                </p>
              </div>
            </div>
          </section>

          {/* Casos de Uso */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Como Empresas e Profissionais Usam Nossa Calculadora de ROI
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>calculadora de ROI para marketing digital</strong> é utilizada por diversos perfis 
                profissionais para <strong>tomada de decisão baseada em dados</strong>. Desde 
                <strong> pequenas empresas</strong> que precisam justificar investimentos em marketing até 
                <strong> grandes agências</strong> que necessitam demonstrar resultados para clientes, 
                a ferramenta oferece insights valiosos para <strong>otimização contínua</strong> das 
                <strong> estratégias de marketing digital</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">🎯 Para E-commerces</h4>
                  <ul className="text-sm text-indigo-700 dark:text-indigo-400 space-y-1">
                    <li>• Calcule ROI de campanhas de Google Shopping</li>
                    <li>• Simule diferentes taxas de conversão</li>
                    <li>• Otimize custo por aquisição (CAC)</li>
                    <li>• Compare ROI entre diferentes produtos</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🎯 Para Afiliados</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                    <li>• Calcule comissões vs investimento em tráfego</li>
                    <li>• Simule ROI de diferentes redes de afiliados</li>
                    <li>• Otimize orçamento por fonte de tráfego</li>
                    <li>• Calcule ticket médio necessário para lucro</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🎯 Para Agências</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Demonstre ROI para clientes com relatórios</li>
                    <li>• Compare performance entre diferentes campanhas</li>
                    <li>• Justifique aumentos de orçamento com dados</li>
                    <li>• Identifique canais mais lucrativos</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🎯 Para Empreendedores</h4>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• Tome decisões sobre investimento em marketing</li>
                    <li>• Calcule orçamento ideal por canal</li>
                    <li>• Simule cenários de crescimento</li>
                    <li>• Planeje expansão baseada em ROI</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Para Negócios e Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/impostos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Impostos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule IRPF, Simples Nacional e tributos</p>
              </div>
            </Link>
            <Link href="/investimentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Investimentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros compostos e projeções</p>
              </div>
            </Link>
            <Link href="/emprestimos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Empréstimos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule parcelas e juros de empréstimos</p>
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