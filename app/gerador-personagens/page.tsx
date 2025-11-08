import { Users, Sparkles, Palette, Zap, Sword, Shield } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import GeradorPersonagens from '@/components/tools/GeradorPersonagens';

export const metadata = {
  title: 'Gerador de Personagens - RPG, Jogos e Histórias | Utiliverse',
  description: 'Crie personagens únicos para RPG, jogos, histórias e projetos criativos. Gerador completo com atributos, personalidade, aparência e história de fundo.',
  keywords: 'gerador personagens, criar personagem, RPG, jogos, storytelling, D&D, desenvolvimento personagem, caracterização, narrativa',
};

export default function GeradorPersonagensPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl mb-6 shadow-lg">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Gerador de Personagens
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crie <span className="font-semibold text-indigo-600">personagens únicos</span> para <span className="font-semibold text-purple-600">RPG</span>, <span className="font-semibold text-pink-600">jogos</span> e <span className="font-semibold text-blue-600">histórias</span>
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Generator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-indigo-200 dark:border-indigo-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Criador de Personagens
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gere personagens completos com história e atributos
                  </p>
                </div>
              </div>
              <GeradorPersonagens />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Tipos de Personagem */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Arquétipos</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Herói & Protagonista</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Vilão & Antagonista</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Aliado & Companheiro</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Mentor & Sábio</span>
                </li>
              </ul>
            </div>

            {/* Atributos Comuns */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Atributos RPG</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Força & Constituição</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Destreza & Agilidade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Inteligência & Sabedoria</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Carisma & Persuasão</span>
                </li>
              </ul>
            </div>

            {/* Estatísticas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Diversidade</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Personagens</span>
                  <span className="font-bold">1K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Combinações</span>
                  <span className="font-bold">10K+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Traços únicos</span>
                  <span className="font-bold">500+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Histórias</span>
                  <span className="font-bold">5K+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Sobre Desenvolvimento de Personagens */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-indigo-200 dark:border-indigo-800 p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Arte de Criar Personagens
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Um bom personagem é a <strong>alma de qualquer história</strong>. Personagens bem desenvolvidos criam conexões emocionais com o público e tornam as narrativas memoráveis.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🎭</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Profundidade Emocional</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Motivações, medos e desejos tornam o personagem real</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">📈</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Arco de Desenvolvimento</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Personagens devem evoluir ao longo da história</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Conflito Interno</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dilemas morais criam tensão e interesse</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-8">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas Criativas
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/gerador-nomes" 
                className="flex items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Nomes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nomes para personagens e projetos</p>
                </div>
              </Link>
              
              <Link 
                href="/gerador-textos" 
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Textos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Conteúdo para histórias e descrições</p>
                </div>
              </Link>

              <Link 
                href="/gerador-logos" 
                className="flex items-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gerador de Logos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Identidade visual para projetos</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Exemplos de Arquétipos */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-pink-200 dark:border-pink-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Arquétipos de Personagem
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <Sword className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">O Herói</h3>
              <p className="text-sm text-red-700 dark:text-red-300">
                Corajoso, determinado, salva o dia através de força e coragem
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">O Mentor</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Sábio, experiente, guia o herói com conhecimento e conselhos
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">O Trickster</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Impulsivo, criativo, desafia normas com humor e inteligência
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/20 rounded-xl">
              <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">O Aliado</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Leal, confiável, oferece suporte emocional e prático
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