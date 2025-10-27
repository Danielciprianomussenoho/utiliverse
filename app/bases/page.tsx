import { Binary, Code, Cpu, Hash, AlertTriangle, Laptop, Book, Settings } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import BaseConverter from '@/components/tools/BaseConverter';

export const metadata = {
  title: 'Conversor de Bases Numéricas - Binário, Decimal, Hexadecimal | Utiliverse',
  description: 'Converta entre bases numéricas: binário, decimal, hexadecimal, octal. Ferramenta essencial para programadores e estudantes.',
  keywords: 'conversor bases, binário decimal hexadecimal, converter bases numéricas, calculadora binária, utiliverse',
};

export default function BasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6">
            <Binary className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Bases Numéricas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta entre binário, decimal, hexadecimal e octal com precisão e velocidade
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Converta Bases Numéricas Agora
          </h2>
          <BaseConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é Conversor de Bases - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Binary className="w-8 h-8 text-violet-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sistemas de Numeração e Suas Aplicações
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Os <strong>sistemas de numeração</strong> são fundamentais na computação e matemática, 
                permitindo representar números de diferentes formas conforme a base utilizada. 
                Cada sistema possui características únicas que o tornam ideal para aplicações específicas, 
                desde o processamento digital até a programação moderna.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Usos Práticos Para Diferentes Perfis
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Laptop className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Programadores</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essencial para depuração, análise de memória, manipulação de bits 
                    e trabalho com cores em hexadecimal para desenvolvimento web.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Book className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Estudantes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fundamental em cursos de computação, eletrônica digital, 
                    arquitetura de computadores e matemática discreta.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Settings className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Profissionais</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crucial em engenharia, análise de sistemas embarcados, 
                    segurança da informação e otimização de algoritmos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitações e Avisos Expandidos */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Limitações e Considerações Técnicas
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                O que Você Deve Saber Sobre Conversões
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Limite de precisão:</strong> Números muito grandes podem sofrer arredondamento</li>
                <li><strong>Validação de entrada:</strong> Caracteres inválidos são automaticamente filtrados</li>
                <li><strong>Representação negativa:</strong> Números negativos usam complemento de dois no binário</li>
                <li><strong>Casos decimais:</strong> Apenas números inteiros são suportados atualmente</li>
                <li><strong>Compatibilidade:</strong> Conversões seguem padrões IEEE para precisão</li>
              </ul>

              {/* Aviso Legal Reforçado */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                      Aviso Legal e Isenção de Responsabilidade
                    </h4>
                    <p className="text-red-700 dark:text-red-400">
                      <strong>Esta ferramenta fornece conversões para fins educacionais e de desenvolvimento.</strong> 
                      Para aplicações críticas em sistemas embarcados, financeiros ou de segurança, 
                      sempre valide os resultados com métodos adicionais. O Utiliverse não se responsabiliza 
                      por problemas decorrentes do uso destas conversões em produção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Referência */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Referência - Conversões Comuns
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Decimal</th>
                  <th className="px-6 py-4 font-semibold">Binário</th>
                  <th className="px-6 py-4 font-semibold">Hexadecimal</th>
                  <th className="px-6 py-4 font-semibold">Octal</th>
                  <th className="px-6 py-4 font-semibold">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4 text-sm">Valor base</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 text-sm">Unidade básica</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">10</td>
                  <td className="px-6 py-4">1010</td>
                  <td className="px-6 py-4">A</td>
                  <td className="px-6 py-4">12</td>
                  <td className="px-6 py-4 text-sm">Primeira letra hex</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">255</td>
                  <td className="px-6 py-4">11111111</td>
                  <td className="px-6 py-4">FF</td>
                  <td className="px-6 py-4">377</td>
                  <td className="px-6 py-4 text-sm">Byte completo</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1024</td>
                  <td className="px-6 py-4">10000000000</td>
                  <td className="px-6 py-4">400</td>
                  <td className="px-6 py-4">2000</td>
                  <td className="px-6 py-4 text-sm">1 Kilobyte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas Práticas */}
        <section className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-violet-200 dark:border-violet-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Trabalhar com Bases Numéricas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Programação</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Use 0x prefixo para hexadecimal em código</li>
                <li>• 0b prefixo para binário (em algumas linguagens)</li>
                <li>• 0 prefixo para octal (cuidado com zeros à esquerda)</li>
                <li>• FF em hex = 255 decimal = byte máximo</li>
                <li>• Potências de 2 são importantes em binário</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Para Estudos</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Pratique conversões mentalmente</li>
                <li>• Memorize potências de 2 (2⁰ a 2¹⁰)</li>
                <li>• Entenda complemento de 2 para negativos</li>
                <li>• Estude aplicações em arquitetura</li>
                <li>• Use tabelas de referência inicialmente</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools - SOMENTE NO FINAL */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Cálculo no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/calculadora" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas fundamentais</p>
              </div>
            </Link>
            <Link 
              href="/cientifica" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Científica</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Funções avançadas e trigonométricas</p>
              </div>
            </Link>
            <Link 
              href="/tempo" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-orange-300 dark:hover:border-orange-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Hash className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Tempo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Converta unidades de tempo</p>
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