import { Calendar, Clock, AlertTriangle, User, Briefcase, Plane } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import DataCalculator from '@/components/tools/DataCalculator';

export const metadata = {
  title: 'Calculadora de Datas Online - Adicione ou Subtraia Dias | Utiliverse',
  description: 'Calcule diferenças entre datas, adicione ou subtraia dias, meses e anos. Ferramenta essencial para planejamento e prazos.',
  keywords: 'calculadora datas, diferença entre datas, adicionar dias, subtrair dias, calendário, utiliverse',
};

export default function DataCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de Datas Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule diferenças entre datas e adicione ou subtraia dias, semanas, meses e anos com precisão
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calcule suas Datas Agora
          </h2>
          <DataCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Calculadora de Datas - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O que é a Calculadora de Datas e Como Usar
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A <strong>calculadora de datas</strong> é uma ferramenta essencial para planejamento pessoal e profissional que permite realizar operações precisas com datas. Desenvolvida para simplificar cálculos complexos, ela considera automaticamente anos bissextos, meses com diferentes quantidades de dias e variações calendárias.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Usar Para Diferentes Perfis
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Uso Pessoal</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para planejar férias, calcular idades, verificar prazos de documentos e organizar eventos pessoais. Perfeito para controle de datas importantes.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Profissionais</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essencial para calcular prazos de projetos, vencimentos de contratos, períodos de garantia e datas de entrega em ambientes corporativos.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Plane className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Planejamento</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Excelente para viagens, eventos especiais, metas de longo prazo e qualquer situação que requeira cálculo preciso de datas futuras ou passadas.
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
                Limitações e Considerações Importantes
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                O que a Calculadora de Datas Não Considera
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Feriados e fins de semana:</strong> Cálculos são baseados em dias corridos</li>
                <li><strong>Fusos horários:</strong> Não considera diferenças de horário entre regiões</li>
                <li><strong>Horários específicos:</strong> Trabalha apenas com datas, não horas/minutos</li>
                <li><strong>Calendários alternativos:</strong> Usa exclusivamente o calendário gregoriano</li>
                <li><strong>Dias úteis:</strong> Não distingue entre dias de semana e finais de semana</li>
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
                      <strong>Esta ferramenta fornece cálculos para fins educacionais e de planejamento.</strong> Para fins legais, comerciais ou fiscais específicos, consulte sempre a legislação aplicável e profissionais qualificados. O Utiliverse não se responsabiliza por decisões tomadas com base nestes cálculos nem por eventuais diferenças em aplicações práticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Exemplos */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Exemplos Práticos - Cálculos de Datas
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Operação</th>
                  <th className="px-6 py-4 font-semibold">Data Inicial</th>
                  <th className="px-6 py-4 font-semibold">Parâmetro</th>
                  <th className="px-6 py-4 font-semibold">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Adicionar dias</td>
                  <td className="px-6 py-4">15/03/2024</td>
                  <td className="px-6 py-4">30 dias</td>
                  <td className="px-6 py-4">14/04/2024</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Subtrair meses</td>
                  <td className="px-6 py-4">25/06/2024</td>
                  <td className="px-6 py-4">2 meses</td>
                  <td className="px-6 py-4">25/04/2024</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Diferença entre datas</td>
                  <td className="px-6 py-4">01/01/2024 - 31/12/2024</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">365 dias (ano bissexto)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Adicionar ano</td>
                  <td className="px-6 py-4">29/02/2024</td>
                  <td className="px-6 py-4">1 ano</td>
                  <td className="px-6 py-4">28/02/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Cálculos Precisos de Datas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Planejamento Pessoal</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Para viagens, verifique a estação do ano desejada</li>
                <li>• Para eventos, confirme datas com antecedência</li>
                <li>• Para medicamentos, considere horários específicos</li>
                <li>• Para documentos, verifique prazos legais</li>
                <li>• Para metas, estabeleça marcos realistas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Uso Profissional</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Para projetos, considere dias úteis</li>
                <li>• Para contratos, verifique feriados</li>
                <li>• Para entregas, inclua margem de segurança</li>
                <li>• Para reuniões, confirme disponibilidade</li>
                <li>• Para prazos, documente todas as datas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Tempo no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/idade" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Idade</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule idade exata em anos, meses e dias</p>
              </div>
            </Link>
            <Link 
              href="/tempo" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Tempo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta entre horas, minutos e segundos</p>
              </div>
            </Link>
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros simples e compostos</p>
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