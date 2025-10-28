import Link from 'next/link';
import { ArrowRight, BookOpen, Grid3X3 } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import { allTools } from '@/data/tools';

// Apenas 6 ferramentas para a home (as mais populares)
const featuredTools = allTools.slice(0, 6);

// Posts em destaque para a home
const featuredPosts = [
  {
    id: 1,
    title: 'Como Calcular Seu IMC Corretamente e Interpretar os Resultados',
    excerpt: 'Aprenda a calcular seu Índice de Massa Corporal de forma precisa e entender o que os resultados significam para sua saúde.',
    date: '2024-12-15',
    readTime: '5 min de leitura',
    category: 'Saúde',
    slug: 'como-calcular-imc'
  },
  {
    id: 2,
    title: 'Juros Simples vs Compostos: Qual a Diferença e Como Calcular',
    excerpt: 'Entenda a diferença entre juros simples e compostos e aprenda a calcular investimentos e empréstimos de forma precisa.',
    date: '2024-12-20',
    readTime: '6 min de leitura',
    category: 'Finanças',
    slug: 'juros-simples-compostos'
  },
    {
    id: 3,
    title: 'Ferramentas Utiliverse: Como Aproveitar ao Máximo Nossa Suíte Completa',
    excerpt: 'Conheça todas as ferramentas disponíveis no ToolVerse e aprenda a usá-las para otimizar seu dia a dia e aumentar sua produtividade.',
    date: '2024-12-08',
    author: 'Equipe Utiliverse',
    readTime: '6 min de leitura',
    category: 'Tutoriais',
    slug: 'ferramentas-utiliverse-guia'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section com SEO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Grid3X3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Bem-vindo ao{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Utiliverse
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sua suíte completa de <strong>ferramentas online gratuitas</strong>. 
              Calculadoras, conversores e utilitários essenciais para otimizar seu dia a dia.
            </p>
            
            {/* SEO Content - Menos de 300 palavras */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed">
                  O <strong>Utiliverse</strong> oferece mais de {allTools.length} ferramentas online especializadas 
                  em <strong>cálculos matemáticos</strong>, <strong>conversões de unidades</strong> e 
                  <strong> utilitários práticos</strong>. Desde <strong>calculadoras de IMC</strong> e 
                  <strong> porcentagem</strong> até <strong>conversores de moedas</strong> e 
                  <strong> temperatura</strong>, todas as ferramentas são <strong>100% gratuitas</strong>, 
                  não exigem cadastro e funcionam perfeitamente em qualquer dispositivo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#ferramentas"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              >
                Explorar Ferramentas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/sobre"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                Conheça o Utiliverse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSense />
      </div>

      {/* Featured Tools Section */}
      <section id="ferramentas" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ferramentas em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Descubra nossas <strong>calculadoras online</strong> e <strong>conversores práticos</strong> mais populares. 
              Perfeitos para <strong>cálculos do dia a dia</strong> e <strong>conversões precisas</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
                aria-label={`Acessar ${tool.name} - ${tool.description}`}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tool.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/todas-ferramentas"
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600"
              aria-label="Explorar todas as ferramentas do Utiliverse"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              Ver Todas as {allTools.length}+ Ferramentas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Aprenda a usar nossas ferramentas como um expert com nossos 
              <strong> tutoriais detalhados</strong> e <strong>dicas práticas</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="p-6 grow">
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center text-center"
                    aria-label={`Ler artigo: ${post.title}`}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ler Artigo Completo
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              aria-label="Ver todos os artigos do blog Utiliverse"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Todos os Artigos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section com Schema Markup */}
      <section className="py-16 bg-white dark:bg-gray-900" itemScope itemType="https://schema.org/WebSite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div itemProp="featureList">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2" itemProp="numberOfItems">
                {allTools.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400" itemProp="description">Ferramentas Online</div>
            </div>
            <div itemProp="featureList">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400" itemProp="description">Completamente Gratuitas</div>
            </div>
            <div itemProp="featureList">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400" itemProp="description">Disponibilidade Total</div>
            </div>
            <div itemProp="featureList">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {featuredPosts.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400" itemProp="description">Tutoriais Especializados</div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSense />
      </div>
    </div>
  );
}