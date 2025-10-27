'use client';
import { useState } from 'react';
import { Calendar, Plus, Minus, Calculator, RefreshCw } from 'lucide-react';

interface DateDifference {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

interface DateOperation {
  originalDate: string;
  operation: string;
  resultDate: string;
  daysAdded: number;
}

export default function DataCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [operationType, setOperationType] = useState<'difference' | 'add' | 'subtract'>('difference');
  const [daysToAdd, setDaysToAdd] = useState('');
  const [result, setResult] = useState<DateDifference | null>(null);
  const [operationResult, setOperationResult] = useState<DateOperation | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setResult(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      setResult(null);
      return;
    }

    // Calculate total days difference
    const timeDiff = end.getTime() - start.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Calculate years, months, days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      // Get the last day of the previous month
      const lastDayOfMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      days += lastDayOfMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      years,
      months,
      days,
      totalDays
    });
    setOperationResult(null);
  };

  const calculateOperation = () => {
    if (!startDate || !daysToAdd) {
      setOperationResult(null);
      return;
    }

    const originalDate = new Date(startDate);
    const days = parseInt(daysToAdd);

    if (isNaN(days)) {
      setOperationResult(null);
      return;
    }

    const resultDate = new Date(originalDate);
    
    if (operationType === 'add') {
      resultDate.setDate(resultDate.getDate() + days);
    } else {
      resultDate.setDate(resultDate.getDate() - days);
    }

    setOperationResult({
      originalDate: formatDate(originalDate),
      operation: operationType === 'add' ? `Adicionar ${days} dias` : `Subtrair ${days} dias`,
      resultDate: formatDate(resultDate),
      daysAdded: days
    });
    setResult(null);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
    setDaysToAdd('');
    setResult(null);
    setOperationResult(null);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const quickOperation = (days: number) => {
    if (!startDate) return;
    
    setDaysToAdd(days.toString());
    
    // Trigger calculation after a short delay to ensure state updates
    setTimeout(() => {
      const originalDate = new Date(startDate);
      const resultDate = new Date(originalDate);
      
      if (operationType === 'add') {
        resultDate.setDate(resultDate.getDate() + days);
      } else {
        resultDate.setDate(resultDate.getDate() - days);
      }

      setOperationResult({
        originalDate: formatDate(originalDate),
        operation: operationType === 'add' ? `Adicionar ${days} dias` : `Subtrair ${days} dias`,
        resultDate: formatDate(resultDate),
        daysAdded: days
      });
      setResult(null);
    }, 100);
  };

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setOperationType('difference')}
          className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
            operationType === 'difference'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-300'
          }`}
        >
          <Calculator className="w-4 h-4 mr-2 inline" />
          Diferença entre Datas
        </button>
        <button
          onClick={() => setOperationType('add')}
          className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
            operationType === 'add'
              ? 'bg-green-600 text-white border-green-600'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-300'
          }`}
        >
          <Plus className="w-4 h-4 mr-2 inline" />
          Adicionar Dias
        </button>
        <button
          onClick={() => setOperationType('subtract')}
          className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
            operationType === 'subtract'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-red-300'
          }`}
        >
          <Minus className="w-4 h-4 mr-2 inline" />
          Subtrair Dias
        </button>
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Data Inicial
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input-field w-full"
            max={operationType === 'difference' ? endDate : undefined}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setStartDate(getTodayDate())}
              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Hoje
            </button>
            <button
              onClick={() => setStartDate(getTomorrowDate())}
              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Amanhã
            </button>
          </div>
        </div>

        {operationType === 'difference' ? (
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Data Final
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="input-field w-full"
              min={startDate}
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setEndDate(getTodayDate())}
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Hoje
              </button>
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="daysToAdd" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {operationType === 'add' ? 'Dias para Adicionar' : 'Dias para Subtrair'}
            </label>
            <input
              type="number"
              id="daysToAdd"
              value={daysToAdd}
              onChange={(e) => setDaysToAdd(e.target.value)}
              placeholder="Ex: 7"
              min="1"
              className="input-field w-full"
            />
            <div className="flex gap-2 mt-2 flex-wrap">
              <button
                onClick={() => quickOperation(7)}
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                7 dias
              </button>
              <button
                onClick={() => quickOperation(30)}
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                30 dias
              </button>
              <button
                onClick={() => quickOperation(90)}
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                90 dias
              </button>
              <button
                onClick={() => quickOperation(365)}
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                1 ano
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={operationType === 'difference' ? calculateDifference : calculateOperation}
          disabled={!startDate || (operationType === 'difference' ? !endDate : !daysToAdd)}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed justify-center"
        >
          <Calculator className="w-4 h-4 mr-2" />
          {operationType === 'difference' ? 'Calcular Diferença' : 'Calcular Data'}
        </button>
        <button
          onClick={resetForm}
          className="btn-secondary justify-center sm:w-auto"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Diferença entre Datas
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result.years}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Anos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">{result.months}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Meses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{result.days}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dias</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{result.totalDays}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Dias</p>
            </div>
          </div>
        </div>
      )}

      {operationResult && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Resultado da Operação
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">Data Original:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{operationResult.originalDate}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">Operação:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{operationResult.operation}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">Data Resultado:</span>
              <span className="font-semibold text-green-600 dark:text-green-400 text-lg">
                {operationResult.resultDate}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Considera anos bissextos e diferenças de dias entre meses automaticamente.
      </div>
    </div>
  );
}