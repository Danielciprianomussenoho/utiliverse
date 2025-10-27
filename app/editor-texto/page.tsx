import { FileText, Type, Download, Edit3, Shield, Zap, HelpCircle, Lightbulb } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import TextEditor from '@/components/tools/TextEditor';

export const metadata = {
  title: 'Editor de Texto Online - Edite e Formate Texto Gratuitamente | Utiliverse',
  description: 'Editor de texto online gratuito com contador de palavras, formatação e opções de exportação. Ferramenta completa para edição de texto no navegador.',
  keywords: 'editor texto online, contador palavras, formatação texto, exportar texto, utiliverse, editor markdown',
};

export default function TextEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Padronizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Editor de Texto Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Edite, formate e analise seu texto gratuitamente no navegador com recursos profissionais
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Editor Section */}
          <div className="lg:col-span-2">
            <section aria-labelledby="editor-title">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
                <h2 id="editor-title" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Editor de Texto Avançado
                </h2>
                <TextEditor />
              </div>
            </section>
          </div>

          {/* Sidebar - Quick Tips */}
          <div className="space-y-6">
            <section aria-labelledby="quick-tips-title" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 id="quick-tips-title" className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                Atalhos Rápidos
              </h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Ctrl+B</strong> - Texto em negrito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Ctrl+I</strong> - Texto em itálico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Ctrl+U</strong> - Texto sublinhado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Ctrl+S</strong> - Salvar automaticamente</span>
                </li>
              </ul>
            </section>

            <section aria-labelledby="related-tools-title" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 id="related-tools-title" className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Ferramentas Relacionadas
              </h2>
              <div className="space-y-3">
                <Link 
                  href="/contador" 
                  className="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                    <Type className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Contador de Palavras</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Conte palavras e caracteres</p>
                  </div>
                </Link>
                <Link 
                  href="/senhas" 
                  className="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
                    <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Gerador de Senhas</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Crie senhas seguras</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Recursos do Editor - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Edit3 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recursos Completos do Editor de Texto
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nosso <strong>editor de texto online</strong> oferece uma suite completa de ferramentas profissionais 
                para todas as suas necessidades de escrita. Desenvolvido para ser intuitivo e poderoso, 
                permite que você crie, edite e formate documentos diretamente no navegador.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Funcionalidades Avançadas para Diferentes Usuários
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Type className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Estudantes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para trabalhos acadêmicos, redações e anotações. Controle de palavras ajuda a cumprir 
                    limites de trabalhos e o salvamento automático garante que nada seja perdido.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FileText className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Profissionais</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfeito para relatórios, documentação e comunicação empresarial. Exporte em múltiplos 
                    formatos e use as ferramentas de formatação para documentos profissionais.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Edit3 className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Escritores</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ferramentas essenciais para escritores criativos. Estatísticas detalhadas, 
                    controle de tempo de leitura e formatação básica para focar na escrita.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Formatos e Compatibilidade */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Download className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Formatos Suportados e Compatibilidade
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Suportamos uma ampla variedade de formatos de arquivo para atender todas as suas necessidades 
                de importação e exportação. Todos os processamentos são feitos localmente, garantindo 
                velocidade e segurança.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Importação</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">Texto Simples</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded font-mono">
                        .TXT
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Importe arquivos de texto simples mantendo a formatação básica e quebras de linha.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Exportação</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">Documento PDF</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded font-mono">
                        .PDF
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">Documento Word</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded font-mono">
                        .DOC
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">Texto Formatado</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded font-mono">
                        .RTF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacidade e Segurança */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Privacidade e Segurança dos Seus Dados
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Processamento 100% Local
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Nenhum dado enviado para servidores:</strong> Todo processamento ocorre no seu navegador</li>
                <li><strong>Salvamento automático local:</strong> Seu texto é salvo apenas no seu dispositivo</li>
                <li><strong>Importação segura:</strong> Arquivos são lidos localmente sem upload</li>
                <li><strong>Exportação direta:</strong> Download gerado localmente sem intermediários</li>
                <li><strong>Cookies mínimos:</strong> Apenas para funcionalidades essenciais</li>
              </ul>

              {/* Aviso de Privacidade Destacado */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                      Garantia de Privacidade Total
                    </h4>
                    <p className="text-green-700 dark:text-green-400">
                      <strong>Seus textos nunca deixam seu computador.</strong> Todo o processamento - 
                      desde a edição até a exportação - é realizado localmente no seu navegador. 
                      Isso significa que documentos sensíveis, textos criativos e informações pessoais 
                      permanecem completamente privados e seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Estatísticas */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Estatísticas e Métricas de Texto
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Métrica</th>
                  <th className="px-6 py-4 font-semibold">Descrição</th>
                  <th className="px-6 py-4 font-semibold">Utilidade</th>
                  <th className="px-6 py-4 font-semibold">Valor Ideal*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Palavras</td>
                  <td className="px-6 py-4">Total de palavras no texto</td>
                  <td className="px-6 py-4">Controle de limites, artigos</td>
                  <td className="px-6 py-4">300-1000 (artigos)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Caracteres</td>
                  <td className="px-6 py-4">Total de caracteres incluindo espaços</td>
                  <td className="px-6 py-4">Redes sociais, meta descrições</td>
                  <td className="px-6 py-4">280 (Twitter)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Sem Espaços</td>
                  <td className="px-6 py-4">Caracteres excluindo espaços</td>
                  <td className="px-6 py-4">SEO, densidade keywords</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Parágrafos</td>
                  <td className="px-6 py-4">Blocos de texto separados</td>
                  <td className="px-6 py-4">Estrutura e legibilidade</td>
                  <td className="px-6 py-4">3-5 por 500 palavras</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Tempo de Leitura</td>
                  <td className="px-6 py-4">Estimativa em minutos (200ppm)</td>
                  <td className="px-6 py-4">Engajamento do leitor</td>
                  <td className="px-6 py-4">3-7 min (ideal web)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              * Valores de referência para diferentes tipos de conteúdo
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-title" className="mb-12">
          <h2 id="faq-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Perguntas Frequentes sobre o Editor
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                Meu texto é salvo automaticamente?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Sim! O editor salva automaticamente seu texto no armazenamento local do seu navegador. 
                Se você fechar a página e voltar depois, seu texto estará lá. Para backup adicional, 
                recomendamos exportar periodicamente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                Posso usar formatação avançada?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Oferecemos formatação básica com tags HTML (negrito, itálico, sublinhado). Para 
                formatação mais avançada, exporte para DOC ou RTF e use um editor como Word ou LibreOffice.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                Há limite de tamanho para o texto?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                O limite prático é a capacidade do seu navegador (normalmente 5-10MB). Para textos 
                muito longos, recomendamos dividir em vários documentos ou usar um editor especializado.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                Meus dados são realmente privados?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Absolutamente! Todo processamento é feito localmente no seu dispositivo. Seus textos 
                nunca são enviados para nossos servidores. A privacidade é uma das nossas principais prioridades.
              </p>
            </div>
          </div>
        </section>

        {/* Dicas de Escrita */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas Profissionais para Escrever Melhor
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Técnicas de Escrita
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Escreva primeiro, edite depois:</strong> Não interrompa o fluxo criativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Use parágrafos curtos:</strong> Melhoram a legibilidade em 47%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Leia em voz alta:</strong> Identifica problemas de ritmo e fluidez</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Revise depois de um intervalo:</strong> Olhos frescos encontram mais erros</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-blue-500 mr-2" />
                Otimização para Web
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Títulos atraentes:</strong> Primeiras 3 palavras são as mais lidas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Palavras-chave naturais:</strong> Evite keyword stuffing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Meta descrições:</strong> Ideal 150-160 caracteres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span><strong>Conteúdo escaneável:</strong> 79% dos leitores apenas escaneiam</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ferramentas Relacionadas */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Texto no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/contador" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Type className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Contador de Palavras</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conte palavras e caracteres</p>
              </div>
            </Link>
            <Link 
              href="/senhas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-red-300 dark:hover:border-red-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Senhas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie senhas seguras</p>
              </div>
            </Link>
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
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