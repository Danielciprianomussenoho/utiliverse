'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Play, Square, RotateCcw, Clock, Timer, AlarmClock, Volume2, VolumeX } from 'lucide-react';

type Modo = 'cronometro' | 'temporizador';
type Estado = 'parado' | 'executando' | 'pausado';

export default function CronometroTemporizador() {
  const [modo, setModo] = useState<Modo>('cronometro');
  const [estado, setEstado] = useState<Estado>('parado');
  const [tempoDecorrido, setTempoDecorrido] = useState(0); // em segundos
  const [tempoTemporizador, setTempoTemporizador] = useState(300); // 5 minutos em segundos
  const [somAtivo, setSomAtivo] = useState(true);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializar áudio
  useEffect(() => {
    audioRef.current = new Audio('/alarme.mp3'); // Você pode adicionar um som depois
    audioRef.current.volume = 0.5;
  }, []);

  // Limpar intervalo ao desmontar
  useEffect(() => {
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, []);

  const iniciar = useCallback(() => {
    if (estado === 'executando') return;

    setEstado('executando');
    intervaloRef.current = setInterval(() => {
      if (modo === 'cronometro') {
        setTempoDecorrido(prev => prev + 1);
      } else {
        setTempoTemporizador(prev => {
          if (prev <= 1) {
            // Tempo acabou
            if (intervaloRef.current) {
              clearInterval(intervaloRef.current);
            }
            setEstado('parado');
            if (somAtivo && audioRef.current) {
              audioRef.current.play().catch(() => {
                // Fallback para navegadores que bloqueiam autoplay
                console.log('Alarme disparado (áudio bloqueado)');
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);
  }, [estado, modo, somAtivo]);

  const pausar = useCallback(() => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
    setEstado('pausado');
  }, []);

  const resetar = useCallback(() => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
    setEstado('parado');
    setTempoDecorrido(0);
    setTempoTemporizador(300); // Reset para 5 minutos
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const formatarTempo = useCallback((segundos: number) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    
    if (horas > 0) {
      return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
    }
    return `${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  }, []);

  const definirTemporizador = useCallback((minutos: number) => {
    if (estado !== 'parado') return;
    setTempoTemporizador(minutos * 60);
  }, [estado]);

  // Tempos pré-definidos para o temporizador
  const temposPredefinidos = [1, 5, 10, 15, 20, 25, 30, 45, 60];

  const tempoAtual = modo === 'cronometro' ? tempoDecorrido : tempoTemporizador;
  const tempoFormatado = formatarTempo(tempoAtual);

  return (
    <div className="space-y-8">
      {/* Seletor de Modo */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Modo de Operação
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              setModo('cronometro');
              resetar();
            }}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-center ${
              modo === 'cronometro'
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400'
            }`}
          >
            <Clock className="w-5 h-5 mr-2" />
            Cronômetro
          </button>
          <button
            onClick={() => {
              setModo('temporizador');
              resetar();
            }}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-center ${
              modo === 'temporizador'
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400'
            }`}
          >
            <Timer className="w-5 h-5 mr-2" />
            Temporizador
          </button>
        </div>
      </div>

      {/* Display Principal */}
      <div className="text-center">
        <div className={`text-7xl md:text-8xl font-mono font-bold mb-6 ${
          modo === 'temporizador' && tempoTemporizador <= 60 && estado === 'executando'
            ? 'text-red-500 animate-pulse'
            : 'text-gray-900 dark:text-white'
        }`}>
          {tempoFormatado}
        </div>
        
        {modo === 'temporizador' && estado === 'parado' && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Definir Temporizador
            </label>
            <div className="flex flex-wrap gap-2 justify-center">
              {temposPredefinidos.map(minutos => (
                <button
                  key={minutos}
                  onClick={() => definirTemporizador(minutos)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    tempoTemporizador === minutos * 60
                      ? 'bg-purple-500 text-white border-purple-500'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-300'
                  }`}
                >
                  {minutos}min
                </button>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="number"
                min="1"
                max="360"
                value={Math.floor(tempoTemporizador / 60)}
                onChange={(e) => definirTemporizador(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-center"
                placeholder="Minutos"
              />
              <span className="ml-2 text-gray-600 dark:text-gray-400">minutos</span>
            </div>
          </div>
        )}
      </div>

      {/* Controles */}
      <div className="flex justify-center space-x-4">
        {estado === 'executando' ? (
          <button
            onClick={pausar}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <Square className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={iniciar}
            disabled={modo === 'temporizador' && tempoTemporizador === 0}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white p-4 rounded-full transition-all transform hover:scale-105 disabled:scale-100 shadow-lg"
          >
            <Play className="w-6 h-6" />
          </button>
        )}
        
        <button
          onClick={resetar}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          <RotateCcw className="w-6 h-6" />
        </button>

        <button
          onClick={() => setSomAtivo(!somAtivo)}
          className={`p-4 rounded-full transition-all transform hover:scale-105 ${
            somAtivo
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
          }`}
        >
          {somAtivo ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </button>
      </div>

      {/* Status */}
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          <AlarmClock className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">
            {estado === 'parado' && 'Pronto para iniciar'}
            {estado === 'executando' && 'Em execução...'}
            {estado === 'pausado' && 'Pausado'}
          </span>
        </div>
      </div>

      {/* Informações do Modo */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
            {modo === 'cronometro' ? '⏱️' : '⏰'}
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {modo === 'cronometro' ? 'Modo Cronômetro' : 'Modo Temporizador'}
            </h4>
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              {modo === 'cronometro' 
                ? 'Contagem progressiva do tempo. Ideal para medir duração de atividades.'
                : 'Contagem regressiva com alarme. Perfeito para lembrar de pausas e tarefas.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Presets Rápidos para Produtividade */}
      {modo === 'temporizador' && (
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center">
            Presets de Produtividade
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => definirTemporizador(25)}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all text-center"
            >
              <div className="text-lg font-bold text-purple-600">25min</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Pomodoro</div>
            </button>
            <button
              onClick={() => definirTemporizador(5)}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-green-200 dark:border-green-700 hover:border-green-400 transition-all text-center"
            >
              <div className="text-lg font-bold text-green-600">5min</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Pausa</div>
            </button>
            <button
              onClick={() => definirTemporizador(52)}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 transition-all text-center"
            >
              <div className="text-lg font-bold text-blue-600">52min</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Foco</div>
            </button>
            <button
              onClick={() => definirTemporizador(10)}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-400 transition-all text-center"
            >
              <div className="text-lg font-bold text-orange-600">10min</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Alongamento</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}