'use client';
import { useState } from 'react';
import { TrendingUp, PieChart, BarChart3, Euro } from 'lucide-react';

interface CalculationResult {
  tipo: 'simples' | 'composto';
  capital: number;
  taxa: number;
  tempo: number;
  juros: number;
  montante: number;
  evolucao: { periodo: number; montante: number }[];
}

export default function JurosCalculator() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [tipoTempo, setTipoTempo] = useState<'anos' | 'meses'>('anos');
  const [tipoTaxa, setTipoTaxa] = useState<'ano' | 'mes'>('ano');
  const [resultado, setResultado] = useState<CalculationResult | null>(null);

  const calcularJuros = (tipo: 'simples' | 'composto') => {
    const capitalNum = parseFloat(capital.replace(',', '.'));
    const taxaNum = parseFloat(taxa.replace(',', '.'));
    const tempoNum = parseFloat(tempo);

    if (!capitalNum || !taxaNum || !tempoNum) {
      setResultado(null);
      return;
    }

    // Converter taxa para decimal
    const taxaDecimal = taxaNum / 100;

    // Ajustar tempo e taxa conforme seleção
    let tempoAjustado = tempoNum;
    let taxaAjustada = taxaDecimal;

    if (tipoTempo === 'meses' && tipoTaxa === 'ano') {
      taxaAjustada = taxaDecimal / 12;
    } else if (tipoTempo === 'anos' && tipoTaxa === 'mes') {
      tempoAjustado = tempoNum * 12;
    }

    let juros = 0;
    let montante = 0;
    const evolucao = [];

    if (tipo === 'simples') {
      juros = capitalNum * taxaAjustada * tempoAjustado;
      montante = capitalNum + juros;

      // Evolução para juros simples
      for (let i = 1; i <= tempoAjustado; i++) {
        evolucao.push({
          periodo: i,
          montante: capitalNum + (capitalNum * taxaAjustada * i)
        });
      }
    } else {
      // Juros compostos
      montante = capitalNum * Math.pow(1 + taxaAjustada, tempoAjustado);
      juros = montante - capitalNum;

      // Evolução para juros compostos
      for (let i = 1; i <= tempoAjustado; i++) {
        evolucao.push({
          periodo: i,
          montante: capitalNum * Math.pow(1 + taxaAjustada, i)
        });
      }
    }

    setResultado({
      tipo,
      capital: capitalNum,
      taxa: taxaNum,
      tempo: tempoNum,
      juros: parseFloat(juros.toFixed(2)),
      montante: parseFloat(montante.toFixed(2)),
      evolucao: evolucao.slice(0, 12) // Mostrar apenas primeiros 12 períodos
    });
  };

  const resetForm = () => {
    setCapital('');
    setTaxa('');
    setTempo('');
    setResultado(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="capital" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Capital Inicial (€)
          </label>
          <input
            type="text"
            id="capital"
            value={capital}
            onChange={(e) => setCapital(e.target.value.replace(/[^0-9,.]/g, ''))}
            placeholder="Ex: 1000.00"
            className="input-field"
          />
        </div>
        
        <div>
          <label htmlFor="taxa" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Taxa de Juros (%)
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="taxa"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value.replace(/[^0-9,.]/g, ''))}
              placeholder="Ex: 5.0"
              className="input-field flex-1"
            />
            <select 
              value={tipoTaxa}
              onChange={(e) => setTipoTaxa(e.target.value as 'ano' | 'mes')}
              className="input-field w-24"
            >
              <option value="ano">/ano</option>
              <option value="mes">/mês</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="tempo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Período
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="tempo"
              value={tempo}
              onChange={(e) => setTempo(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="Ex: 12"
              className="input-field flex-1"
            />
            <select 
              value={tipoTempo}
              onChange={(e) => setTipoTempo(e.target.value as 'anos' | 'meses')}
              className="input-field w-24"
            >
              <option value="anos">anos</option>
              <option value="meses">meses</option>
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {tipoTempo === 'anos' && tipoTaxa === 'mes' && '12 meses por ano'}
            {tipoTempo === 'meses' && tipoTaxa === 'ano' && 'Taxa mensal: ÷12'}
          </div>
        </div>
      </div>

      {/* Botões de Cálculo */}
      <div className="grid sm:grid-cols-2 gap-4">
        <button
          onClick={() => calcularJuros('simples')}
          disabled={!capital || !taxa || !tempo}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PieChart className="w-4 h-4 mr-2" />
          Calcular Juros Simples
        </button>
        <button
          onClick={() => calcularJuros('composto')}
          disabled={!capital || !taxa || !tempo}
          className="btn-primary bg-linear-to-r from-blue-600 to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Calcular Juros Compostos
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={resetForm}
          className="btn-secondary"
        >
          Limpar Campos
        </button>
      </div>

      {/* Resultados */}
      {resultado && (
        <div className="space-y-6">
          <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-2">
                <Euro className="w-6 h-6 text-yellow-600 mr-2" />
                {resultado.tipo === 'simples' ? (
                  <PieChart className="w-6 h-6 text-green-600 mr-2" />
                ) : (
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {resultado.tipo === 'simples' ? 'Juros Simples' : 'Juros Compostos'}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Juros Acumulados</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(resultado.juros)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Montante Final</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(resultado.montante)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rentabilidade</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {((resultado.juros / resultado.capital) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Evolução */}
          {resultado.evolucao.length > 0 && (
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Evolução do Investimento (€)
                </h4>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {resultado.evolucao.map((item) => (
                  <div key={item.periodo} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-600">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {tipoTempo === 'meses' ? 'Mês' : 'Ano'} {item.periodo}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatCurrency(item.montante)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Cálculos para fins educacionais. Valores podem variar na prática.
      </div>
    </div>
  );
}