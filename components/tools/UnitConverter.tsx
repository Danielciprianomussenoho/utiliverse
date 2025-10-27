// components/tools/UnitConverter.tsx - Com tipagens completas
'use client';
import { useState, useCallback, useMemo } from 'react';
import { ArrowLeftRight, Calculator, RefreshCw, Info, BookOpen } from 'lucide-react';

interface Unit {
  name: string;
  symbol: string;
  factor: number; // Fator de conversão para unidade base
  system: 'metric' | 'imperial' | 'scientific';
  description?: string;
}

interface UnitCategory {
  name: string;
  icon: string;
  units: Unit[];
  baseUnit: string;
}

interface ConversionExample {
  category: string;
  from: string;
  to: string;
  value: string;
  label: string;
  description: string;
}

const unitCategories: UnitCategory[] = [
  {
    name: 'Comprimento',
    icon: '📏',
    baseUnit: 'm',
    units: [
      { name: 'Milímetro', symbol: 'mm', factor: 0.001, system: 'metric', description: '1/1000 de metro' },
      { name: 'Centímetro', symbol: 'cm', factor: 0.01, system: 'metric', description: '1/100 de metro' },
      { name: 'Metro', symbol: 'm', factor: 1, system: 'metric', description: 'Unidade base SI' },
      { name: 'Quilômetro', symbol: 'km', factor: 1000, system: 'metric', description: '1000 metros' },
      { name: 'Polegada', symbol: 'in', factor: 0.0254, system: 'imperial', description: '2.54 cm' },
      { name: 'Pé', symbol: 'ft', factor: 0.3048, system: 'imperial', description: '12 polegadas' },
      { name: 'Jarda', symbol: 'yd', factor: 0.9144, system: 'imperial', description: '3 pés' },
      { name: 'Milha', symbol: 'mi', factor: 1609.344, system: 'imperial', description: '1760 jardas' },
    ]
  },
  {
    name: 'Peso/Massa',
    icon: '⚖️',
    baseUnit: 'kg',
    units: [
      { name: 'Miligrama', symbol: 'mg', factor: 0.000001, system: 'metric', description: '1/1000000 de kg' },
      { name: 'Grama', symbol: 'g', factor: 0.001, system: 'metric', description: '1/1000 de kg' },
      { name: 'Quilograma', symbol: 'kg', factor: 1, system: 'metric', description: 'Unidade base SI' },
      { name: 'Tonelada', symbol: 't', factor: 1000, system: 'metric', description: '1000 kg' },
      { name: 'Onça', symbol: 'oz', factor: 0.0283495, system: 'imperial', description: '28.35 gramas' },
      { name: 'Libra', symbol: 'lb', factor: 0.453592, system: 'imperial', description: '16 onças' },
    ]
  },
  {
    name: 'Temperatura',
    icon: '🌡️',
    baseUnit: '°C',
    units: [
      { name: 'Celsius', symbol: '°C', factor: 1, system: 'metric', description: 'Escala métrica' },
      { name: 'Fahrenheit', symbol: '°F', factor: 1, system: 'imperial', description: 'Escala americana' },
      { name: 'Kelvin', symbol: 'K', factor: 1, system: 'scientific', description: 'Escala absoluta' },
    ]
  },
  {
    name: 'Tempo',
    icon: '⏰',
    baseUnit: 's',
    units: [
      { name: 'Milissegundo', symbol: 'ms', factor: 0.001, system: 'metric', description: '1/1000 de segundo' },
      { name: 'Segundo', symbol: 's', factor: 1, system: 'scientific', description: 'Unidade base SI' },
      { name: 'Minuto', symbol: 'min', factor: 60, system: 'metric', description: '60 segundos' },
      { name: 'Hora', symbol: 'h', factor: 3600, system: 'metric', description: '60 minutos' },
      { name: 'Dia', symbol: 'dia', factor: 86400, system: 'metric', description: '24 horas' },
      { name: 'Semana', symbol: 'sem', factor: 604800, system: 'metric', description: '7 dias' },
    ]
  },
  {
    name: 'Volume',
    icon: '💧',
    baseUnit: 'L',
    units: [
      { name: 'Mililitro', symbol: 'mL', factor: 0.001, system: 'metric', description: '1/1000 de litro' },
      { name: 'Litro', symbol: 'L', factor: 1, system: 'metric', description: 'Unidade base' },
      { name: 'Metro Cúbico', symbol: 'm³', factor: 1000, system: 'metric', description: '1000 litros' },
      { name: 'Colher de Chá', symbol: 'c.ch.', factor: 0.005, system: 'imperial', description: '5 mL' },
      { name: 'Colher de Sopa', symbol: 'c.s.', factor: 0.015, system: 'imperial', description: '15 mL' },
      { name: 'Xícara', symbol: 'xíc', factor: 0.24, system: 'imperial', description: '240 mL' },
      { name: 'Galão', symbol: 'gal', factor: 3.78541, system: 'imperial', description: '3.785 litros' },
    ]
  },
  {
    name: 'Área',
    icon: '📐',
    baseUnit: 'm²',
    units: [
      { name: 'Centímetro Quadrado', symbol: 'cm²', factor: 0.0001, system: 'metric', description: '1/10000 m²' },
      { name: 'Metro Quadrado', symbol: 'm²', factor: 1, system: 'metric', description: 'Unidade base' },
      { name: 'Hectare', symbol: 'ha', factor: 10000, system: 'metric', description: '10000 m²' },
      { name: 'Quilômetro Quadrado', symbol: 'km²', factor: 1000000, system: 'metric', description: '1 milhão m²' },
      { name: 'Pé Quadrado', symbol: 'ft²', factor: 0.092903, system: 'imperial', description: '0.093 m²' },
      { name: 'Acre', symbol: 'ac', factor: 4046.86, system: 'imperial', description: '4047 m²' },
    ]
  }
];

