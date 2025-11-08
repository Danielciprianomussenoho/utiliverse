'use client';
import { useState, useCallback } from 'react';
import { Plus, Minus, Trash2, Search, TrendingUp, Zap, Star, ShoppingCart, Truck, Clock } from 'lucide-react';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  loja: string;
  frete: number;
  avaliacao: number;
  tempoEntrega: string;
  link: string;
}

interface Comparacao {
  produtos: Produto[];
  produtoBase?: Produto;
}

export default function ComparadorPrecos() {
  const [comparacao, setComparacao] = useState<Comparacao>({ produtos: [] });
  const [produtoAtual, setProdutoAtual] = useState({
    nome: '',
    preco: '',
    loja: '',
    frete: '',
    avaliacao: '5',
    tempoEntrega: '3-5 dias'
  });
  const [categoria, setCategoria] = useState('eletronicos');
  const [mostrarAnalise, setMostrarAnalise] = useState(false);

  const categorias = {
    eletronicos: { nome: 'Eletrônicos', icone: '📱' },
    roupa: { nome: 'Roupas', icone: '👕' },
    livros: { nome: 'Livros', icone: '📚' },
    casa: { nome: 'Casa', icone: '🏠' },
    esporte: { nome: 'Esportes', icone: '⚽' },
    beleza: { nome: 'Beleza', icone: '💄' }
  };

  const lojasPopulares = [
    'Amazon', 'Mercado Livre', 'Americanas', 'Magazine Luiza', 
    'Submarino', 'Shoptime', 'Casas Bahia', 'Kabum', 'Netshoes', 'Dafiti'
  ];

  const temposEntrega = [
    '1-2 dias', '2-3 dias', '3-5 dias', '5-7 dias', '7-10 dias', '10-15 dias'
  ];

  const adicionarProduto = useCallback(() => {
    if (!produtoAtual.nome || !produtoAtual.preco || !produtoAtual.loja) {
      alert('Preencha nome, preço e loja do produto');
      return;
    }

    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome: produtoAtual.nome,
      preco: parseFloat(produtoAtual.preco.replace(',', '.')),
      loja: produtoAtual.loja,
      frete: parseFloat(produtoAtual.frete) || 0,
      avaliacao: parseFloat(produtoAtual.avaliacao),
      tempoEntrega: produtoAtual.tempoEntrega,
      link: '#'
    };

    setComparacao(prev => ({
      ...prev,
      produtos: [...prev.produtos, novoProduto]
    }));

    // Reset form
    setProdutoAtual({
      nome: '',
      preco: '',
      loja: '',
      frete: '',
      avaliacao: '5',
      tempoEntrega: '3-5 dias'
    });
  }, [produtoAtual]);

  const removerProduto = useCallback((id: string) => {
    setComparacao(prev => ({
      ...prev,
      produtos: prev.produtos.filter(p => p.id !== id)
    }));
  }, []);

  const definirComoBase = useCallback((produto: Produto) => {
    setComparacao(prev => ({ ...prev, produtoBase: produto }));
  }, []);

  const calcularTotal = useCallback((produto: Produto) => {
    return produto.preco + produto.frete;
  }, []);

  const calcularEconomia = useCallback((produto: Produto) => {
    if (!comparacao.produtoBase || produto.id === comparacao.produtoBase.id) return 0;
    
    const totalBase = calcularTotal(comparacao.produtoBase);
    const totalProduto = calcularTotal(produto);
    
    return totalBase - totalProduto;
  }, [comparacao.produtoBase, calcularTotal]);

  const encontrarMelhorOferta = useCallback(() => {
    if (comparacao.produtos.length === 0) return null;

    return comparacao.produtos.reduce((melhor, atual) => {
      const totalAtual = calcularTotal(atual);
      const totalMelhor = melhor ? calcularTotal(melhor) : Infinity;
      
      return totalAtual < totalMelhor ? atual : melhor;
    }, null as Produto | null);
  }, [comparacao.produtos, calcularTotal]);

  const encontrarMelhorAvaliado = useCallback(() => {
    if (comparacao.produtos.length === 0) return null;

    return comparacao.produtos.reduce((melhor, atual) => {
      return atual.avaliacao > (melhor?.avaliacao || 0) ? atual : melhor;
    }, null as Produto | null);
  }, [comparacao.produtos]);

  const encontrarMaisRapido = useCallback(() => {
    if (comparacao.produtos.length === 0) return null;

    return comparacao.produtos.reduce((maisRapido, atual) => {
      const tempoAtual = parseInt(atual.tempoEntrega);
      const tempoRapido = maisRapido ? parseInt(maisRapido.tempoEntrega) : Infinity;
      
      return tempoAtual < tempoRapido ? atual : maisRapido;
    }, null as Produto | null);
  }, [comparacao.produtos]);

  const calcularMediaPrecos = useCallback(() => {
    if (comparacao.produtos.length === 0) return 0;
    
    const soma = comparacao.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    return soma / comparacao.produtos.length;
  }, [comparacao.produtos]);

  const melhorOferta = encontrarMelhorOferta();
  const melhorAvaliado = encontrarMelhorAvaliado();
  const maisRapido = encontrarMaisRapido();
  const mediaPrecos = calcularMediaPrecos();

  return (
    <div className="space-y-8">
      {/* Controles */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Categoria */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Categoria do Produto
          </label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(categorias).map(([key, { nome, icone }]) => (
              <option key={key} value={key}>
                {icone} {nome}
              </option>
            ))}
          </select>
        </div>

        {/* Nome do Produto */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Nome do Produto
          </label>
          <input
            type="text"
            value={produtoAtual.nome}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, nome: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: iPhone 15 Pro, Tênis Nike..."
          />
        </div>

        {/* Preço */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Preço (R$)
          </label>
          <input
            type="text"
            value={produtoAtual.preco}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, preco: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 1299,90"
          />
        </div>

        {/* Loja */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Loja
          </label>
          <select
            value={produtoAtual.loja}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, loja: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="">Selecione uma loja</option>
            {lojasPopulares.map(loja => (
              <option key={loja} value={loja}>{loja}</option>
            ))}
          </select>
        </div>

        {/* Frete */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Frete (R$)
          </label>
          <input
            type="text"
            value={produtoAtual.frete}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, frete: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Ex: 15,90 (0 para grátis)"
          />
        </div>

        {/* Avaliação */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Avaliação ⭐
          </label>
          <select
            value={produtoAtual.avaliacao}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, avaliacao: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="5">⭐⭐⭐⭐⭐ (5.0)</option>
            <option value="4.5">⭐⭐⭐⭐☆ (4.5)</option>
            <option value="4">⭐⭐⭐⭐ (4.0)</option>
            <option value="3.5">⭐⭐⭐☆ (3.5)</option>
            <option value="3">⭐⭐⭐ (3.0)</option>
            <option value="2.5">⭐⭐☆ (2.5)</option>
            <option value="2">⭐⭐ (2.0)</option>
            <option value="1.5">⭐☆ (1.5)</option>
            <option value="1">⭐ (1.0)</option>
          </select>
        </div>

        {/* Tempo de Entrega */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Tempo de Entrega
          </label>
          <select
            value={produtoAtual.tempoEntrega}
            onChange={(e) => setProdutoAtual(prev => ({ ...prev, tempoEntrega: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {temposEntrega.map(tempo => (
              <option key={tempo} value={tempo}>{tempo}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Botão Adicionar */}
      <div className="flex justify-center">
        <button
          onClick={adicionarProduto}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Adicionar Produto para Comparação
        </button>
      </div>

      {/* Comparação */}
      {comparacao.produtos.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Comparação de Preços ({comparacao.produtos.length} produtos)
            </h3>
            <button
              onClick={() => setMostrarAnalise(!mostrarAnalise)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              {mostrarAnalise ? 'Ocultar Análise' : 'Mostrar Análise'}
            </button>
          </div>

          {/* Análise Rápida */}
          {mostrarAnalise && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Melhor Oferta</h4>
                </div>
                {melhorOferta ? (
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      R$ {calcularTotal(melhorOferta).toFixed(2)}
                    </div>
                    <div className="text-sm text-green-700 dark:text-green-400">
                      {melhorOferta.loja} • {melhorOferta.nome}
                    </div>
                  </div>
                ) : (
                  <div className="text-green-700 dark:text-green-400 text-sm">
                    Adicione produtos para comparar
                  </div>
                )}
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-600 mr-2" />
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Melhor Avaliado</h4>
                </div>
                {melhorAvaliado ? (
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">
                      ⭐ {melhorAvaliado.avaliacao}
                    </div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-400">
                      {melhorAvaliado.loja} • {melhorAvaliado.nome}
                    </div>
                  </div>
                ) : (
                  <div className="text-yellow-700 dark:text-yellow-400 text-sm">
                    Adicione produtos para comparar
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Entrega Mais Rápida</h4>
                </div>
                {maisRapido ? (
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {maisRapido.tempoEntrega}
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-400">
                      {maisRapido.loja} • {maisRapido.nome}
                    </div>
                  </div>
                ) : (
                  <div className="text-blue-700 dark:text-blue-400 text-sm">
                    Adicione produtos para comparar
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tabela de Comparação */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300">
                      Produto
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300">
                      Loja
                    </th>
                    <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-300">
                      Preço
                    </th>
                    <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-300">
                      Frete
                    </th>
                    <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-300">
                      Total
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300">
                      ⭐ Avaliação
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300">
                      🚚 Entrega
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300">
                      Economia
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {comparacao.produtos.map((produto) => {
                    const total = calcularTotal(produto);
                    const economia = calcularEconomia(produto);
                    const isBase = comparacao.produtoBase?.id === produto.id;
                    const isMelhorOferta = melhorOferta?.id === produto.id;

                    return (
                      <tr 
                        key={produto.id} 
                        className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                          isBase ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        } ${isMelhorOferta ? 'bg-green-50 dark:bg-green-900/20' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {produto.nome}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-600 dark:text-gray-400">
                            {produto.loja}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            R$ {produto.preco.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={`font-semibold ${
                            produto.frete === 0 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {produto.frete === 0 ? 'Grátis' : `R$ ${produto.frete.toFixed(2)}`}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={`font-bold text-lg ${
                            isMelhorOferta 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            R$ {total.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {produto.avaliacao}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-gray-600 dark:text-gray-400">
                            {produto.tempoEntrega}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {economia > 0 ? (
                            <div className="text-green-600 dark:text-green-400 font-semibold">
                              +R$ {economia.toFixed(2)}
                            </div>
                          ) : economia < 0 ? (
                            <div className="text-red-600 dark:text-red-400 font-semibold">
                              -R$ {Math.abs(economia).toFixed(2)}
                            </div>
                          ) : (
                            <div className="text-gray-400 text-sm">Base</div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() => definirComoBase(produto)}
                              className={`p-2 rounded-lg transition-colors ${
                                isBase
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500'
                              }`}
                              title="Definir como base para comparação"
                            >
                              <TrendingUp className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removerProduto(produto.id)}
                              className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
                              title="Remover produto"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Estatísticas Finais */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                📊 Estatísticas da Comparação
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Preço médio:</span>
                  <span className="font-semibold">R$ {mediaPrecos.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maior preço:</span>
                  <span className="font-semibold text-red-600">
                    R$ {Math.max(...comparacao.produtos.map(p => p.preco)).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Menor preço:</span>
                  <span className="font-semibold text-green-600">
                    R$ {Math.min(...comparacao.produtos.map(p => p.preco)).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Diferença máxima:</span>
                  <span className="font-semibold">
                    R$ {(Math.max(...comparacao.produtos.map(p => p.preco)) - Math.min(...comparacao.produtos.map(p => p.preco))).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-4">
                💡 Recomendação Inteligente
              </h4>
              {melhorOferta ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-bold text-green-600 text-lg">
                        {melhorOferta.loja}
                      </div>
                      <div className="text-green-700 dark:text-green-400 text-sm">
                        {melhorOferta.nome}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-800 dark:text-green-300">
                    <strong>Total: R$ {calcularTotal(melhorOferta).toFixed(2)}</strong>
                    <br />
                    Entrega: {melhorOferta.tempoEntrega}
                    <br />
                    Avaliação: ⭐ {melhorOferta.avaliacao}
                  </div>
                </div>
              ) : (
                <div className="text-green-700 dark:text-green-400">
                  Adicione produtos para obter recomendações
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Dicas de Economia */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              💰 Dicas para Economizar nas Compras
            </h4>
            <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1">
              <li>• <strong>Sempre some o frete:</strong> Produtos com preço baixo podem ter fretes caros</li>
              <li>• <strong>Considere a avaliação da loja:</strong> Lojas bem avaliadas oferecem melhor suporte</li>
              <li>• <strong>Verifique o tempo de entrega:</strong> Às vezes vale pagar um pouco mais por entrega rápida</li>
              <li>• <strong>Acompanhe promoções sazonais:</strong> Black Friday, Natal e outras datas comemorativas</li>
              <li>• <strong>Cadastre-se para alertas de preço:</strong> Muitos sites avisam quando produtos baixam de preço</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}