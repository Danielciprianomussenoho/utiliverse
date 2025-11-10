import { Calculator, FileText, TrendingDown, Building, User, Shield, PieChart, Target, DollarSign, AlertCircle } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import TaxSimulator from '@/components/tools/TaxSimulator';

export const metadata = {
  title: 'Simulador de Impostos 2024 - Calcule IRPF, Simples Nacional e Mais | Utiliverse',
  description: 'Simule impostos federais, estaduais e municipais. Calcule IRPF, Simples Nacional, MEI, PJ e impostos sobre consumo. Planejamento tributário gratuito.',
  keywords: 'simulador impostos, calculadora IRPF, Simples Nacional, calcular imposto de renda, MEI impostos, cálculo tributos, planejamento tributário, DARF, carnê leão, imposto pessoa jurídica',
};

export default function ImpostosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Simulador de Impostos Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule impostos federais, estaduais e municipais. Simule IRPF, Simples Nacional, MEI e optimize seu planejamento tributário
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-orange-100 dark:border-orange-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Simulador Tributário Completo
            </h2>
          </div>
          <TaxSimulator />
        </section>

        {/* Conteúdo Textual Expandido para SEO */}
        <div className="space-y-8 mb-12">
          {/* Introdução aos Impostos */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Entendendo o Sistema Tributário Brasileiro
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>sistema tributário brasileiro</strong> é considerado um dos mais complexos do mundo, com mais de 90 diferentes 
                <strong> tributos federais, estaduais e municipais</strong>. Nosso <strong>simulador de impostos online</strong> foi desenvolvido 
                para ajudar contribuintes e empresas a compreenderem suas obrigações fiscais e realizarem um <strong>planejamento tributário eficiente</strong>. 
                Através desta <strong>calculadora de impostos gratuita</strong>, você pode simular diferentes cenários e identificar oportunidades 
                de economia legal.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Funciona o Simulador de Impostos?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa <strong>ferramenta de cálculo tributário</strong> considera as principais variáveis do sistema fiscal brasileiro: 
                <strong> renda bruta anual</strong>, <strong>dependentes</strong>, <strong>despesas dedutíveis</strong> e 
                <strong> tipo de regime tributário</strong>. O algoritmo aplica as alíquotas vigentes da <strong>tabela progressiva do IRPF</strong> 
                e calcula automaticamente as deduções permitidas por lei, proporcionando uma <strong>simulação precisa do imposto devido</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <User className="w-5 h-5 text-orange-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Pessoa Física (PF)</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calcule seu <strong>Imposto de Renda Pessoa Física</strong>, simule restituições, planeje deduções com 
                    <strong> dependentes</strong>, <strong>saúde</strong> e <strong>educação</strong>. Ideal para <strong>assalariados</strong> e 
                    <strong> profissionais liberais</strong>.
                  </p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-red-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Pessoa Jurídica (PJ)</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Simule <strong>Simples Nacional</strong>, <strong>Lucro Presumido</strong> e <strong>Lucro Real</strong>. 
                    Compare regimes tributários e identifique o mais vantajoso para seu <strong>CNPJ</strong> e <strong>faturamento</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Principais Tributos */}
          <section className="bg-linear-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center mb-6">
              <PieChart className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Principais Tributos no Brasil e Como Calculá-los
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Utilizar um <strong>simulador de impostos preciso</strong> é fundamental para o <strong>planejamento financeiro pessoal e empresarial</strong>. 
                Conhecer os principais <strong>tributos federais, estaduais e municipais</strong> permite tomar decisões estratégicas e evitar 
                <strong> multas por recolhimento incorreto</strong>. Nossa <strong>calculadora de tributos</strong> abrange os impostos mais relevantes 
                para a maioria dos contribuintes brasileiros.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Tipos de Impostos Calculados pelo Simulador
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">IRPF - Pessoa Física</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <strong>Imposto de Renda</strong> sobre salários, aluguéis e investimentos. <strong>Tabela progressiva 2024</strong> 
                    com alíquotas de 0% a 27,5%. Deduções para dependentes e despesas médicas/educacionais.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Building className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800 dark:text-green-300">Simples Nacional</h3>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Regime unificado para <strong>MEI, ME e EPP</strong>. <strong>Faturamento até R$ 4,8 milhões</strong>. 
                    Calcula <strong>DAS</strong> mensal conforme anexo e atividade da empresa.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FileText className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-800 dark:text-purple-300">ICMS e ISS</h3>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-400">
                    <strong>ICMS</strong> estadual sobre circulação de mercadorias. <strong>ISS</strong> municipal sobre serviços. 
                    Alíquotas variam por estado/município e atividade.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Estratégias de Economia Tributária Legal
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Use todas as <strong>deduções permitidas do IRPF</strong>: dependentes, saúde, educação e previdência</li>
                <li>Planeje <strong>gastos dedutíveis</strong> ao longo do ano para otimizar sua declaração</li>
                <li>Compare <strong>regimes tributários para PJ</strong> anualmente conforme seu faturamento</li>
                <li>Considere <strong>investimentos isentos ou com tributação diferenciada</strong></li>
                <li>Mantenha <strong>documentação organizada</strong> de todas as despesas dedutíveis</li>
                <li>Use nosso <strong>simulador de impostos regularmente</strong> para acompanhar mudanças na legislação</li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                  ⚠️ Atenção: Evite Multas e Problemas Fiscais
                </h4>
                <p className="text-yellow-700 dark:text-yellow-400">
                  Nosso <strong>simulador de impostos</strong> fornece estimativas para <strong>planejamento e educação fiscal</strong>. 
                  Para <strong>declarações oficiais e obrigações legais</strong>, consulte sempre um <strong>contador profissional</strong> 
                  ou <strong>especialista tributário</strong>. O cálculo preciso deve considerar situações específicas não abrangidas 
                  por simuladores genéricos.
                </p>
              </div>
            </div>
          </section>

          {/* Benefícios do Planejamento */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <TrendingDown className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Benefícios do Planejamento Tributário com Nossa Calculadora
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Utilizar regularmente nosso <strong>simulador de impostos online gratuito</strong> pode resultar em economias significativas 
                e maior tranquilidade fiscal. O <strong>planejamento tributário antecipado</strong> permite distribuir despesas ao longo do ano, 
                aproveitar <strong>deduções legais</strong> e evitar surpresas na hora de preencher sua <strong>declaração do IRPF</strong> 
                ou calcular os <strong>tributos da sua empresa</strong>.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Para <strong>pessoas físicas</strong>, o simulador ajuda a entender como diferentes fontes de renda impactam o 
                <strong> imposto devido</strong> e como <strong>despesas com saúde e educação</strong> podem reduzir sua carga tributária. 
                Para <strong>empresários e profissionais liberais</strong>, a ferramenta permite comparar <strong>regimes de tributação</strong> 
                e escolher o mais vantajoso conforme o <strong>faturamento e atividade</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Para Assalariados</h4>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• Calcule retenção na fonte mensal</li>
                    <li>• Simule restituição ou pagamento adicional</li>
                    <li>• Planeje despesas dedutíveis</li>
                    <li>• Entenda a tabela progressiva</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">✅ Para Empresários</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Compare Simples Nacional vs Lucro Presumido</li>
                    <li>• Calcule tributos sobre faturamento</li>
                    <li>• Planeje pró-labore e distribuição de lucros</li>
                    <li>• Simule mudanças de regime</li>
                  </ul>
                </div>
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
            <Link href="/investimentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Investimentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros compostos e projeções de renda</p>
              </div>
            </Link>
            <Link href="/emprestimos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Empréstimos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule parcelas de empréstimos pessoais</p>
              </div>
            </Link>
            <Link href="/financiamentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Financiamentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule financiamentos de imóveis e veículos</p>
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