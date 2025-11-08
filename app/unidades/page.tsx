import { Ruler, Scale, Thermometer, Clock, Droplets, Map, Zap, Cpu } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import UnitConverter from '@/components/tools/UnitConverter';

export const metadata = {
  title: 'Conversor de Unidades Online - Converta Medidas com Precisão | Utiliverse',
  description: 'Conversor de unidades completo e gratuito. Converta entre comprimento, peso, temperatura, volume, área e mais. Ferramenta essencial para engenharia, culinária, viagens e estudos.',
  keywords: 'conversor unidades, converter medidas, conversor comprimento, conversor peso, conversor temperatura, unidades métricas, sistema imperial',
};

export default function UnitsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Otimizado */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-teal-500 to-green-500 rounded-full mb-6">
            <Ruler className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conversor de Unidades Completo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Converta entre mais de 50 unidades de medida com precisão científica para suas necessidades do dia a dia
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Converter Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conversor Universal de Unidades
          </h2>
          <UnitConverter />
        </section>

        {/* Conteúdo Textual Expandido */}
        <div className="space-y-8 mb-12">
          {/* Sistemas de Medidas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Map className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sistemas de Medidas e Sua Importância Global
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A padronização de unidades de medida é fundamental para o comércio internacional, 
                pesquisa científica e desenvolvimento tecnológico. Atualmente, dois sistemas principais 
                coexistem globalmente: o Sistema Internacional (SI) e o Sistema Imperial Britânico, 
                cada um com suas aplicações específicas e contextos históricos.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                Comparação Entre Sistemas de Medida
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sistema Internacional (SI)</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Base decimal:</strong> Multiplos de 10 para conversões simples</li>
                    <li><strong>Universalidade:</strong> Adotado por 193 países mundialmente</li>
                    <li><strong>Precisão científica:</strong> Baseado em constantes físicas fundamentais</li>
                    <li><strong>Unidades base:</strong> Metro, quilograma, segundo, ampere, kelvin, mol, candela</li>
                    <li><strong>Aplicações:</strong> Ciência, engenharia, medicina, educação</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sistema Imperial Britânico</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li><strong>Origem histórica:</strong> Desenvolvido no Império Britânico</li>
                    <li><strong>Uso atual:</strong> Predominante nos EUA, Libéria e Myanmar</li>
                    <li><strong>Base não decimal:</strong> Conversões complexas (12 polegadas = 1 pé)</li>
                    <li><strong>Unidades características:</strong> Polegada, pé, jarda, milha, libra, onça</li>
                    <li><strong>Aplicações:</strong> Construção civil, aviação, culinária nos EUA</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Aplicações Práticas */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Aplicações Práticas em Diferentes Profissões
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Conversões Essenciais por Área de Atuação
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Engenharia e Construção</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Comprimento:</strong> Polegadas para milímetros em projetos mecânicos</li>
                    <li><strong>Área:</strong> Metros quadrados para pés quadrados em plantas arquitetônicas</li>
                    <li><strong>Volume:</strong> Metros cúbicos para jardas cúbicas em cálculo de concreto</li>
                    <li><strong>Pressão:</strong> PSI para bar em sistemas hidráulicos</li>
                    <li><strong>Temperatura:</strong> Celsius para Fahrenheit em controle climático</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ciências e Pesquisa</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li><strong>Massa:</strong> Gramas para onças em experimentos químicos</li>
                    <li><strong>Volume:</strong> Mililitros para fluid ounces em preparação de soluções</li>
                    <li><strong>Temperatura:</strong> Kelvin para Celsius em termodinâmica</li>
                    <li><strong>Energia:</strong> Joules para calorias em bioquímica</li>
                    <li><strong>Pressão:</strong> Atmosferas para Pascal em física</li>
                  </ul>
                </div>
              </div>

              {/* Dicas de Conversão */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-yellow-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                      Dicas para Conversões Precisas
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                      📏 <strong>Regra prática:</strong> 1 polegada ≈ 2.54 cm (use 2.5 para estimativas rápidas)<br/>
                      🌡️ <strong>Temperatura:</strong> Para converter °F para °C: (°F - 32) ÷ 1.8<br/>
                      ⚖️ <strong>Peso:</strong> 1 kg ≈ 2.2 libras (multiplique por 2 e adicione 10% para precisão)<br/>
                      📐 <strong>Comprimento:</strong> 1 metro ≈ 3.28 pés (use 3.3 para cálculos aproximados)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabela de Categorias Expandida */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Categorias de Unidades Disponíveis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Ruler, name: 'Comprimento', description: 'Metro, pé, polegada, milha, km', examples: '1 m = 3.28 ft', color: 'blue' },
              { icon: Scale, name: 'Peso/Massa', description: 'Kg, libra, onça, grama, tonelada', examples: '1 kg = 2.20 lb', color: 'green' },
              { icon: Thermometer, name: 'Temperatura', description: 'Celsius, Fahrenheit, Kelvin', examples: '0°C = 32°F', color: 'red' },
              { icon: Clock, name: 'Tempo', description: 'Segundo, minuto, hora, dia, semana', examples: '1 h = 60 min', color: 'purple' },
              { icon: Droplets, name: 'Volume', description: 'Litro, galão, mililitro, metro cúbico', examples: '1 L = 0.26 gal', color: 'teal' },
              { icon: Map, name: 'Área', description: 'm², km², hectare, acre, pé quadrado', examples: '1 ha = 2.47 ac', color: 'orange' },
            ].map((category, index) => (
              <div key={index} className={`bg-${category.color}-50 dark:bg-${category.color}-900/20 rounded-xl p-6 border border-${category.color}-200 dark:border-${category.color}-800 text-center`}>
                <category.icon className={`w-12 h-12 text-${category.color}-600 mx-auto mb-4`} />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                <div className="text-xs text-gray-500 dark:text-gray-500 bg-white dark:bg-gray-700 rounded px-2 py-1">
                  {category.examples}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools - Com ferramentas reais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas de Conversão no Utiliverse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/moedas" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Moedas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cotações em tempo real</p>
              </div>
            </Link>
            <Link 
              href="/temperatura" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <Thermometer className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Temperatura</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Celsius, Fahrenheit, Kelvin</p>
              </div>
            </Link>
            <Link 
              href="/bases" 
              className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-teal-300 dark:hover:border-teal-600 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mr-4">
                <Cpu className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Conversor de Bases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Binário, decimal, hexadecimal</p>
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