import { Palette, Brush, Droplets, Eye, AlertTriangle, PaintBucket, Monitor, Smartphone } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ColorPaletteGenerator from '@/components/tools/ColorPaletteGenerator';

export const metadata = {
  title: 'Gerador de Paleta de Cores - Crie Combinações Harmônicas | Utiliverse',
  description: 'Gere paletas de cores harmoniosas para design, websites e projetos. Ferramenta gratuita com preview em tempo real.',
  keywords: 'gerador paleta cores, combinacao cores, paleta harmoniosa, design cores, gerador cores, utiliverse',
};

export default function PaletaCoresPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gerador de Paleta de Cores
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Crie paletas de cores harmoniosas e profissionais para seus projetos de design e desenvolvimento
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Generator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Crie Sua Paleta de Cores
          </h2>
          <ColorPaletteGenerator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Gerador de Paleta - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Teoria das Cores e Harmonia Cromática
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>gerador de paleta de cores</strong> é uma ferramenta essencial para designers, 
                desenvolvedores e criadores que buscam estabelecer identidades visuais coesas e atraentes. 
                Baseado em princípios sólidos da teoria das cores, nosso gerador cria combinações 
                harmoniosas que melhoram a experiência visual e comunicam eficazmente a mensagem desejada.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Para Diferentes Profissionais
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Monitor className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Designers Web</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crie sistemas de cores consistentes para websites, aplicativos 
                    e interfaces que garantam usabilidade e apelo visual.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <PaintBucket className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Designers Gráficos</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Desenvolva identidades visuais marcantes para logotipos, 
                    materiais impressos e campanhas publicitárias impactantes.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Smartphone className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Desenvolvedores</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Implemente paletas coerentes em CSS, frameworks e design systems 
                    para manter consistência em todos os projetos.
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
                Considerações Técnicas e Limitações
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Aspectos Importantes Sobre Cores Digitais
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Espaço de cor:</strong> Trabalhamos exclusivamente com HEX para compatibilidade web</li>
                <li><strong>Contraste:</strong> Sempre teste o contraste entre cores para acessibilidade</li>
                <li><strong>Dispositivos:</strong> Cores podem variar entre diferentes monitores e telas</li>
                <li><strong>Impressão:</strong> Cores RGB/HEX podem diferir quando convertidas para CMYK</li>
                <li><strong>Acessibilidade:</strong> Considere usuários com daltonismo ao escolher paletas</li>
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
                      <strong>Este gerador fornece paletas de cores para fins criativos e de prototipagem.</strong> 
                      Para aplicações comerciais, marcas registradas ou identidades visuais oficiais, 
                      recomenda-se consultar um designer profissional e realizar testes adequados de 
                      usabilidade e acessibilidade. O Utiliverse não se responsabiliza por questões 
                      de direitos autorais ou problemas de acessibilidade em projetos finais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Esquemas de Cor */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Esquemas de Cores e Suas Aplicações
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Esquema</th>
                  <th className="px-6 py-4 font-semibold">Descrição</th>
                  <th className="px-6 py-4 font-semibold">Harmonia</th>
                  <th className="px-6 py-4 font-semibold">Melhor Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Monocromático</td>
                  <td className="px-6 py-4">Variações de uma única cor</td>
                  <td className="px-6 py-4">Alta</td>
                  <td className="px-6 py-4 text-sm">Designs minimalistas e elegantes</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Análogo</td>
                  <td className="px-6 py-4">Cores vizinhas no círculo cromático</td>
                  <td className="px-6 py-4">Alta</td>
                  <td className="px-6 py-4 text-sm">Designs suaves e naturais</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Complementar</td>
                  <td className="px-6 py-4">Cores opostas no círculo cromático</td>
                  <td className="px-6 py-4">Média</td>
                  <td className="px-6 py-4 text-sm">Contraste e chamar atenção</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Tríade</td>
                  <td className="px-6 py-4">Três cores equidistantes</td>
                  <td className="px-6 py-4">Média</td>
                  <td className="px-6 py-4 text-sm">Designs vibrantes e dinâmicos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-8 border border-pink-200 dark:border-pink-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Criar Paletas Eficazes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Design Digital</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use 60-30-10: 60% cor dominante, 30% secundária, 10% acento</li>
                <li>• Teste contraste para garantir acessibilidade WCAG</li>
                <li>• Considere o modo escuro em aplicações modernas</li>
                <li>• Mantenha consistência entre diferentes dispositivos</li>
                <li>• Documente suas paletas para reutilização</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Psicologia das Cores</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Azul: confiança, profissionalismo, calma</li>
                <li>• Verde: crescimento, saúde, natureza</li>
                <li>• Vermelho: energia, paixão, urgência</li>
                <li>• Amarelo: otimismo, atenção, criatividade</li>
                <li>• Roxo: luxo, criatividade, sabedoria</li>
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
              href="/gradientes" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Gradientes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie gradientes CSS personalizados</p>
              </div>
            </Link>
            <Link 
              href="/contador" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Contador de Palavras</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conte palavras e caracteres</p>
              </div>
            </Link>
            <Link 
              href="/editor-texto" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Brush className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Editor de Texto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Edite e formate texto online</p>
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