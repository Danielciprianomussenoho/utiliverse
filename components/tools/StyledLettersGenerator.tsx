'use client';
import { useState, useCallback, useMemo } from 'react';
import { Copy, Download, Sparkles, RotateCcw, Check } from 'lucide-react';

// Mapeamento direto e confiável para caracteres estilizados
const FONT_STYLES = {
  'Bold': {
    name: 'Negrito',
    preview: '𝑻𝒆𝒙𝒕𝒐 𝑵𝒆𝒈𝒓𝒊𝒕𝒐',
    mapping: {
      'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
      'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭'
    }
  },
  'Italic': {
    name: 'Itálico',
    preview: '𝑻𝒆𝒙𝒕𝒐 𝑰𝒕á𝒍𝒊𝒄𝒐',
    mapping: {
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
    }
  },
  'BoldItalic': {
    name: 'Negrito Itálico',
    preview: '𝑻𝒆𝒙𝒕𝒐 𝑵𝒆𝒈𝒓𝒊𝒕𝒐 𝑰𝒕á𝒍𝒊𝒄𝒐',
    mapping: {
      'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
      'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
    }
  },
  'Script': {
    name: 'Caligrafia',
    preview: '𝒯𝑒𝓍𝓉𝑜 𝒞𝒶𝓁𝒾𝑔𝓇𝒶𝒻𝒾𝒶𝒹𝑜',
    mapping: {
      'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
      'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
    }
  },
  'Monospace': {
    name: 'Monoespaçada',
    preview: '𝚃𝚎𝚡𝚝𝚘 𝙼𝚘𝚗𝚘𝚎𝚜𝚙𝚊ç𝚊𝚍𝚘',
    mapping: {
      'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
      'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉'
    }
  },
  'SansSerif': {
    name: 'Sem Serifa',
    preview: '𝖳𝖾𝗑𝗍𝗈 𝖲𝖾𝗆 𝖲𝖾𝗋𝗂𝖿𝖺',
    mapping: {
      'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
      'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹'
    }
  },
  'DoubleStruck': {
    name: 'Duplo Risco',
    preview: '𝕋𝕖𝕩𝕥𝕠 𝔻𝕦𝕡𝕝𝕠 ℝ𝕚𝕤𝕔𝕠',
    mapping: {
      'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
      'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
    }
  },
  'SmallCaps': {
    name: 'Versaletes',
    preview: 'ᴛᴇxᴛᴏ ᴇᴍ ᴠᴇʀsᴀʟᴇᴛᴇs',
    mapping: {
      'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
      'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
    }
  }
};

export default function StyledLettersGenerator() {
  const [inputText, setInputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('Bold');
  const [copied, setCopied] = useState(false);

  // Função de transformação simplificada
  const transformText = useCallback((text: string, style: keyof typeof FONT_STYLES) => {
    const styleData = FONT_STYLES[style];
    return text.split('').map(char => {
      return styleData.mapping[char as keyof typeof styleData.mapping] || char;
    }).join('');
  }, []);

  // Memoize o resultado para melhor performance
  const styledText = useMemo(() => {
    if (!inputText.trim()) return '';
    return transformText(inputText, selectedStyle as keyof typeof FONT_STYLES);
  }, [inputText, selectedStyle, transformText]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(styledText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback para navegadores mais antigos
      console.error('Erro ao copiar para a área de transferência:', err);
      const textArea = document.createElement('textarea');
      textArea.value = styledText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [styledText]);

  const resetGenerator = useCallback(() => {
    setInputText('');
    setSelectedStyle('Bold');
    setCopied(false);
  }, []);

  const downloadText = useCallback(() => {
    const blob = new Blob([styledText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `texto-estilizado-${selectedStyle}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [styledText, selectedStyle]);

  const isFormValid = inputText.trim().length > 0;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="space-y-4">
        <label htmlFor="text-input" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          Digite seu texto:
        </label>
        <textarea
          id="text-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value.slice(0, 50))}
          placeholder="Ex: Daniel, Meu Nome, Instagram, TikTok..."
          className="w-full h-24 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white resize-none transition-colors text-lg"
          aria-describedby="text-help"
          maxLength={50}
        />
        <div className="flex justify-between items-center">
          <p id="text-help" className="text-sm text-gray-500 dark:text-gray-400">
            Ideal para nicks, redes sociais, títulos curtos
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {inputText.length}/50
          </span>
        </div>
      </div>

      {/* Style Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          Escolha o estilo de fonte:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Object.entries(FONT_STYLES).map(([key, style]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              className={`p-3 border rounded-lg text-center transition-all duration-200 group ${
                selectedStyle === key
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 shadow-md scale-105'
                  : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md bg-white dark:bg-gray-700'
              }`}
            >
              <div className="text-xs font-semibold mb-1 truncate">{style.name}</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-400 h-4 flex items-center justify-center group-hover:text-purple-600">
                {style.preview.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {styledText ? 'Seu texto estilizado:' : 'Preview:'}
        </label>
        <div className={`rounded-lg p-6 min-h-20 border-2 transition-all duration-300 ${
          styledText 
            ? 'bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 border-purple-200 dark:border-purple-800' 
            : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700'
        }`}>
          <div className={`text-2xl md:text-3xl font-bold text-center break-words leading-relaxed ${
            styledText ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'
          }`}>
            {styledText || 'Seu texto aparecerá aqui...'}
          </div>
        </div>
        
        {styledText && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center flex items-center justify-center">
            <Check className="w-4 h-4 mr-1" />
            Pronto! Copie e use onde quiser
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={copyToClipboard}
          disabled={!isFormValid}
          className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copiar Texto
            </>
          )}
        </button>
        
        <button
          onClick={downloadText}
          disabled={!isFormValid}
          className="px-4 py-3 border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 flex items-center justify-center shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar
        </button>
        
        <button
          onClick={resetGenerator}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center shadow hover:shadow-md text-sm"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Limpar
        </button>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start">
          <Sparkles className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
          <div className="text-sm">
            <p className="text-blue-700 dark:text-blue-400">
              <strong>Dica:</strong> Use em <strong>Instagram</strong>, <strong>TikTok</strong>, <strong>Discord</strong>, 
              <strong> jogos</strong> e <strong>redes sociais</strong>. Funciona na maioria das plataformas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}