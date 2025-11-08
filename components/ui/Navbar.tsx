'use client';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Sun, Moon, Menu, BookOpen, Grid3X3, Target } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50"
      aria-label="Navegação principal do Utiliverse"
      role="navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo com SEO Otimizado */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Utiliverse - Página inicial de ferramentas online gratuitas"
            title="Utiliverse - Calculadoras, Conversores e Ferramentas Online Gratuitas"
            itemProp="url"
          >
            <div 
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-lg p-2">UT</span>
            </div>
            <span 
              className="text-xl font-bold text-gray-900 dark:text-white"
              itemProp="name"
            >
              Utiliverse
            </span>
          </Link>

          {/* Desktop Menu - SEO Otimizado */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Links Principais com Textos Âncora Otimizados */}
            <div className="flex items-center space-x-6">
              
              {/* Link Blog com SEO */}
              <Link
                href="/blog"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
                aria-label="Blog do Utiliverse - Tutoriais e Dicas sobre Ferramentas Online"
                title="Acessar Blog do Utiliverse com Tutoriais e Dicas"
                itemProp="url"
              >
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span itemProp="name">Blog</span>
              </Link>

              {/* Link Ferramentas com SEO */}
              <Link
                href="/todas-ferramentas"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
                aria-label="Todas as Ferramentas do Utiliverse - Calculadoras e Conversores Online"
                title="Explorar Todas as Ferramentas Online do Utiliverse"
                itemProp="url"
              >
                <Grid3X3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span itemProp="name">Ferramentas</span>
              </Link>

              {/* Link sobre com SEO */}
              <Link
                href="/sobre"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
                aria-label= 'Descubra a história do Utiliverse e nossa missão de democratizar o acesso a ferramentas online úteis e gratuitas para todos.'
                title="Sobre o Utiliverse - Nossa Missão e Valores | Ferramentas Online"
                itemProp="url"
              >
                <Target className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span itemProp="name">Sobre</span>
              </Link>

            </div>

            {/* Theme Toggle com Acessibilidade */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label={theme === 'light' ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
              title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Sun className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button com Acessibilidade */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label={theme === 'light' ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
              title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Sun className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Menu com SEO Otimizado */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            role="menu"
            aria-label="Menu mobile do Utiliverse"
          >
            
            {/* Link Blog Mobile com SEO */}
            <Link
              href="/blog"
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Blog do Utiliverse - Tutoriais sobre Ferramentas Online"
              title="Blog com Dicas e Tutoriais do Utiliverse"
              role="menuitem"
              itemProp="url"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span itemProp="name">Blog</span>
            </Link>

            {/* Link Ferramentas Mobile com SEO */}
            <Link
              href="/todas-ferramentas"
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Todas as Ferramentas Online do Utiliverse"
              title="Explorar Todas as Ferramentas Gratuitas"
              role="menuitem"
              itemProp="url"
            >
              <Grid3X3 className="w-4 h-4" aria-hidden="true" />
              <span itemProp="name">Ferramentas</span>
            </Link>

            <Link
              href="/sobre"
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Todas as Ferramentas Online do Utiliverse"
              title="Explorar Todas as Ferramentas Gratuitas"
              role="menuitem"
              itemProp="url"
            >
              <Target className="w-4 h-4" aria-hidden="true" />
              <span itemProp="name">Sobre</span>
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}