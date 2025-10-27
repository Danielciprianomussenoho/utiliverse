'use client';
import { useState, useEffect, useRef } from 'react';
import {  
  Download, 
  Upload, 
  Bold, 
  Italic, 
  Underline, 
  Type, 
  Trash2,
  Minus,
  Plus
} from 'lucide-react';

interface TextStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  paragraphs: number;
  readingTime: number;
}

export default function TextEditor() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    paragraphs: 0,
    readingTime: 0
  });
  const [fontSize, setFontSize] = useState(16);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Carregar texto salvo do localStorage
  useEffect(() => {
    const savedText = localStorage.getItem('textEditorContent');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Salvar texto automaticamente
  useEffect(() => {
    localStorage.setItem('textEditorContent', text);
  }, [text]);

  // Calcular estatísticas
  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).length : 0;
    const readingTime = Math.ceil(words / 200);

    setStats({
      words,
      characters,
      charactersNoSpaces,
      paragraphs,
      readingTime
    });
  }, [text]);

  const handleFormat = (type: 'bold' | 'italic' | 'underline') => {
    if (!textAreaRef.current) return;

    const start = textAreaRef.current.selectionStart;
    const end = textAreaRef.current.selectionEnd;
    const selectedText = text.substring(start, end);

    if (!selectedText) {
      // Se não há texto selecionado, apenas inserir tags vazias
      let tags = { start: '', end: '' };
      switch (type) {
        case 'bold':
          tags = { start: '<b>', end: '</b>' };
          break;
        case 'italic':
          tags = { start: '<i>', end: '</i>' };
          break;
        case 'underline':
          tags = { start: '<u>', end: '</u>' };
          break;
      }

      const newText = text.substring(0, start) + tags.start + tags.end + text.substring(end);
      setText(newText);

      // Posicionar cursor entre as tags
      setTimeout(() => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
          textAreaRef.current.setSelectionRange(start + tags.start.length, start + tags.start.length);
        }
      }, 0);
      return;
    }

    // Aplicar formatação ao texto selecionado
    let formattedText = '';
    switch (type) {
      case 'bold':
        formattedText = `<b>${selectedText}</b>`;
        break;
      case 'italic':
        formattedText = `<i>${selectedText}</i>`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
    }

    const newText = text.substring(0, start) + formattedText + text.substring(end);
    setText(newText);

    // Restaurar foco e seleção
    setTimeout(() => {
      if (textAreaRef.current) {
        textAreaRef.current.focus();
        const newStart = start + formattedText.length;
        textAreaRef.current.setSelectionRange(newStart, newStart);
      }
    }, 0);
  };

  const transformText = (type: 'uppercase' | 'lowercase' | 'capitalize') => {
    if (!textAreaRef.current) return;

    const start = textAreaRef.current.selectionStart;
    const end = textAreaRef.current.selectionEnd;
    const selectedText = text.substring(start, end);

    if (!selectedText) {
      // Aplicar a todo o texto
      let transformedText = '';
      switch (type) {
        case 'uppercase':
          transformedText = text.toUpperCase();
          break;
        case 'lowercase':
          transformedText = text.toLowerCase();
          break;
        case 'capitalize':
          transformedText = text.replace(/\b\w/g, char => char.toUpperCase());
          break;
      }
      setText(transformedText);
    } else {
      // Aplicar apenas ao texto selecionado
      let transformedText = '';
      switch (type) {
        case 'uppercase':
          transformedText = selectedText.toUpperCase();
          break;
        case 'lowercase':
          transformedText = selectedText.toLowerCase();
          break;
        case 'capitalize':
          transformedText = selectedText.replace(/\b\w/g, char => char.toUpperCase());
          break;
      }

      const newText = text.substring(0, start) + transformedText + text.substring(end);
      setText(newText);

      // Restaurar seleção
      setTimeout(() => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
          textAreaRef.current.setSelectionRange(start, start + transformedText.length);
        }
      }, 0);
    }
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      // Remover tags HTML se existirem
      const cleanContent = content.replace(/<[^>]*>/g, '');
      setText(cleanContent);
    };
    reader.readAsText(file);
  };

  const exportText = (format: 'txt' | 'pdf' | 'doc' | 'rtf') => {
    // Remover tags HTML para exportação limpa
    const cleanText = text.replace(/<[^>]*>/g, '');
    
    let content = cleanText;
    let mimeType = 'text/plain';
    let extension = '.txt';
    let filename = 'documento';

    switch (format) {
      case 'txt':
        content = cleanText;
        mimeType = 'text/plain;charset=utf-8';
        extension = '.txt';
        filename = 'documento';
        break;
      case 'pdf':
        // Para PDF, vamos criar um HTML simples e usar print
        content = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Documento Exportado</title>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
                .content { white-space: pre-wrap; }
              </style>
            </head>
            <body>
              <div class="content">${cleanText}</div>
            </body>
          </html>
        `;
        mimeType = 'text/html';
        extension = '.html';
        filename = 'documento';
        
        // Abrir em nova janela para impressão/PDF
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(content);
          printWindow.document.close();
          printWindow.focus();
          printWindow.print();
          return;
        }
        break;
      case 'doc':
        // DOC simples usando HTML
        content = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Documento Word</title>
            </head>
            <body>
              <div style="white-space: pre-wrap;">${cleanText}</div>
            </body>
          </html>
        `;
        mimeType = 'application/msword';
        extension = '.doc';
        filename = 'documento';
        break;
      case 'rtf':
        // RTF básico
        content = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}\n\\f0\\fs24 ${cleanText.replace(/\n/g, '\\par ')} }`;
        mimeType = 'application/rtf';
        extension = '.rtf';
        filename = 'documento';
        break;
    }

    // Criar e baixar arquivo
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearText = () => {
    setText('');
    localStorage.removeItem('textEditorContent');
  };

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 32));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  // Função para visualizar texto com formatação HTML
  const getFormattedPreview = () => {
    return text
      .replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>')
      .replace(/<i>(.*?)<\/i>/g, '<em>$1</em>')
      .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="space-y-6">
      {/* Toolbar CORRIGIDA */}
      <div className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
        {/* Formatação CORRIGIDA */}
        <div className="flex gap-1">
          <button
            onClick={() => handleFormat('bold')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            title="Negrito (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleFormat('italic')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            title="Itálico (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleFormat('underline')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            title="Sublinhado (Ctrl+U)"
          >
            <Underline className="w-4 h-4" />
          </button>
        </div>

        {/* Transformação de Texto CORRIGIDA */}
        <div className="flex gap-1">
          <button
            onClick={() => transformText('uppercase')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
            title="Converter para MAIÚSCULAS"
          >
            <span className="font-bold">AA</span>
          </button>
          <button
            onClick={() => transformText('lowercase')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
            title="Converter para minúsculas"
          >
            <span className="text-sm">aa</span>
          </button>
          <button
            onClick={() => transformText('capitalize')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
            title="Capitalizar Primeira Letra"
          >
            <span className="font-normal">Aa</span>
          </button>
        </div>

        {/* Tamanho da Fonte */}
        <div className="flex items-center gap-1">
          <button
            onClick={decreaseFontSize}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
            title="Diminuir fonte"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-2 text-sm text-gray-600 dark:text-gray-400 min-w-10 text-center">
            {fontSize}px
          </span>
          <button
            onClick={increaseFontSize}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
            title="Aumentar fonte"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Ações */}
        <div className="flex gap-1 ml-auto">
          <label className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
            <Upload className="w-4 h-4" />
            <input
              type="file"
              accept=".txt,.text"
              onChange={handleFileImport}
              className="hidden"
            />
          </label>
          <button
            onClick={() => exportText('txt')}
            className="p-2 rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
            title="Exportar como TXT"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={clearText}
            className="p-2 rounded border border-red-300 dark:border-red-500 bg-white dark:bg-gray-600 hover:bg-red-100 dark:hover:bg-red-900 transition-colors text-red-600 dark:text-red-400"
            title="Limpar texto"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preview da Formatação */}
      {text.includes('<b>') || text.includes('<i>') || text.includes('<u>') ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Preview da Formatação:
          </h4>
          <div 
            className="prose dark:prose-invert max-w-none p-3 bg-white dark:bg-gray-700 rounded border"
            dangerouslySetInnerHTML={{ __html: getFormattedPreview() }}
          />
        </div>
      ) : null}

      {/* Editor */}
      <div className="relative">
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comece a digitar seu texto aqui... Use os botões acima para aplicar formatação."
          className="input-field w-full h-64 resize-none font-mono"
          style={{ fontSize: `${fontSize}px` }}
        />
        {!text && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-gray-400 dark:text-gray-500">
              <Type className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Digite seu texto ou importe um arquivo .txt</p>
              <p className="text-sm mt-2">Use os botões acima para formatar o texto</p>
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      {text && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Estatísticas do Texto
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.words}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Palavras</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.characters}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Caracteres</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.charactersNoSpaces}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sem Espaços</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.paragraphs}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Parágrafos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.readingTime}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Min de Leitura</p>
            </div>
          </div>
        </div>
      )}

      {/* Export Options CORRIGIDAS */}
      {text && (
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Exportar Como:</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => exportText('txt')}
              className="flex items-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              TXT
            </button>
            <button
              onClick={() => exportText('pdf')}
              className="flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              PDF (Imprimir)
            </button>
            <button
              onClick={() => exportText('doc')}
              className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              DOC
            </button>
            <button
              onClick={() => exportText('rtf')}
              className="flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              RTF
            </button>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        * Formatação usando tags HTML. O PDF abre a janela de impressão do navegador.
      </div>
    </div>
  );
}