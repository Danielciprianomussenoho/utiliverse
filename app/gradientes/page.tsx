import { Droplets, Palette, Code, AlertTriangle, Layout, Smartphone, Brush } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import GradientGenerator from '@/components/tools/GradientGenerator';

export const metadata = {
  title: 'Gerador de Gradientes CSS - Crie Gradientes Personalizados | Utiliverse',
  description: 'Gere gradientes CSS personalizados com preview em tempo real. Copie o código para usar em seus projetos web.',
  keywords: 'gerador gradientes, gradiente CSS, gerador CSS, gradiente linear, gradiente radial, utiliverse',
};

export default function GradientesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Droplets className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gerador de Gradientes CSS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Crie gradientes CSS personalizados e copie o código pronto para usar em seus projetos web
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Generator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Crie Seu Gradiente Personalizado
          </h2>
          <GradientGenerator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Gerador de Gradientes - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Droplets className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Gradientes CSS - Design Moderno e Performance
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Os <strong>gradientes CSS</strong> revolucionaram o design web ao permitir transições 
                suaves entre cores diretamente no navegador, sem necessidade de imagens. 
                Esta ferramenta oferece controle total sobre a criação de gradientes, desde 
                os mais simples até composições complexas com múltiplas cores e posições.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Para Diferentes Cenários
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Layout className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Websites</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crie backgrounds impressionantes, headers modernos e 
                    elementos de interface que carregam instantaneamente.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Smartphone className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Apps Móveis</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Desenvolva interfaces mobile responsivas com gradientes 
                    que se adaptam perfeitamente a diferentes tamanhos de tela.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Brush className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Branding</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Estabeleça identidades visuais únicas com gradientes 
                    personalizados que reforçam a personalidade da marca.
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
                Considerações Técnicas e Compatibilidade
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Aspectos Importantes Sobre Gradientes CSS
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Compatibilidade:</strong> Gradientes CSS são suportados em todos os navegadores modernos</li>
                <li><strong>Performance:</strong> Renderizados pela GPU, são mais eficientes que imagens</li>
                <li><strong>Responsividade:</strong> Adaptam-se automaticamente a diferentes tamanhos de tela</li>
                <li><strong>Acessibilidade:</strong> Garanta contraste adequado para texto sobre gradientes</li>
                <li><strong>Fallbacks:</strong> Sempre forneça cor sólida como fallback para navegadores antigos</li>
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
                      <strong>Este gerador fornece código CSS para fins de desenvolvimento e prototipagem.</strong> 
                      Sempre teste os gradientes em diferentes navegadores e dispositivos antes do uso em produção. 
                      O Utiliverse não se responsabiliza por problemas de compatibilidade, performance 
                      ou quaisquer outros issues técnicos em projetos finais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Tipos de Gradiente */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tipos de Gradientes CSS e Suas Características
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Tipo</th>
                  <th className="px-6 py-4 font-semibold">Sintaxe CSS</th>
                  <th className="px-6 py-4 font-semibold">Uso Ideal</th>
                  <th className="px-6 py-4 font-semibold">Compatibilidade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Linear</td>
                  <td className="px-6 py-4 font-mono">linear-gradient(angle, color-stops)</td>
                  <td className="px-6 py-4 text-sm">Headers, backgrounds, botões</td>
                  <td className="px-6 py-4 text-sm">Todos navegadores</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Radial</td>
                  <td className="px-6 py-4 font-mono">radial-gradient(shape, color-stops)</td>
                  <td className="px-6 py-4 text-sm">Elementos circulares, efeitos de luz</td>
                  <td className="px-6 py-4 text-sm">Todos navegadores</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Cônico</td>
                  <td className="px-6 py-4 font-mono">conic-gradient(from angle, color-stops)</td>
                  <td className="px-6 py-4 text-sm">Gráficos, loaders, elementos angulares</td>
                  <td className="px-6 py-4 text-sm">Navegadores modernos</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Repetitivo</td>
                  <td className="px-6 py-4 font-mono">repeating-linear-gradient(...)</td>
                  <td className="px-6 py-4 text-sm">Padrões, texturas, backgrounds</td>
                  <td className="px-6 py-4 text-sm">Todos navegadores</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Gradientes Profissionais
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Performance</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use poucas cores para melhor renderização</li>
                <li>• Evite gradientes muito complexos em elementos animados</li>
                <li>• Prefira gradientes CSS em vez de imagens</li>
                <li>• Teste em dispositivos móveis para performance</li>
                <li>• Use hardware acceleration quando possível</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Design</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Comece com 2-3 cores para harmonia</li>
                <li>• Use tons complementares para contraste</li>
                <li>• Considere a psicologia das cores no gradiente</li>
                <li>• Teste legibilidade do texto sobre gradientes</li>
                <li>• Mantenha consistência com a paleta do projeto</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Design no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/paleta-cores" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-pink-300 dark:hover:border-pink-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Paleta</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie paletas de cores harmoniosas</p>
              </div>
            </Link>
            <Link 
              href="/editor-texto" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Editor de Texto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Edite e formate texto online</p>
              </div>
            </Link>
            <Link 
              href="/contador" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Droplets className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Contador de Palavras</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conte palavras e caracteres</p>
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