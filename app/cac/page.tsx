import { Users, DollarSign, Target, TrendingUp, BarChart3, Zap, Building, Rocket, PieChart, Shield } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import CACCalculator from '@/components/tools/CACCalculator';

export const metadata = {
  title: 'Calculadora de CAC 2024 - Custo de Aquisição de Cliente | Utiliverse',
  description: 'Calcule o CAC da sua startup ou negócio. Entenda custos de aquisição, compare com LTV e optimize seu custo por cliente. Ferramenta essencial para growth e scaling.',
  keywords: 'calculadora CAC, custo aquisição cliente, calcular CAC, CAC startup, LTV CAC, custo por cliente, métricas SaaS, growth marketing, custo aquisição B2B, CAC e-commerce, calculadora startup, métricas negócio',
};

export default function CACPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-teal-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Calculadora de CAC
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule o Custo de Aquisição de Cliente do seu negócio. Entenda seus custos de aquisição e optimize seu crescimento de forma sustentável
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-teal-100 dark:border-teal-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Calcule Seu Custo de Aquisição de Cliente
            </h2>
          </div>
          <CACCalculator />
        </section>

        {/* Conteúdo Textual Expandido para SEO */}
        <div className="space-y-8 mb-12">
          {/* Introdução ao CAC */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O Que é CAC e Por Que é a Métrica Mais Importante Para Seu Negócio
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>CAC (Custo de Aquisição de Cliente)</strong> é uma das métricas fundamentais para 
                <strong> startups, SaaS, e-commerces e negócios digitais</strong>. Ele representa o investimento 
                total em marketing e vendas necessário para conquistar um novo cliente. Nossa 
                <strong> calculadora de CAC especializada</strong> ajuda empreendedores e gestores a 
                compreenderem exatamente quanto custa cada cliente adquirido, permitindo 
                <strong> decisões estratégicas baseadas em dados</strong> e <strong>otimização de orçamentos</strong> 
                para <strong>crescimento sustentável</strong>.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Nossa Calculadora de CAC Funciona?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>ferramenta de cálculo de CAC</strong> considera todas as variáveis essenciais 
                para uma análise precisa: <strong>investimento total em marketing</strong>, 
                <strong> custos de vendas</strong>, <strong>salários da equipe comercial</strong>, 
                <strong> número de novos clientes adquiridos</strong> e <strong>custos indiretos</strong>. 
                O algoritmo calcula automaticamente o <strong>CAC total</strong>, 
                <strong> CAC por canal</strong> e a <strong>relação LTV:CAC</strong>, 
                proporcionando insights valiosos para sua estratégia de growth.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Rocket className="w-5 h-5 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Startups e SaaS</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calcule <strong>CAC payback period</strong> e <strong>LTV:CAC ratio</strong>. 
                    Essential para <strong>rodadas de investimento</strong> e 
                    <strong> planejamento de growth</strong>. Monitore <strong>eficência de aquisição</strong> 
                    por canal.
                  </p>
                </div>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-cyan-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para E-commerces e Varejo</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Analise <strong>CAC por fonte de tráfego</strong> e <strong>campanha</strong>. 
                    Otimize <strong>orçamento de marketing</strong> e identifique 
                    <strong> canais mais eficientes</strong> para aquisição.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Métricas e Benchmarks */}
          <section className="bg-linear-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-teal-200 dark:border-teal-800">
            <div className="flex items-center mb-6">
              <PieChart className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Benchmarks de CAC Por Setor e Estratégias de Otimização
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Compreender os <strong>benchmarks de CAC do seu setor</strong> é crucial para avaliar a 
                <strong> saúde do seu negócio</strong> e <strong>atrair investimentos</strong>. 
                Nossa <strong>calculadora de custo de aquisição</strong> não apenas calcula seu CAC atual, 
                mas também compara com <strong>médias do mercado</strong> e fornece 
                <strong> recomendações personalizadas</strong> para melhoria. A relação 
                <strong> LTV:CAC (Lifetime Value : Customer Acquisition Cost)</strong> é considerada 
                por investidores como uma das métricas mais importantes para avaliar 
                <strong> sustentabilidade e potencial de crescimento</strong>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Benchmarks de CAC Por Segmento
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">SaaS B2B</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <strong>CAC médio: R$ 2.000-5.000</strong><br/>
                    <strong>LTV:CAC ideal: 3:1</strong><br/>
                    <strong>Payback: 12-18 meses</strong>
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800 dark:text-green-300">SaaS B2C</h3>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>CAC médio: R$ 200-800</strong><br/>
                    <strong>LTV:CAC ideal: 3:1</strong><br/>
                    <strong>Payback: 6-12 meses</strong>
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="font-semibold text-orange-800 dark:text-orange-300">E-commerce</h3>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-400">
                    <strong>CAC médio: R$ 50-200</strong><br/>
                    <strong>LTV:CAC ideal: 4:1</strong><br/>
                    <strong>Payback: 3-6 meses</strong>
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Building className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-800 dark:text-purple-300">Marketplace</h3>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-400">
                    <strong>CAC médio: R$ 100-500</strong><br/>
                    <strong>LTV:CAC ideal: 3:1</strong><br/>
                    <strong>Payback: 8-14 meses</strong>
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Estratégias Para Reduzir Seu CAC e Aumentar Eficiência
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Otimize suas <strong>campanhas de aquisição</strong> com base no CAC por canal</li>
                <li>Implemente <strong>programas de indicação (referral)</strong> para reduzir custos</li>
                <li>Desenvolva <strong>conteúdo educativo</strong> para atrair tráfego orgânico qualificado</li>
                <li>Melhore sua <strong>taxa de conversão</strong> em landing pages e funis</li>
                <li>Use <strong>remarketing estratégico</strong> para recuperar leads quentes</li>
                <li>Automatize processos de <strong>nurturing e qualificação</strong> de leads</li>
                <li>Negocie melhores condições com <strong>parceiros e afiliados</strong></li>
                <li>Monitore regularmente seu <strong>CAC com nossa calculadora</strong> para ajustes rápidos</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  💼 Importância do CAC Para Investidores e Negócios em Scaling
                </h4>
                <p className="text-blue-700 dark:text-blue-400">
                  Investidores analisam cuidadosamente o <strong>CAC e a relação LTV:CAC</strong> antes de 
                  investir em startups. Um <strong>LTV:CAC de 3:1 ou superior</strong> indica um 
                  <strong> modelo de negócio saudável e escalável</strong>. Nosso 
                  <strong> cálculo de CAC preciso</strong> ajuda empreendedores a 
                  <strong> prepararem-se para rodadas de investimento</strong> e demonstrarem 
                  <strong> eficiência na aquisição de clientes</strong>. Lembre-se: 
                  <strong> scaling com CAC controlado</strong> é a chave para o crescimento sustentável.
                </p>
              </div>
            </div>
          </section>

          {/* Casos de Uso e Aplicações */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Aplicações Práticas da Calculadora de CAC Para Diferentes Negócios
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-non e">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>calculadora de CAC avançada</strong> é utilizada por diversos tipos de negócios 
                para <strong>otimização estratégica e tomada de decisão</strong>. Desde 
                <strong> startups em fase inicial</strong> que precisam validar seu modelo de aquisição até 
                <strong> empresas consolidadas</strong> buscando eficiência operacional, a ferramenta oferece 
                insights valiosos para <strong>maximizar o retorno sobre investimento em marketing</strong> 
                e <strong>vendas</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">🚀 Para Startups SaaS</h4>
                  <ul className="text-sm text-teal-700 dark:text-teal-400 space-y-1">
                    <li>• Calcule CAC para apresentar a investidores</li>
                    <li>• Simule diferentes cenários de growth</li>
                    <li>• Otimize mix de canais de aquisição</li>
                    <li>• Planeje contratações de equipe comercial</li>
                    <li>• Determine preços baseados em CAC payback</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">🛒 Para E-commerces</h4>
                  <ul className="text-sm text-cyan-700 dark:text-cyan-400 space-y-1">
                    <li>• Compare CAC por fonte de tráfego</li>
                    <li>• Otimize orçamento de marketing digital</li>
                    <li>• Calcule custo por cliente por categoria</li>
                    <li>• Simule impacto de campanhas sazonais</li>
                    <li>• Planeje estratégias de fidelização</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🏢 Para Empresas B2B</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Calcule CAC por persona de cliente</li>
                    <li>• Otimize processos de vendas complexas</li>
                    <li>• Determine eficiência de equipes comerciais</li>
                    <li>• Planeje investimento em eventos e feiras</li>
                    <li>• Analise custo por lead qualificado</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">📊 Para Gestores de Marketing</h4>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• Justifique orçamentos com dados de CAC</li>
                    <li>• Compare performance entre agências</li>
                    <li>• Otimize mix de mídia baseado em CAC</li>
                    <li>• Calcule ROI de campanhas específicas</li>
                    <li>• Planeje testes A/B com impacto no CAC</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Para Negócios e Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/roi-marketing" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de ROI Marketing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule retorno sobre investimento em campanhas</p>
              </div>
            </Link>
            <Link href="/investimentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Investimentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros compostos e projeções</p>
              </div>
            </Link>
            <Link href="/impostos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Impostos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule IRPF, Simples Nacional e tributos</p>
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