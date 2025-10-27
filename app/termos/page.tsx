import { FileText, AlertTriangle, CheckCircle, Ban, Shield, Copyright} from 'lucide-react';
import AdSense from '@/components/ui/AdSense';

export const metadata = {
  title: 'Termos de Uso - Utiliverse | Condições de Uso das Ferramentas Online',
  description: 'Termos e condições de uso do Utiliverse. Conheça as regras, direitos e responsabilidades para uso de nossas ferramentas online gratuitas.',
  keywords: 'termos de uso Utiliverse, condições de uso, política de uso, ferramentas online, termos e condições',
};

export default function TermsPage() {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Condições gerais para uso das ferramentas do Utiliverse
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Última atualização: {lastUpdate}
          </div>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introdução */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Bem-vindo ao Utiliverse
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Estes Termos de Uso regulamentam a utilização do site <strong>Utiliverse</strong> 
                e de todas as suas ferramentas online gratuitas. Ao acessar e usar nosso site, 
                você concorda expressamente com estes termos e com nossa 
                <a href="/privacidade" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">Política de Privacidade</a>.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  📝 Definições Importantes
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li><strong>Utiliverse:</strong> Plataforma online de ferramentas gratuitas</li>
                  <li><strong>Usuário:</strong> Qualquer pessoa que acesse ou use o site</li>
                  <li><strong>Ferramentas:</strong> Calculadoras, conversores e utilitários disponíveis</li>
                  <li><strong>Conteúdo:</strong> Textos, imagens, código e funcionalidades do site</li>
                </ul>
              </div>
            </section>

            {/* Aceitação dos Termos */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Aceitação dos Termos
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                    ✅ Ao usar o Utiliverse você concorda com:
                  </h3>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Estes Termos de Uso na íntegra</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Nossa Política de Privacidade</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Política de Cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Leis e regulamentos aplicáveis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">
                    ❌ Se não concordar:
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Não acesse nosso site</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Não use nossas ferramentas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Encerre imediatamente o uso</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Uso Permitido Expandido */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Uso Permitido e Licenças
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🎯 Uso Pessoal e Educacional
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Uso individual:</strong> Para necessidades pessoais e domésticas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Educação:</strong> Em instituições de ensino e projetos acadêmicos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Profissional:</strong> Cálculos internos em empresas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Compartilhamento:</strong> Resultados não protegidos por direitos autorais</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    📊 Uso Comercial Limitado
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Pequenas empresas:</strong> Uso interno das ferramentas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Freelancers:</strong> Para projetos clientes (com atribuição)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Startups:</strong> Prototipagem e cálculos iniciais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Consultoria:</strong> Como ferramenta auxiliar em serviços</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Uso Proibido Expandido */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Ban className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Condutas Expressamente Proibidas
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-4">
                    🚫 Atividades Maliciosas
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Scraping automático:</strong> Coleta automatizada de dados</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Ataques DDoS:</strong> Sobrecarregar nossos servidores</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Injeção de código:</strong> Tentativas de vulnerabilidade</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Spam:</strong> Uso excessivo que prejudica outros usuários</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-4">
                    ⚖️ Violações Legais e Éticas
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Atividades ilegais:</strong> Qualquer uso criminoso</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Engano:</strong> Representação falsa ou fraudulenta</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Conteúdo ofensivo:</strong> Uso para discriminação ou ódio</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Propriedade intelectual:</strong> Violação de direitos autorais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Propriedade Intelectual */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Copyright className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Propriedade Intelectual e Direitos Autorais
                </h2>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  📄 Direitos do Utiliverse
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">✅ O que é protegido:</h4>
                    <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                      <li>• Código-fonte e algoritmos</li>
                      <li>• Design e interface do usuário</li>
                      <li>• Conteúdo textual e imagens</li>
                      <li>• Nome e marca Utiliverse</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">✅ O que você pode fazer:</h4>
                    <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                      <li>• Usar as ferramentas gratuitamente</li>
                      <li>• Compartilhar resultados dos cálculos</li>
                      <li>• Linkar para nossas ferramentas</li>
                      <li>• Usar em projetos educacionais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Isenção de Responsabilidade Expandida */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Isenção de Responsabilidade e Limitações
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                    ⚠️ Natureza das Ferramentas
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    O Utiliverse fornece ferramentas <strong>COMO ESTÃO</strong> e <strong>CONFORME DISPONÍVEL</strong> , 
                    sem garantias de qualquer tipo. Embora nos esforcemos para máxima precisão, 
                    não garantimos resultados 100% livres de erro.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">
                      🏥 Para Decisões Críticas
                    </h4>
                    <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-2">
                      <li>• <strong>Saúde:</strong> Consulte médicos para decisões médicas</li>
                      <li>• <strong>Finanças:</strong> Procure consultores financeiros</li>
                      <li>• <strong>Jurídico:</strong> Busque advogados para questões legais</li>
                      <li>• <strong>Engenharia:</strong> Use ferramentas certificadas</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">
                      💰 Limitação de Danos
                    </h4>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                      <li>• Não nos responsabilizamos por danos indiretos</li>
                      <li>• Não cobrimos perdas de lucro ou dados</li>
                      <li>• Limitação a valor simbólico de R$ 100,00</li>
                      <li>• Isenção em caso de força maior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacidade e Dados */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Privacidade e Proteção de Dados
                </h2>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-4">
                  🔒 Conformidade com a LGPD
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">O que coletamos:</h4>
                    <ul className="text-green-800 dark:text-green-200 space-y-1">
                      <li>• Dados de uso (anônimos)</li>
                      <li>• Preferências de tema</li>
                      <li>• Configurações de ferramentas</li>
                      <li>• Informações técnicas do navegador</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Seus direitos:</h4>
                    <ul className="text-green-800 dark:text-green-200 space-y-1">
                      <li>• Acesso aos seus dados</li>
                      <li>• Correção de informações</li>
                      <li>• Exclusão de dados pessoais</li>
                      <li>• Revogação de consentimento</li>
                    </ul>
                  </div>
                </div>
                <p className="text-green-800 dark:text-green-200 text-sm mt-4">
                  Consulte nossa <a href="/privacidade" className="font-semibold hover:underline">Política de Privacidade</a> completa para mais detalhes.
                </p>
              </div>
            </section>

            {/* Disposições Finais */}
            <section className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  ⚖️ Disposições Finais
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Alterações dos Termos</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                      Alterações significativas serão comunicadas com 30 dias de antecedência.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Legislação Aplicável</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Estes termos são regidos pelas leis brasileiras. 
                      Foro da comarca de São Paulo/SP para questões judiciais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  💬 Contato e Dúvidas
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Para questions sobre estes Termos de Uso, entre em contato através da nossa 
                  <a href="/contato" className="font-semibold hover:underline mx-1">página de contato</a>.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}