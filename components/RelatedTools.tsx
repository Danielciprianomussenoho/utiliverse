import Link from 'next/link';
import { 
  Calculator, 
  Calendar, 
  Coins, 
  Lock, 
  Ruler, 
  Thermometer,
  Clock,
  Percent,
  Palette,
  Code,
  Text,
  Image,
  Users,
  Brain,
  DollarSign,
  Scale,
  Battery,
  Timer,
  Binary,
  FileText
} from 'lucide-react';

// Mapeamento completo de todas as ferramentas
const toolMap = {
  'imc': { name: 'Calculadora IMC', icon: Calculator, url: '/imc' },
  'idade': { name: 'Calculadora de Idade', icon: Calendar, url: '/idade' },
  'moedas': { name: 'Conversor de Moedas', icon: Coins, url: '/moedas' },
  'senhas': { name: 'Gerador de Senhas', icon: Lock, url: '/senhas' },
  'temperatura': { name: 'Conversor de Temperatura', icon: Thermometer, url: '/temperatura' },
  'unidades': { name: 'Conversor de Unidades', icon: Ruler, url: '/unidades' },
  'regra-tres': { name: 'Calculadora Regra de Três', icon: Percent, url: '/regra-tres' },
  'agua': { name: 'Calculadora de Água', icon: Battery, url: '/agua' },
  'gerador-nomes': { name: 'Gerador de Nomes', icon: Users, url: '/gerador-nomes' },
  'gerador-textos': { name: 'Gerador de Textos', icon: Text, url: '/gerador-textos' },
  'gerador-logos': { name: 'Gerador de Logos', icon: Palette, url: '/gerador-logos' },
  'gerador-personagens': { name: 'Gerador de Personagens', icon: Users, url: '/gerador-personagens' },
  'comparador-precos': { name: 'Comparador de Preços', icon: DollarSign, url: '/comparador-precos' },
  'exercicios': { name: 'Gerador de Exercícios', icon: Brain, url: '/exercicios' },
  'porcentagem': { name: 'Calculadora de Porcentagem', icon: Percent, url: '/porcentagem' },
  'calorias': { name: 'Calculadora de Calorias', icon: Scale, url: '/calorias' },
  'contador': { name: 'Contador de Palavras', icon: Text, url: '/contador' },
  'romano': { name: 'Conversor de Números Romanos', icon: Binary, url: '/romano' },
  'cronometro': { name: 'Cronômetro Online', icon: Timer, url: '/cronometro' },
  'compressor-imagem': { name: 'Compressor de Imagem', icon: Image, url: '/compressor-imagem' },
  'conversor-imagem': { name: 'Conversor de Imagem', icon: Image, url: '/conversor-imagem' },
  'juros': { name: 'Calculadora de Juros', icon: DollarSign, url: '/juros' },
  'editor-texto': { name: 'Editor de Texto Online', icon: FileText, url: '/editor-texto' },
  'calculadora-data': { name: 'Calculadora de Datas', icon: Calendar, url: '/calculadora-data' },
  'bases': { name: 'Conversor de Bases Numéricas', icon: Binary, url: '/bases' },
  'calculadora': { name: 'Calculadora Básica', icon: Calculator, url: '/calculadora' },
  'cientifica': { name: 'Calculadora Científica', icon: Calculator, url: '/cientifica' },
  'paleta-cores': { name: 'Gerador de Paleta de Cores', icon: Palette, url: '/paleta-cores' },
  'gradientes': { name: 'Gerador de Gradientes CSS', icon: Code, url: '/gradientes' },
  'tempo': { name: 'Conversor de Tempo', icon: Clock, url: '/tempo' }
} as const;

interface RelatedToolsProps {
  tools: string[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <div className="mt-12 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <Calculator className="w-5 h-5 mr-2 text-blue-600" />
        Ferramentas Relacionadas no utiliverse
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tools.map(toolSlug => {
          const tool = toolMap[toolSlug as keyof typeof toolMap];
          if (!tool) return null;
          
          const IconComponent = tool.icon;
          return (
            <Link
              key={toolSlug}
              href={tool.url}
              className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md group"
            >
              <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                {tool.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}