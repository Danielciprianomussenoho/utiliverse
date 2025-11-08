// components/tools/AgeCalculator.tsx - Com tipagens completas
'use client';
import { useState, useCallback } from 'react';
import { Calendar, Calculator, RefreshCw, Gift } from 'lucide-react';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthday: string;
  daysUntilNextBirthday: number;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = useCallback((): void => {
    if (!birthDate) {
      setResult(null);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total days
    const diffTime = Math.abs(today.getTime() - birth.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years,
      months,
      days,
      totalDays,
      nextBirthday: nextBirthday.toLocaleDateString('pt-BR'),
      daysUntilNextBirthday
    });
  }, [birthDate]);

  const resetForm = useCallback((): void => {
    setBirthDate('');
    setResult(null);
  }, []);

  const getBirthdayMessage = (daysUntil: number): string => {
    if (daysUntil === 0) return '🎉 Parabéns! Hoje é seu aniversário!';
    if (daysUntil === 1) return '🎂 Amanhã é seu aniversário! Prepare-se!';
    if (daysUntil <= 7) return '🎁 Seu aniversário está chegando! Faltam poucos dias!';
    if (daysUntil <= 30) return '📅 Seu aniversário está próximo neste mês!';
    return '⏳ Seu próximo aniversário está a caminho!';
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Data de Nascimento
        </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
          max={new Date().toISOString().split('T')[0]}
          aria-describedby="birthdate-help"
        />
        <p id="birthdate-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Selecione sua data de nascimento para calcular sua idade exata
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={calculateAge}
          disabled={!birthDate}
          className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Calcular idade exata"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calcular Minha Idade
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {result && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Sua Idade Atual
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Anos:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{result.years}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Meses:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{result.months}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Dias:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{result.days}</span>
                </div>
                <div className="flex justify-between border-t border-green-200 dark:border-green-700 pt-3">
                  <span className="text-gray-600 dark:text-gray-400">Total de dias vividos:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{result.totalDays.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-blue-600" />
                Próximo Aniversário
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Data:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{result.nextBirthday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Faltam:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {result.daysUntilNextBirthday} dias
                  </span>
                </div>
                <div className="border-t border-blue-200 dark:border-blue-700 pt-3">
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {getBirthdayMessage(result.daysUntilNextBirthday)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aviso Informativo */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300 text-center">
              💡 <strong>Dica:</strong> Esta calculadora fornece uma estimativa precisa baseada em datas. 
              Para fins legais e oficiais, consulte sempre documentos oficiais como certidão de nascimento.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}