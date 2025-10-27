import { Cookie, Settings, Shield, Eye, Clock, Users } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';

export const metadata = {
  title: 'Política de Cookies - Utiliverse | Controle Sua Privacidade',
  description: 'Política de Cookies do Utiliverse. Saiba como usamos cookies para melhorar sua experiência, garantir segurança e otimizar nossas ferramentas online gratuitas.',
  keywords: 'política de cookies, privacidade Utiliverse, cookies essenciais, analytics, Google AdSense, controle de cookies, LGPD',
};

export default function CookiesPage() {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <Cookie className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Entenda como utilizamos cookies para melhorar sua experiência no Utiliverse
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
            
            {/* Introdução Expandida */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  O que são Cookies e Por que os Utilizamos?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">
                    🍪 O que são Cookies?
                  </h3>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. 
                    Eles são amplamente utilizados para lembrar suas preferências, melhorar a performance e fornecer 
                    uma experiência personalizada.
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    🎯 Por que usamos Cookies?
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    No Utiliverse, usamos cookies para garantir o funcionamento adequado das ferramentas, 
                    lembrar suas configurações preferidas (como tema escuro/claro) e entender como nossos 
                    usuários interagem com as ferramentas para continuarmos melhorando.
                  </p>
                </div>
              </div>
            </section>

            {/* Tipos de Cookies Expandidos */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Tipos de Cookies que Utilizamos no Utiliverse
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                      Cookies Essenciais
                    </h3>
                  </div>
                  <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Funcionamento básico das ferramentas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Navegação entre páginas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Preferências de tema (dark/light)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Configurações de ferramentas salvas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-semibold">Não podem ser desativados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <div className="flex items-center mb-3">
                    <Eye className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-900 dark:text-green-100">
                      Cookies de Analytics
                    </h3>
                  </div>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Análise de uso das ferramentas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Identificação de ferramentas populares</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Melhoria contínua do site</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Dados completamente anônimos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-semibold">Podem ser desativados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                      Cookies de Funcionalidade
                    </h3>
                  </div>
                  <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Lembrar configurações de ferramentas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Preferências de idioma</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Personalização de interface</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Experiência do usuário aprimorada</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-semibold">Opcionais</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cookies de Terceiros Expandido */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800 mb-8">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4 text-lg">
                  🎯 Cookies de Terceiros no Utiliverse
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-4">
                  Utilizamos serviços confiáveis de terceiros que podem armazenar cookies para fornecer funcionalidades específicas:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Google Analytics</h4>
                    <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                      <li>• Análise de tráfego e comportamento</li>
                      <li>• Métricas de uso das ferramentas</li>
                      <li>• Otimização de performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Google AdSense</h4>
                    <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                      <li>• Exibição de anúncios relevantes</li>
                      <li>• Manutenção da gratuidade do site</li>
                      <li>• Anúncios não intrusivos</li>
                    </ul>
                  </div>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm mt-4">
                  <strong>Nota:</strong> Cada serviço de terceiros possui sua própria política de privacidade e cookies.
                </p>
              </div>
            </section>

            {/* Controle de Cookies Expandido */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Controle Total dos Seus Cookies
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    No Utiliverse
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Oferecemos controle granular sobre os cookies que não são essenciais para o funcionamento básico das ferramentas.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Cookies Essenciais</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Necessários para as ferramentas funcionarem
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Sempre Ativo
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Analytics</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Nos ajuda a melhorar as ferramentas
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Funcionalidade</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Lembrar configurações e preferências
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                      Salvar Minhas Preferências
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    No Seu Navegador
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Você também pode controlar cookies diretamente nas configurações do seu navegador:
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Google Chrome</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Configurações → Privacidade e segurança → Cookies e outros dados do site
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Mozilla Firefox</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Opções → Privacidade & Segurança → Cookies e Dados do Site
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Safari</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Preferências → Privacidade → Gerenciar dados do site
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Microsoft Edge</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Configurações → Cookies e permissões do site → Gerenciar e excluir cookies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Duração e Armazenamento */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Duração e Armazenamento de Cookies
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    ⏱️ Tipos por Duração
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Cookies de Sessão:</strong> Expira quando você fecha o navegador
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Cookies Persistentes:</strong> Permanecem por um período específico
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    💾 Prazos Específicos
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>• Preferências de tema: <strong>1 ano</strong></li>
                    <li>• Configurações de ferramentas: <strong>30 dias</strong></li>
                    <li>• Cookies de analytics: <strong>2 anos</strong></li>
                    <li>• Cookies de funcionalidade: <strong>1 ano</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conformidade Legal */}
            <section className="mb-12">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3 text-lg">
                  ⚖️ Conformidade com a LGPD
                </h3>
                <p className="text-green-800 dark:text-green-200 mb-4">
                  O Utiliverse está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). 
                  Respeitamos sua privacidade e garantimos:
                </p>
                <ul className="text-green-800 dark:text-green-200 space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Transparência:</strong> Informamos claramente sobre o uso de cookies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Consentimento:</strong> Você controla quais cookies aceita</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Finalidade:</strong> Usamos cookies apenas para fins legítimos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Segurança:</strong> Protegemos seus dados com medidas adequadas</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Atualizações e Contato */}
            <section className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🔄 Atualizações desta Política
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças em nossas 
                  práticas ou por motivos operacionais, legais ou regulatórios. Alterações significativas serão 
                  comunicadas através de um aviso em destaque no site.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  💬 Dúvidas e Exercício de Direitos
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Se você tiver dúvidas sobre esta Política de Cookies ou desejar exercer seus direitos 
                  sob a LGPD (acesso, correção, exclusão, etc.), entre em contato conosco através da 
                  nossa <a href="/contato" className="text-amber-700 dark:text-amber-300 hover:underline font-medium">página de contato</a>.
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