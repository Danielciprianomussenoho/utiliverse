'use client';
import { useState, useCallback } from 'react';
import { Calculator, ArrowRight, Trash2, Info, Lightbulb, AlertCircle } from 'lucide-react';

type Proporcionalidade = 'direta' | 'inversa';
type TipoRegraTres = 'simples' | 'composta';

interface Grandeza {
  id: string;
  nome: string;
  valorA: string;
  valorB: string;
  proporcionalidade: Proporcionalidade;
}

interface Resultado {
  valorX: number;
  calculo: string;
  explicacao: string;
}

export default function RegraTresCalculator() {
  const [tipo, setTipo] = useState<TipoRegraTres>('simples');
  const [grandezaA, setGrandezaA] = useState<Grandeza>({
    id: '1',
    nome: 'Quantidade',
    valorA: '',
    valorB: '',
    proporcionalidade: 'direta'
  });
  const [grandezaB, setGrandezaB] = useState<Grandeza>({
    id: '2', 
    nome: 'Preço',
    valorA: '',
    valorB: '',
    proporcionalidade: 'direta'
  });
  const [grandezasExtras, setGrandezasExtras] = useState<Grandeza[]>([]);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);

  // Adicionar grandeza extra para regra de três composta
  const adicionarGrandeza = useCallback(() => {
    const novaGrandeza: Grandeza = {
      id: Date.now().toString(),
      nome: `Grandeza ${String.fromCharCode(67 + grandezasExtras.length)}`,
      valorA: '',
      valorB: '',
      proporcionalidade: 'direta'
    };
    setGrandezasExtras(prev => [...prev, novaGrandeza]);
  }, [grandezasExtras.length]);

  // Remover grandeza extra
  const removerGrandeza = useCallback((id: string) => {
    setGrandezasExtras(prev => prev.filter(g => g.id !== id));
  }, []);

  // Atualizar grandeza
  const atualizarGrandeza = useCallback((id: string, campo: keyof Grandeza, valor: string | Proporcionalidade) => {
    if (id === grandezaA.id) {
      setGrandezaA(prev => ({ ...prev, [campo]: valor }));
    } else if (id === grandezaB.id) {
      setGrandezaB(prev => ({ ...prev, [campo]: valor }));
    } else {
      setGrandezasExtras(prev => 
        prev.map(g => g.id === id ? { ...g, [campo]: valor } : g)
      );
    }
  }, [grandezaA.id, grandezaB.id]);

  // Calcular regra de três
  const calcular = useCallback(() => {
    const todasGrandezas = [grandezaA, grandezaB, ...grandezasExtras];
    
    // Validação mais flexível - apenas verifica se temos pelo menos os valores necessários
    const valoresMinimosPreenchidos = 
      grandezaA.valorA && grandezaA.valorB && 
      grandezaB.valorA && 
      !isNaN(parseFloat(grandezaA.valorA)) && 
      !isNaN(parseFloat(grandezaA.valorB)) && 
      !isNaN(parseFloat(grandezaB.valorA));

    if (!valoresMinimosPreenchidos) {
      setResultado(null);
      return;
    }

    let produtoDireto = 1;
    let produtoInverso = 1;
    let explicacao = '';

    if (tipo === 'simples') {
      // Regra de três simples
      const a1 = parseFloat(grandezaA.valorA);
      const a2 = parseFloat(grandezaA.valorB);
      const b1 = parseFloat(grandezaB.valorA);

      if (grandezaB.proporcionalidade === 'direta') {
        const x = (b1 * a2) / a1;
        produtoDireto = x;
        explicacao = `Fórmula: (${b1} × ${a2}) ÷ ${a1} = ${x.toFixed(2)}`;
      } else {
        const x = (b1 * a1) / a2;
        produtoDireto = x;
        explicacao = `Fórmula: (${b1} × ${a1}) ÷ ${a2} = ${x.toFixed(2)}`;
      }
    } else {
      // Regra de três composta
      let calculo = '';
      let numerador = parseFloat(grandezaB.valorA);
      let denominador = 1;

      calculo = `${grandezaB.valorA}`;

      // Processar grandeza A
      if (grandezaA.proporcionalidade === 'direta') {
        numerador *= parseFloat(grandezaA.valorB);
        denominador *= parseFloat(grandezaA.valorA);
        calculo += ` × ${grandezaA.valorB} ÷ ${grandezaA.valorA}`;
      } else {
        numerador *= parseFloat(grandezaA.valorA);
        denominador *= parseFloat(grandezaA.valorB);
        calculo += ` × ${grandezaA.valorA} ÷ ${grandezaA.valorB}`;
      }

      // Processar grandezas extras
      for (const grandeza of grandezasExtras) {
        if (grandeza.valorA && grandeza.valorB && !isNaN(parseFloat(grandeza.valorA)) && !isNaN(parseFloat(grandeza.valorB))) {
          if (grandeza.proporcionalidade === 'direta') {
            numerador *= parseFloat(grandeza.valorB);
            denominador *= parseFloat(grandeza.valorA);
            calculo += ` × ${grandeza.valorB} ÷ ${grandeza.valorA}`;
          } else {
            numerador *= parseFloat(grandeza.valorA);
            denominador *= parseFloat(grandeza.valorB);
            calculo += ` × ${grandeza.valorA} ÷ ${grandeza.valorB}`;
          }
        }
      }

      produtoDireto = numerador / denominador;
      explicacao = `Cálculo: ${calculo} = ${produtoDireto.toFixed(2)}`;
    }

    setResultado({
      valorX: parseFloat(produtoDireto.toFixed(4)),
      calculo: explicacao,
      explicacao: tipo === 'simples' 
        ? `Para encontrar o valor desconhecido (X), ${grandezaB.proporcionalidade === 'direta' ? 'multiplicamos em cruz' : 'multiplicamos em linha'} e dividimos pelo valor restante.`
        : 'Na regra de três composta, multiplicamos todos os valores que têm proporcionalidade direta com a incógnita e dividimos pelos que têm proporcionalidade inversa.'
    });
  }, [tipo, grandezaA, grandezaB, grandezasExtras]);

  // Resetar formulário
  const resetar = useCallback(() => {
    setGrandezaA({
      id: '1',
      nome: 'Quantidade',
      valorA: '',
      valorB: '',
      proporcionalidade: 'direta'
    });
    setGrandezaB({
      id: '2',
      nome: 'Preço', 
      valorA: '',
      valorB: '',
      proporcionalidade: 'direta'
    });
    setGrandezasExtras([]);
    setResultado(null);
    setMostrarExplicacao(false);
  }, []);

  // Validação mais simples para habilitar o botão
  const podeCalcular = 
    grandezaA.valorA && 
    grandezaA.valorB && 
    grandezaB.valorA && 
    !isNaN(parseFloat(grandezaA.valorA)) && 
    !isNaN(parseFloat(grandezaA.valorB)) && 
    !isNaN(parseFloat(grandezaB.valorA));

  const todasGrandezas = [grandezaA, grandezaB, ...grandezasExtras];

  return (
    <div className="space-y-8">
      {/* Seletor de Tipo */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Tipo de Regra de Três
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setTipo('simples');
              setGrandezasExtras([]);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              tipo === 'simples'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500'
            }`}
          >
            Simples
          </button>
          <button
            onClick={() => setTipo('composta')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              tipo === 'composta'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500'
            }`}
          >
            Composta
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {tipo === 'simples' 
            ? 'Duas grandezas relacionadas (ex: preço e quantidade)' 
            : 'Três ou mais grandezas relacionadas (ex: trabalhadores, horas e produção)'}
        </p>
      </div>

      {/* Instruções Rápidas */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
          <div className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Como usar:</strong> Preencha os valores conhecidos. O valor B2 será calculado automaticamente como "X".
            {tipo === 'simples' && (
              <div className="mt-2 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <strong>Exemplo Direto:</strong>
                  <div>Se 2 produtos → R$ 10</div>
                  <div>5 produtos → X = ?</div>
                </div>
                <div>
                  <strong>Exemplo Inverso:</strong>
                  <div>2 trabalhadores → 6 horas</div>
                  <div>4 trabalhadores → X = ?</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Formulário de Grandezas */}
      <div className="space-y-6">
        {/* Cabeçalho das Colunas */}
        <div className="grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">
          <div>Grandeza</div>
          <div>Valor 1</div>
          <div>Valor 2</div>
          <div>Proporção</div>
        </div>

        {/* Grandeza A (sempre presente) */}
        <div className="grid md:grid-cols-4 gap-4 items-end">
          <div>
            <input
              type="text"
              value={grandezaA.nome}
              onChange={(e) => atualizarGrandeza(grandezaA.id, 'nome', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              placeholder="Nome (ex: Quantidade)"
            />
          </div>
          <div>
            <input
              type="number"
              step="any"
              value={grandezaA.valorA}
              onChange={(e) => atualizarGrandeza(grandezaA.id, 'valorA', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              placeholder="Ex: 2"
            />
          </div>
          <div>
            <input
              type="number"
              step="any"
              value={grandezaA.valorB}
              onChange={(e) => atualizarGrandeza(grandezaA.id, 'valorB', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              placeholder="Ex: 5"
            />
          </div>
          <div>
            <select
              value={grandezaA.proporcionalidade}
              onChange={(e) => atualizarGrandeza(grandezaA.id, 'proporcionalidade', e.target.value as Proporcionalidade)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
            >
              <option value="direta">Direta</option>
              <option value="inversa">Inversa</option>
            </select>
          </div>
        </div>

        {/* Grandeza B (sempre presente) */}
        <div className="grid md:grid-cols-4 gap-4 items-end">
          <div>
            <input
              type="text"
              value={grandezaB.nome}
              onChange={(e) => atualizarGrandeza(grandezaB.id, 'nome', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              placeholder="Nome (ex: Preço)"
            />
          </div>
          <div>
            <input
              type="number"
              step="any"
              value={grandezaB.valorA}
              onChange={(e) => atualizarGrandeza(grandezaB.id, 'valorA', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              placeholder="Ex: 10"
            />
          </div>
          <div>
            <div className="w-full px-3 py-2 border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-semibold text-center">
              X (resultado)
            </div>
          </div>
          <div>
            <select
              value={grandezaB.proporcionalidade}
              onChange={(e) => atualizarGrandeza(grandezaB.id, 'proporcionalidade', e.target.value as Proporcionalidade)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
            >
              <option value="direta">Direta</option>
              <option value="inversa">Inversa</option>
            </select>
          </div>
        </div>

        {/* Grandezas Extras (apenas para composta) */}
        {tipo === 'composta' && grandezasExtras.map((grandeza) => (
          <div key={grandeza.id} className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <input
                type="text"
                value={grandeza.nome}
                onChange={(e) => atualizarGrandeza(grandeza.id, 'nome', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
                placeholder="Nome da grandeza"
              />
            </div>
            <div>
              <input
                type="number"
                step="any"
                value={grandeza.valorA}
                onChange={(e) => atualizarGrandeza(grandeza.id, 'valorA', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
                placeholder="Valor 1"
              />
            </div>
            <div>
              <input
                type="number"
                step="any"
                value={grandeza.valorB}
                onChange={(e) => atualizarGrandeza(grandeza.id, 'valorB', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
                placeholder="Valor 2"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={grandeza.proporcionalidade}
                onChange={(e) => atualizarGrandeza(grandeza.id, 'proporcionalidade', e.target.value as Proporcionalidade)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              >
                <option value="direta">Direta</option>
                <option value="inversa">Inversa</option>
              </select>
              <button
                onClick={() => removerGrandeza(grandeza.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                aria-label="Remover grandeza"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Botão para adicionar grandeza (apenas composta) */}
        {tipo === 'composta' && (
          <button
            onClick={adicionarGrandeza}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm border border-purple-300 dark:border-purple-600 rounded-lg px-4 py-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
          >
            <span>+ Adicionar Outra Grandeza</span>
          </button>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calcular}
          disabled={!podeCalcular}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
            podeCalcular
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calcular Regra de Três
        </button>
        <button
          onClick={resetar}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Limpar Tudo
        </button>
      </div>

      {/* Resultado */}
      {resultado && (
        <div className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              X = {resultado.valorX}
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300">
              O valor desconhecido de <strong>{grandezaB.nome}</strong> é <strong>{resultado.valorX}</strong>
            </div>
            
            <button
              onClick={() => setMostrarExplicacao(!mostrarExplicacao)}
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm mx-auto"
            >
              <Lightbulb className="w-4 h-4" />
              {mostrarExplicacao ? 'Ocultar Explicação' : 'Mostrar Explicação'}
            </button>

            {mostrarExplicacao && (
              <div className="text-left space-y-3">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cálculo Realizado:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{resultado.calculo}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Explicação:</h4>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">{resultado.explicacao}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ajuda sobre Proporcionalidade */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
          <div className="text-sm text-green-800 dark:text-green-300">
            <strong>Como identificar a proporcionalidade:</strong>
            <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
              <div>
                <span className="font-semibold">Direta:</span>
                <div>• Ambas aumentam juntas</div>
                <div>• Ambas diminuem juntas</div>
                <div className="text-green-600">Ex: Mais produtos → Maior preço</div>
              </div>
              <div>
                <span className="font-semibold">Inversa:</span>
                <div>• Uma aumenta, outra diminui</div>
                <div>• Uma diminui, outra aumenta</div>
                <div className="text-green-600">Ex: Mais trabalhadores → Menos tempo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}