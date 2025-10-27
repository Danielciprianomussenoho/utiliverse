import { Shield, Eye, Cookie, User, Lock, Mail } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';

export const metadata = {
  title: 'Política de Privacidade - Utiliverse | Proteção de Dados e LGPD',
  description: 'Política de Privacidade do Utiliverse. Conheça como protegemos seus dados, seus direitos LGPD e nossas práticas de segurança de informações.',
  keywords: 'política de privacidade Utiliverse, LGPD, proteção de dados, privacidade online, direitos do usuário, segurança de dados',
};

export default function PrivacyPage() {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Compromisso com a proteção e transparência no tratamento de seus dados
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
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nosso Compromisso com Sua Privacidade
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                O <strong>Utiliverse</strong> leva sua privacidade a sério. Esta política detalha 
                como coletamos, usamos, protegemos e respeitamos seus dados pessoais, em total 
                conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                  🎯 Princípios Fundamentais
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-green-800 dark:text-green-200 space-y-2">
                    <li>• <strong>Transparência:</strong> Informações claras sobre uso de dados</li>
                    <li>• <strong>Finalidade:</strong> Coleta apenas para fins específicos</li>
                    <li>• <strong>Adequação:</strong> Dados compatíveis com as finalidades</li>
                  </ul>
                  <ul className="text-green-800 dark:text-green-200 space-y-2">
                    <li>• <strong>Segurança:</strong> Proteção contra acessos não autorizados</li>
                    <li>• <strong>Prevenção:</strong> Medidas contra danos e vazamentos</li>
                    <li>• <strong>Não discriminação:</strong> Uso ético dos dados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Coleta de Informações Expandida */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Quais Dados Coletamos e Por Quê
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    📊 Dados Coletados Automaticamente
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Dados de uso:</strong> Ferramentas mais utilizadas, tempo de sessão, páginas visitadas
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Informações técnicas:</strong> Navegador, dispositivo, resolução, sistema operacional
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Dados de conexão:</strong> Endereço IP, provedor, localização aproximada
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Preferências:</strong> Tema (dark/light), configurações salvas
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🎯 Finalidades da Coleta
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Funcionamento:</strong> Garantir operação adequada das ferramentas
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Melhoria contínua:</strong> Otimizar performance e experiência
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Segurança:</strong> Prevenir fraudes e abusos
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Personalização:</strong> Adaptar conteúdo às suas necessidades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies Expandido */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Uso de Cookies e Tecnologias Similares
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-4">
                    🍪 Tipos de Cookies Utilizados
                  </h3>
                  <ul className="text-amber-800 dark:text-amber-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Essenciais:</strong> Funcionamento básico do site (obrigatórios)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Preferências:</strong> Lembrar tema e configurações
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Analíticos:</strong> Métricas de uso (Google Analytics)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Publicitários:</strong> Anúncios relevantes (Google AdSense)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-4">
                    ⚙️ Controle de Cookies
                  </h3>
                  <ul className="text-amber-800 dark:text-amber-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Configurações do navegador:</strong> Bloqueio total ou seletivo
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Painel de preferências:</strong> Controle granular no site
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Exclusão:</strong> Limpeza periódica dos cookies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        Consulte nossa <a href="/cookies" className="font-semibold hover:underline">Política de Cookies</a> completa
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Direitos do Usuário Expandido */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Seus Direitos na LGPD
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">
                    📋 Direitos Fundamentais
                  </h3>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Correção:</strong> Retificar dados incompletos ou desatualizados
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Anonimização/bloqueio/eliminação:</strong> Limitar uso ou excluir dados
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Portabilidade:</strong> Obter cópia dos dados em formato estruturado
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">
                    🔄 Direitos Adicionais
                  </h3>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos dados
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Revogação do consentimento:</strong> Retirar autorização a qualquer momento
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Revisão de decisões automatizadas:</strong> Solicitar intervenção humana
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Oposição ao tratamento:</strong> Discordar de finalidades específicas
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compartilhamento e Segurança */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Compartilhamento e Segurança de Dados
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-4">
                    🤝 Compartilhamento com Terceiros
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Google Analytics:</strong> Métricas de uso (dados anonimizados)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Google AdSense:</strong> Exibição de anúncios contextualizados
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Provedores de hospedagem:</strong> Infraestrutura técnica
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Requisitos legais:</strong> Cumprimento de obrigações legais
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-4">
                    🔒 Medidas de Segurança
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Criptografia HTTPS:</strong> Dados transmitidos de forma segura
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Anonimização:</strong> Dados pessoais transformados em anônimos
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Acesso restrito:</strong> Apenas pessoal autorizado
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <div>
                        <strong>Monitoramento contínuo:</strong> Detecção de atividades suspeitas
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Retenção e Contato */}
            <section className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  ⏱️ Prazo de Retenção de Dados
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Dados mantidos:</h4>
                    <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Cookies de sessão: até fechar o navegador</li>
                      <li>• Preferências: 1 ano</li>
                      <li>• Dados analíticos: 2 anos</li>
                      <li>• Logs de acesso: 6 meses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Critérios de exclusão:</h4>
                    <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Finalidade cumprida</li>
                      <li>• Solicitação do usuário</li>
                      <li>• Prazo legal expirado</li>
                      <li>• Dados desnecessários</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                  💬 Exercendo Seus Direitos
                </h3>
                <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                  Para exercer qualquer um dos seus direitos LGPD ou esclarecer dúvidas sobre esta política:
                </p>
                <div className="flex items-center text-green-800 dark:text-green-200 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Entre em contato através da nossa <a href="/contato" className="font-semibold hover:underline">página de contato</a></span>
                </div>
                <p className="text-green-800 dark:text-green-200 text-xs mt-2">
                  Responderemos em até 15 dias úteis, conforme exigido pela LGPD.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  🔄 Alterações nesta Política
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Esta Política de Privacidade pode ser atualizada periodicamente. 
                  Alterações significativas serão comunicadas com destaque no site. 
                  O uso continuado do Utiliverse após mudanças constitui aceitação da nova política.
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