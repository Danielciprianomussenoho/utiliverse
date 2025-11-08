import { 
  Calculator, 
  Clock, 
  Calendar, 
  DollarSign, 
  Percent, 
  Type, 
  Lock, 
  Hash,
  Ruler, 
  Image, 
  Download, 
  Thermometer, 
  Binary,
  FunctionSquare,
  Palette,
  Droplets,
  Scale,
  Apple,
  Flame,
  Heart,
  Users,
  FileText
} from 'lucide-react';

export const allTools = [
  {
    name: 'Calculadora IMC',
    description: 'Calcule seu Índice de Massa Corporal e saiba sua classificação',
    href: '/imc',
    icon: Heart,
    color: 'from-blue-500 to-cyan-500',
    category: 'Saúde & Fitness'
  },
   {
    name: 'Conversor de Moedas',
    description: 'Converta entre Real, Dólar, Euro e outras moedas',
    href: '/moedas', 
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-500',
    category: 'Finanças'
  },
  {
  name: 'Gerador de Personagens',
  description: 'Crie personagens únicos para RPG, jogos, histórias e projetos criativos',
  href: '/gerador-personagens',
  icon: Users,
  color: 'from-indigo-500 to-purple-500',
  category: 'Criatividade'
  },
  {
  name: 'Comparador de Preços',
  description: 'Compare preços de produtos entre diferentes lojas e encontre as melhores ofertas',
  href: '/comparador-precos',
  icon: Scale,
  color: 'from-green-500 to-emerald-500',
  category: 'Utilitários'
  },
  {
  name: 'Gerador de Textos',
  description: 'Gere Lorem Ipsum, parágrafos realistas, citações e texto placeholder',
  href: '/gerador-textos',
  icon: FileText,
  color: 'from-violet-500 to-fuchsia-500',
  category: 'Criatividade'
},
{
  name: 'Gerador de Logos',
  description: 'Crie logos profissionais personalizados para sua empresa ou marca',
  href: '/gerador-logos',
  icon: Palette,
  color: 'from-amber-500 to-orange-500',
  category: 'Criatividade'
},
  {
  name: 'Gerador de Nomes',
  description: 'Gere nomes aleatórios para pessoas, empresas, projetos, marcas e domínios',
  href: '/gerador-nomes',
  icon: Users,
  color: 'from-emerald-500 to-teal-500',
  category: 'Criatividade' // Nova categoria!
},
{
  name: 'Cronômetro & Temporizador',
  description: 'Cronômetro preciso e temporizador com alarme para esportes, estudos e produtividade',
  href: '/cronometro',
  icon: Clock,
  color: 'from-indigo-500 to-purple-500',
  category: 'Produtividade' // Nova categoria!
},
  {
    name: 'Calculadora Regra de Três',
    description: 'Calcule regra de três simples e composta com explicações passo a passo',
    href: '/regra-tres',
    icon: Scale, 
    color: 'from-purple-500 to-pink-500',
    category: 'Calculadoras'
  },
  {
  name: 'Calculadora de Calorias',
  description: 'Calcule suas necessidades diárias de calorias para perda de peso, ganho muscular ou manutenção',
  href: '/calorias',
  icon: Apple, 
  color: 'from-orange-500 to-rose-500',
  category: 'Saúde & Fitness'
},
{
  name: 'Calculadora de Água',
  description: 'Calcule sua necessidade diária de água para hidratação ideal',
  href: '/agua',
  icon: Droplets,
  color: 'from-cyan-500 to-blue-500',
  category: 'Saúde & Fitness'
},
{
  name: 'Calculadora de Exercícios',
  description: 'Calcule calorias queimadas em diferentes atividades físicas',
  href: '/exercicios',
  icon: Flame,
  color: 'from-red-500 to-orange-500',
  category: 'Saúde & Fitness'
},
  {
    name: 'Conversor de Tempo',
    description: 'Converta entre horas, minutos, segundos e dias',
    href: '/tempo',
    icon: Clock,
    color: 'from-orange-500 to-amber-500',
    category: 'Conversores'
  },
  {
    name: 'Calculadora de Idade', 
    description: 'Descubra sua idade exata em anos, meses e dias',
    href: '/idade',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
    category: 'Calculadoras'
  },
  {
    name: 'Calculadora de %',
    description: 'Calcule porcentagens, aumentos e descontos',
    href: '/porcentagem',
    icon: Percent,
    color: 'from-purple-500 to-pink-500',
    category: 'Calculadoras'
  },
  {
    name: 'Contador de Palavras',
    description: 'Conte palavras, caracteres e muito mais',
    href: '/contador',
    icon: Type,
    color: 'from-indigo-500 to-blue-500',
    category: 'Texto & SEO'
  },
  {
    name: 'Gerador de Senhas',
    description: 'Crie senhas seguras e personalizadas',
    href: '/senhas',
    icon: Lock,
    color: 'from-red-500 to-pink-500',
    category: 'Utilitários'
  },
  {
    name: 'Conversor Romano',
    description: 'Converta entre números arábicos e romanos',
    href: '/romano',
    icon: Hash,
    color: 'from-amber-500 to-orange-500',
    category: 'Conversores'
  },
  {
    name: 'Conversor de Unidades',
    description: 'Converta entre diferentes unidades de medida',
    href: '/unidades',
    icon: Ruler, 
    color: 'from-teal-500 to-green-500',
    category: 'Conversores'
  },
  {
    name: 'Compressor de Imagens',
    description: 'Comprima imagens JPG, PNG e WEBP sem perder qualidade',
    href: '/compressor-imagem',
    icon: Image, 
    color: 'from-purple-500 to-pink-500',
    category: 'Utilitários'
  },
  {
    name: 'Conversor de Imagens',
    description: 'Converta imagens entre JPG, PNG, WEBP e GIF',
    href: '/conversor-imagem',
    icon: Download, 
    color: 'from-green-500 to-teal-500',
    category: 'Utilitários'
  },
  {
    name: 'Calculadora de Juros',
    description: 'Calcule juros simples e compostos',
    href: '/juros',
    icon: Percent,
    color: 'from-emerald-500 to-green-500',
    category: 'Calculadoras'
  },
  {
    name: 'Editor de Texto',
    description: 'Edite e formate texto online',
    href: '/editor-texto',
    icon: Type,
    color: 'from-blue-500 to-cyan-500',
    category: 'Texto & SEO'
  },
  {
    name: 'Calculadora de Data',
    description: 'Calcule diferença entre datas',
    href: '/calculadora-data',
    icon: Calendar,
    color: 'from-pink-500 to-rose-500',
    category: 'Calculadoras'
  },
  {
    name: 'Conversor de Temperatura',
    description: 'Converta Celsius, Fahrenheit e Kelvin',
    href: '/temperatura',
    icon: Thermometer,
    color: 'from-red-500 to-orange-500',
    category: 'Conversores'
  },
  {
    name: 'Conversor de Bases',
    description: 'Converta entre binário, decimal, hexadecimal e octal',
    href: '/bases',
    icon: Binary,
    color: 'from-violet-500 to-purple-500',
    category: 'Conversores'
  },
  {
    name: 'Calculadora',
    description: 'Calculadora online com operações básicas e avançadas',
    href: '/calculadora',
    icon: Calculator,
    color: 'from-green-500 to-emerald-500',
    category: 'Calculadoras'
  },
  {
    name: 'Calculadora Científica',
    description: 'Calculadora científica com funções avançadas e trigonométricas',
    href: '/cientifica',
    icon: FunctionSquare,
    color: 'from-indigo-500 to-purple-500',
    category: 'Calculadoras'
  },
  {
    name: 'Gerador de Paleta',
    description: 'Crie paletas de cores harmoniosas para seus projetos',
    href: '/paleta-cores',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    category: 'Utilitários'
  },
  {
    name: 'Gerador de Gradientes',
    description: 'Crie gradientes CSS personalizados para seus projetos',
    href: '/gradientes',
    icon: Droplets,
    color: 'from-blue-500 to-purple-500',
    category: 'Utilitários'
  }
] as const;

// Tipos derivados automaticamente
export type Tool = typeof allTools[number];
export type Category = Tool['category'];

// Categorias únicas
export const categories = ['Todas', ...Array.from(new Set(allTools.map(tool => tool.category)))] as const;