export default function UnitConverter() {
  const [category, setCategory] = useState<string>('Comprimento');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('km');
  const [value, setValue] = useState<string>('1');
  const [result, setResult] = useState<number | null>(null);
  const [conversionInfo, setConversionInfo] = useState<string>('');

  const currentCategory = useMemo(() => 
    unitCategories.find(cat => cat.name === category), [category]);
  
  const units = currentCategory?.units || [];

  const convertUnits = useCallback((): void => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) {
      setResult(null);
      setConversionInfo('');
      return;
    }

    const fromUnitData = units.find(u => u.symbol === fromUnit);
    const toUnitData = units.find(u => u.symbol === toUnit);

    if (!fromUnitData || !toUnitData) {
      setResult(null);
      setConversionInfo('');
      return;
    }

    // Conversão especial para temperatura
    if (category === 'Temperatura') {
      let convertedValue: number;
      let info = '';
      
      if (fromUnit === '°C' && toUnit === '°F') {
        convertedValue = (inputValue * 9/5) + 32;
        info = `°F = (°C × 9/5) + 32`;
      } else if (fromUnit === '°F' && toUnit === '°C') {
        convertedValue = (inputValue - 32) * 5/9;
        info = `°C = (°F - 32) × 5/9`;
      } else if (fromUnit === '°C' && toUnit === 'K') {
        convertedValue = inputValue + 273.15;
        info = `K = °C + 273.15`;
      } else if (fromUnit === 'K' && toUnit === '°C') {
        convertedValue = inputValue - 273.15;
        info = `°C = K - 273.15`;
      } else if (fromUnit === '°F' && toUnit === 'K') {
        convertedValue = (inputValue - 32) * 5/9 + 273.15;
        info = `K = (°F - 32) × 5/9 + 273.15`;
      } else if (fromUnit === 'K' && toUnit === '°F') {
        convertedValue = (inputValue - 273.15) * 9/5 + 32;
        info = `°F = (K - 273.15) × 9/5 + 32`;
      } else {
        convertedValue = inputValue;
        info = 'Mesma unidade';
      }
      
      setResult(parseFloat(convertedValue.toFixed(6)));
      setConversionInfo(info);
      return;
    }

    // Conversão padrão para outras categorias
    const baseValue = inputValue * fromUnitData.factor;
    const convertedValue = baseValue / toUnitData.factor;
    const info = `${fromUnit} → ${toUnit}: × ${(toUnitData.factor/fromUnitData.factor).toFixed(6)}`;
    
    setResult(parseFloat(convertedValue.toFixed(6)));
    setConversionInfo(info);
  }, [category, fromUnit, toUnit, value, units]);

  const swapUnits = useCallback((): void => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
    setConversionInfo('');
  }, [fromUnit, toUnit]);

  const resetForm = useCallback((): void => {
    setValue('1');
    setResult(null);
    setConversionInfo('');
  }, []);

  // Atualizar unidades quando a categoria mudar
  const handleCategoryChange = useCallback((newCategory: string): void => {
    setCategory(newCategory);
    const newUnits = unitCategories.find(cat => cat.name === newCategory)?.units || [];
    if (newUnits.length >= 2) {
      setFromUnit(newUnits[0].symbol);
      setToUnit(newUnits[1].symbol);
    }
    setResult(null);
    setConversionInfo('');
  }, []);

  const quickConversions: ConversionExample[] = useMemo(() => [
    { category: 'Comprimento', from: 'km', to: 'mi', value: '1', label: '1km → mi', description: 'Quilômetro para milha' },
    { category: 'Peso/Massa', from: 'kg', to: 'lb', value: '1', label: '1kg → lb', description: 'Quilograma para libra' },
    { category: 'Temperatura', from: '°C', to: '°F', value: '25', label: '25°C → °F', description: 'Temperatura ambiente' },
    { category: 'Comprimento', from: 'cm', to: 'in', value: '30', label: '30cm → in', description: 'Régua escolar' },
    { category: 'Volume', from: 'L', to: 'gal', value: '1', label: '1L → gal', description: 'Litro para galão' },
    { category: 'Área', from: 'm²', to: 'ft²', value: '1', label: '1m² → ft²', description: 'Metro quadrado para pé quadrado' },
  ], []);

  const fromUnitData = units.find(u => u.symbol === fromUnit);
  const toUnitData = units.find(u => u.symbol === toUnit);

  return (
    <div className="space-y-6">
      {/* Category Selector */}
      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Categoria de Unidades
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-colors"
          aria-describedby="category-help"
        >
          {unitCategories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
        <p id="category-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Selecione o tipo de unidade que deseja converter
        </p>
      </div>

      {/* Converter */}
      <div className="grid md:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="value" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Valor para Converter
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="0.00"
            step="any"
            aria-describedby="value-help"
          />
          <p id="value-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Digite o valor numérico a ser convertido
          </p>
        </div>

        <div>
          <label htmlFor="fromUnit" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Unidade de Origem
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {units.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.symbol} - {unit.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center pb-2">
          <button
            onClick={swapUnits}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Trocar unidades"
          >
            <ArrowLeftRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div>
          <label htmlFor="toUnit" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Unidade de Destino
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {units.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.symbol} - {unit.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Informação das Unidades */}
      {(fromUnitData && toUnitData) && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-900 dark:text-white">{fromUnitData.symbol}:</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">{fromUnitData.description}</span>
              <div className={`text-xs mt-1 ${
                fromUnitData.system === 'metric' ? 'text-blue-600 dark:text-blue-400' :
                fromUnitData.system === 'imperial' ? 'text-orange-600 dark:text-orange-400' :
                'text-purple-600 dark:text-purple-400'
              }`}>
                {fromUnitData.system === 'metric' ? 'Sistema Métrico' :
                 fromUnitData.system === 'imperial' ? 'Sistema Imperial' : 'Científico'}
              </div>
            </div>
            <div>
              <span className="font-medium text-gray-900 dark:text-white">{toUnitData.symbol}:</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">{toUnitData.description}</span>
              <div className={`text-xs mt-1 ${
                toUnitData.system === 'metric' ? 'text-blue-600 dark:text-blue-400' :
                toUnitData.system === 'imperial' ? 'text-orange-600 dark:text-orange-400' :
                'text-purple-600 dark:text-purple-400'
              }`}>
                {toUnitData.system === 'metric' ? 'Sistema Métrico' :
                 toUnitData.system === 'imperial' ? 'Sistema Imperial' : 'Científico'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={convertUnits}
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Converter Unidades
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Result */}
      {result !== null && (
        <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {result.toLocaleString('pt-BR', { maximumFractionDigits: 6 })}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {value} {fromUnit} = {result.toLocaleString('pt-BR', { maximumFractionDigits: 6 })} {toUnit}
            </p>
            {conversionInfo && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-4 h-4 text-teal-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fórmula:</span>
                </div>
                <code className="text-sm text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded">
                  {conversionInfo}
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Conversions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
          <Info className="w-4 h-4 mr-2 text-teal-500" />
          Conversões Rápidas Populares:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
          {quickConversions.map((quick, index) => (
            <button
              key={index}
              onClick={() => {
                handleCategoryChange(quick.category);
                setFromUnit(quick.from);
                setToUnit(quick.to);
                setValue(quick.value);
              }}
              className="p-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-600 transition-colors text-gray-700 dark:text-gray-300 text-left group"
            >
              <div className="font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                {quick.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">
                {quick.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Informação Educacional */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
          📚 <strong>Sabia?</strong> O Sistema Internacional de Unidades (SI) é usado por 193 países e é essencial 
          para a ciência e comércio global. Use nosso conversor para transitar entre sistemas métrico e imperial com precisão.
        </p>
      </div>
    </div>
  );
}