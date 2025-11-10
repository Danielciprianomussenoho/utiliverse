import { Type, Sparkles, Copy, Zap, Star } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import StyledLettersGenerator from '@/components/tools/StyledLettersGenerator';

export const metadata = {
  title: 'Gerador de Letras Estilizadas Online ✨ 100+ Fontes Criativas | Utiliverse',
  description: 'Gerador gratuito de letras estilizadas para Instagram, TikTok e redes sociais. Crie textos com 100+ fontes criativas, símbolos especiais e emojis. Copie e use instantaneamente!',
  keywords: 'gerador letras estilizadas, fontes para instagram, texto decorado, letras diferentes, criador de texto, símbolos especiais, fontes unicode',
};

export default function StyledLettersPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado com Gradiente */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <Type className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Gerador de Letras Estilizadas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Crie textos incríveis com +100 fontes estilizadas para Instagram, TikTok, YouTube e redes sociais. Copie e use instantaneamente!
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Generator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Crie Seu Texto Estilizado
            </h2>
          </div>
          <StyledLettersGenerator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é e Como Usar */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O que são Letras Estilizadas e Como Usar
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As <strong>letras estilizadas</strong> são caracteres Unicode especiais que permitem criar textos com aparência única para redes sociais, jogos online, perfis de usuário e projetos criativos. Diferente de fontes tradicionais, essas letras funcionam em praticamente todas as plataformas sem necessidade de instalação.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Vantagens das Letras Unicode Estilizadas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Compatibilidade Universal</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Funcionam em Instagram, Facebook, TikTok, WhatsApp, Discord, jogos e praticamente qualquer plataforma que suporte texto Unicode.
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Copy className="w-5 h-5 text-pink-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Fácil de Usar</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basta digitar seu texto, escolher o estilo desejado, copiar e colar onde quiser. Não requer instalação ou conhecimentos técnicos.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Onde Usar Letras Estilizadas
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li><strong>Redes Sociais:</strong> Destaque seus posts no Instagram, TikTok e Facebook</li>
                <li><strong>Nicks e Perfis:</strong> Crie usernames únicos para jogos e plataformas online</li>
                <li><strong>Bio Criativa:</strong> Melhore a descrição do seu perfil com texto estilizado</li>
                <li><strong>Design Gráfico:</strong> Use em artes para redes sociais e materiais promocionais</li>
                <li><strong>Comunicação:</strong> Torne suas mensagens mais atraentes no WhatsApp e Telegram</li>
              </ul>
            </div>
          </section>

          {/* Dicas Criativas */}
          <section className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dicas Criativas para Seus Textos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Melhores Práticas</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Combine diferentes estilos no mesmo texto</li>
                  <li>• Use letras estilizadas apenas em títulos</li>
                  <li>• Teste a legibilidade antes de publicar</li>
                  <li>• Mantenha consistência na sua identidade visual</li>
                  <li>• Use emojis para complementar o visual</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Evite Estes Erros</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Não use em textos longos (dificulta leitura)</li>
                  <li>• Evite combinar muitos estilos diferentes</li>
                  <li>• Verifique se funciona na plataforma destino</li>
                  <li>• Não use caracteres que parecem outros símbolos</li>
                  <li>• Mantenha o texto legível em fundos diversos</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Criativas no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/gerador-nomes" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Type className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Nomes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gere nomes criativos para projetos e marcas</p>
              </div>
            </Link>
            <Link 
              href="/gerador-logos" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Logos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie logos profissionais personalizados</p>
              </div>
            </Link>
            <Link 
              href="/paleta-cores" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Paleta</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crie paletas de cores harmoniosas</p>
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