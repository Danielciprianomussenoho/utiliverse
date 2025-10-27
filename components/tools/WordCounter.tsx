// components/tools/WordCounter.tsx - Com tipagens completas
'use client';
import { useState, useMemo, useCallback } from 'react';
import { Type, RefreshCw, Clock, BarChart3, Target, Users, Eye } from 'lucide-react';

interface TextStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
  uniqueWords: number;
  wordFrequency: Map<string, number>;
  averageWordLength: number;
  averageSentenceLength: number;
}

interface PlatformLimit {
  name: string;
  limit: number;
  current: number;
  type: 'characters' | 'words';
  description: string;
}

export default function WordCounter() {
  const [text, setText] = useState<string>('');

  const stats: TextStats = useMemo(() => {
    if (!text.trim()) {
      return {
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: 0,
        speakingTime: 0,
        uniqueWords: 0,
        wordFrequency: new Map(),
        averageWordLength: 0,
        averageSentenceLength: 0
      };
    }

    const words = text.trim() ? text.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim()).length;
    
    // Reading time (200 words per minute)
    const readingTime = Math.ceil(words / 200);
    // Speaking time (150 words per minute)
    const speakingTime = Math.ceil(words / 150);

    // Advanced statistics
    const wordFrequency = new Map<string, number>();
    const wordsArray = text.toLowerCase().match(/\b\w+\b/g) || [];
    
    wordsArray.forEach(word => {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });

    const uniqueWords = new Set(wordsArray).size;
    const averageWordLength = wordsArray.reduce((acc, word) => acc + word.length, 0) / wordsArray.length;
    const averageSentenceLength = sentences > 0 ? words / sentences : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
      speakingTime,
      uniqueWords,
      wordFrequency,
      averageWordLength: Number(averageWordLength.toFixed(1)),
      averageSentenceLength: Number(averageSentenceLength.toFixed(1))
    };
  }, [text]);

  const resetText = useCallback((): void => {
    setText('');
  }, []);

  const platformLimits: PlatformLimit[] = useMemo(() => [
    { name: 'Twitter/X', limit: 280, current: stats.characters, type: 'characters', description: 'Tweet padrão' },
    { name: 'Meta Description', limit: 160, current: stats.characters, type: 'characters', description: 'Otimização SEO' },
    { name: 'Email Subject', limit: 50, current: stats.characters, type: 'characters', description: 'Assunto ideal' },
    { name: 'Instagram Caption', limit: 2200, current: stats.characters, type: 'characters', description: 'Legenda completa' },
    { name: 'SEO Article', limit: 2000, current: stats.words, type: 'words', description: 'Artigo otimizado' },
    { name: 'LinkedIn Post', limit: 3000, current: stats.characters, type: 'characters', description: 'Postagem profissional' },
  ], [stats.characters, stats.words]);

  const sampleTexts = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', label: 'Lorem Ipsum' },
    { text: 'Esta é uma frase de exemplo para testar o contador de palavras e caracteres em português.', label: 'Frase PT-BR' },
    { text: 'O rato roeu a roupa do rei de Roma enquanto a rainha assistia ao espetáculo real.', label: 'Trava-língua' },
    { text: 'Bem-vindo ao Utiliverse! Sua suíte completa de ferramentas online gratuitas para aumentar sua produtividade.', label: 'Utiliverse' },
  ];

  const topWords = useMemo(() => {
    const sorted = Array.from(stats.wordFrequency.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return sorted;
  }, [stats.wordFrequency]);

  return (
    <div className="space-y-6">
      {/* Text Area */}
      <div>
        <label htmlFor="text" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Digite ou cole seu texto para análise
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
          placeholder="Comece a digitar seu texto aqui para ver as estatísticas em tempo real..."
          aria-describedby="text-help"
        />
        <p id="text-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Digite ou cole qualquer texto para analisar palavras, caracteres, tempo de leitura e muito mais
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetText}
          disabled={!text}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Limpar Texto
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
          <Type className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.words.toLocaleString()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Palavras</div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center border border-green-200 dark:border-green-800">
          <BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.characters.toLocaleString()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Caracteres</div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-800">
          <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.charactersNoSpaces.toLocaleString()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Sem espaços</div>
        </div>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 text-center border border-orange-200 dark:border-orange-800">
          <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.readingTime}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Min leitura</div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          Estatísticas Detalhadas do Texto
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.sentences}</div>
            <div className="text-gray-600 dark:text-gray-400">Frases</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.paragraphs}</div>
            <div className="text-gray-600 dark:text-gray-400">Parágrafos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.readingTime}</div>
            <div className="text-gray-600 dark:text-gray-400">Min leitura</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.speakingTime}</div>
            <div className="text-gray-600 dark:text-gray-400">Min fala</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.uniqueWords}</div>
            <div className="text-gray-600 dark:text-gray-400">Palavras únicas</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{stats.averageWordLength}</div>
            <div className="text-gray-600 dark:text-gray-400">Média letras/palavra</div>
          </div>
        </div>

        {/* Word Frequency */}
        {topWords.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <Target className="w-4 h-4 mr-2 text-green-500" />
              Palavras Mais Frequentes
            </h4>
            <div className="flex flex-wrap gap-2">
              {topWords.map(([word, count]) => (
                <div key={word} className="bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full text-xs">
                  <span className="font-medium text-green-700 dark:text-green-300">{word}</span>
                  <span className="text-green-500 dark:text-green-400 ml-1">({count})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Platform Limits */}
      {text && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-500" />
            Limites de Plataformas
          </h3>
          <div className="space-y-4">
            {platformLimits.map((limit) => (
              <div key={limit.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{limit.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({limit.description})</span>
                  </div>
                  <span className={`text-sm font-medium ${
                    limit.current > limit.limit ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                  }`}>
                    {limit.current}/{limit.limit} {limit.type === 'words' ? 'palavras' : 'caracteres'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      limit.current > limit.limit ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ 
                      width: `${Math.min((limit.current / limit.limit) * 100, 100)}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sample Texts */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
          <Eye className="w-4 h-4 mr-2 text-purple-500" />
          Textos de Exemplo para Testar:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {sampleTexts.map((example, index) => (
            <button
              key={index}
              onClick={() => setText(example.text)}
              className="p-2 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors text-gray-700 dark:text-gray-300 text-left"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      {/* Informação Adicional */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
          💡 <strong>Dica Profissional:</strong> Para SEO, artigos entre 1.500-2.500 palavras performam melhor no Google. 
          Use nossa análise de palavras frequentes para otimizar a densidade de keywords naturalmente.
        </p>
      </div>
    </div>
  );
}