import { Calendar, Cake, Clock, Heart, Target, Gift } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import AgeCalculator from '@/components/tools/AgeCalculator';

export const metadata = {
  title: 'Calculadora de Idade Online - Descubra Sua Idade Exata em Anos, Meses e Dias | Utiliverse',
  description: 'Calculadora de idade gratuita e precisa. Descubra quantos anos, meses e dias você tem, quando será seu próximo aniversário e curiosidades sobre sua idade. Ferramenta essencial para planejamento e comemorações.',
  keywords: 'calculadora idade, calcular idade, idade exata, quantos anos tenho, calculadora aniversário, idade em dias, próximo aniversário',
};

export default function AgePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de Idade Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Descubra sua idade exata em anos, meses e dias, saiba quando será seu próximo aniversário e explore curiosidades sobre sua jornada
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calcule Sua Idade com Precisão
          </h2>
          <AgeCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Importância do Cálculo de Idade */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Cake className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                A Importância de Conhecer Sua Idade Exata
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conhecer sua idade exata vai muito além de simples curiosidade. Em diferentes fases da vida e situações, 
                essa informação pode ser crucial para tomada de decisões importantes e planejamento estratégico.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Aplicações Práticas em Diferentes Contextos
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contexto Legal e Administrativo</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Documentação:</strong> Verificação de elegibilidade para passaporte, CNH e outros documentos</li>
                    <li><strong>Direitos trabalhistas:</strong> Cálculo de FGTS, aposentadoria e benefícios</li>
                    <li><strong>Programas sociais:</strong> Verificação de requisitos etários para auxílios governamentais</li>
                    <li><strong>Responsabilidade civil:</strong> Definição de maioridade penal e civil</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Saúde e Desenvolvimento</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Acompanhamento médico:</strong> Vacinas, exames preventivos e desenvolvimento</li>
                    <li><strong>Educação:</strong> Ingresso escolar, vestibular e programas educacionais</li>
                    <li><strong>Esportes:</strong> Categorias etárias em competições e atividades físicas</li>
                    <li><strong>Nutrição:</strong> Necessidades nutricionais específicas por faixa etária</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Como Funciona o Cálculo */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Como Funciona o Cálculo de Idade com Precisão
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Algoritmo de Cálculo Avançado
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Fatores Considerados</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Anos bissextos:</strong> Consideração precisa dos anos com 366 dias</li>
                    <li><strong>Meses variáveis:</strong> Diferenças entre meses (28-31 dias)</li>
                    <li><strong>Precisão temporal:</strong> Cálculo baseado em data e hora atual</li>
                    <li><strong>Fusos horários:</strong> Ajuste automático para diferentes regiões</li>
                    <li><strong>Horário de verão:</strong> Consideração de mudanças sazonais</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Método de Cálculo</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Anos completos:</strong> Diferença entre anos considerando mês e dia</li>
                    <li><strong>Meses restantes:</strong> Cálculo preciso dos meses após o último aniversário</li>
                    <li><strong>Dias exatos:</strong> Contagem diária desde o último mêsversário</li>
                    <li><strong>Total de dias:</strong> Soma exata de todos os dias vividos</li>
                    <li><strong>Próximo aniversário:</strong> Previsão da próxima data comemorativa</li>
                  </ul>
                </div>
              </div>

              {/* Curiosidades sobre Idade */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                      Curiosidades sobre Idade
                    </h4>
                    <p className="text-purple-700 dark:text-purple-400 text-sm">
                      Sabia que em média uma pessoa vive aproximadamente 30.000 dias? Cada dia representa uma oportunidade única. 
                      Nossa calculadora ajuda você a valorizar cada momento dessa jornada, mostrando exatamente quantos dias você já viveu 
                      e quantos faltam para seu próximo marco comemorativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Marcos Importantes */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Marcos Importantes por Faixa Etária
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Idade</th>
                  <th className="px-6 py-4 font-semibold">Marcos Legais</th>
                  <th className="px-6 py-4 font-semibold">Marcos de Saúde</th>
                  <th className="px-6 py-4 font-semibold">Marcos Educacionais</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">0-3 anos</td>
                  <td className="px-6 py-4">Registro civil, certidão de nascimento</td>
                  <td className="px-6 py-4">Vacinação básica, acompanhamento pediátrico</td>
                  <td className="px-6 py-4">Estimulação precoce, educação infantil</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">4-17 anos</td>
                  <td className="px-6 py-4">Documentos escolares, restrições legais</td>
                  <td className="px-6 py-4">Exames periódicos, vacinas de reforço</td>
                  <td className="px-6 py-4">Educação básica, ensino médio</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">18 anos</td>
                  <td className="px-6 py-4">Maioridade civil, direitos políticos</td>
                  <td className="px-6 py-4">Exames preventivos, saúde do adulto</td>
                  <td className="px-6 py-4">Ensino superior, cursos técnicos</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">50+ anos</td>
                  <td className="px-6 py-4">Direitos trabalhistas especiais</td>
                  <td className="px-6 py-4">Exames preventivos específicos</td>
                  <td className="px-6 py-4">Educação continuada, cursos livres</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">60+ anos</td>
                  <td className="px-6 py-4">Direitos do idoso, aposentadoria</td>
                  <td className="px-6 py-4">Acompanhamento geriátrico</td>
                  <td className="px-6 py-4">Universidade da terceira idade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Cálculo no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/calculadora-data" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule diferença entre datas</p>
              </div>
            </Link>
            <Link 
              href="/imc" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de IMC</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Índice de Massa Corporal</p>
              </div>
            </Link>
            <Link 
              href="/juros" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
                <Gift className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
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