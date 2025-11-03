import Link from 'next/link';
import { Heart } from 'lucide-react';

const footerLinks = {
  'Ferramentas': [
    { name: 'Calculadora IMC', href: '/imc' },
    { name: 'Calculadora de Idade', href: '/idade' },
    { name: 'Conversor de Moedas', href: '/moedas' },
    { name: 'Calculadora de %', href: '/porcentagem' },
    { name: 'Gerador de Senhas', href: '/senhas' },
  ],
  'Recursos': [
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Tutoriais', href: '/tutoriais' },
    { name: 'API', href: '/api' },
  ],
  'Legal': [
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Contato', href: '/contato' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Utiliverse
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sua suíte completa de ferramentas online gratuitas. 
              Calculadoras, conversores e utilitários para simplificar seu dia a dia.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Heart className="w-4 h-4 mr-1 text-red-500" />
              Feito com carinho para você
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Utiliverse. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/sobre" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
              Sobre
            </Link>
            <Link href="/privacidade" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
              Privacidade
            </Link>
            <Link href="/termos" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
              Termos
            </Link>
            <Link href="/contato" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}