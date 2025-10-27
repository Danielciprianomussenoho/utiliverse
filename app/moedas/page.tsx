import { DollarSign, TrendingUp, Calculator, History, Shield} from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import CurrencyConverter from '@/components/tools/CurrencyConverter';

export const metadata = {
  title: 'Conversor de Moedas Online - Cotação em Tempo Real | Utiliverse',
  description: 'Conversor de moedas gratuito com cotações atualizadas. Converta entre Real, Dólar, Euro, Libra e +150 moedas. Ferramenta essencial para viagens, negócios e investimentos.',
  keywords: 'conversor moedas, cotação dólar, conversor real dólar, cambio moedas, conversor euro real, taxa câmbio, conversor online',
};

export default function CurrencyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Moedas Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta entre Real, Dólar, Euro e mais de 150 moedas com cotações atualizadas em tempo real
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conversor de Câmbio em Tempo Real
          </h2>
          <CurrencyConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Como Funcionam as Cotações - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Como Funcionam as Cotações de Moedas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As cotações de moedas são determinadas pelo mercado de câmbio internacional (Forex), 
                o maior mercado financeiro do mundo, com volume diário superior a US$ 6 trilhões. 
                As taxas de câmbio flutuam constantemente devido à interação entre oferta e demanda global.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Fatores que Influenciam as Cotações
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Fatores Econômicos</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Taxas de juros:</strong> Diferenças entre países afetam fluxos de capital</li>
                    <li><strong>Inflação:</strong> Países com inflação baixa tendem a ter moedas mais valorizadas</li>
                    <li><strong>Balança comercial:</strong> Superávits comerciais fortalecem a moeda</li>
                    <li><strong>Dívida pública:</strong> Níveis elevados podem desvalorizar a moeda</li>
                    <li><strong>PIB e crescimento econômico:</strong> Economias fortes atraem investimentos</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Fatores Políticos e Geopolíticos</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Estabilidade política:</strong> Incertezas políticas causam volatilidade</li>
                    <li><strong>Políticas monetárias:</strong> Decisões dos bancos centrais</li>
                    <li><strong>Relações internacionais:</strong> Acordos comerciais e diplomáticos</li>
                    <li><strong>Eventos globais:</strong> Crises, eleições, conflitos</li>
                    <li><strong>Especulação do mercado:</strong> Expectativas dos investidores</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Dicas e Aplicações Práticas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dicas Práticas para Conversão de Moedas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Para Diferentes Situações
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Viagens Internacionais</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Pesquise antecipadamente:</strong> Acompanhe a cotação semanas antes da viagem</li>
                    <li><strong>Diversifique o câmbio:</strong> Faça conversões em momentos diferentes</li>
                    <li><strong>Evite aeroportos:</strong> Taxas geralmente são menos favoráveis</li>
                    <li><strong>Cartões pré-pagos:</strong> Alternativa prática e segura</li>
                    <li><strong>Tenha moeda local:</strong> Para táxis, gorjetas e pequenas compras</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Investimentos e Negócios</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Hedge cambial:</strong> Proteja-se contra variações bruscas</li>
                    <li><strong>Acompanhe o mercado:</strong> Use gráficos e análises técnicas</li>
                    <li><strong>Considere custos:</strong> Taxas bancárias e spread cambial</li>
                    <li><strong>Diversificação:</strong> Exponha-se a diferentes moedas</li>
                    <li><strong>Horário de negociação:</strong> Mercado Forex opera 24h</li>
                  </ul>
                </div>
              </div>

              {/* Aviso Legal Reforçado */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                      Aviso Legal e Isenção de Responsabilidade
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                      <strong>As cotações fornecidas são para fins informativos e educacionais.</strong> Este conversor 
                      utiliza taxas de câmbio de referência que podem diferir das praticadas por instituições financeiras. 
                      Para transações reais, consulte sempre seu banco ou casa de câmbio. Não nos responsabilizamos por 
                      decisões financeiras baseadas nas informações aqui apresentadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Moedas Principais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Principais Moedas Globais
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Moeda</th>
                  <th className="px-6 py-4 font-semibold">Código</th>
                  <th className="px-6 py-4 font-semibold">Símbolo</th>
                  <th className="px-6 py-4 font-semibold">País/Região</th>
                  <th className="px-6 py-4 font-semibold">Importância</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Dólar Americano</td>
                  <td className="px-6 py-4">USD</td>
                  <td className="px-6 py-4">$</td>
                  <td className="px-6 py-4">Estados Unidos</td>
                  <td className="px-6 py-4">Moeda de reserva global</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Euro</td>
                  <td className="px-6 py-4">EUR</td>
                  <td className="px-6 py-4">€</td>
                  <td className="px-6 py-4">Zona do Euro</td>
                  <td className="px-6 py-4">2ª maior moeda de reserva</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Iene Japonês</td>
                  <td className="px-6 py-4">JPY</td>
                  <td className="px-6 py-4">¥</td>
                  <td className="px-6 py-4">Japão</td>
                  <td className="px-6 py-4">Moeda asiática importante</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Libra Esterlina</td>
                  <td className="px-6 py-4">GBP</td>
                  <td className="px-6 py-4">£</td>
                  <td className="px-6 py-4">Reino Unido</td>
                  <td className="px-6 py-4">Moeda histórica importante</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Yuan Chinês</td>
                  <td className="px-6 py-4">CNY</td>
                  <td className="px-6 py-4">¥</td>
                  <td className="px-6 py-4">China</td>
                  <td className="px-6 py-4">Crescimento em importância global</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Financeiras no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors hover:shadow-md"
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
              href="/porcentagem" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de %</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Porcentagens e descontos</p>
              </div>
            </Link>
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors hover:shadow-md"
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