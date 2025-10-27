'use client';
import { useState, useEffect, useCallback } from 'react';
import {  Delete, Eraser } from 'lucide-react';

type Operation = '+' | '-' | '×' | '÷' | '%' | '²' | null;

export default function CalculatorTool() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const calculate = useCallback((a: number, b: number, op: Operation): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      case '%': return (a * b) / 100;
      case '²': return a * a;
      default: return b;
    }
  }, []);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (nextOperation: Operation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation && !waitingForNewValue) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
      setHistory(prev => [...prev, `${previousValue} ${operation} ${inputValue} = ${result}`]);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setHistory(prev => [...prev, `${previousValue} ${operation} ${inputValue} = ${result}`]);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleClearEntry = () => {
    setDisplay('0');
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const handleSquare = () => {
    const value = parseFloat(display);
    const result = value * value;
    setDisplay(String(result));
    setHistory(prev => [...prev, `${value}² = ${result}`]);
    setWaitingForNewValue(true);
  };

  // Suporte a teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleNumber(e.key);
      else if (e.key === '.') handleDecimal();
      else if (e.key === '+') handleOperation('+');
      else if (e.key === '-') handleOperation('-');
      else if (e.key === '*') handleOperation('×');
      else if (e.key === '/') handleOperation('÷');
      else if (e.key === 'Enter' || e.key === '=') handleEquals();
      else if (e.key === 'Escape') handleClear();
      else if (e.key === 'Backspace') handleBackspace();
      else if (e.key === '%') handlePercentage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, waitingForNewValue, previousValue, operation]);

  const buttonClass = (type: 'number' | 'operation' | 'equals' | 'function' = 'number') => {
    const base = "h-14 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95 ";
    
    switch (type) {
      case 'number':
        return base + "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600";
      case 'operation':
        return base + "bg-blue-500 text-white hover:bg-blue-600";
      case 'equals':
        return base + "bg-green-500 text-white hover:bg-green-600";
      case 'function':
        return base + "bg-red-500 text-white hover:bg-red-600";
      default:
        return base;
    }
  };

  return (
    <div className="space-y-4">
      {/* Display */}
      <div className="bg-gray-900 dark:bg-black rounded-xl p-4 mb-4">
        <div className="text-right">
          <div className="text-gray-400 text-sm min-h-[20px]">
            {previousValue !== null && operation && (
              `${previousValue} ${operation}`
            )}
          </div>
          <div className="text-white text-3xl font-mono font-bold min-h-[48px] flex items-center justify-end">
            {display.length > 12 ? parseFloat(display).toExponential(6) : display}
          </div>
        </div>
      </div>

      {/* Teclado da Calculadora */}
      <div className="grid grid-cols-4 gap-3">
        {/* Linha 1 */}
        <button onClick={handleClear} className={buttonClass('function')}>
          <Eraser className="w-5 h-5 mx-auto" />
        </button>
        <button onClick={handleClearEntry} className={buttonClass('function')}>
          CE
        </button>
        <button onClick={handleBackspace} className={buttonClass('function')}>
          <Delete className="w-5 h-5 mx-auto" />
        </button>
        <button onClick={() => handleOperation('÷')} className={buttonClass('operation')}>
          ÷
        </button>

        {/* Linha 2 */}
        <button onClick={() => handleNumber('7')} className={buttonClass('number')}>7</button>
        <button onClick={() => handleNumber('8')} className={buttonClass('number')}>8</button>
        <button onClick={() => handleNumber('9')} className={buttonClass('number')}>9</button>
        <button onClick={() => handleOperation('×')} className={buttonClass('operation')}>
          ×
        </button>

        {/* Linha 3 */}
        <button onClick={() => handleNumber('4')} className={buttonClass('number')}>4</button>
        <button onClick={() => handleNumber('5')} className={buttonClass('number')}>5</button>
        <button onClick={() => handleNumber('6')} className={buttonClass('number')}>6</button>
        <button onClick={() => handleOperation('-')} className={buttonClass('operation')}>
          -
        </button>

        {/* Linha 4 */}
        <button onClick={() => handleNumber('1')} className={buttonClass('number')}>1</button>
        <button onClick={() => handleNumber('2')} className={buttonClass('number')}>2</button>
        <button onClick={() => handleNumber('3')} className={buttonClass('number')}>3</button>
        <button onClick={() => handleOperation('+')} className={buttonClass('operation')}>
          +
        </button>

        {/* Linha 5 */}
        <button onClick={handlePercentage} className={buttonClass('operation')}>
          %
        </button>
        <button onClick={() => handleNumber('0')} className={buttonClass('number')}>0</button>
        <button onClick={handleDecimal} className={buttonClass('number')}>.</button>
        <button onClick={handleEquals} className={buttonClass('equals')}>
          =
        </button>

        {/* Linha 6 - Botão extra */}
        <button 
          onClick={handleSquare} 
          className="col-span-4 h-12 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all duration-200 active:scale-95"
        >
          x²
        </button>
      </div>

      {/* Histórico */}
      {history.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg max-h-32 overflow-y-auto">
          <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">
            Histórico:
          </div>
          {history.slice(-3).map((item, index) => (
            <div key={index} className="text-xs text-gray-500 dark:text-gray-400 font-mono">
              {item}
            </div>
          ))}
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Use o teclado físico para digitar mais rápido
      </div>
    </div>
  );
}