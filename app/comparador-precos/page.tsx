import { TrendingUp, Scale, Zap, BarChart3, Target, PiggyBank } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import ComparadorPrecos from '@/components/tools/ComparadorPrecos';

export const metadata = {
  title: 'Comparador de Preços - Economize em Compras Online | Utiliverse',
  description: 'Compare preços de produtos entre diferentes lojas e encontre as melhores ofertas. Ferramenta essencial para economizar em compras online.',
  keywords: 'comparador preços, comparar preços, economia, compras online, melhores ofertas, preço produtos, shopping, descontos',
};

export default function ComparadorPrecosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mb-6 shadow-lg">
            <Scale className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Comparador de Preços
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Compare preços e <span className="font-semibold text-green-600">economize</span> em suas <span className="font-semibold text-emerald-600">compras</span> online
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-green-200 dark:border-green-800 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Analisador de Preços
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Compare produtos e encontre as melhores ofertas
                  </p>
                </div>
              </div>
              <ComparadorPrecos />
            </section>
          </div>

          {/* Sidebar Informativa */}
          <div className="space-y-6">
            {/* Dicas de Economia */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center mb-4">
                <PiggyBank className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dicas de Economia</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Compare sempre antes de comprar</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Aproveite promoções sazonais</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Considere marcas genéricas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Verifique frete e taxas</span>
                </li>
              </ul>
            </div>

            {/* Estatísticas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Economia Média</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Eletrônicos</span>
                  <span className="font-bold">15-25%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Roupas</span>
                  <span className="font-bold">20-40%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Livros</span>
                  <span className="font-bold">10-30%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Casa</span>
                  <span className="font-bold">15-35%</span>
                </li>
              </ul>
            </div>

            {/* Lojas Populares */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800 p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lojas Parceiras</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Amazon</span>
                  <span className="font-bold">⭐ 4.8</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Mercado Livre</span>
                  <span className="font-bold">⭐ 4.6</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Americanas</span>
                  <span className="font-bold">⭐ 4.4</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Magazine Luiza</span>
                  <span className="font-bold">⭐ 4.5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conteúdo Educacional */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Importância da Comparação */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Por que Comparar Preços?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Comparar preços antes de comprar pode significar uma <strong>economia significativa</strong> no seu orçamento mensal. Estudos mostem que consumidores que comparam preços economizam em média <strong>20-30%</strong> em suas compras.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">💰</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Economia Imediata</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Encontre o melhor preço disponível no mercado</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Evite Golpes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Identifique preços suspeitos ou muito abaixo do mercado</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Decisão Informada</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Baseie suas compras em dados reais e comparações</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas Relacionadas */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800 p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ferramentas Financeiras
              </h2>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/calculadora" 
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora Básica</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operações matemáticas simples</p>
                </div>
              </Link>
              
              <Link 
                href="/juros" 
                className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Juros simples e compostos</p>
                </div>
              </Link>

              <Link 
                href="/porcentagem" 
                className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de %</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Porcentagens e descontos</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Exemplos de Economia */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-amber-200 dark:border-amber-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Economia em Diferentes Categorias
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
              <div className="text-3xl font-bold text-amber-600 mb-2">R$ 150</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smartphone</h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Economia média em modelos populares
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">R$ 80</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tênis Esportivo</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Diferença entre lojas especializadas
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 45</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Livros</h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                Comparando físicas e online
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">R$ 120</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Eletrodomésticos</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Promoções sazonais
              </p>
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