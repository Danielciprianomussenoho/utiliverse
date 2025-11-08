import { Users, Building, FolderKanban, Sparkles, Copy, Shuffle } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import GeradorNomes from '@/components/tools/GeradorNomes';

export const metadata = {
  title: 'Gerador de Nomes Aleatórios - Pessoas, Empresas e Projetos | Utiliverse',
  description: 'Gerador de nomes aleatórios para pessoas, empresas, projetos, marcas e muito mais. Ferramenta essencial para criativos, desenvolvedores e empreendedores.',
  keywords: 'gerador nomes, nomes aleatórios, nomes pessoas, nomes empresas, nomes projetos, criador nomes, brainstorming, naming, branding',
};

export default function GeradorNomesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-r from-emerald-500 to-teal-500 rounded-3xl mb-6 shadow-lg">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text">
            Gerador de Nomes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gere nomes criativos para <span className="font-semibold text-emerald-600">pessoas</span>, <span className="font-semibold text-teal-600">empresas</span> e <span className="font-semibold text-cyan-600">projetos</span> com um clique
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Generator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-emerald-200 dark:border-emerald-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-2xl flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Criador de Nomes
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gere nomes únicos e criativos para diversos propósitos
                  </p>
                </div>
              </div>
              <GeradorNomes />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Tipos de Nomes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tipos de Nomes</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Nomes de pessoas (completos)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Nomes de empresas e startups</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Nomes para projetos e marcas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Nomes criativos e únicos</span>
                </li>
              </ul>
            </div>

            {/* Dicas de Naming */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas de Naming</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Seja memorável e único</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Verifique disponibilidade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Considere o público-alvo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Teste a pronúncia</span>
                </li>
              </ul>
            </div>

            {/* Estatísticas Úteis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Curiosidades</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Nomes gerados</span>
                  <span className="font-bold">1M+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Combinações</span>
                  <span className="font-bold">10K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Idiomas</span>
                  <span className="font-bold">5+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Categorias</span>
                  <span className="font-bold">15+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Importância do Naming */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800 p-8">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Arte do Naming
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Escolher o nome certo é uma das decisões mais importantes para qualquer projeto, empresa ou produto. Um bom nome deve ser <strong>memorável</strong>, <strong>relevante</strong> e <strong>transmitir a essência</strong> da marca.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 shrink-0">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Primeira Impressão</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">O nome é often a primeira coisa que as pessoas veem sobre seu projeto</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 shrink-0">🚀</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Diferenciação</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Um nome único ajuda a se destacar da concorrência</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 shrink-0">💡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Storytelling</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bons nomes contam uma história e criam conexão emocional</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-teal-200 dark:border-teal-800 p-8">
            <div className="flex items-center mb-6">
              <FolderKanban className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas Criativas
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/senhas" 
                className="flex items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Senhas</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crie senhas seguras e fortes</p>
                </div>
              </Link>
              
              <Link 
                href="/paleta-cores" 
                className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
                  <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Gradientes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crie gradientes CSS personalizados</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Exemplos de Nomes por Categoria */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-amber-200 dark:border-amber-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Inspiração por Categoria
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Nomes de Pessoas</h3>
              <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                <div>• Sofia Rodrigues</div>
                <div>• Mateus Almeida</div>
                <div>• Isabella Costa</div>
                <div>• Lucas Santos</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Nomes de Empresas</h3>
              <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <div>• Nexus Solutions</div>
                <div>• Quantum Labs</div>
                <div>• Aurora Tech</div>
                <div>• Infinity Works</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <FolderKanban className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Nomes de Projetos</h3>
              <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <div>• Project Phoenix</div>
                <div>• Code Catalyst</div>
                <div>• Digital Horizon</div>
                <div>• Future Pulse</div>
              </div>
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