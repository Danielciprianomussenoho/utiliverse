import { Lock, Shield, Key, Cpu, Database, Smartphone } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import PasswordGenerator from '@/components/tools/PasswordGenerator';

export const metadata = {
  title: 'Gerador de Senhas Seguras Online - Crie Senhas Fortes e Criptografadas | Utiliverse',
  description: 'Gerador de senhas seguras e criptograficamente fortes. Crie senhas complexas com letras, números, símbolos e personalização avançada. Proteja suas contas online contra hackers e vazamentos.',
  keywords: 'gerador senhas, senhas seguras, criar senha forte, gerador senha online, segurança digital, senha criptografada, password generator',
};

export default function PasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gerador de Senhas Seguras
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Crie senhas criptograficamente fortes e proteja suas contas online contra ameaças digitais
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Generator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Gerador de Senhas Avançado
          </h2>
          <PasswordGenerator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Importância da Segurança de Senhas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Importância Crucial das Senhas Seguras na Era Digital
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Em um mundo cada vez mais digital, as senhas são a primeira linha de defesa contra 
                acessos não autorizados e violações de dados. Uma senha forte pode ser a diferença 
                entre manter suas informações seguras e sofrer prejuízos financeiros e de reputação.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Riscos Reais de Senhas Fracas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ataques Comuns</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Força bruta:</strong> Tentativas sistemáticas de todas as combinações</li>
                    <li><strong>Dicionário:</strong> Uso de palavras comuns e variações</li>
                    <li><strong>Engenharia social:</strong> Manipulação para obter informações</li>
                    <li><strong>Phishing:</strong> Sites falsos para capturar credenciais</li>
                    <li><strong>Vazamentos de dados:</strong> Reutilização de senhas vazadas</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Consequências</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Roubo de identidade:</strong> Uso de dados pessoais fraudulentamente</li>
                    <li><strong>Perda financeira:</strong> Acesso a contas bancárias e cartões</li>
                    <li><strong>Extorsão:</strong> Sequestro de dados e chantagem</li>
                    <li><strong>Danos à reputação:</strong> Acesso a redes sociais e email</li>
                    <li><strong>Violência digital:</strong> Stalking e assédio online</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Estratégias Avançadas de Segurança */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Key className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Estratégias Avançadas de Segurança Digital
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Além das Senhas: Proteção em Múltiplas Camadas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Autenticação Multifator</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>2FA por SMS:</strong> Código enviado via mensagem de texto</li>
                    <li><strong>Authenticator Apps:</strong> Google Authenticator, Authy, Microsoft Authenticator</li>
                    <li><strong>Biometria:</strong> Impressão digital, reconhecimento facial</li>
                    <li><strong>Chaves de segurança:</strong> YubiKey, Titan Security Key</li>
                    <li><strong>Backup codes:</strong> Códigos de emergência para acesso</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Gerenciamento Seguro</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Password Managers:</strong> LastPass, 1Password, Bitwarden</li>
                    <li><strong>Armazenamento offline:</strong> Cofres digitais desconectados</li>
                    <li><strong>Backup seguro:</strong> Cópias em locais físicos protegidos</li>
                    <li><strong>Atualizações regulares:</strong> Rotação estratégica de senhas</li>
                    <li><strong>Monitoramento:</strong> Alertas de vazamentos e acessos</li>
                  </ul>
                </div>
              </div>

              {/* Dicas de Ouro */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                      Dicas de Ouro para Segurança Máxima
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                      🔒 <strong>Regra dos 16+:</strong> Senhas com 16+ caracteres são virtualmente inquebráveis por força bruta.<br/>
                      🔒 <strong>Exclusividade:</strong> Nunca reuse senhas entre serviços diferentes.<br/>
                      🔒 <strong>Frase de passe:</strong> Combine 4-6 palavras aleatórias para senhas memoráveis e seguras.<br/>
                      🔒 <strong>Verificação proativa:</strong> Use Have I Been Pwned? regularmente para verificar vazamentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Tempo de Quebra Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tempo Estimado para Quebra de Senhas por Ataque de Força Bruta
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Comprimento</th>
                  <th className="px-6 py-4 font-semibold">Complexidade</th>
                  <th className="px-6 py-4 font-semibold">Combinações Possíveis</th>
                  <th className="px-6 py-4 font-semibold">Tempo de Quebra*</th>
                  <th className="px-6 py-4 font-semibold">Nível de Segurança</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">8 caracteres</td>
                  <td className="px-6 py-4">Apenas letras minúsculas</td>
                  <td className="px-6 py-4">208 bilhões</td>
                  <td className="px-6 py-4">Instantâneo</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded text-xs">Muito Fraca</span></td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">8 caracteres</td>
                  <td className="px-6 py-4">Misturado (A-Z, a-z, 0-9)</td>
                  <td className="px-6 py-4">218 trilhões</td>
                  <td className="px-6 py-4">2-3 horas</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded text-xs">Fraca</span></td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">12 caracteres</td>
                  <td className="px-6 py-4">Misturado (A-Z, a-z, 0-9)</td>
                  <td className="px-6 py-4">3,2 quintilhões</td>
                  <td className="px-6 py-4">2 séculos</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Forte</span></td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">16 caracteres</td>
                  <td className="px-6 py-4">Completo (A-Z, a-z, 0-9, símbolos)</td>
                  <td className="px-6 py-4">6,1 nonilhões</td>
                  <td className="px-6 py-4">15 trilhões de anos</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs">Muito Forte</span></td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">20 caracteres</td>
                  <td className="px-6 py-4">Completo (A-Z, a-z, 0-9, símbolos)</td>
                  <td className="px-6 py-4">1,2 undecilhões</td>
                  <td className="px-6 py-4">Incalculável</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs">Extrema</span></td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              * Baseado em ataques com hardware moderno processando 1 bilhão de tentativas por segundo
            </p>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Segurança no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/contador" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-red-300 dark:hover:border-red-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Contador de Palavras</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analise textos e conteúdo</p>
              </div>
            </Link>
            <Link 
              href="/editor-texto" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-red-300 dark:hover:border-red-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Editor de Texto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Edite e formate texto</p>
              </div>
            </Link>
            <Link 
              href="/unidades" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-red-300 dark:hover:border-red-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <Cpu className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Unidades</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta medidas</p>
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