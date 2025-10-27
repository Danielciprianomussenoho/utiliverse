'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft,
  Search,
  Filter,
  X
} from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import { allTools, categories, type Tool } from '@/data/tools';

export default function TodasFerramentasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('name');

  // Filtrar e ordenar ferramentas (código IGUAL)
  const filteredTools = useMemo(() => {
    let filtered = allTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Ordenar
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Agrupar por categoria para exibição (código IGUAL)
  const groupedTools = useMemo(() => {
    const groups: { [key: string]: Tool[] } = {};
    
    filteredTools.forEach(tool => {
      if (!groups[tool.category]) {
        groups[tool.category] = [];
      }
      groups[tool.category].push(tool);
    });

    return groups;
  }, [filteredTools]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header  */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todas as Ferramentas
          </h1>
         
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-6">
            Explore nossa suíte completa de <strong>{allTools.length} ferramentas online gratuitas</strong> para cálculos, conversões, utilitários de texto, segurança e muito mais. Todas as ferramentas em um só lugar!
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Sistema de Busca (código IGUAL) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="space-y-4">
            {/* Barra de Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar ferramentas por nome ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filtros e Ordenação */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Filtro por Categoria */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Categoria
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ordenação */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ordenar por
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Nome (A-Z)</option>
                  <option value="category">Categoria</option>
                </select>
              </div>
            </div>

            {/* Resultados e Limpar Filtros */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {filteredTools.length} de {allTools.length} ferramentas encontradas
              </div>
              {(searchTerm || selectedCategory !== 'Todas') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Lista de Ferramentas (código IGUAL) */}
        {filteredTools.length === 0 ? (
          // Estado vazio
          <div className="text-center py-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Nenhuma ferramenta encontrada
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tente ajustar seus filtros de busca ou categoria
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar todos os filtros
              </button>
            </div>
          </div>
        ) : (
          // Ferramentas agrupadas por categoria
          <div className="space-y-12">
            {sortBy === 'category' ? (
              // Agrupado por categoria
              Object.entries(groupedTools).map(([category, tools]) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {category}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                      ({tools.length} ferramentas)
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                      <ToolCard key={tool.href} tool={tool} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Lista única (ordenada por nome)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.href} tool={tool} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}

// Componente de Card de Ferramenta (código IGUAL)
function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tool.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
        <tool.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {tool.description}
      </p>
      <div className="mt-3">
        <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
          {tool.category}
        </span>
      </div>
    </Link>
  );
}