'use client';
import { useState, useEffect, useCallback } from 'react';
import {   Eraser, Delete } from 'lucide-react';

type Operation = '+' | '-' | '×' | '÷' | '^' | null;
type ScientificFunction = 
  | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' 
  | 'sinh' | 'cosh' | 'tanh' | 'log' | 'ln' | 'exp' 
  | '√' | 'x²' | 'x³' | 'x!' | '1/x' | 'π' | 'e' | '(' | ')';

export default function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [memory, setMemory] = useState<number>(0);
  const [isRadians, setIsRadians] = useState(true);
  const [expression, setExpression] = useState('');

  const calculate = useCallback((a: number, b: number, op: Operation): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      case '^': return Math.pow(a, b);
      default: return b;
    }
  }, []);

  const handleScientificFunction = (func: ScientificFunction) => {
    const value = parseFloat(display);
    let result = 0;
    let newExpression = '';

    switch (func) {
      case 'sin':
        result = isRadians ? Math.sin(value) : Math.sin(value * Math.PI / 180);
        newExpression = `sin(${value}${isRadians ? 'rad' : '°'})`;
        break;
      case 'cos':
        result = isRadians ? Math.cos(value) : Math.cos(value * Math.PI / 180);
        newExpression = `cos(${value}${isRadians ? 'rad' : '°'})`;
        break;
      case 'tan':
        result = isRadians ? Math.tan(value) : Math.tan(value * Math.PI / 180);
        newExpression = `tan(${value}${isRadians ? 'rad' : '°'})`;
        break;
      case 'asin':
        result = isRadians ? Math.asin(value) : Math.asin(value) * 180 / Math.PI;
        newExpression = `asin(${value})`;
        break;
      case 'acos':
        result = isRadians ? Math.acos(value) : Math.acos(value) * 180 / Math.PI;
        newExpression = `acos(${value})`;
        break;
      case 'atan':
        result = isRadians ? Math.atan(value) : Math.atan(value) * 180 / Math.PI;
        newExpression = `atan(${value})`;
        break;
      case 'sinh':
        result = Math.sinh(value);
        newExpression = `sinh(${value})`;
        break;
      case 'cosh':
        result = Math.cosh(value);
        newExpression = `cosh(${value})`;
        break;
      case 'tanh':
        result = Math.tanh(value);
        newExpression = `tanh(${value})`;
        break;
      case 'log':
        result = Math.log10(value);
        newExpression = `log(${value})`;
        break;
      case 'ln':
        result = Math.log(value);
        newExpression = `ln(${value})`;
        break;
      case 'exp':
        result = Math.exp(value);
        newExpression = `exp(${value})`;
        break;
      case '√':
        result = Math.sqrt(value);
        newExpression = `√(${value})`;
        break;
      case 'x²':
        result = value * value;
        newExpression = `(${value})²`;
        break;
      case 'x³':
        result = value * value * value;
        newExpression = `(${value})³`;
        break;
      case 'x!':
        result = factorial(value);
        newExpression = `(${value})!`;
        break;
      case '1/x':
        result = 1 / value;
        newExpression = `1/(${value})`;
        break;
      case 'π':
        result = Math.PI;
        newExpression = 'π';
        break;
      case 'e':
        result = Math.E;
        newExpression = 'e';
        break;
      case '(':
        setDisplay(display === '0' ? '(' : display + '(');
        return;
      case ')':
        setDisplay(display + ')');
        return;
    }

    if (!isNaN(result)) {
      setDisplay(String(result));
      setExpression(newExpression);
      setWaitingForNewValue(true);
    }
  };

  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
      setExpression('');
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
      setExpression('');
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
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
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
    setExpression('');
  };

  const handleClearEntry = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  // Funções de memória
  const handleMemoryAdd = () => {
    setMemory(memory + parseFloat(display));
  };

  const handleMemorySubtract = () => {
    setMemory(memory - parseFloat(display));
  };

  const handleMemoryRecall = () => {
    setDisplay(String(memory));
  };

  const handleMemoryClear = () => {
    setMemory(0);
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
      else if (e.key === 'p' || e.key === 'P') handleScientificFunction('π');
      else if (e.key === 'e' || e.key === 'E') handleScientificFunction('e');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, waitingForNewValue, previousValue, operation, isRadians]);

  const buttonClass = (type: 'number' | 'operation' | 'scientific' | 'equals' | 'function' | 'memory' = 'number') => {
    const base = "h-12 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 ";
    
    switch (type) {
      case 'number':
        return base + "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600";
      case 'operation':
        return base + "bg-blue-500 text-white hover:bg-blue-600";
      case 'scientific':
        return base + "bg-purple-500 text-white hover:bg-purple-600";
      case 'equals':
        return base + "bg-green-500 text-white hover:bg-green-600";
      case 'function':
        return base + "bg-red-500 text-white hover:bg-red-600";
      case 'memory':
        return base + "bg-amber-500 text-white hover:bg-amber-600";
      default:
        return base;
    }
  };

  return (
    <div className="space-y-4">
      {/* Display e Controles */}
      <div className="bg-gray-900 dark:bg-black rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-400 text-xs">
            {isRadians ? 'RAD' : 'DEG'}
          </div>
          <div className="text-gray-400 text-xs">
            M: {memory}
          </div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-xs min-h-[16px] mb-1">
            {expression || (previousValue !== null && operation && `${previousValue} ${operation}`)}
          </div>
          <div className="text-white text-2xl font-mono font-bold min-h-[36px] flex items-center justify-end break-all">
            {display.length > 15 ? parseFloat(display).toExponential(8) : display}
          </div>
        </div>
      </div>

      {/* Controles Superiores */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <button 
          onClick={() => setIsRadians(!isRadians)}
          className={`h-10 rounded-lg font-semibold text-sm transition-all ${
            isRadians 
              ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
              : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
          }`}
        >
        {isRadians ? 'RAD' : 'DEG'}
        </button>
        <button onClick={handleMemoryClear} className={buttonClass('memory')}>MC</button>
        <button onClick={handleMemoryRecall} className={buttonClass('memory')}>MR</button>
        <button onClick={handleMemoryAdd} className={buttonClass('memory')}>M+</button>
      </div>

      {/* Teclado da Calculadora Científica */}
      <div className="grid grid-cols-8 gap-2">
        {/* Primeira linha - Funções avançadas */}
        <button onClick={() => handleScientificFunction('sin')} className={buttonClass('scientific')}>sin</button>
        <button onClick={() => handleScientificFunction('cos')} className={buttonClass('scientific')}>cos</button>
        <button onClick={() => handleScientificFunction('tan')} className={buttonClass('scientific')}>tan</button>
        <button onClick={() => handleScientificFunction('π')} className={buttonClass('scientific')}>π</button>
        <button onClick={() => handleScientificFunction('e')} className={buttonClass('scientific')}>e</button>
        <button onClick={() => handleScientificFunction('(')} className={buttonClass('scientific')}>(</button>
        <button onClick={() => handleScientificFunction(')')} className={buttonClass('scientific')}>)</button>
        <button onClick={handleBackspace} className={buttonClass('function')}><Delete className="w-4 h-4 mx-auto" /></button>

        {/* Segunda linha - Funções avançadas */}
        <button onClick={() => handleScientificFunction('asin')} className={buttonClass('scientific')}>sin⁻¹</button>
        <button onClick={() => handleScientificFunction('acos')} className={buttonClass('scientific')}>cos⁻¹</button>
        <button onClick={() => handleScientificFunction('atan')} className={buttonClass('scientific')}>tan⁻¹</button>
        <button onClick={() => handleScientificFunction('x²')} className={buttonClass('scientific')}>x²</button>
        <button onClick={() => handleScientificFunction('x³')} className={buttonClass('scientific')}>x³</button>
        <button onClick={() => handleScientificFunction('x!')} className={buttonClass('scientific')}>x!</button>
        <button onClick={() => handleScientificFunction('1/x')} className={buttonClass('scientific')}>1/x</button>
        <button onClick={handleClearEntry} className={buttonClass('function')}>CE</button>

        {/* Terceira linha - Funções científicas */}
        <button onClick={() => handleScientificFunction('sinh')} className={buttonClass('scientific')}>sinh</button>
        <button onClick={() => handleScientificFunction('cosh')} className={buttonClass('scientific')}>cosh</button>
        <button onClick={() => handleScientificFunction('tanh')} className={buttonClass('scientific')}>tanh</button>
        <button onClick={() => handleScientificFunction('√')} className={buttonClass('scientific')}>√</button>
        <button onClick={() => handleScientificFunction('log')} className={buttonClass('scientific')}>log</button>
        <button onClick={() => handleScientificFunction('ln')} className={buttonClass('scientific')}>ln</button>
        <button onClick={() => handleScientificFunction('exp')} className={buttonClass('scientific')}>exp</button>
        <button onClick={handleClear} className={buttonClass('function')}><Eraser className="w-4 h-4 mx-auto" /></button>

        {/* Números e operações básicas */}
        <button onClick={() => handleNumber('7')} className={buttonClass('number')}>7</button>
        <button onClick={() => handleNumber('8')} className={buttonClass('number')}>8</button>
        <button onClick={() => handleNumber('9')} className={buttonClass('number')}>9</button>
        <button onClick={() => handleOperation('÷')} className={buttonClass('operation')}>÷</button>
        <button onClick={() => handleOperation('^')} className={buttonClass('scientific')}>x^y</button>
        <button onClick={handleMemorySubtract} className={buttonClass('memory')}>M-</button>

        <button onClick={() => handleNumber('4')} className={buttonClass('number')}>4</button>
        <button onClick={() => handleNumber('5')} className={buttonClass('number')}>5</button>
        <button onClick={() => handleNumber('6')} className={buttonClass('number')}>6</button>
        <button onClick={() => handleOperation('×')} className={buttonClass('operation')}>×</button>

        <button onClick={() => handleNumber('1')} className={buttonClass('number')}>1</button>
        <button onClick={() => handleNumber('2')} className={buttonClass('number')}>2</button>
        <button onClick={() => handleNumber('3')} className={buttonClass('number')}>3</button>
        <button onClick={() => handleOperation('-')} className={buttonClass('operation')}>-</button>

        <button onClick={() => handleNumber('0')} className="col-span-2 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold transition-all">0</button>
        <button onClick={handleDecimal} className={buttonClass('number')}>.</button>
        <button onClick={() => handleOperation('+')} className={buttonClass('operation')}>+</button>

        {/* Linha do igual */}
        <button onClick={handleEquals} className="col-span-4 h-12 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all">
          =
        </button>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Use RAD/DEG para alternar entre radianos e graus
      </div>
    </div>
  );
}