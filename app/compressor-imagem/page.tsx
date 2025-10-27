import { Image, Download, Upload, Zap, Shield, Smartphone, Globe, Rocket } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ImageCompressor from '@/components/tools/ImageCompressor';

export const metadata = {
  title: 'Compressor de Imagens Online Grátis - Reduza Tamanho de Fotos sem Perder Qualidade | Utiliverse',
  description: 'Comprima imagens JPG, PNG e WEBP sem perder qualidade visível. Reduza o tamanho de fotos para web, email e redes sociais. Ferramenta 100% gratuita e segura.',
  keywords: 'compressor de imagens, reduzir tamanho de foto, otimizar imagens para web, compressor JPG, compressor PNG, ferramenta compressão imagem, otimização SEO imagens',
};

export default function CompressorImagemPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Image className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compressor de Imagens Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Reduza o tamanho de suas imagens sem perder qualidade visível. Ferramenta 100% gratuita e segura - processamento local no seu navegador.
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Tool Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Comprima Suas Imagens Agora - Economize até 80% de Espaço
          </h2>
          <ImageCompressor />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Benefícios da Compressão */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Por que Comprimir Imagens é Essencial?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A compressão inteligente de imagens não é apenas sobre economizar espaço - é sobre melhorar a experiência do usuário, otimizar SEO e aumentar a eficiência. Em um mundo digital onde a velocidade é crucial, imagens pesadas podem custar caro.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Sites Mais Rápidos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Imagens otimizadas reduzem o tempo de carregamento em até 50%, diminuindo a taxa de rejeição
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📈 Melhor SEO</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Google prioriza sites rápidos no ranking. Core Web Vitals impactam diretamente sua posição
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📱 Economia de Dados</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fundamental para usuários mobile e regiões com internet limitada
                  </p>
                </div>

                <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <Download className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💾 Espaço Otimizado</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reduza em até 80% o espaço em servidores, emails e dispositivos
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guia de Compressão por Cenário */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Configurações Ideais por Tipo de Uso
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🌐 Websites e Blogs</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Qualidade:</strong> 70-80%</li>
                  <li>• <strong>Largura máxima:</strong> 1200px</li>
                  <li>• <strong>Formato:</strong> WEBP (preferencial) ou JPG</li>
                  <li>• <strong>Tamanho ideal:</strong> 100-300KB</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📱 Redes Sociais</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Instagram:</strong> 1080x1080px, 80% qualidade</li>
                  <li>• <strong>Facebook:</strong> 1200x630px, 85% qualidade</li>
                  <li>• <strong>Twitter:</strong> 1200x675px, 75% qualidade</li>
                  <li>• <strong>LinkedIn:</strong> 1200x627px, 80% qualidade</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📧 Email Marketing</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• <strong>Qualidade:</strong> 60-70%</li>
                  <li>• <strong>Largura máxima:</strong> 600px</li>
                  <li>• <strong>Tamanho máximo:</strong> 100KB por imagem</li>
                  <li>• <strong>Dica:</strong> Nomeie os arquivos adequadamente</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Segurança e Tecnologia */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Segurança e Tecnologia
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Diferente de outros compressores online, o <strong>Utiliverse</strong> utiliza tecnologia moderna de processamento local, garantindo total privacidade e segurança dos seus arquivos.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-4">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  🔒 Processamento 100% Local
                </h4>
                <ul className="text-green-700 dark:text-green-400 space-y-2">
                  <li>• <strong>Sem upload para servidores</strong> - suas imagens nunca saem do seu computador</li>
                  <li>• <strong>Algoritmos modernos</strong> - compressão inteligente que preserva qualidade visual</li>
                  <li>• <strong>Conversão instantânea</strong> - resultados em segundos diretamente no navegador</li>
                  <li>• <strong>Privacidade total</strong> - nenhum dado é armazenado ou monitorado</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📊 Taxas de Compressão Típicas</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>• <strong>JPG:</strong> 60-80% de redução</li>
                    <li>• <strong>PNG:</strong> 40-70% de redução</li>
                    <li>• <strong>WEBP:</strong> 25-35% menor que JPG</li>
                    <li>• <strong>GIF:</strong> 20-50% de redução</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Dicas Profissionais</h4>
                  <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                    <li>• Sempre mantenha os originais</li>
                    <li>• Teste diferentes níveis de qualidade</li>
                    <li>• Use WEBP para projetos modernos</li>
                    <li>• Verifique a qualidade em diferentes dispositivos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Guia de Uso Expandido */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Como Usar o Compressor - Passo a Passo
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Upload da Imagem</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Selecione a imagem do seu computador. Suportamos JPG, PNG, WEBP e GIF até 10MB.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Ajuste a Qualidade</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use o controle deslizante para encontrar o equilíbrio perfeito entre qualidade e tamanho.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Visualize Resultado</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Compare visualmente a imagem original com a comprimida e veja a economia de espaço.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4. Download Gratuito</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Baixe a imagem otimizada instantaneamente. Processamento 100% gratuito.
              </p>
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
              href="/conversor-imagem" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Imagem</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta entre formatos de imagem</p>
              </div>
            </Link>
            <Link 
              href="/paleta-cores" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                <Image className="w-6 h-6 text-pink-600 dark:text-pink-400" />
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