import { Calculator, Scale, AlertTriangle, Heart, User, Activity, Ruler, FunctionSquare } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import IMCCalculator from '@/components/tools/IMCCalculator';

export const metadata = {
  title: 'Calculadora de IMC Online Grátis - Calcule Seu Índice de Massa Corporal | Utiliverse',
  description: 'Calculadora de IMC online gratuita e precisa. Calcule seu Índice de Massa Corporal, descubra sua classificação segundo a OMS e entenda os resultados. Ferramenta ideal para monitorar sua saúde.',
  keywords: 'calculadora de IMC, índice massa corporal, peso ideal, calculadora saúde, IMC online, obesidade, abaixo do peso',
};

export default function IMCPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de IMC Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calcule gratuitamente seu Índice de Massa Corporal e descubra sua classificação segundo padrões da Organização Mundial da Saúde
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calcule Seu IMC Agora
          </h2>
          <IMCCalculator />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* O que é IMC - Expandido */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                O que é IMC e Como Interpretar os Resultados
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>Índice de Massa Corporal (IMC)</strong> é uma medida internacional desenvolvida pelo polímata Lambert Adolphe Jacques Quételet no século XIX. Esta ferramenta amplamente utilizada por profissionais de saúde oferece uma avaliação rápida do estado nutricional através de um cálculo simples: peso (kg) dividido pela altura ao quadrado (m²).
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Como Interpretar Seu IMC para Diferentes Perfis
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Idosos</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Idosos podem ter IMC normal mas pouca massa muscular (sarcopenia). O IMC sozinho não reflete a composição corporal. Considere também a circunferência da cintura e força muscular.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Activity className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Atletas</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Atletas e pessoas muito musculosas podem ter IMC elevado devido à massa muscular, não gordura. Nesses casos, o percentual de gordura corporal é um indicador mais preciso.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Para Gestantes</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    O IMC não é aplicável durante a gravidez. O ganho de peso gestacional deve ser acompanhado por um obstetra considerando o IMC pré-gestacional e a evolução da gestação.
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
                Limitações do IMC e Avisos Importantes
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                O que o IMC Não Considera
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside mb-6">
                <li><strong>Composição corporal:</strong> Não distingue entre massa muscular e gordura</li>
                <li><strong>Distribuição de gordura:</strong> Não considera onde a gordura está localizada</li>
                <li><strong>Densidade óssea:</strong> Pessoas com ossos mais densos podem ter IMC mais alto</li>
                <li><strong>Idade e sexo:</strong> A interpretação pode variar conforme idade e gênero</li>
                <li><strong>Etnia:</strong> Diferentes grupos étnicos podem ter características corporais distintas</li>
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
                      <strong>Esta ferramenta não substitui avaliação médica profissional.</strong> Os resultados fornecidos pela calculadora de IMC são para fins informativos e educacionais. O Índice de Massa Corporal é uma medida screening e não um diagnóstico médico. Consulte sempre um profissional de saúde qualificado para avaliação completa de sua saúde, diagnóstico e orientações personalizadas. Não tome decisões sobre sua saúde baseadas apenas no resultado do IMC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Classification Table */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tabela de Classificação do IMC - Padrões OMS
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Classificação</th>
                  <th className="px-6 py-4 font-semibold">Faixa de IMC</th>
                  <th className="px-6 py-4 font-semibold">Risco de Doenças</th>
                  <th className="px-6 py-4 font-semibold">Recomendações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Abaixo do peso</td>
                  <td className="px-6 py-4">&lt; 18,5</td>
                  <td className="px-6 py-4">Baixo (mas risco aumentado para outras condições)</td>
                  <td className="px-6 py-4 text-sm">Avaliação nutricional, ganho de peso saudável</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Peso normal</td>
                  <td className="px-6 py-4">18,5 - 24,9</td>
                  <td className="px-6 py-4">Normal</td>
                  <td className="px-6 py-4 text-sm">Manter estilo de vida saudável</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Sobrepeso</td>
                  <td className="px-6 py-4">25 - 29,9</td>
                  <td className="px-6 py-4">Aumentado</td>
                  <td className="px-6 py-4 text-sm">Prevenção de ganho de peso adicional</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Obesidade Grau I</td>
                  <td className="px-6 py-4">30 - 34,9</td>
                  <td className="px-6 py-4">Moderado</td>
                  <td className="px-6 py-4 text-sm">Intervenção para perda de peso</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Obesidade Grau II</td>
                  <td className="px-6 py-4">35 - 39,9</td>
                  <td className="px-6 py-4">Grave</td>
                  <td className="px-6 py-4 text-sm">Tratamento intensivo necessário</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Obesidade Grau III</td>
                  <td className="px-6 py-4">≥ 40</td>
                  <td className="px-6 py-4">Muito grave</td>
                  <td className="px-6 py-4 text-sm">Acompanhamento médico especializado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas de Saúde */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dicas para Manter um Peso Saudável
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Alimentação Balanceada</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Consuma frutas e vegetais variados</li>
                <li>• Prefira grãos integrais</li>
                <li>• Proteínas magras (frango, peixe, legumes)</li>
                <li>• Hidrate-se adequadamente</li>
                <li>• Evite alimentos ultraprocessados</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Atividade Física Regular</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• 150 minutos de exercícios moderados por semana</li>
                <li>• Combine cardio e musculação</li>
                <li>• Encontre atividades que goste</li>
                <li>• Mantenha-se ativo no dia a dia</li>
                <li>• Consistência é mais importante que intensidade</li>
              </ul>
            </div>
          </div>
        </section>

        
                {/* Related Tools - Apenas ferramentas reais do Utiliverse */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Saúde no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/calorias" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Calorias</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule suas necessidades diárias de calorias</p>
              </div>
            </Link>
            <Link 
              href="/agua" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <FunctionSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Água</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule sua necessidade diária de água para hidratação ideal</p>
              </div>
            </Link>
            <Link 
              href="/exercicios" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <Ruler className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Exercícios</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule calorias queimadas em diferentes atividades físicas</p>
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