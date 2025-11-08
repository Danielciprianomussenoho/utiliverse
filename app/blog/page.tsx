import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';

// Dados de exemplo para posts do blog
const blogPosts = [
  {
    id: 1,
    title: 'Como Calcular Seu IMC Corretamente e Interpretar os Resultados',
    excerpt: 'Aprenda a calcular seu Índice de Massa Corporal de forma precisa e entender o que os resultados significam para sua saúde.',
    date: '2024-12-15',
    author: 'Dr. Ana Silva',
    readTime: '5 min de leitura',
    category: 'Saúde',
    slug: 'como-calcular-imc'
  },
  {
    id: 2,
    title: '10 Ferramentas Online Essenciais para o Dia a Dia',
    excerpt: 'Descubra as ferramentas online mais úteis que podem facilitar sua rotina e aumentar sua produtividade.',
    date: '2024-12-10',
    author: 'Carlos Oliveira',
    readTime: '7 min de leitura',
    category: 'Produtividade',
    slug: 'ferramentas-online-essenciais'
  },
  {
    id: 3,
    title: 'Segurança Digital: Como Criar Senhas Fortes e Proteger Suas Contas',
    excerpt: 'Guia completo sobre criação de senhas seguras e melhores práticas para proteger suas informações online.',
    date: '2024-12-05',
    author: 'Mariana Santos',
    readTime: '6 min de leitura',
    category: 'Segurança',
    slug: 'seguranca-digital-senhas-fortes'
  },
  {
    id: 4,
    title: 'Juros Simples vs Compostos: Qual a Diferença e Como Calcular',
    excerpt: 'Entenda a diferença entre juros simples e compostos e aprenda a calcular investimentos e empréstimos de forma precisa.',
    date: '2024-12-20',
    author: 'Carlos Financeiro',
    readTime: '6 min de leitura',
    category: 'Finanças',
    slug: 'juros-simples-compostos'
  },
  {
    id: 5,
    title: 'Conversão de Temperatura: Guia Completo das Escalas Termométricas',
    excerpt: 'Aprenda a converter entre Celsius, Fahrenheit e Kelvin e entenda quando usar cada escala de temperatura.',
    date: '2024-12-18',
    author: 'Dr. Física Silva',
    readTime: '5 min de leitura',
    category: 'Ciência',
    slug: 'conversao-temperatura-guia'
  },
  {
    id: 6,
    title: 'Calculadora de Datas: Como Calcular Prazos e Períodos Corretamente',
    excerpt: 'Domine o cálculo de diferenças entre datas e aprenda a adicionar ou subtrair dias, meses e anos com precisão.',
    date: '2024-12-16',
    author: 'Paula Organizada',
    readTime: '4 min de leitura',
    category: 'Produtividade',
    slug: 'calculadora-datas'
  },
  {
    id: 7,
    title: 'Editor de Texto Online: Ferramentas Essenciais para Escrita Digital',
    excerpt: 'Descubra como usar editores de texto online para melhorar sua produtividade na escrita e formatação de documentos.',
    date: '2024-12-14',
    author: 'Escritor Digital',
    readTime: '5 min de leitura',
    category: 'Produtividade',
    slug: 'editor-texto-online'
  },
  {
    id: 8,
    title: 'QR Codes: Como Criar e Usar de Forma Criativa no Dia a Dia',
    excerpt: 'Aprenda a gerar QR codes personalizados e descubra usos criativos para marketing, eventos e compartilhamento de informações.',
    date: '2024-12-12',
    author: 'Tecnologia Criativa',
    readTime: '7 min de leitura',
    category: 'Tecnologia',
    slug: 'qr-codes-criativos'
  },
  {
    id: 9,
    title: 'Ferramentas Utiliverse: Como Aproveitar ao Máximo Nossa Suíte Completa',
    excerpt: 'Conheça todas as ferramentas disponíveis no Utiliverse e aprenda a usá-las para otimizar seu dia a dia e aumentar sua produtividade.',
    date: '2024-12-08',
    author: 'Equipe Utiliverse',
    readTime: '6 min de leitura',
    category: 'Tutoriais',
    slug: 'ferramentas-utiliverse-guia'
  },
  {
    id: 10,
    title: 'Conversor de Moedas: Como Calcular Câmbio e Economizar em Transações Internacionais',
    excerpt: 'Aprenda a converter moedas estrangeiras e descubra estratégias para economizar em transações internacionais.',
    date: '2024-12-22',
    author: 'Especialista em Câmbio',
    readTime: '6 min de leitura',
    category: 'Finanças',
    slug: 'conversor-moedas-guia'
  },
  {
    id: 11,
    title: 'Calculadora de Porcentagem: Domine Cálculos Percentuais no Dia a Dia',
    excerpt: 'Aprenda a calcular porcentagens de forma simples e descubra aplicações práticas para o dia a dia e negócios.',
    date: '2024-12-19',
    author: 'Matemática Prática',
    readTime: '5 min de leitura',
    category: 'Matemática',
    slug: 'calculadora-porcentagem'
  },
  {
    id: 12,
    title: 'Conversor de Tempo: Como Calcular Horas, Minutos e Segundos com Precisão',
    excerpt: 'Aprenda a converter entre horas, minutos e segundos e descubra aplicações práticas para melhorar sua gestão do tempo.',
    date: '2024-12-17',
    author: 'Especialista em Produtividade',
    readTime: '4 min de leitura',
    category: 'Produtividade',
    slug: 'conversor-tempo'
  },
  {
    id: 13,
    title: 'Calculadora de Idade: Como Calcular Idade Exata em Anos, Meses e Dias',
    excerpt: 'Aprenda a calcular idade exata considerando anos bissextos, meses com diferentes durações e situações especiais.',
    date: '2024-12-13',
    author: 'Especialista em Documentação',
    readTime: '5 min de leitura',
    category: 'Utilitários',
    slug: 'calculadora-idade'
  },
  // {
  //   id: 14,
  //   title: 'Gerador de Senhas Seguras: Como Criar e Gerenciar Senhas à Prova de Hackers',
  //   excerpt: 'Aprenda a criar senhas seguras que protegem suas contas contra hackers e descubra as melhores práticas de segurança digital.',
  //   date: '2024-12-11',
  //   author: 'Especialista em Cybersecurity',
  //   readTime: '6 min de leitura',
  //   category: 'Segurança',
  //   slug: 'seguranca-digital-senhas-fortes'
  // },
  {
    id: 15,
    title: 'Conversor de Unidades: Guia Completo para Conversões Precisas',
    excerpt: 'Aprenda a converter entre sistemas métrico e imperial com precisão e descubra aplicações práticas para o dia a dia.',
    date: '2024-12-09',
    author: 'Engenheiro de Precisão',
    readTime: '5 min de leitura',
    category: 'Ciência',
    slug: 'conversor-unidades'
  },
  {
    id: 16,
    title: 'Conversor de Bases Numéricas: Entenda Binário, Hexadecimal e Octal',
    excerpt: 'Aprenda a converter entre sistemas decimal, binário, hexadecimal e octal e descubra aplicações em programação e eletrônica.',
    date: '2024-12-07',
    author: 'Especialista em Computação',
    readTime: '6 min de leitura',
    category: 'Tecnologia',
    slug: 'conversor-bases-numericas'
  },
  {
    id: 17,
    title: 'Calculadora Científica: Funções Avançadas para Estudos e Profissionais',
    excerpt: 'Domine o uso da calculadora científica com funções trigonométricas, logarítmicas, estatísticas e muito mais.',
    date: '2024-12-05',
    author: 'Professor de Matemática',
    readTime: '5 min de leitura',
    category: 'Educação',
    slug: 'calculadora-cientifica'
  },
  {
    id: 18,
    title: 'Gerador de Paleta de Cores: Teoria e Prática do Design Cromático',
    excerpt: 'Aprenda teoria das cores, psicologia cromática e crie paletas harmoniosas para seus projetos de design.',
    date: '2024-12-03',
    author: 'Designer Especializado',
    readTime: '7 min de leitura',
    category: 'Design',
    slug: 'gerador-paleta-cores'
  },
  {
    id: 19,
    title: 'Gerador de Gradientes CSS: Crie Backgrounds Modernos e Dinâmicos',
    excerpt: 'Aprenda a criar gradientes CSS modernos, descubra combinações populares e técnicas avançadas para designs impressionantes.',
    date: '2024-12-01',
    author: 'Desenvolvedor Front-end',
    readTime: '6 min de leitura',
    category: 'Desenvolvimento',
    slug: 'gerador-gradientes-css'
  }
];

