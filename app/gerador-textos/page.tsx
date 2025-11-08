import { FileText, Type, BookOpen, MessageSquare, Clipboard } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import GeradorTextos from '@/components/tools/GeradorTextos';

export const metadata = {
  title: 'Gerador de Textos - Lorem Ipsum, Parágrafos e Conteúdo | Utiliverse',
  description: 'Gerador de textos aleatórios: Lorem Ipsum, parágrafos customizados, citações inspiradoras e conteúdo placeholder. Perfeito para designers e desenvolvedores.',
  keywords: 'gerador textos, lorem ipsum, gerador parágrafos, texto placeholder, conteúdo aleatório, citações, design, desenvolvimento, mockups',
};

export default function GeradorTextosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl mb-6 shadow-lg">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Gerador de Textos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gere <span className="font-semibold text-violet-600">Lorem Ipsum</span>, <span className="font-semibold text-fuchsia-600">parágrafos</span> e <span className="font-semibold text-purple-600">conteúdo placeholder</span> para seus projetos
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Generator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-violet-200 dark:border-violet-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-2xl flex items-center justify-center mr-4">
                  <Type className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Criador de Conteúdo
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gere textos aleatórios para design, desenvolvimento e testes
                  </p>
                </div>
              </div>
              <GeradorTextos />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Tipos de Texto */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tipos de Texto</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Lorem Ipsum clássico</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Parágrafos customizados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Citações inspiradoras</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Texto placeholder realista</span>
                </li>
              </ul>
            </div>

            {/* Casos de Uso */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quando Usar</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Mockups de design</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Testes de layout</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Prototipação rápida</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Placeholder de conteúdo</span>
                </li>
              </ul>
            </div>

            {/* Estatísticas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Clipboard className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Estatísticas</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Palavras geradas</span>
                  <span className="font-bold">500K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Parágrafos</span>
                  <span className="font-bold">50K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Citações</span>
                  <span className="font-bold">1K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Usuários</span>
                  <span className="font-bold">10K+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Sobre Lorem Ipsum */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-violet-200 dark:border-violet-800 p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-violet-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O que é Lorem Ipsum?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Lorem Ipsum</strong> é um texto modelo da indústria tipográfica e de impressão. 
                Tem suas raízes numa obra clássica da literatura latina de 45 AC, tornando-se com mais de 2000 anos.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-violet-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">📖</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Origem Histórica</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Baseado no trabalho <strong> de Finibus Bonorum et Malorum </strong> de Cícero</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-fuchsia-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🎨</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Uso no Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Permite focar no layout sem distrações com conteúdo real</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🌍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Padrão Universal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Utilizado mundialmente por designers e desenvolvedores</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-fuchsia-200 dark:border-fuchsia-800 p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-fuchsia-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas de Conteúdo
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/gerador-nomes" 
                className="flex items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Nomes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nomes para pessoas, empresas e projetos</p>
                </div>
              </Link>
              
              <Link 
                href="/contador" 
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Type className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Contador de Palavras</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Conte palavras e caracteres</p>
                </div>
              </Link>

              <Link 
                href="/editor-texto" 
                className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Type className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Editor de Texto</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Edite e formate texto online</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Exemplos de Uso */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-indigo-200 dark:border-indigo-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Casos de Uso Comuns
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Design Gráfico</h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Para mockups, layouts de revista, cartazes e materiais promocionais
              </p>
            </div>
            
            <div className="text-center p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
              <FileText className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Desenvolvimento Web</h3>
              <p className="text-sm text-pink-700 dark:text-pink-300">
                Prototipação de sites, testes de responsividade e placeholder de conteúdo
              </p>
            </div>
            
            <div className="text-center p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl">
              <MessageSquare className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Apresentações</h3>
              <p className="text-sm text-cyan-700 dark:text-cyan-300">
                Slides, pitch decks e demonstrações de produto com conteúdo realista
              </p>
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