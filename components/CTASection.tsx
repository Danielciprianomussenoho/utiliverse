import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function CTASection() {
  return (
    <div className="mt-12 text-center p-6 bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Explore Mais Ferramentas no utiliverse
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Descubra todas as nossas ferramentas gratuitas para facilitar seu dia a dia
      </p>
      <Link
        href="/todas-ferramentas"
        className="inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Ver Todas as Ferramentas
        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
      </Link>
    </div>
  );
}