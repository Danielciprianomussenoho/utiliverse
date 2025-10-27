import { Image, RefreshCw, Download, Upload, FileImage, Shield, Zap } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ImageConverter from '@/components/tools/ImageConverter';

export const metadata = {
  title: 'Conversor de Imagens Online Grátis - Converta JPG, PNG, WEBP, GIF | Utiliverse',
  description: 'Converta imagens entre JPG, PNG, WEBP e GIF gratuitamente. Ferramenta online 100% segura, rápida e fácil para conversão de formatos de imagem. Processamento local, sem upload para servidores.',
  keywords: 'conversor de imagens, converter JPG para PNG, PNG para JPG, WEBP converter, conversor online, ferramenta imagem, convert image, JPG PNG WEBP GIF',
};

export default function ConversorImagemPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6">
            <RefreshCw className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Imagens Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta gratuitamente entre JPG, PNG, WEBP e GIF. Processamento 100% local - suas imagens nunca saem do seu computador
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Tool Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Converta Suas Imagens Agora - 100% Gratuito
          </h2>
          <ImageConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Guia Completo de Formatos */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <FileImage className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Guia Completo de Formatos de Imagem
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Escolher o formato correto para suas imagens é essencial para otimizar qualidade, tamanho de arquivo e compatibilidade. Cada formato foi desenvolvido com propósitos específicos e entender suas características pode melhorar significativamente seus projetos.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Formatos com Perda (Lossy)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        JPG/JPEG
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                        <strong>Melhor para:</strong> Fotografias, imagens com gradientes complexos<br/>
                        <strong>Vantagens:</strong> Alta compressão, ampla compatibilidade<br/>
                        <strong>Limitações:</strong> Não suporta transparência, perda de qualidade
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        WEBP (Lossy)
                      </h4>
                      <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                        <strong>Melhor para:</strong> Websites modernos, aplicações web<br/>
                        <strong>Vantagens:</strong> 30% menor que JPG, mesma qualidade<br/>
                        <strong>Limitações:</strong> Compatibilidade limitada em navegadores antigos
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Formatos sem Perda (Lossless)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        PNG
                      </h4>
                      <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                        <strong>Melhor para:</strong> Logos, ícones, screenshots<br/>
                        <strong>Vantagens:</strong> Suporta transparência, qualidade perfeita<br/>
                        <strong>Limitações:</strong> Arquivos maiores, não ideal para fotos
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                        GIF
                      </h4>
                      <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                        <strong>Melhor para:</strong> Animações simples, memes<br/>
                        <strong>Vantagens:</strong> Suporta animação, ampla compatibilidade<br/>
                        <strong>Limitações:</strong> Limitado a 256 cores, qualidade inferior
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Casos de Uso e Recomendações */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Quando Usar Cada Formato - Guia Prático
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🖼️ Websites</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Fotos:</strong> WEBP (preferencial) ou JPG</li>
                  <li>• <strong>Ícones:</strong> PNG para transparência</li>
                  <li>• <strong>Logos:</strong> PNG ou SVG</li>
                  <li>• <strong>Animações:</strong> GIF simples, MP4 complexas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📱 Redes Sociais</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Instagram:</strong> JPG quadrado 1080x1080</li>
                  <li>• <strong>Facebook:</strong> JPG 1200x630</li>
                  <li>• <strong>Twitter:</strong> PNG 1200x675</li>
                  <li>• <strong>LinkedIn:</strong> PNG 1200x627</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🎨 Design Gráfico</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Impressão:</strong> PNG/TIFF alta resolução</li>
                  <li>• <strong>Apresentações:</strong> PNG para elementos gráficos</li>
                  <li>• <strong>Mockups:</strong> JPG para visualizações</li>
                  <li>• <strong>Arte vetorial:</strong> SVG (não suportado aqui)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Segurança e Privacidade */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Segurança e Privacidade Garantidas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Sua privacidade é nossa prioridade. Diferente de outros conversores online, o <strong>Utiliverse</strong> processa todas as imagens localmente no seu navegador.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-4">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  ✅ Processamento 100% Local
                </h4>
                <ul className="text-green-700 dark:text-green-400 space-y-2">
                  <li>• <strong>Sem upload para servidores</strong> - suas imagens nunca deixam seu computador</li>
                  <li>• <strong>Conversão instantânea</strong> - processamento direto no navegador</li>
                  <li>• <strong>Dados protegidos</strong> - nenhuma imagem é armazenada ou monitorada</li>
                  <li>• <strong>Conexão segura</strong> - HTTPS com criptografia</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                  📝 Aviso Legal e Limitações
                </h4>
                <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                  <strong>Esta ferramenta é para uso pessoal e educacional.</strong> Certifique-se de ter os direitos necessários para converter e usar as imagens. O Utiliverse não se responsabiliza por violações de direitos autorais. Para imagens críticas ou profissionais, sempre faça backup dos arquivos originais antes da conversão.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Dicas Técnicas */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas Técnicas para Melhor Conversão
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🔄 Otimização de Conversão</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li>• <strong>JPG → PNG:</strong> Ideal para logos - mantém qualidade mas aumenta o tamanho</li>
                <li>• <strong>PNG → JPG:</strong> Reduz drasticamente o tamanho - perfeito para fotos</li>
                <li>• <strong>Para WEB:</strong> WEBP oferece melhor relação qualidade/tamanho</li>
                <li>• <strong>Animações:</strong> GIF para simples, considere MP4 para complexas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">⚡ Boas Práticas</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 text-sm">
                <li>• Sempre mantenha uma cópia do arquivo original</li>
                <li>• Para impressão: use PNG ou TIFF de alta resolução</li>
                <li>• Para web: otimize imagens antes do upload</li>
                <li>• Verifique a compatibilidade do formato com seu uso</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Imagem no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/compressor-imagem" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Compressor de Imagem</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reduza tamanho sem perder qualidade</p>
              </div>
            </Link>
            <Link 
              href="/paleta-cores" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                <Download className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Paleta</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie paletas de cores harmoniosas</p>
              </div>
            </Link>
            <Link 
              href="/gradientes" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Gradientes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie gradientes CSS personalizados</p>
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