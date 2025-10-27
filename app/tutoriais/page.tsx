import { Video, FileText, PlayCircle, Clock, Users, Star, Calculator, RefreshCw, Type, Lock } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';

const tutorials = [
  {
    id: 'como-usar-calculadora-imc',
    title: 'Como Usar a Calculadora de IMC - Guia Completo 2024',
    description: 'Aprenda a calcular seu Índice de Massa Corporal corretamente, interpretar resultados segundo a OMS e monitorar sua saúde de forma profissional.',
    type: 'video',
    duration: '4:30',
    level: 'Iniciante',
    tool: 'Calculadora IMC',
    icon: Video,
    color: 'bg-red-500',
    views: '2.4k',
    rating: 4.8
  },
  {
    id: 'conversor-moedas-dicas',
    title: 'Conversor de Moedas: Dicas Práticas e Estratégias',
    description: 'Domine o conversor de moedas com taxas atualizadas em tempo real. Aprenda a fazer conversões precisas para viagens e negócios internacionais.',
    type: 'guia',
    duration: '7 min',
    level: 'Intermediário',
    tool: 'Conversor de Moedas',
    icon: FileText,
    color: 'bg-green-500',
    views: '1.8k',
    rating: 4.6
  },
  {
    id: 'criando-senhas-seguras',
    title: 'Segurança Digital: Criando Senhas Fortes e Memoráveis',
    description: 'Aprenda estratégias avançadas para criar senhas seguras que protejam suas contas sem sacrificar a praticidade no dia a dia.',
    type: 'video',
    duration: '5:15',
    level: 'Iniciante',
    tool: 'Gerador de Senhas',
    icon: Video,
    color: 'bg-blue-500',
    views: '3.1k',
    rating: 4.9
  },
  {
    id: 'guia-contador-palavras',
    title: 'Otimização de Textos: Guia do Contador de Palavras',
    description: 'Maximize sua produtividade em redações, artigos e documentos profissionais usando nosso contador inteligente de palavras e caracteres.',
    type: 'guia',
    duration: '6 min',
    level: 'Básico',
    tool: 'Contador de Palavras',
    icon: FileText,
    color: 'bg-purple-500',
    views: '1.5k',
    rating: 4.7
  },
  {
    id: 'calculadora-porcentagem-pratica',
    title: 'Porcentagem na Prática: Descontos, Aumentos e Cálculos',
    description: 'Domine cálculos percentuais para situações do cotidiano: descontos em compras, aumentos salariais, cálculos financeiros e muito mais.',
    type: 'video',
    duration: '3:45',
    level: 'Iniciante',
    tool: 'Calculadora de %',
    icon: Video,
    color: 'bg-orange-500',
    views: '2.9k',
    rating: 4.5
  },
  {
    id: 'conversor-unidades-completo',
    title: 'Conversor de Unidades: Guia Definitivo 2024',
    description: 'Aprenda a converter entre mais de 50 unidades de medida diferentes: comprimento, peso, volume, temperatura e muito mais.',
    type: 'guia',
    duration: '8 min',
    level: 'Intermediário',
    tool: 'Conversor de Unidades',
    icon: FileText,
    color: 'bg-teal-500',
    views: '2.1k',
    rating: 4.8
  }
];

// Categorias com ícones consistentes
const categories = [
  { 
    name: 'Calculadoras', 
    count: 8, 
    color: 'from-blue-500 to-cyan-500',
    description: 'IMC, idade, juros, porcentagem',
    icon: Calculator,
    slug: 'calculadoras'
  },
  { 
    name: 'Conversores', 
    count: 6, 
    color: 'from-green-500 to-emerald-500',
    description: 'Moedas, unidades, temperatura',
    icon: RefreshCw,
    slug: 'conversores'
  },
  { 
    name: 'Texto & SEO', 
    count: 3, 
    color: 'from-purple-500 to-pink-500',
    description: 'Contador, editor, palavras-chave',
    icon: Type,
    slug: 'texto-seo'
  },
  { 
    name: 'Segurança', 
    count: 2, 
    color: 'from-red-500 to-orange-500',
    description: 'Senhas, criptografia',
    icon: Lock,
    slug: 'seguranca'
  },
];

export const metadata = {
  title: 'Tutoriais Utiliverse - Aprenda a Usar Todas as Ferramentas Online',
  description: 'Tutoriais em vídeo e guias escritos para dominar calculadoras, conversores e ferramentas do Utiliverse. Aprenda com especialistas.',
  keywords: 'tutoriais Utiliverse, vídeo aulas, guias ferramentas online, aprender calculadoras, cursos gratuitos',
};

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <PlayCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tutoriais Utiliverse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Aprenda a dominar todas as ferramentas do Utiliverse com nossos tutoriais em vídeo 
            e guias escritos por especialistas
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">5K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Estudantes</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <Video className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tutoriais</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">40+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Minutos</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">4.7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avaliação</div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tutoriais em Destaque
            </h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm">
                Todos
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                Vídeos
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                Guias
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => {
              const IconComponent = tutorial.icon;
              return (
                <div key={tutorial.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex p-2 rounded-lg ${tutorial.color}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tutorial.level === 'Iniciante' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : tutorial.level === 'Básico'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                    </div>

                    {/* Tool Name */}
                    <span className="inline-block text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {tutorial.tool}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.views}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {tutorial.rating}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                    </div>

                    {/* Action */}
                    <Link 
                      href={`/tutoriais/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                    >
                      {tutorial.type === 'video' ? (
                        <>
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Assistir Tutorial
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4 mr-2" />
                          Ler Guia
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

            {/* Categories Section */}
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Explore por Categoria
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category) => {
                  const CategoryIcon = category.icon;
                  return (
                    <Link 
                      key={category.slug}
                      href={`/todas-ferramentas?categoria=${encodeURIComponent(category.name)}`}
                      className="block p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">{category.count} tutoriais</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 text-center">{category.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 text-center">
            <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
              Novos Tutoriais Todas as Semanas!
            </h2>
            <p className="text-orange-800 dark:text-orange-200 mb-6 max-w-2xl mx-auto">
              Estamos constantemente criando novos conteúdos para ajudá-lo a dominar todas as 
              ferramentas do Utiliverse. De tutoriais básicos a técnicas avançadas.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">
                Tutoriais em Vídeo
              </span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">
                Guias Detalhados
              </span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">
                Dicas Rápidas
              </span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">
                Casos Práticos
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Sugerir Tutorial
              </Link>
              <Link 
                href="/blog"
                className="border border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Blog
              </Link>
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