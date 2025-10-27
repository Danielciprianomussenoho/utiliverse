import { Type, FileText, BarChart, BookOpen, Target, TrendingUp } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import WordCounter from '@/components/tools/WordCounter';

export const metadata = {
  title: 'Contador de Palavras e Caracteres Online - Análise de Texto Completa | Utiliverse',
  description: 'Contador de palavras gratuito e preciso. Analise textos com estatísticas detalhadas: palavras, caracteres, tempo de leitura, densidade de keywords e muito mais. Ferramenta essencial para escritores, estudantes e SEO.',
  keywords: 'contador palavras, contador caracteres, analisador texto, contador palavras online, análise texto, tempo leitura, estatísticas texto, SEO content',
};

export default function CounterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-6">
            <Type className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contador de Palavras Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Analise textos com precisão: palavras, caracteres, tempo de leitura e estatísticas avançadas para otimização de conteúdo
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Tool Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Analisador de Texto Completo
          </h2>
          <WordCounter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Importância da Análise de Texto */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Importância da Análise de Texto na Era Digital
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Na era do conteúdo digital, a análise precisa de textos tornou-se fundamental para 
                diversos profissionais e situações. Um contador de palavras vai muito além da simples 
                contagem, oferecendo insights valiosos sobre a estrutura, legibilidade e eficácia 
                do conteúdo produzido.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Práticas em Diferentes Áreas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Produção de Conteúdo</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Blogs e artigos:</strong> Otimize para SEO com densidade ideal de palavras-chave</li>
                    <li><strong>Redação publicitária:</strong> Ajuste copy para diferentes formatos e plataformas</li>
                    <li><strong>E-books e materiais:</strong> Controle de extensão e estruturação de capítulos</li>
                    <li><strong>Scripts e roteiros:</strong> Timing preciso para vídeos e podcasts</li>
                    <li><strong>Newsletters:</strong> Adaptação para diferentes dispositivos e hábitos de leitura</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ambiente Acadêmico e Profissional</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Teses e dissertações:</strong> Controle de limites de palavras por seção</li>
                    <li><strong>Relatórios técnicos:</strong> Manutenção de padrões de formatação</li>
                    <li><strong>Documentação:</strong> Garantia de clareza e concisão</li>
                    <li><strong>Traduções:</strong> Comparação precisa entre versões em diferentes idiomas</li>
                    <li><strong>Conteúdo jurídico:</strong> Precisão terminológica e controle de extensão</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Métricas e Otimização */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Métricas de Texto e Otimização para Diferentes Plataformas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Como Interpretar as Estatísticas do Seu Texto
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Métricas de Legibilidade</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Tempo de leitura:</strong> Baseado em 200 palavras por minuto (velocidade média)</li>
                    <li><strong>Tempo de fala:</strong> Calculado em 150 palavras por minuto (ritmo de apresentação)</li>
                    <li><strong>Densidade de frases:</strong> Textos com frases muito longas podem ser difíceis de ler</li>
                    <li><strong>Parágrafos ideais:</strong> 3-5 frases por parágrafo para melhor legibilidade</li>
                    <li><strong>Palavras por frase:</strong> Média de 15-20 palavras para clareza otimizada</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Otimização por Plataforma</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>SEO Google:</strong> Artigos de 1.500-2.500 palavras performam melhor</li>
                    <li><strong>Redes sociais:</strong> Textos curtos e impactantes (280-2.200 caracteres)</li>
                    <li><strong>Email marketing:</strong> Assuntos com 25-50 caracteres têm maior abertura</li>
                    <li><strong>Apresentações:</strong> 40-60 palavras por slide para manter o engajamento</li>
                    <li><strong>Podcasts:</strong> Scripts de 150-180 palavras por minuto de áudio</li>
                  </ul>
                </div>
              </div>

              {/* Dicas de Otimização */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                      Dicas de Ouro para Otimização de Texto
                    </h4>
                    <p className="text-purple-700 dark:text-purple-400 text-sm">
                      ✨ <strong>Regra dos 25%:</strong> Mantenha 25% do texto para introdução, 50% para desenvolvimento e 25% para conclusão.<br/>
                      ✨ <strong>Densidade de keywords:</strong> Ideal entre 1-2% para SEO natural sem keyword stuffing.<br/>
                      ✨ <strong>Leiturabilidade:</strong> Use a ferramenta Flesch-Kincaid como referência para textos acessíveis.<br/>
                      ✨ <strong>Engajamento:</strong> Inclua perguntas a cada 200-300 palavras para manter o leitor atento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Limites Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Limites e Recomendações por Plataforma
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Plataforma</th>
                  <th className="px-6 py-4 font-semibold">Limite Recomendado</th>
                  <th className="px-6 py-4 font-semibold">Tipo de Conteúdo</th>
                  <th className="px-6 py-4 font-semibold">Dica de Otimização</th>
                  <th className="px-6 py-4 font-semibold">Impacto no Alcance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Twitter/X</td>
                  <td className="px-6 py-4">280 caracteres</td>
                  <td className="px-6 py-4">Tweet</td>
                  <td className="px-6 py-4">Use os primeiros 50 caracteres para impacto</td>
                  <td className="px-6 py-4">Alto - Algoritmo favorece engajamento</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Instagram</td>
                  <td className="px-6 py-4">2.200 caracteres</td>
                  <td className="px-6 py-4">Legenda</td>
                  <td className="px-6 py-4">125 caracteres visíveis sem <strong>ver mais</strong></td>
                  <td className="px-6 py-4">Médio - Foco no visual</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">LinkedIn</td>
                  <td className="px-6 py-4">3.000 caracteres</td>
                  <td className="px-6 py-4">Postagem</td>
                  <td className="px-6 py-4">1.500-2.000 caracteres para máximo engajamento</td>
                  <td className="px-6 py-4">Alto - Algoritmo valoriza conteúdo</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Facebook</td>
                  <td className="px-6 py-4">63.206 caracteres</td>
                  <td className="px-6 py-4">Post</td>
                  <td className="px-6 py-4">80-100 caracteres para melhor performance</td>
                  <td className="px-6 py-4">Médio - Alcance orgânico limitado</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Google SEO</td>
                  <td className="px-6 py-4">1.500-2.500 palavras</td>
                  <td className="px-6 py-4">Artigo Blog</td>
                  <td className="px-6 py-4">Conteúdo abrangente e aprofundado</td>
                  <td className="px-6 py-4">Crítico - Posicionamento orgânico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Texto no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/editor-texto" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Editor de Texto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Edite e formate texto online</p>
              </div>
            </Link>
            <Link 
              href="/senhas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <Type className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Senhas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie senhas seguras</p>
              </div>
            </Link>
            <Link 
              href="/contador" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <BarChart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Analisador de Texto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estatísticas detalhadas</p>
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