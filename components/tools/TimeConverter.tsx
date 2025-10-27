// components/tools/TimeConverter.tsx - Com tipagens completas
'use client';
import { useState, useCallback } from 'react';
import { RefreshCw, Copy, Check } from 'lucide-react';

type TimeUnit = 'hours' | 'minutes' | 'seconds' | 'days';

interface TimeValues {
  hours: string;
  minutes: string;
  seconds: string;
  days: string;
}

export default function TimeConverter() {
  const [values, setValues] = useState<TimeValues>({
    hours: '',
    minutes: '',
    seconds: '',
    days: ''
  });
  const [copied, setCopied] = useState<string | null>(null);

  // Função para converter todos os valores quando um campo é alterado
  const convertTime = useCallback((changedUnit: TimeUnit, value: string): void => {
    if (!value || value === '') {
      setValues({ hours: '', minutes: '', seconds: '', days: '' });
      return;
    }

    const numValue = parseFloat(value.replace(',', '.'));
    if (isNaN(numValue)) return;

    let hours = 0, minutes = 0, seconds = 0, days = 0;

    switch (changedUnit) {
      case 'hours':
        hours = numValue;
        minutes = hours * 60;
        seconds = hours * 3600;
        days = hours / 24;
        break;
      case 'minutes':
        minutes = numValue;
        hours = minutes / 60;
        seconds = minutes * 60;
        days = hours / 24;
        break;
      case 'seconds':
        seconds = numValue;
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        break;
      case 'days':
        days = numValue;
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        break;
    }

    setValues({
      hours: hours % 1 === 0 ? hours.toString() : hours.toFixed(4),
      minutes: minutes % 1 === 0 ? minutes.toString() : minutes.toFixed(4),
      seconds: seconds % 1 === 0 ? seconds.toString() : seconds.toFixed(4),
      days: days % 1 === 0 ? days.toString() : days.toFixed(4)
    });
  }, []);

  const handleInputChange = useCallback((unit: TimeUnit, value: string): void => {
    // Permite apenas números, ponto e vírgula
    const cleanedValue = value.replace(/[^0-9,.]/g, '');
    
    setValues(prev => ({
      ...prev,
      [unit]: cleanedValue
    }));

    if (cleanedValue) {
      convertTime(unit, cleanedValue);
    } else {
      setValues({ hours: '', minutes: '', seconds: '', days: '' });
    }
  }, [convertTime]);

  const resetForm = useCallback((): void => {
    setValues({ hours: '', minutes: '', seconds: '', days: '' });
  }, []);

  const copyToClipboard = async (value: string, unit: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(unit);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  const formatDisplayValue = (value: string): string => {
    if (!value) return '';
    const num = parseFloat(value);
    return num % 1 === 0 ? num.toString() : num.toFixed(2);
  };

  return (
    <div className="space-y-6">
              {/* Unidades de Tempo */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Horas */}
        <div className="relative">
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Horas
          </label>
          <div className="relative">
            <input
              type="text"
              id="hours"
              value={values.hours}
              onChange={(e) => handleInputChange('hours', e.target.value)}
              placeholder="Ex: 2.5"
              className="input-field pr-20"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 text-sm">h</span>
            </div>
            {values.hours && (
              <button
                onClick={() => copyToClipboard(values.hours, 'hours')}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'hours' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Minutos */}
        <div className="relative">
          <label htmlFor="minutes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Minutos
          </label>
          <div className="relative">
            <input
              type="text"
              id="minutes"
              value={values.minutes}
              onChange={(e) => handleInputChange('minutes', e.target.value)}
              placeholder="Ex: 150"
              className="input-field pr-20"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 text-sm">min</span>
            </div>
            {values.minutes && (
              <button
                onClick={() => copyToClipboard(values.minutes, 'minutes')}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'minutes' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Segundos */}
        <div className="relative">
          <label htmlFor="seconds" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Segundos
          </label>
          <div className="relative">
            <input
              type="text"
              id="seconds"
              value={values.seconds}
              onChange={(e) => handleInputChange('seconds', e.target.value)}
              placeholder="Ex: 9000"
              className="input-field pr-20"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 text-sm">seg</span>
            </div>
            {values.seconds && (
              <button
                onClick={() => copyToClipboard(values.seconds, 'seconds')}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'seconds' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Dias */}
        <div className="relative">
          <label htmlFor="days" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Dias
          </label>
          <div className="relative">
            <input
              type="text"
              id="days"
              value={values.days}
              onChange={(e) => handleInputChange('days', e.target.value)}
              placeholder="Ex: 0.5"
              className="input-field pr-20"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 text-sm">dias</span>
            </div>
            {values.days && (
              <button
                onClick={() => copyToClipboard(values.days, 'days')}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {copied === 'days' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex space-x-4">
        <button
          onClick={resetForm}
          className="btn-secondary flex-1"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Resultados em Destaque */}
      {values.hours && (
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Resumo da Conversão
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">{formatDisplayValue(values.hours)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Horas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{formatDisplayValue(values.minutes)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Minutos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{formatDisplayValue(values.seconds)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Segundos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{formatDisplayValue(values.days)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Dias</div>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Todas as conversões são atualizadas automaticamente quando você digita em qualquer campo
      </div>
    </div>
  );
}