export const metadata = {
  title: 'Blog Utiliverse - Dicas, Tutoriais e Novidades sobre Ferramentas Online',
  description: 'Aprenda a usar nossas ferramentas, descubra dicas de produtividade e fique por dentro das novidades do Utiliverse.',
  keywords: 'blog Utiliverse, tutoriais ferramentas online, dicas produtividade, calculadoras, conversores, utilitários online'
};

// Função para formatar data sem problemas de hydration
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Utiliverse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dicas, tutoriais e novidades sobre ferramentas online, produtividade e tecnologia
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 h-full flex flex-col">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full mb-4 self-start">
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 grow">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Read More */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors mt-auto"
                  >
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">19+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Artigos Publicados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Categorias</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Especialistas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dicas Práticas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Explore por Categoria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Produtividade', count: 4, color: 'bg-green-500', filter: 'Texto & SEO' },
                { name: 'Finanças', count: 2, color: 'bg-blue-500', filter: 'Calculadoras' },
                { name: 'Segurança', count: 2, color: 'bg-red-500', filter: 'Utilitários' },
                { name: 'Tecnologia', count: 2, color: 'bg-purple-500', filter: 'Conversores' },
                { name: 'Saúde', count: 1, color: 'bg-pink-500', filter: 'Calculadoras' },
                { name: 'Ciência', count: 2, color: 'bg-indigo-500', filter: 'Conversores' },
                { name: 'Educação', count: 1, color: 'bg-yellow-500', filter: 'Calculadoras' },
                { name: 'Design', count: 1, color: 'bg-orange-500', filter: 'Utilitários' },
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/blog?categoria=${encodeURIComponent(category.filter)}`}
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  <div className={`w-8 h-8 ${category.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{category.count}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {category.filter}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 text-center">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Mais Conteúdo em Breve!
            </h2>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              Estamos preparando novos artigos e tutoriais para ajudar você a tirar o máximo 
              proveito das nossas ferramentas.
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Volte em breve para conferir as novidades!
            </p>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mb-8">
          <div className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Receba as novidades por email
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Seja notificado quando publicarmos novos artigos e tutoriais.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Inscrever
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-3">
              Não compartilhamos seu email. Pode cancelar a qualquer momento.
            </p>
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