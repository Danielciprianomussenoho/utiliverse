import { Palette, Shapes, Sparkles, Download, Copy, Zap } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import GeradorLogos from '@/components/tools/GeradorLogos';

export const metadata = {
  title: 'Gerador de Logos Online - Criar Logo Grátis para Empresa | Utiliverse',
  description: 'Crie logos profissionais gratuitamente para sua empresa, marca ou projeto. Gerador de logos online com templates editáveis e exportação em alta qualidade.',
  keywords: 'gerador logos, criar logo, design logo, logo empresa, marca, identidade visual, design gráfico, logo maker, branding',
};

export default function GeradorLogosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl mb-6 shadow-lg">
            <Shapes className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Gerador de Logos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crie <span className="font-semibold text-amber-600">logos profissionais</span> em minutos para sua <span className="font-semibold text-orange-600">empresa</span>, <span className="font-semibold text-red-600">marca</span> ou <span className="font-semibold text-rose-600">projeto</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Generator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-amber-200 dark:border-amber-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-2xl flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Designer de Logo
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Crie e personalize seu logo em tempo real
                  </p>
                </div>
              </div>
              <GeradorLogos />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Tipos de Logo */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Shapes className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Estilos de Logo</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Logotipo (apenas texto)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Isotipo (apenas símbolo)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Imagotipo (texto + símbolo)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Isologo (integrados)</span>
                </li>
              </ul>
            </div>

            {/* Dicas de Design */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas de Design</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Mantenha a simplicidade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Escolha cores relevantes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Teste em diferentes tamanhos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Considere a versatilidade</span>
                </li>
              </ul>
            </div>

            {/* Formatos de Exportação */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Download className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Exportação</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">PNG</span>
                  <span className="font-bold">Alta qualidade</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">SVG</span>
                  <span className="font-bold">Vetorial</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">JPG</span>
                  <span className="font-bold">Web</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Resolução</span>
                  <span className="font-bold">4K</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Importância do Logo */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-amber-200 dark:border-amber-800 p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Por que um Bom Logo é Essencial?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Um logo bem desenhado é a <strong>cara da sua marca</strong> e a <strong>primeira impressão</strong> que os clientes terão do seu negócio. Ele transmits valores, profissionalismo e confiança.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Reconhecimento Imediato</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Clientes identificam sua marca instantaneamente</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">💼</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Profissionalismo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Transmite seriedade e credibilidade</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🚀</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Diferenciação</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Destaque-se da concorrência</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-800 p-8">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas Criativas
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/paleta-cores" 
                className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Paleta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Paletas de cores harmoniosas</p>
                </div>
              </Link>
              
              <Link 
                href="/gradientes" 
                className="flex items-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Gradientes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crie gradientes CSS personalizados</p>
                </div>
              </Link>

              <Link 
                href="/gerador-nomes" 
                className="flex items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Shapes className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Nomes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nomes para empresas e projetos</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Exemplos de Logos */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-rose-200 dark:border-rose-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Estilos de Logo Populares
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                T
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minimalista</h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">Limpo e moderno</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clássico</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Elegante e atemporal</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Moderno</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">Inovador e ousado</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Orgânico</h3>
              <p className="text-sm text-green-700 dark:text-green-300">Natural e fluido</p>
            </div>
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