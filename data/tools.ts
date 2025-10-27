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
  Droplets
} from 'lucide-react';

export const allTools = [
  {
    name: 'Calculadora IMC',
    description: 'Calcule seu Índice de Massa Corporal e saiba sua classificação',
    href: '/imc',
    icon: Calculator,
    color: 'from-blue-500 to-cyan-500',
    category: 'Calculadoras'
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
    name: 'Conversor de Moedas',
    description: 'Converta entre Real, Dólar, Euro e outras moedas',
    href: '/moedas', 
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-500',
    category: 'Conversores'
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