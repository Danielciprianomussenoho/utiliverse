'use client';
import { useState, useCallback } from 'react';
import { Sparkles, Copy, Users, Building, FolderKanban, Check } from 'lucide-react';

type Categoria = 'pessoas' | 'empresas' | 'projetos' | 'marcas' | 'produtos' | 'dominos';
type Idioma = 'pt' | 'en' | 'es' | 'fr' | 'it';

interface NomeGerado {
  nome: string;
  categoria: string;
  copiado: boolean;
}

export default function GeradorNomes() {
  const [categoria, setCategoria] = useState<Categoria>('pessoas');
  const [idioma, setIdioma] = useState<Idioma>('pt');
  const [quantidade, setQuantidade] = useState(5);
  const [nomesGerados, setNomesGerados] = useState<NomeGerado[]>([]);
  const [gerando, setGerando] = useState(false);
  const [todosCopiados, setTodosCopiados] = useState(false);

  // Bancos de dados de nomes (mantido igual)
  const bancosNomes = {
    pessoas: {
      pt: {
        nomes: ['Ana', 'Beatriz', 'Carlos', 'Daniel', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Juliana', 'Lucas', 'Mariana', 'Nuno', 'Olivia', 'Pedro', 'Rafael', 'Sofia', 'Tiago', 'Vanessa'],
        sobrenomes: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Costa', 'Ribeiro', 'Martins', 'Jesus', 'Correia', 'Mendes', 'Nunes', 'Moreira']
      },
      en: {
        nomes: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah'],
        sobrenomes: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor']
      }
    },
    empresas: {
      pt: {
        prefixos: ['Nexus', 'Quantum', 'Aurora', 'Infinity', 'Digital', 'Future', 'Smart', 'Global', 'Prime', 'Elite', 'Alpha', 'Omega', 'Vertex', 'Pulse', 'Core', 'Spark', 'Nova'],
        sufixos: ['Solutions', 'Tech', 'Labs', 'Systems', 'Works', 'Group', 'Corp', 'Industries', 'Enterprises', 'Ventures', 'Network', 'Digital', 'Innovations', 'Studio', 'Agency']
      },
      en: {
        prefixos: ['Nexus', 'Quantum', 'Aurora', 'Infinity', 'Digital', 'Future', 'Smart', 'Global', 'Prime', 'Elite', 'Alpha', 'Omega', 'Vertex', 'Pulse', 'Core', 'Spark', 'Nova'],
        sufixos: ['Solutions', 'Tech', 'Labs', 'Systems', 'Works', 'Group', 'Corp', 'Industries', 'Enterprises', 'Ventures', 'Network', 'Digital', 'Innovations', 'Studio', 'Agency']
      }
    },
    projetos: {
      pt: {
        adjetivos: ['Ágil', 'Digital', 'Futuro', 'Inteligente', 'Criativo', 'Inovador', 'Global', 'Local', 'Rápido', 'Seguro', 'Flexível', 'Moderno', 'Eficiente', 'Sustentável', 'Dinâmico'],
        substantivos: ['Projeto', 'Sistema', 'Plataforma', 'Solução', 'Portal', 'Hub', 'Network', 'Framework', 'Engine', 'App', 'Site', 'API', 'Protocolo', 'Modelo', 'Conceito']
      },
      en: {
        adjetivos: ['Agile', 'Digital', 'Future', 'Smart', 'Creative', 'Innovative', 'Global', 'Local', 'Fast', 'Secure', 'Flexible', 'Modern', 'Efficient', 'Sustainable', 'Dynamic'],
        substantivos: ['Project', 'System', 'Platform', 'Solution', 'Portal', 'Hub', 'Network', 'Framework', 'Engine', 'App', 'Site', 'API', 'Protocol', 'Model', 'Concept']
      }
    },
    marcas: {
      pt: {
        palavras: ['Zen', 'Pura', 'Essência', 'Vida', 'Natural', 'Orgânico', 'Eco', 'Verde', 'Luz', 'Ar', 'Terra', 'Fogo', 'Água', 'Céu', 'Mar', 'Sol', 'Lua'],
        sufixos: ['Life', 'Care', 'Style', 'Tech', 'Food', 'Wear', 'Home', 'Garden', 'Beauty', 'Health', 'Fit', 'Active', 'Pure', 'Natural', 'Organic']
      },
      en: {
        palavras: ['Zen', 'Pure', 'Essence', 'Life', 'Natural', 'Organic', 'Eco', 'Green', 'Light', 'Air', 'Earth', 'Fire', 'Water', 'Sky', 'Sea', 'Sun', 'Moon'],
        sufixos: ['Life', 'Care', 'Style', 'Tech', 'Food', 'Wear', 'Home', 'Garden', 'Beauty', 'Health', 'Fit', 'Active', 'Pure', 'Natural', 'Organic']
      }
    },
    produtos: {
      pt: {
        prefixos: ['Super', 'Mega', 'Hyper', 'Ultra', 'Max', 'Pro', 'Lite', 'Smart', 'Easy', 'Quick', 'Fast', 'Power', 'Turbo', 'Eco', 'Bio'],
        sufixos: ['Plus', 'Pro', 'Lite', 'Air', 'Max', 'X', '360', 'HD', '4K', 'WiFi', 'Bluetooth', 'USB', 'Touch', 'Go', 'Mini']
      },
      en: {
        prefixos: ['Super', 'Mega', 'Hyper', 'Ultra', 'Max', 'Pro', 'Lite', 'Smart', 'Easy', 'Quick', 'Fast', 'Power', 'Turbo', 'Eco', 'Bio'],
        sufixos: ['Plus', 'Pro', 'Lite', 'Air', 'Max', 'X', '360', 'HD', '4K', 'WiFi', 'Bluetooth', 'USB', 'Touch', 'Go', 'Mini']
      }
    },
    dominos: {
      pt: {
        palavras: ['tech', 'digital', 'online', 'cloud', 'web', 'app', 'dev', 'code', 'soft', 'net', 'sys', 'data', 'info', 'smart', 'auto', 'bio', 'eco'],
        extensoes: ['.com', '.com.br', '.net', '.org', '.io', '.dev', '.app', '.tech', '.digital', '.online', '.cloud', '.site']
      },
      en: {
        palavras: ['tech', 'digital', 'online', 'cloud', 'web', 'app', 'dev', 'code', 'soft', 'net', 'sys', 'data', 'info', 'smart', 'auto', 'bio', 'eco'],
        extensoes: ['.com', '.net', '.org', '.io', '.dev', '.app', '.tech', '.digital', '.online', '.cloud', '.site']
      }
    }
  };

  // Funções de geração (mantidas iguais)
  const gerarNomePessoa = useCallback(() => {
    const banco = bancosNomes.pessoas[idioma];
    const nome = banco.nomes[Math.floor(Math.random() * banco.nomes.length)];
    const sobrenome = banco.sobrenomes[Math.floor(Math.random() * banco.sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  }, [idioma]);

  const gerarNomeEmpresa = useCallback(() => {
    const banco = bancosNomes.empresas[idioma];
    const prefixo = banco.prefixos[Math.floor(Math.random() * banco.prefixos.length)];
    const sufixo = banco.sufixos[Math.floor(Math.random() * banco.sufixos.length)];
    return `${prefixo} ${sufixo}`;
  }, [idioma]);

  const gerarNomeProjeto = useCallback(() => {
    const banco = bancosNomes.projetos[idioma];
    const adjetivo = banco.adjetivos[Math.floor(Math.random() * banco.adjetivos.length)];
    const substantivo = banco.substantivos[Math.floor(Math.random() * banco.substantivos.length)];
    return `${adjetivo} ${substantivo}`;
  }, [idioma]);

  const gerarNomeMarca = useCallback(() => {
    const banco = bancosNomes.marcas[idioma];
    const palavra = banco.palavras[Math.floor(Math.random() * banco.palavras.length)];
    const sufixo = banco.sufixos[Math.floor(Math.random() * banco.sufixos.length)];
    return `${palavra}${sufixo}`;
  }, [idioma]);

  const gerarNomeProduto = useCallback(() => {
    const banco = bancosNomes.produtos[idioma];
    const prefixo = banco.prefixos[Math.floor(Math.random() * banco.prefixos.length)];
    const sufixo = banco.sufixos[Math.floor(Math.random() * banco.sufixos.length)];
    return `${prefixo}${sufixo}`;
  }, [idioma]);

  const gerarDominio = useCallback(() => {
    const banco = bancosNomes.dominos[idioma];
    const palavra = banco.palavras[Math.floor(Math.random() * banco.palavras.length)];
    const extensao = banco.extensoes[Math.floor(Math.random() * banco.extensoes.length)];
    return `${palavra}${extensao}`;
  }, [idioma]);

  const gerarNomes = useCallback(() => {
    setGerando(true);
    setTodosCopiados(false); // Resetar estado de cópia
    
    setTimeout(() => {
      const novosNomes: NomeGerado[] = [];
      
      for (let i = 0; i < quantidade; i++) {
        let nome = '';
        
        switch (categoria) {
          case 'pessoas':
            nome = gerarNomePessoa();
            break;
          case 'empresas':
            nome = gerarNomeEmpresa();
            break;
          case 'projetos':
            nome = gerarNomeProjeto();
            break;
          case 'marcas':
            nome = gerarNomeMarca();
            break;
          case 'produtos':
            nome = gerarNomeProduto();
            break;
          case 'dominos':
            nome = gerarDominio();
            break;
        }
        
        novosNomes.push({
          nome,
          categoria,
          copiado: false
        });
      }
      
      setNomesGerados(novosNomes);
      setGerando(false);
    }, 500);
  }, [categoria, idioma, quantidade, gerarNomePessoa, gerarNomeEmpresa, gerarNomeProjeto, gerarNomeMarca, gerarNomeProduto, gerarDominio]);

  const copiarNome = useCallback(async (nome: string, index: number) => {
    try {
      await navigator.clipboard.writeText(nome);
      setNomesGerados(prev => 
        prev.map((item, i) => 
          i === index ? { ...item, copiado: true } : item
        )
      );
      
      setTimeout(() => {
        setNomesGerados(prev => 
          prev.map((item, i) => 
            i === index ? { ...item, copiado: false } : item
          )
        );
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }, []);

  const copiarTodos = useCallback(async () => {
    const todosNomes = nomesGerados.map(item => item.nome).join('\n');
    try {
      await navigator.clipboard.writeText(todosNomes);
      
      // Usar estado do React em vez de manipular DOM diretamente
      setTodosCopiados(true);
      setNomesGerados(prev => 
        prev.map(item => ({ ...item, copiado: true }))
      );
      
      setTimeout(() => {
        setTodosCopiados(false);
        setNomesGerados(prev => 
          prev.map(item => ({ ...item, copiado: false }))
        );
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }, [nomesGerados]);

  const getCategoriaIcon = (cat: Categoria) => {
    switch (cat) {
      case 'pessoas': return <Users className="w-5 h-5" />;
      case 'empresas': return <Building className="w-5 h-5" />;
      case 'projetos': return <FolderKanban className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getCategoriaLabel = (cat: Categoria) => {
    const labels = {
      pessoas: 'Nomes de Pessoas',
      empresas: 'Nomes de Empresas',
      projetos: 'Nomes de Projetos',
      marcas: 'Nomes de Marcas',
      produtos: 'Nomes de Produtos',
      dominos: 'Domínios Web'
    };
    return labels[cat];
  };

  return (
    <div className="space-y-8">
      {/* Controles */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Categoria */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Categoria
          </label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value as Categoria)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="pessoas">Nomes de Pessoas</option>
            <option value="empresas">Nomes de Empresas</option>
            <option value="projetos">Nomes de Projetos</option>
            <option value="marcas">Nomes de Marcas</option>
            <option value="produtos">Nomes de Produtos</option>
            <option value="dominos">Domínios Web</option>
          </select>
        </div>

        {/* Idioma */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Idioma
          </label>
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value as Idioma)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
          </select>
        </div>

        {/* Quantidade */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Quantidade
          </label>
          <select
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="1">1 nome</option>
            <option value="5">5 nomes</option>
            <option value="10">10 nomes</option>
            <option value="15">15 nomes</option>
            <option value="20">20 nomes</option>
          </select>
        </div>
      </div>

      {/* Botão Gerar */}
      <div className="flex justify-center">
        <button
          onClick={gerarNomes}
          disabled={gerando}
          className="bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          {gerando ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Gerando...
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6 mr-3" />
              Gerar Nomes
            </>
          )}
        </button>
      </div>

      {/* Resultados */}
      {nomesGerados.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Nomes Gerados ({nomesGerados.length})
            </h3>
            <button
              onClick={copiarTodos}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                todosCopiados
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {todosCopiados ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {todosCopiados ? 'Copiado!' : 'Copiar Todos'}
            </button>
          </div>

          <div className="grid gap-3">
            {nomesGerados.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
                    {getCategoriaIcon(item.categoria as Categoria)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {item.nome}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {getCategoriaLabel(item.categoria as Categoria)}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => copiarNome(item.nome, index)}
                  className={`p-2 rounded-lg transition-colors ${
                    item.copiado
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-500'
                  }`}
                >
                  {item.copiado ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dicas */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
        <div className="flex items-start">
          <Sparkles className="w-6 h-6 text-amber-600 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
              💡 Dicas para Escolher o Nome Perfeito
            </h4>
            <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1">
              <li>• Verifique a disponibilidade do domínio e redes sociais</li>
              <li>• Teste a pronúncia e facilidade de memorização</li>
              <li>• Considere o público-alvo e o posicionamento da marca</li>
              <li>• Evite nomes muito longos ou difíceis de soletrar</li>
              <li>• Pesquise significados e conotações em diferentes culturas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}