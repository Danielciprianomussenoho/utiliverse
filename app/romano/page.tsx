
import { Hash, Calculator, History, BookOpen, Calendar } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import RomanConverter from '@/components/tools/RomanConverter';

export const metadata = {
  title: 'Conversor de Números Romanos Online - Arábico para Romano | Utiliverse',
  description: 'Conversor gratuito de números romanos. Converta entre sistema arábico e romano com precisão histórica. Ferramenta essencial para estudos, história e uso prático da numeração romana.',
  keywords: 'conversor romano, números romanos, converter arábico romano, algarismos romanos, numeração romana, história matemática, conversor online',
};

export default function RomanoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <Hash className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Números Romanos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta entre números arábicos e romanos com precisão histórica e explicações detalhadas
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Converter Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conversor Bidirecional Romano ↔ Arábico
          </h2>
          <RomanConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* História e Origem */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                História e Origem da Numeração Romana
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O sistema de numeração romana é um dos mais antigos e duradouros sistemas numéricos da história, 
                desenvolvido na Roma Antiga por volta do século 3 a.C. Diferente do sistema arábico posicional que 
                usamos hoje, o sistema romano é aditivo e subtrativo, utilizando combinações de letras do alfabeto 
                latino para representar valores.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Evolução Histórica do Sistema
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Origens Antigas</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Século 3 a.C.:</strong> Primeiros registros em inscrições romanas</li>
                    <li><strong>Sistema etrusco:</strong> Influência do sistema numérico etrusco</li>
                    <li><strong>Notações primitivas:</strong> Uso de traços verticais para unidades</li>
                    <li><strong>Evolução gradual:</strong> Desenvolvimento de símbolos específicos</li>
                    <li><strong>Padronização:</strong> Consolidação durante o Império Romano</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Princípios Fundamentais</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Sistema aditivo:</strong> Soma de valores para números maiores</li>
                    <li><strong>Notação subtrativa:</strong> IV = 4, IX = 9, XL = 40</li>
                    <li><strong>Sem zero:</strong> Ausência do conceito de zero no sistema</li>
                    <li><strong>Limitações práticas:</strong> Dificuldade com operações matemáticas</li>
                    <li><strong>Legado cultural:</strong> Preservação em contextos específicos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Aplicações Modernas e Regras */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Regras de Conversão e Aplicações Contemporâneas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Regras de Formação dos Números Romanos
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Regras Básicas</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Repetição:</strong> I, X, C, M podem repetir até 3 vezes</li>
                    <li><strong>Não repetição:</strong> V, L, D não podem se repetir</li>
                    <li><strong>Subtração:</strong> Só I, X, C podem ser usados para subtração</li>
                    <li><strong>Ordem decrescente:</strong> Valores devem ser em ordem decrescente</li>
                    <li><strong>Limitações:</strong> Máximo de 3999 no sistema clássico</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Exceções e Casos Especiais</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>IV vs IIII:</strong> Ambos aceitos para 4 em contextos diferentes</li>
                    <li><strong>Notações medievais:</strong> Uso de sobrelinhas para números maiores</li>
                    <li><strong>Variantes históricas:</strong> Diferentes convenções por período</li>
                    <li><strong>Uso em relógios:</strong> IIII é comum em mostradores de relógio</li>
                    <li><strong>Numeração de papas:</strong> Sistemas específicos para numeração papal</li>
                  </ul>
                </div>
              </div>

              {/* Aplicações Modernas */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                      Aplicações Modernas dos Números Romanos
                    </h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      📚 <strong>Educação:</strong> Ensino de história e matemática antiga<br/>
                      🎬 <strong>Entretenimento:</strong> Datas em créditos de filmes e séries<br/>
                      ⚖️ <strong>Direito:</strong> Numeração de emendas e artigos constitucionais<br/>
                      🏛️ <strong>Arquitetura:</strong> Datação de construções históricas<br/>
                      📖 <strong>Literatura:</strong> Numeração de prefácios, introduções e apêndices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Conversões Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela Completa de Conversões Romanas
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Valor Arábico</th>
                  <th className="px-6 py-4 font-semibold">Numeral Romano</th>
                  <th className="px-6 py-4 font-semibold">Regra Aplicada</th>
                  <th className="px-6 py-4 font-semibold">Exemplo de Uso</th>
                  <th className="px-6 py-4 font-semibold">Curiosidade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1</td>
                  <td className="px-6 py-4 font-semibold font-serif">I</td>
                  <td className="px-6 py-4">Unidade básica</td>
                  <td className="px-6 py-4">Capítulo I</td>
                  <td className="px-6 py-4">Derivado do dedo indicador</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">4</td>
                  <td className="px-6 py-4 font-semibold font-serif">IV</td>
                  <td className="px-6 py-4">Subtração (5-1)</td>
                  <td className="px-6 py-4">Livro IV</td>
                  <td className="px-6 py-4">IIII ainda usado em relógios</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">9</td>
                  <td className="px-6 py-4 font-semibold font-serif">IX</td>
                  <td className="px-6 py-4">Subtração (10-1)</td>
                  <td className="px-6 py-4">Século IX</td>
                  <td className="px-6 py-4">Evita repetição de 4 caracteres</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">40</td>
                  <td className="px-6 py-4 font-semibold font-serif">XL</td>
                  <td className="px-6 py-4">Subtração (50-10)</td>
                  <td className="px-6 py-4">Ano XL</td>
                  <td className="px-6 py-4">Representa <strong>quadragésimo</strong> </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">90</td>
                  <td className="px-6 py-4 font-semibold font-serif">XC</td>
                  <td className="px-6 py-4">Subtração (100-10)</td>
                  <td className="px-6 py-4">Ano XC</td>
                  <td className="px-6 py-4">Representa <strong>nonagésimo</strong></td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024</td>
                  <td className="px-6 py-4 font-semibold font-serif">MMXXIV</td>
                  <td className="px-6 py-4">2000 + 20 + 4</td>
                  <td className="px-6 py-4">Ano atual</td>
                  <td className="px-6 py-4">Século XXI em números romanos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Conversão no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/bases" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-amber-300 dark:hover:border-amber-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mr-4">
                <Hash className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Bases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Binário, decimal, hexadecimal</p>
              </div>
            </Link>
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-amber-300 dark:hover:border-amber-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas</p>
              </div>
            </Link>
            <Link 
              href="/unidades" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-amber-300 dark:hover:border-amber-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Unidades</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medidas e grandezas</p>
              </div>
            </Link>
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