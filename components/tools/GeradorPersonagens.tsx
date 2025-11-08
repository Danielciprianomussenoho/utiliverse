'use client';
import { useState, useCallback } from 'react';
import { Users, Sparkles, Copy, Download, Dice5, BookOpen, Sword, Shield, Heart, Brain, Zap, Star } from 'lucide-react';

type Genero = 'masculino' | 'feminino' | 'nao-binario';
type Arquétipo = 'heroi' | 'vilao' | 'mentor' | 'aliado' | 'trapaceiro' | 'lider';
type GeneroLiterario = 'fantasia' | 'scifi' | 'contemporaneo' | 'historico' | 'terror';

interface Personagem {
  nome: string;
  genero: Genero;
  idade: number;
  arquétipo: Arquétipo;
  generoLiterario: GeneroLiterario;
  aparência: {
    altura: string;
    build: string;
    corCabelo: string;
    corOlhos: string;
    tracosMarcantes: string[];
  };
  personalidade: {
    tracos: string[];
    virtudes: string[];
    defeitos: string[];
    motivacoes: string[];
  };
  habilidades: {
    forca: number;
    agilidade: number;
    inteligencia: number;
    carisma: number;
    sabedoria: number;
  };
  historia: string;
  segredos: string[];
}

export default function GeradorPersonagens() {
  const [genero, setGenero] = useState<Genero>('masculino');
  const [arquétipo, setArquétipo] = useState<Arquétipo>('heroi');
  const [generoLiterario, setGeneroLiterario] = useState<GeneroLiterario>('fantasia');
  const [detalhamento, setDetalhamento] = useState<'basico' | 'intermediario' | 'completo'>('intermediario');
  const [personagemGerado, setPersonagemGerado] = useState<Personagem | null>(null);
  const [gerando, setGerando] = useState(false);

  const arquétipos = {
    heroi: { nome: 'Herói', desc: 'Protagonista corajoso e determinado' },
    vilao: { nome: 'Vilão', desc: 'Antagonista com motivações complexas' },
    mentor: { nome: 'Mentor', desc: 'Guia sábio e experiente' },
    aliado: { nome: 'Aliado', desc: 'Companheiro leal e confiável' },
    trapaceiro: { nome: 'Trapaceiro', desc: 'Astuto e imprevisível' },
    lider: { nome: 'Líder', desc: 'Carismático e inspirador' }
  };

  const generosLiterarios = {
    fantasia: { nome: 'Fantasia', desc: 'Mundos mágicos e criaturas fantásticas' },
    scifi: { nome: 'Ficção Científica', desc: 'Tecnologia avançada e futuros distantes' },
    contemporaneo: { nome: 'Contemporâneo', desc: 'Mundo real e situações atuais' },
    historico: { nome: 'Histórico', desc: 'Períodos históricos e eventos reais' },
    terror: { nome: 'Terror', desc: 'Sobrenatural e situações aterrorizantes' }
  };

  // Bancos de dados extensos
  const bancosDados = {
    nomes: {
      masculino: [
        'Aric', 'Bastian', 'Cedric', 'Darian', 'Eldrin', 'Finnian', 'Gareth', 'Hector', 
        'Ivan', 'Jareth', 'Kael', 'Lysander', 'Magnus', 'Nolan', 'Orion', 'Percival',
        'Quentin', 'Roderick', 'Silas', 'Theron', 'Ulric', 'Valerius', 'Xander', 'Zephyr'
      ],
      feminino: [
        'Aria', 'Brienne', 'Cassia', 'Daphne', 'Elara', 'Faye', 'Gwen', 'Helena',
        'Isolde', 'Juno', 'Kiera', 'Lilith', 'Morgana', 'Nyx', 'Ophelia', 'Persephone',
        'Quintessa', 'Rhiannon', 'Seraphina', 'Thalia', 'Ursula', 'Vesper', 'Xanthe', 'Zara'
      ],
      'nao-binario': [
        'Avery', 'Blake', 'Cameron', 'Dakota', 'Emery', 'Finley', 'Gray', 'Harper',
        'Jordan', 'Kai', 'Morgan', 'Nova', 'Phoenix', 'Quinn', 'Riley', 'Sage',
        'Taylor', 'Winter', 'Zen'
      ]
    },
    
    sobrenomes: [
      'Blackwood', 'Crowley', 'Draven', 'Everhart', 'Frost', 'Grayson', 'Holloway',
      'Ironwood', 'Knightly', 'Lancaster', 'Moonstone', 'Nightshade', 'Oakenshield',
      'Pendragon', 'Quicksilver', 'Ravenhurst', 'Stormborn', 'Thorne', 'Underwood',
      'Valerius', 'Whitethorn', 'Xavier', 'Yarrow', 'Zephyrus'
    ],

    aparência: {
      alturas: ['Baixa', 'Média', 'Alta', 'Muito Alta'],
      builds: ['Esguio', 'Atlético', 'Robusto', 'Forte', 'Delicado', 'Imponente'],
      coresCabelo: ['Preto', 'Castanho', 'Loiro', 'Ruivo', 'Grisalho', 'Branco', 'Colorido'],
      coresOlhos: ['Castanhos', 'Azuis', 'Verdes', 'Cinza', 'Âmbar', 'Violeta', 'Dourados'],
      tracosMarcantes: [
        'Cicatriz no rosto', 'Tatuagens elaboradas', 'Olhar penetrante', 'Sorriso enigmático',
        'Postura elegante', 'Mãos calosas', 'Passo silencioso', 'Voz grave e marcante',
        'Cabelo desalinhado', 'Roupas excêntricas', 'Acessórios únicos', 'Marcas tribais',
        'Olheiras profundas', 'Sardas', 'Queixo determinado', 'Testa larga'
      ]
    },

    personalidade: {
      tracos: [
        'Reservado', 'Extrovertido', 'Cauteloso', 'Impulsivo', 'Analítico', 'Intuitivo',
        'Paciente', 'Impaciente', 'Otimista', 'Cínico', 'Curioso', 'Desconfiado',
        'Ambicioso', 'Conformado', 'Corajoso', 'Tímido', 'Carismático', 'Sarcástico'
      ],
      virtudes: [
        'Coragem', 'Honestidade', 'Lealdade', 'Compaixão', 'Sabedoria', 'Paciência',
        'Determinação', 'Generosidade', 'Justiça', 'Humildade', 'Perseverança', 'Criatividade'
      ],
      defeitos: [
        'Arrogância', 'Teimosia', 'Impulsividade', 'Desconfiança', 'Cobiça', 'Insegurança',
        'Vingativo', 'Preguiçoso', 'Egoísta', 'Covarde', 'Irresponsável', 'Perfeccionista'
      ],
      motivacoes: [
        'Proteger entes queridos', 'Buscar vingança', 'Alcançar poder', 'Descobrir a verdade',
        'Redenção pessoal', 'Explorar o desconhecido', 'Cumprir um destino', 'Superar limitações',
        'Encontrar pertencimento', 'Criar um legado', 'Mudar o mundo', 'Encontrar paz'
      ]
    },

    historias: {
      heroi: [
        "Cresceu em circunstâncias humildes, descobrindo seu potencial através de desafios que moldaram seu caráter e determinação.",
        "Herdeiro de um legado esquecido, precisa aprender a lidar com responsabilidades maiores que si mesmo.",
        "Sobrevivente de uma tragédia que despertou habilidades latentes e um forte senso de justiça."
      ],
      vilao: [
        "Movido por uma dor profunda do passado, acredita que seus métodos extremos são necessários para um bem maior.",
        "Corrompido pelo poder que uma vez buscou para fazer o bem, agora vê os outros como meros instrumentos.",
        "Produto de um sistema que o rejeitou, busca criar uma nova ordem onde possa finalmente pertencer."
      ],
      mentor: [
        "Viajante experiente que já viveu grandes aventuras e agora busca passar seu conhecimento para a próxima geração.",
        "Erudito que dedicou a vida ao estudo de artes antigas e agora vê seu conhecimento ameaçado pelo esquecimento.",
        "Guardião de segredos ancestrais que precisa encontrar um sucessor digno antes que seja tarde demais."
      ],
      aliado: [
        "Amigo leal que permanece ao lado do protagonista mesmo nos momentos mais sombrios, oferecendo apoio incondicional.",
        "Especialista em sua área que vê no protagonista a chance de aplicar seus conhecimentos em algo maior.",
        "Ex-cético que testemunhou algo extraordinário e agora se dedica a ajudar na missão principal."
      ],
      trapaceiro: [
        "Mestre da adaptação que sobrevive usando sua inteligência e charme, sempre com um plano de escape.",
        "Ex-membro da elite que se voltou contra o sistema após descobrir suas injustiças fundamentais.",
        "Artista da decepção que encontra prazer em desafiar autoridades e quebrar regras estabelecidas."
      ],
      lider: [
        "Visionário que inspira outros a seguirem um ideal maior, mesmo enfrentando dúvidas e oposição.",
        "Estrategista nato que vê oportunidades onde outros veem apenas obstáculos intransponíveis.",
        "Diplomata habilidoso que une facções opostas através da compreensão e persuasão."
      ]
    },

    segredos: [
      'Esconde uma identidade do passado que poderia destruir sua reputação atual',
      'Possui um poder ou habilidade que teme que outros descubram e explorem',
      'É responsável por um acidente trágico que mudou a vida de muitas pessoas',
      'Trabalha em segredo para uma organização ou causa que contradiz suas ações públicas',
      'Tem um familiar ou amigo próximo que é seu ponto fraco e maior vulnerabilidade',
      'Guardou um artefato ou conhecimento perigoso que não deveria estar em suas mãos',
      'Fez um juramento ou pacto que limita suas ações de formas imprevisíveis',
      'Está sendo manipulado ou chantageado por uma força externa'
    ]
  };

  const gerarAtributos = useCallback(() => {
    // Sistema de atributos balanceado
    const base = 50; // Base de 50%
    const variacao = 30; // Variação de ±30%
    
    return {
      forca: Math.min(100, Math.max(10, base + (Math.random() * variacao - variacao/2))),
      agilidade: Math.min(100, Math.max(10, base + (Math.random() * variacao - variacao/2))),
      inteligencia: Math.min(100, Math.max(10, base + (Math.random() * variacao - variacao/2))),
      carisma: Math.min(100, Math.max(10, base + (Math.random() * variacao - variacao/2))),
      sabedoria: Math.min(100, Math.max(10, base + (Math.random() * variacao - variacao/2)))
    };
  }, []);

  const selecionarAleatorio = useCallback(<T,>(array: T[], quantidade: number = 1): T[] => {
    const copia = [...array];
    const selecionados: T[] = [];
    
    for (let i = 0; i < quantidade && copia.length > 0; i++) {
      const indice = Math.floor(Math.random() * copia.length);
      selecionados.push(copia.splice(indice, 1)[0]);
    }
    
    return selecionados;
  }, []);

  const gerarPersonagem = useCallback(() => {
    setGerando(true);
    
    setTimeout(() => {
      // Nome e idade
      const nome = selecionarAleatorio(bancosDados.nomes[genero], 1)[0];
      const sobrenome = selecionarAleatorio(bancosDados.sobrenomes, 1)[0];
      const idade = Math.floor(Math.random() * 50) + 18; // 18-67 anos

      // Aparência
      const numTracos = detalhamento === 'basico' ? 1 : detalhamento === 'intermediario' ? 2 : 3;
      
      const personagem: Personagem = {
        nome: `${nome} ${sobrenome}`,
        genero,
        idade,
        arquétipo,
        generoLiterario,
        aparência: {
          altura: selecionarAleatorio(bancosDados.aparência.alturas, 1)[0],
          build: selecionarAleatorio(bancosDados.aparência.builds, 1)[0],
          corCabelo: selecionarAleatorio(bancosDados.aparência.coresCabelo, 1)[0],
          corOlhos: selecionarAleatorio(bancosDados.aparência.coresOlhos, 1)[0],
          tracosMarcantes: selecionarAleatorio(bancosDados.aparência.tracosMarcantes, numTracos)
        },
        personalidade: {
          tracos: selecionarAleatorio(bancosDados.personalidade.tracos, 3),
          virtudes: selecionarAleatorio(bancosDados.personalidade.virtudes, 2),
          defeitos: selecionarAleatorio(bancosDados.personalidade.defeitos, 2),
          motivacoes: selecionarAleatorio(bancosDados.personalidade.motivacoes, 2)
        },
        habilidades: gerarAtributos(),
        historia: selecionarAleatorio(bancosDados.historias[arquétipo], 1)[0],
        segredos: selecionarAleatorio(bancosDados.segredos, detalhamento === 'completo' ? 2 : 1)
      };

      setPersonagemGerado(personagem);
      setGerando(false);
    }, 1000);
  }, [genero, arquétipo, generoLiterario, detalhamento, selecionarAleatorio, gerarAtributos]);

  const copiarPersonagem = useCallback(async () => {
    if (!personagemGerado) return;

    const texto = formatarPersonagemParaTexto(personagemGerado);
    
    try {
      await navigator.clipboard.writeText(texto);
      // Feedback visual poderia ser adicionado aqui
      alert('Personagem copiado para a área de transferência!');
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }, [personagemGerado]);

  const baixarPersonagem = useCallback(() => {
    if (!personagemGerado) return;

    const texto = formatarPersonagemParaTexto(personagemGerado);
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `personagem-${personagemGerado.nome.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [personagemGerado]);

  const formatarPersonagemParaTexto = (personagem: Personagem) => {
    return `
PERSONAGEM: ${personagem.nome}
====================

INFORMAÇÕES BÁSICAS:
• Gênero: ${personagem.genero}
• Idade: ${personagem.idade} anos
• Arquétipo: ${arquétipos[personagem.arquétipo].nome}
• Gênero Literário: ${generosLiterarios[personagem.generoLiterario].nome}

APARÊNCIA:
• Altura: ${personagem.aparência.altura}
• Build: ${personagem.aparência.build}
• Cabelo: ${personagem.aparência.corCabelo}
• Olhos: ${personagem.aparência.corOlhos}
• Traços Marcantes: ${personagem.aparência.tracosMarcantes.join(', ')}

PERSONALIDADE:
• Traços: ${personagem.personalidade.tracos.join(', ')}
• Virtudes: ${personagem.personalidade.virtudes.join(', ')}
• Defeitos: ${personagem.personalidade.defeitos.join(', ')}
• Motivações: ${personagem.personalidade.motivacoes.join(', ')}

HABILIDADES:
• Força: ${Math.round(personagem.habilidades.forca)}%
• Agilidade: ${Math.round(personagem.habilidades.agilidade)}%
• Inteligência: ${Math.round(personagem.habilidades.inteligencia)}%
• Carisma: ${Math.round(personagem.habilidades.carisma)}%
• Sabedoria: ${Math.round(personagem.habilidades.sabedoria)}%

HISTÓRIA:
${personagem.historia}

SEGREDOS:
${personagem.segredos.map(segredo => `• ${segredo}`).join('\n')}

====================
Gerado por Utiliverse - ${new Date().toLocaleDateString()}
    `.trim();
  };

  const getCorArquétipo = (arquétipo: Arquétipo) => {
    const cores = {
      heroi: 'bg-blue-500',
      vilao: 'bg-red-500',
      mentor: 'bg-purple-500',
      aliado: 'bg-green-500',
      trapaceiro: 'bg-yellow-500',
      lider: 'bg-indigo-500'
    };
    return cores[arquétipo];
  };

  const getIconeArquétipo = (arquétipo: Arquétipo) => {
    const icones = {
      heroi: Sword,
      vilao: Zap,
      mentor: BookOpen,
      aliado: Heart,
      trapaceiro: Dice5,
      lider: Star
    };
    return icones[arquétipo];
  };

  return (
    <div className="space-y-8">
      {/* Controles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Gênero */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Gênero
          </label>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value as Genero)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="nao-binario">Não-binário</option>
          </select>
        </div>

        {/* Arquétipo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Arquétipo
          </label>
          <select
            value={arquétipo}
            onChange={(e) => setArquétipo(e.target.value as Arquétipo)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(arquétipos).map(([key, { nome, desc }]) => (
              <option key={key} value={key}>
                {nome} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Gênero Literário */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Gênero Literário
          </label>
          <select
            value={generoLiterario}
            onChange={(e) => setGeneroLiterario(e.target.value as GeneroLiterario)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            {Object.entries(generosLiterarios).map(([key, { nome, desc }]) => (
              <option key={key} value={key}>
                {nome} - {desc}
              </option>
            ))}
          </select>
        </div>

        {/* Nível de Detalhe */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Detalhamento
          </label>
          <select
            value={detalhamento}
            onChange={(e) => setDetalhamento(e.target.value as 'basico' | 'intermediario' | 'completo')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="completo">Completo</option>
          </select>
        </div>
      </div>

      {/* Botão Gerar */}
      <div className="flex justify-center">
        <button
          onClick={gerarPersonagem}
          disabled={gerando}
          className="bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          {gerando ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Criando Personagem...
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6 mr-3" />
              Gerar Personagem
            </>
          )}
        </button>
      </div>

      {/* Resultado */}
      {personagemGerado && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {personagemGerado.nome}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={copiarPersonagem}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copiar
              </button>
              <button
                onClick={baixarPersonagem}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Baixar
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Informações Básicas */}
            <div className="space-y-6">
              {/* Card de Arquétipo */}
              <div className={`p-6 rounded-2xl text-white ${getCorArquétipo(personagemGerado.arquétipo)}`}>
                <div className="flex items-center mb-4">
                  {(() => {
                    const Icone = getIconeArquétipo(personagemGerado.arquétipo);
                    return <Icone className="w-8 h-8 mr-3" />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold">{arquétipos[personagemGerado.arquétipo].nome}</h4>
                    <p className="text-white/80">{arquétipos[personagemGerado.arquétipo].desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{personagemGerado.idade}</div>
                    <div className="text-sm opacity-80">Idade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold capitalize">{personagemGerado.genero}</div>
                    <div className="text-sm opacity-80">Gênero</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{generosLiterarios[personagemGerado.generoLiterario].nome}</div>
                    <div className="text-sm opacity-80">Gênero</div>
                  </div>
                </div>
              </div>

              {/* Aparência */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-indigo-500" />
                  Aparência Física
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Altura</span>
                    <span className="font-semibold">{personagemGerado.aparência.altura}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Build</span>
                    <span className="font-semibold">{personagemGerado.aparência.build}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Cabelo</span>
                    <span className="font-semibold">{personagemGerado.aparência.corCabelo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Olhos</span>
                    <span className="font-semibold">{personagemGerado.aparência.corOlhos}</span>
                  </div>
                  {personagemGerado.aparência.tracosMarcantes.length > 0 && (
                    <div>
                      <span className="text-gray-600 dark:text-gray-400 block mb-2">Traços Marcantes</span>
                      <div className="flex flex-wrap gap-2">
                        {personagemGerado.aparência.tracosMarcantes.map((tracos, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                            {tracos}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Personalidade e Habilidades */}
            <div className="space-y-6">
              {/* Habilidades */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  Atributos e Habilidades
                </h4>
                <div className="space-y-4">
                  {Object.entries(personagemGerado.habilidades).map(([habilidade, valor]) => (
                    <div key={habilidade}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">
                          {habilidade === 'forca' ? 'Força' :
                           habilidade === 'agilidade' ? 'Agilidade' :
                           habilidade === 'inteligencia' ? 'Inteligência' :
                           habilidade === 'carisma' ? 'Carisma' : 'Sabedoria'}
                        </span>
                        <span className="font-semibold">{Math.round(valor)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-linear-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${valor}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personalidade */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-500" />
                  Personalidade
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400 block mb-2">Traços Principais</span>
                    <div className="flex flex-wrap gap-2">
                      {personagemGerado.personalidade.tracos.map((tracos, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tracos}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400 block mb-2">Virtudes</span>
                      <div className="space-y-1">
                        {personagemGerado.personalidade.virtudes.map((virtude, index) => (
                          <div key={index} className="flex items-center text-green-600 dark:text-green-400">
                            <Star className="w-3 h-3 mr-1" />
                            <span className="text-sm">{virtude}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 dark:text-gray-400 block mb-2">Defeitos</span>
                      <div className="space-y-1">
                        {personagemGerado.personalidade.defeitos.map((defeito, index) => (
                          <div key={index} className="flex items-center text-red-600 dark:text-red-400">
                            <Shield className="w-3 h-3 mr-1" />
                            <span className="text-sm">{defeito}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-600 dark:text-gray-400 block mb-2">Motivações</span>
                    <div className="space-y-2">
                      {personagemGerado.personalidade.motivacoes.map((motivacao, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{motivacao}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* História e Segredos */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* História */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-amber-500" />
                História de Fundo
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {personagemGerado.historia}
              </p>
            </div>

            {/* Segredos */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Dice5 className="w-5 h-5 mr-2 text-red-500" />
                Segredos e Conflitos
              </h4>
              <div className="space-y-3">
                {personagemGerado.segredos.map((segredo, index) => (
                  <div key={index} className="flex items-start p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0" />
                    <span className="text-sm text-red-700 dark:text-red-300">{segredo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dicas de Desenvolvimento */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800">
        <div className="flex items-start">
          <Sparkles className="w-6 h-6 text-indigo-600 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              💡 Dicas para Desenvolver Personagens
            </h4>
            <ul className="text-indigo-700 dark:text-indigo-400 text-sm space-y-1">
              <li>• <strong>Dê profundidade emocional:</strong> Personagens com medos, desejos e conflitos internos são mais memoráveis</li>
              <li>• <strong>Crie um arco de desenvolvimento:</strong> Como o personagem muda da introdução ao clímax da história?</li>
              <li>• <strong>Estabeleça relações significativas:</strong> Como o personagem interage com outros e o mundo ao redor?</li>
              <li>• <strong>Use os segredos como ganchos narrativos:</strong> Revelações podem criar momentos dramáticos poderosos</li>
              <li>• <strong>Balance pontos fortes e fracos:</strong> Personagens perfeitos são menos interessantes que personagens humanos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}