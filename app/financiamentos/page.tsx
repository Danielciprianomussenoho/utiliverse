import { Home, Car, Calculator, Building, MapPin, TrendingUp } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import FinancingSimulator from '@/components/tools/FinancingSimulator';

export const metadata = {
  title: 'Simulador de Financiamento 2024 - Veículos e Imóveis | Utiliverse',
  description: 'Simule financiamento de carros, motos e imóveis. Calcule entrada, parcelas, total a pagar e compare melhores condições. Simulador gratuito!',
  keywords: 'simulador financiamento, financiamento imovel, financiamento carro, calcular parcela, entrada financiamento, simulador veiculo',
};

export default function FinanciamentosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Simulador de Financiamento
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simule financiamentos de imóveis, veículos e mais. Calcule entrada, parcelas e total a pagar!
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-green-100 dark:border-green-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <Calculator className="w-6 h-6 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Simule Seu Financiamento
            </h2>
          </div>
          <FinancingSimulator />
        </section>

        {/* Conteúdo Educacional */}
        <div className="space-y-8 mb-12">
          {/* Tipos de Financiamento */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tipos de Financiamento
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Home className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300">Financiamento Imobiliário</h3>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  SFH, SFI e Minha Casa Minha Vida. Prazos longos (até 35 anos), taxas menores.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Car className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-300">Financiamento Veicular</h3>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Carros, motos, caminhões. Prazos de 12 a 60 meses, com alienação fiduciária.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-300">Crédito com Garantias</h3>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Usando imóvel ou veículo como garantia para empréstimos com taxas reduzidas.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Tools */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Outras Ferramentas Financeiras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/emprestimos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Empréstimos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule empréstimos pessoais e parcelas</p>
              </div>
            </Link>
            <Link href="/investimentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Investimentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros compostos e projeções</p>
              </div>
            </Link>
            <Link href="/juros" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Calculadora de Juros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros simples e compostos</p>
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