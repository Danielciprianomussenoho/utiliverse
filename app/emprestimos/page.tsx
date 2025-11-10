import { Calculator, TrendingUp, DollarSign, AlertTriangle} from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import LoanSimulator from '@/components/tools/LoanSimulator';

export const metadata = {
  title: 'Simulador de Empréstimo Online 2024 - Calcule Parcelas e Juros | Utiliverse',
  description: 'Simule seu empréstimo pessoal online grátis. Calcule parcelas, juros totais e CET. Compare opções e tome a melhor decisão financeira. Simulador 100% gratuito.',
  keywords: 'simulador emprestimo, calcular emprestimo, parcelas emprestimo, juros emprestimo, credito pessoal, simulador financiamento, calculadora emprestimo',
};

export default function EmprestimosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Simulador de Empréstimo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simule seu empréstimo pessoal online. Calcule parcelas, juros totais e compare as melhores opções para seu bolso.
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Calculator Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 p-6 mb-12">
          <div className="flex items-center mb-6">
            <Calculator className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Simule Seu Empréstimo
            </h2>
          </div>
          <LoanSimulator />
        </section>

        {/* Conteúdo Educacional */}
        <div className="space-y-8 mb-12">
          {/* Tipos de Empréstimo */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tipos de Empréstimo Disponíveis
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Empréstimo Pessoal</h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Para diversas finalidades, sem necessidade de comprovar destino do valor.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Crédito Consignado</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Juros menores, desconto em folha de pagamento. Ideal para aposentados e servidores.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Empréstimo com Garantia</h3>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Veículo ou imóvel como garantia, taxas mais baixas.
                </p>
              </div>
            </div>
          </section>

          {/* Dicas Importantes */}
          <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dicas para um Empréstimo Consciente
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">✅ O Que Fazer</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Compare taxas em diferentes instituições</li>
                  <li>• Verifique seu score de crédito antes</li>
                  <li>• Leia atentamente o contrato</li>
                  <li>• Calcule se as parcelas cabem no seu orçamento</li>
                  <li>• Use para quitar dívidas com juros mais altos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">❌ O Que Evitar</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Não peça valor maior que o necessário</li>
                  <li>• Evite prazos muito longos desnecessariamente</li>
                  <li>• Cuidado com taxas camufladas</li>
                  <li>• Não use para gastos supérfluos</li>
                  <li>• Evite múltiplos empréstimos simultâneos</li>
                </ul>
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
            <Link href="/financiamentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Financiamento</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule financiamento de veículos e imóveis</p>
              </div>
            </Link>
            <Link href="/investimentos" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simulador de Investimentos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calcule juros compostos e projeções</p>
              </div>
            </Link>
            <Link href="/juros" className="flex items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md">
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