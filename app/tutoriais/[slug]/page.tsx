
import Link from 'next/link';
import { ArrowLeft, PlayCircle, FileText, Clock, User } from 'lucide-react';
import { notFound } from 'next/navigation';

// Interface para os tutoriais
interface Tutorial {
  title: string;
  description: string;
  content: string;
  type: 'video' | 'guia';
  duration: string;
  level: string;
  tool: string;
  toolLink: string;
  date: string;
  author: string;
  authorRole: string;
}

const tutorials: Record<string, Tutorial> = {
  'como-usar-calculadora-imc': {
    title: 'Como Usar a Calculadora de IMC - Guia Completo',
    description: 'Aprenda a calcular seu IMC corretamente e interpretar os resultados para monitorar sua saúde.',
    content: `
      <h2>Introdução à Calculadora de IMC</h2>
      <p>A Calculadora de IMC do Utiliverse é uma ferramenta simples mas poderosa para avaliar seu peso em relação à altura. Neste tutorial, vamos explorar todas as funcionalidades.</p>
      
      <h2>Passo a Passo para Usar a Calculadora</h2>
      
      <h3>1. Acesse a Ferramenta</h3>
      <p>Vá para a página da <a href="/imc" class="text-blue-600 dark:text-blue-400 underline">Calculadora de IMC</a> no Utiliverse.</p>
      
      <h3>2. Insira seu Peso</h3>
      <p>Digite seu peso em quilogramas (kg) no campo indicado. Use ponto para casas decimais.</p>
      <p><strong>Exemplo:</strong> 70.5 kg</p>
      
      <h3>3. Insira sua Altura</h3>
      <p>Digite sua altura em metros (m). Use ponto para separar metros e centímetros.</p>
      <p><strong>Exemplo:</strong> 1.75 m</p>
      
      <h3>4. Clique em Calcular</h3>
      <p>Pressione o botão "Calcular IMC" para obter seu resultado.</p>
      
      <h2>Interpretando os Resultados</h2>
      
      <h3>Classificação do IMC</h3>
      <ul>
        <li><strong>Abaixo de 18,5:</strong> Abaixo do peso</li>
        <li><strong>18,5 - 24,9:</strong> Peso normal (ideal)</li>
        <li><strong>25 - 29,9:</strong> Sobrepeso</li>
        <li><strong>30 - 34,9:</strong> Obesidade Grau I</li>
        <li><strong>35 - 39,9:</strong> Obesidade Grau II</li>
        <li><strong>Acima de 40:</strong> Obesidade Grau III</li>
      </ul>
      
      <h3>Exemplo Prático</h3>
      <p>Se você tem 70 kg e 1,75 m:</p>
      <p><strong>IMC = 70 ÷ (1,75 × 1,75) = 22,86</strong></p>
      <p>Resultado: <strong>Peso normal</strong> - Parabéns!</p>
      
      <h2>Dicas Importantes</h2>
      <ul>
        <li>Meça seu peso sempre no mesmo horário</li>
        <li>Use uma balança confiável</li>
        <li>Meça a altura sem sapatos</li>
        <li>Consulte um médico para avaliação completa</li>
      </ul>
      
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
        <p><strong>Lembre-se:</strong> O IMC é uma ferramenta de triagem, não um diagnóstico médico completo.</p>
      </div>
    `,
    type: 'video',
    duration: '4:30',
    level: 'Iniciante',
    tool: 'Calculadora IMC',
    toolLink: '/imc',
    date: '15 de Dezembro, 2024',
    author: 'Dr. Ana Silva',
    authorRole: 'Nutricionista'
  },
  'conversor-moedas-dicas': {
    title: 'Conversor de Moedas: Dicas e Melhores Práticas',
    description: 'Domine o conversor de moedas e aprenda a fazer conversões precisas entre diferentes moedas.',
    content: `
      <h2>Dominando o Conversor de Moedas</h2>
      <p>O Conversor de Moedas do Utiliverse é essencial para viagens, compras internacionais e negócios. Aprenda a usá-lo como um profissional.</p>
      
      <h2>Como Usar o Conversor</h2>
      
      <h3>1. Selecione a Moeda de Origem</h3>
      <p>Escolha a moeda que você quer converter no campo "De".</p>
      <p><strong>Exemplo:</strong> Dólar Americano (USD)</p>
      
      <h3>2. Selecione a Moeda de Destino</h3>
      <p>Escolha para qual moeda você quer converter no campo "Para".</p>
      <p><strong>Exemplo:</strong> Real Brasileiro (BRL)</p>
      
      <h3>3. Insira o Valor</h3>
      <p>Digite o valor que deseja converter.</p>
      <p><strong>Exemplo:</strong> 100</p>
      
      <h3>4. Veja o Resultado</h3>
      <p>O valor convertido aparecerá automaticamente.</p>
      
      <h2>Moedas Disponíveis</h2>
      <ul>
        <li>Real Brasileiro (BRL)</li>
        <li>Dólar Americano (USD)</li>
        <li>Euro (EUR)</li>
        <li>Libra Esterlina (GBP)</li>
        <li>Iene Japonês (JPY)</li>
        <li>Dólar Canadense (CAD)</li>
        <li>Dólar Australiano (AUD)</li>
        <li>Franco Suíço (CHF)</li>
        <li>Yuan Chinês (CNY)</li>
        <li>Peso Argentino (ARS)</li>
      </ul>
      
      <h2>Dicas para Conversões Precisas</h2>
      
      <h3>Atualização das Cotações</h3>
      <p>Nossas cotações são atualizadas regularmente, mas para transações reais:</p>
      <ul>
        <li>Verifique cotações em tempo real para grandes valores</li>
        <li>Considere taxas de câmbio de instituições financeiras</li>
        <li>Para viagens, verifique no dia da transação</li>
      </ul>
      
      <h3>Casos de Uso Comuns</h3>
      <ul>
        <li><strong>Viagens internacionais:</strong> Planeje seu orçamento</li>
        <li><strong>Compras online:</strong> Compare preços em diferentes moedas</li>
        <li><strong>Negócios:</strong> Calcule custos de importação/exportação</li>
        <li><strong>Investimentos:</strong> Acompanhe ativos internacionais</li>
      </ul>
      
      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-6">
        <p><strong>Dica Pro:</strong> Use o botão de troca para converter rapidamente na direção oposta.</p>
      </div>
    `,
    type: 'guia',
    duration: '7 min',
    level: 'Básico',
    tool: 'Conversor de Moedas',
    toolLink: '/moedas',
    date: '14 de Dezembro, 2024',
    author: 'Carlos Oliveira',
    authorRole: 'Especialista em Finanças'
  },
  'criando-senhas-seguras': {
    title: 'Criando Senhas Seguras com Nosso Gerador',
    description: 'Aprenda a criar senhas fortes e proteger suas contas online com nosso gerador de senhas.',
    content: `
      <h2>Proteja Suas Contas com Senhas Fortes</h2>
      <p>No mundo digital, senhas fracas são a principal causa de violações de segurança. Aprenda a usar nosso Gerador de Senhas para criar combinações impenetráveis.</p>
      
      <h2>Usando o Gerador de Senhas</h2>
      
      <h3>1. Defina o Comprimento</h3>
      <p>Use o controle deslizante para escolher o número de caracteres.</p>
      <p><strong>Recomendação:</strong> 12-16 caracteres</p>
      
      <h3>2. Escolha os Tipos de Caracteres</h3>
      <ul>
        <li><strong>Letras maiúsculas (A-Z):</strong> Aumenta a complexidade</li>
        <li><strong>Letras minúsculas (a-z):</strong> Base da senha</li>
        <li><strong>Números (0-9):</strong> Adiciona variedade</li>
        <li><strong>Símbolos (!@#$%):</strong> Máxima segurança</li>
      </ul>
      
      <h3>3. Gere a Senha</h3>
      <p>Clique em "Gerar Senha Segura" para criar uma nova senha.</p>
      
      <h3>4. Copie para Área de Transferência</h3>
      <p>Use o botão de cópia para salvar a senha com segurança.</p>
      
      <h2>Níveis de Segurança</h2>
      
      <h3>Senha Fraca (6-8 caracteres)</h3>
      <p><strong>Exemplo:</strong> "senha123"</p>
      <p>Pode ser quebrada em segundos. Não recomendado.</p>
      
      <h3>Senha Média (9-11 caracteres)</h3>
      <p><strong>Exemplo:</strong> "Senha@2024"</p>
      <p>Leva horas para ser quebrada. Aceitável para contas menos importantes.</p>
      
      <h3>Senha Forte (12-14 caracteres)</h3>
      <p><strong>Exemplo:</strong> "K8#pL$2mQ9*wN"</p>
      <p>Leva anos para ser quebrada. Recomendado para a maioria das contas.</p>
      
      <h3>Senha Muito Forte (15+ caracteres)</h3>
      <p><strong>Exemplo:</strong> "G7$kP2#mQ9*wN1@vR5"</p>
      <p>Leva séculos para ser quebrada. Ideal para contas críticas.</p>
      
      <h2>Melhores Práticas</h2>
      <ul>
        <li><strong>Use um gerenciador de senhas</strong> para armazenar com segurança</li>
        <li><strong>Ative autenticação de dois fatores</strong> sempre que possível</li>
        <li><strong>Nunca reuse senhas</strong> entre contas importantes</li>
        <li><strong>Altere senhas regularmente</strong>, especialmente após vazamentos</li>
        <li><strong>Verifique se suas senhas foram vazadas</strong> em haveibeenpwned.com</li>
      </ul>
      
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-6">
        <p><strong>Atenção:</strong> Nunca compartilhe suas senhas e evite anotá-las em locais inseguros.</p>
      </div>
    `,
    type: 'video',
    duration: '5:15',
    level: 'Iniciante',
    tool: 'Gerador de Senhas',
    toolLink: '/senhas',
    date: '13 de Dezembro, 2024',
    author: 'Mariana Santos',
    authorRole: 'Especialista em Cybersecurity'
  },
  'guia-contador-palavras': {
    title: 'Otimização de Textos: Guia do Contador de Palavras',
    description: 'Maximize sua produtividade em redações, artigos e documentos profissionais usando nosso contador inteligente de palavras e caracteres.',
    content: `
      <h2>Dominando o Contador de Palavras</h2>
      <p>O Contador de Palavras do Utiliverse é essencial para escritores, estudantes e profissionais que precisam controlar o tamanho de seus textos. Aprenda a usar todas as funcionalidades.</p>
      
      <h2>Como Usar o Contador</h2>
      
      <h3>1. Cole ou Digite seu Texto</h3>
      <p>Insira o texto que deseja analisar na área de texto principal.</p>
      <p><strong>Dica:</strong> Você pode colar textos de qualquer fonte - Word, PDF, sites, etc.</p>
      
      <h3>2. Visualize as Estatísticas</h3>
      <p>As métricas são atualizadas automaticamente enquanto você digita:</p>
      <ul>
        <li><strong>Palavras:</strong> Número total de palavras</li>
        <li><strong>Caracteres:</strong> Caracteres totais (incluindo espaços)</li>
        <li><strong>Caracteres (sem espaços):</strong> Apenas letras e símbolos</li>
        <li><strong>Parágrafos:</strong> Quantidade de parágrafos</li>
        <li><strong>Sentenças:</strong> Número de frases completas</li>
      </ul>
      
      <h3>3. Use os Recursos Avançados</h3>
      <p><strong>Limpar Texto:</strong> Remove todo o texto com um clique</p>
      <p><strong>Copiar Resultados:</strong> Salva as estatísticas para relatórios</p>
      <p><strong>Modo Foco:</strong> Expande a área de escrita para melhor concentração</p>
      
      <h2>Casos de Uso Práticos</h2>
      
      <h3>Para Estudantes</h3>
      <ul>
        <li><strong>Redações e TCCs:</strong> Controle o limite de palavras exigido</li>
        <li><strong>Resumos:</strong> Mantenha o texto dentro do tamanho ideal</li>
        <li><strong>Artigos Acadêmicos:</strong> Acompanhe o progresso da escrita</li>
      </ul>
      
      <h3>Para Profissionais</h3>
      <ul>
        <li><strong>Relatórios:</strong> Respeite limites corporativos</li>
        <li><strong>Emails Profissionais:</strong> Mantenha a objetividade</li>
        <li><strong>Documentação Técnica:</strong> Controle a extensão</li>
        <li><strong>Posts para Redes Sociais:</strong> Otimize para cada plataforma</li>
      </ul>
      
      <h3>Para Escritores</h3>
      <ul>
        <li><strong>Metas Diárias:</strong> Estabeleça e acompanhe objetivos</li>
        <li><strong>Edição:</strong> Identifique textos muito longos ou curtos</li>
        <li><strong>Submissões:</strong> Ajuste para guidelines de publicações</li>
      </ul>
      
      <h2>Limites Recomendados por Tipo de Texto</h2>
      <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 my-4">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="border p-2 text-left">Tipo de Texto</th>
            <th class="border p-2 text-left">Palavras Recomendadas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">Post no Twitter</td>
            <td class="border p-2">15-50 palavras</td>
          </tr>
          <tr>
            <td class="border p-2">Email Profissional</td>
            <td class="border p-2">50-200 palavras</td>
          </tr>
          <tr>
            <td class="border p-2">Post no LinkedIn</td>
            <td class="border p-2">100-300 palavras</td>
          </tr>
          <tr>
            <td class="border p-2">Artigo de Blog</td>
            <td class="border p-2">800-2.000 palavras</td>
          </tr>
          <tr>
            <td class="border p-2">Redação ENEM</td>
            <td class="border p-2">Mínimo 300 palavras</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Dicas de Otimização</h2>
      <ul>
        <li><strong>Revise palavras repetidas:</strong> Use sinônimos para variar o vocabulário</li>
        <li><strong>Elimine palavras desnecessárias:</strong> Seja conciso e direto</li>
        <li><strong>Divida parágrafos longos:</strong> Melhore a legibilidade</li>
        <li><strong>Use o contador durante a escrita:</strong> Não deixe para verificar apenas no final</li>
      </ul>
      
      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg my-6">
        <p><strong>Dica Profissional:</strong> Para textos longos, estabeleça metas parciais (ex: 500 palavras por seção) para manter a motivação e produtividade.</p>
      </div>
    `,
    type: 'guia',
    duration: '6 min',
    level: 'Básico',
    tool: 'Contador de Palavras',
    toolLink: '/contador',
    date: '12 de Dezembro, 2024',
    author: 'Prof. Ricardo Almeida',
    authorRole: 'Especialista em Redação'
  },

  'calculadora-porcentagem-pratica': {
    title: 'Porcentagem na Prática: Descontos, Aumentos e Cálculos',
    description: 'Domine cálculos percentuais para situações do cotidiano: descontos em compras, aumentos salariais, cálculos financeiros e muito mais.',
    content: `
      <h2>Dominando os Cálculos de Porcentagem</h2>
      <p>A Calculadora de Porcentagem do Utiliverse resolve desde operações simples até cálculos complexos do dia a dia. Aprenda a usar como um expert.</p>
      
      <h2>Funcionalidades Principais</h2>
      
      <h3>1. Cálculo Básico de Porcentagem</h3>
      <p><strong>Exemplo:</strong> Quanto é 15% de 200?</p>
      <ul>
        <li>Digite 200 no campo "Valor"</li>
        <li>Digite 15 no campo "Porcentagem"</li>
        <li>Resultado: <strong>30</strong></li>
      </ul>
      
      <h3>2. Aumento Percentual</h3>
      <p><strong>Exemplo:</strong> Aumentar 200 em 15%</p>
      <ul>
        <li>Digite 200 no campo "Valor"</li>
        <li>Digite 15 no campo "Porcentagem"</li>
        <li>Selecione "Aumentar"</li>
        <li>Resultado: <strong>230</strong></li>
      </ul>
      
      <h3>3. Desconto Percentual</h3>
      <p><strong>Exemplo:</strong> Descontar 15% de 200</p>
      <ul>
        <li>Digite 200 no campo "Valor"</li>
        <li>Digite 15 no campo "Porcentagem"</li>
        <li>Selecione "Diminuir"</li>
        <li>Resultado: <strong>170</strong></li>
      </ul>
      
      <h3>4. Variação Percentual</h3>
      <p><strong>Exemplo:</strong> De 150 para 200 - qual o aumento percentual?</p>
      <ul>
        <li>Digite 150 no campo "Valor Inicial"</li>
        <li>Digite 200 no campo "Valor Final"</li>
        <li>Resultado: <strong>33,33% de aumento</strong></li>
      </ul>
      
      <h2>Aplicações Práticas no Cotidiano</h2>
      
      <h3>Compras e Descontos</h3>
      <p><strong>Cenário:</strong> Produto de R$ 80 com 25% de desconto</p>
      <p><strong>Cálculo:</strong> 80 × 0,25 = R$ 20 de desconto</p>
      <p><strong>Preço final:</strong> R$ 60</p>
      
      <h3>Aumentos Salariais</h3>
      <p><strong>Cenário:</strong> Salário de R$ 2.500 com aumento de 8%</p>
      <p><strong>Cálculo:</strong> 2.500 × 0,08 = R$ 200 de aumento</p>
      <p><strong>Novo salário:</strong> R$ 2.700</p>
      
      <h3>Juros em Financiamentos</h3>
      <p><strong>Cenário:</strong> Empréstimo de R$ 1.000 com juros de 3% ao mês</p>
      <p><strong>Cálculo:</strong> 1.000 × 0,03 = R$ 30 de juros no primeiro mês</p>
      
      <h3>Gorjetas</h3>
      <p><strong>Cenário:</strong> Conta de R$ 120 com gorjeta de 10%</p>
      <p><strong>Cálculo:</strong> 120 × 0,10 = R$ 12 de gorjeta</p>
      <p><strong>Total:</strong> R$ 132</p>
      
      <h2>Tabela de Porcentagens Úteis</h2>
      <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 my-4">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="border p-2 text-left">Porcentagem</th>
            <th class="border p-2 text-left">Fração</th>
            <th class="border p-2 text-left">Decimal</th>
            <th class="border p-2 text-left">Uso Comum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">10%</td>
            <td class="border p-2">1/10</td>
            <td class="border p-2">0,10</td>
            <td class="border p-2">Gorjetas, descontos pequenos</td>
          </tr>
          <tr>
            <td class="border p-2">25%</td>
            <td class="border p-2">1/4</td>
            <td class="border p-2">0,25</td>
            <td class="border p-2">Descontos em liquidações</td>
          </tr>
          <tr>
            <td class="border p-2">50%</td>
            <td class="border p-2">1/2</td>
            <td class="border p-2">0,50</td>
            <td class="border p-2">Promoções, meia-entrada</td>
          </tr>
          <tr>
            <td class="border p-2">75%</td>
            <td class="border p-2">3/4</td>
            <td class="border p-2">0,75</td>
            <td class="border p-2">Descontos grandes</td>
          </tr>
          <tr>
            <td class="border p-2">100%</td>
            <td class="border p-2">1/1</td>
            <td class="border p-2">1,00</td>
            <td class="border p-2">Dobro do valor</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Dicas Rápidas para Cálculos Mentais</h2>
      <ul>
        <li><strong>10%:</strong> Mova a vírgula uma casa para esquerda</li>
        <li><strong>5%:</strong> Calcule 10% e divida pela metade</li>
        <li><strong>20%:</strong> Calcule 10% e multiplique por 2</li>
        <li><strong>15%:</strong> Calcule 10% + metade de 10%</li>
        <li><strong>25%:</strong> Divida o valor por 4</li>
        <li><strong>50%:</strong> Metade do valor</li>
      </ul>
      
      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg my-6">
        <p><strong>Dica Financeira:</strong> Sempre calcule porcentagens em ambas as direções. Um desconto de 20% requer um aumento de 25% para voltar ao valor original.</p>
      </div>
    `,
    type: 'video',
    duration: '3:45',
    level: 'Iniciante',
    tool: 'Calculadora de %',
    toolLink: '/porcentagem',
    date: '11 de Dezembro, 2024',
    author: 'Dra. Fernanda Costa',
    authorRole: 'Especialista em Matemática Financeira'
  },

  'conversor-unidades-completo': {
    title: 'Conversor de Unidades: Guia Definitivo 2024',
    description: 'Aprenda a converter entre mais de 50 unidades de medida diferentes: comprimento, peso, volume, temperatura e muito mais.',
    content: `
      <h2>Dominando o Conversor de Unidades</h2>
      <p>O Conversor de Unidades do Utiliverse é sua ferramenta completa para conversões precisas em diversas categorias. Ideal para estudantes, profissionais e uso cotidiano.</p>
      
      <h2>Como Usar o Conversor</h2>
      
      <h3>1. Selecione a Categoria</h3>
      <p>Escolha entre as opções disponíveis:</p>
      <ul>
        <li><strong>Comprimento:</strong> Metros, pés, polegadas, etc.</li>
        <li><strong>Peso/Massa:</strong> Quilogramas, libras, onças</li>
        <li><strong>Volume:</strong> Litros, galões, mililitros</li>
        <li><strong>Temperatura:</strong> Celsius, Fahrenheit, Kelvin</li>
        <li><strong>Velocidade:</strong> km/h, mph, m/s</li>
        <li><strong>Área:</strong> Metros quadrados, pés quadrados, hectares</li>
      </ul>
      
      <h3>2. Escolha as Unidades</h3>
      <p>Selecione a unidade de origem e a unidade de destino</p>
      
      <h3>3. Insira o Valor</h3>
      <p>Digite o valor que deseja converter</p>
      
      <h3>4. Veja o Resultado</h3>
      <p>A conversão aparece instantaneamente</p>
      
      <h2>Principais Categorias e Unidades</h2>
      
      <h3>Comprimento</h3>
      <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 my-4">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="border p-2 text-left">Unidade</th>
            <th class="border p-2 text-left">Equivalência</th>
            <th class="border p-2 text-left">Uso Comum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">1 Quilômetro (km)</td>
            <td class="border p-2">1.000 metros</td>
            <td class="border p-2">Distâncias longas</td>
          </tr>
          <tr>
            <td class="border p-2">1 Metro (m)</td>
            <td class="border p-2">100 centímetros</td>
            <td class="border p-2">Uso geral</td>
          </tr>
          <tr>
            <td class="border p-2">1 Pé (ft)</td>
            <td class="border p-2">0,3048 metros</td>
            <td class="border p-2">Países anglo-saxões</td>
          </tr>
          <tr>
            <td class="border p-2">1 Polegada (in)</td>
            <td class="border p-2">2,54 centímetros</td>
            <td class="border p-2">Eletrônicos, TV</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Peso/Massa</h3>
      <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 my-4">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="border p-2 text-left">Unidade</th>
            <th class="border p-2 text-left">Equivalência</th>
            <th class="border p-2 text-left">Uso Comum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">1 Quilograma (kg)</td>
            <td class="border p-2">1.000 gramas</td>
            <td class="border p-2">Uso geral, comércio</td>
          </tr>
          <tr>
            <td class="border p-2">1 Libra (lb)</td>
            <td class="border p-2">0,4536 kg</td>
            <td class="border p-2">EUA, Reino Unido</td>
          </tr>
          <tr>
            <td class="border p-2">1 Onça (oz)</td>
            <td class="border p-2">28,35 gramas</td>
            <td class="border p-2">Receitas, ouro</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Temperatura - Fórmulas de Conversão</h3>
      <ul>
        <li><strong>Celsius para Fahrenheit:</strong> °F = (°C × 9/5) + 32</li>
        <li><strong>Fahrenheit para Celsius:</strong> °C = (°F - 32) × 5/9</li>
        <li><strong>Celsius para Kelvin:</strong> K = °C + 273,15</li>
        <li><strong>Kelvin para Celsius:</strong> °C = K - 273,15</li>
      </ul>
      
      <h2>Casos de Uso Práticos</h2>
      
      <h3>Para Viagens Internacionais</h3>
      <ul>
        <li><strong>Temperatura:</strong> Converter Celsius/Fahrenheit</li>
        <li><strong>Distância:</strong> Converter km/milhas</li>
        <li><strong>Velocidade:</strong> Converter km/h/mph</li>
        <li><strong>Combustível:</strong> Converter litros/galões</li>
      </ul>
      
      <h3>Para Culinária</h3>
      <ul>
        <li><strong>Temperatura do forno:</strong> Converter receitas internacionais</li>
        <li><strong>Ingredientes:</strong> Converter xícaras/gramas/mililitros</li>
        <li><strong>Peso:</strong> Converter libras/quilogramas</li>
      </ul>
      
      <h3>Para Construção e Projetos</h3>
      <ul>
        <li><strong>Medidas:</strong> Converter metros/pés/polegadas</li>
        <li><strong>Área:</strong> Converter m²/pés²</li>
        <li><strong>Volume:</strong> Converter m³/pés cúbicos</li>
      </ul>
      
      <h3>Para Estudos e Trabalho</h3>
      <ul>
        <li><strong>Ciências:</strong> Converter unidades do SI</li>
        <li><strong>Engenharia:</strong> Converter entre sistemas</li>
        <li><strong>Comércio:</strong> Converter unidades internacionais</li>
      </ul>
      
      <h2>Dicas de Precisão</h2>
      <ul>
        <li><strong>Use casas decimais adequadas:</strong> 2-3 para a maioria dos casos</li>
        <li><strong>Verifique o contexto:</strong> Algumas conversões variam por país</li>
        <li><strong>Arredonde corretamente:</strong> Evite erros de arredondamento cumulativos</li>
        <li><strong>Considere significância:</strong> Não exagere na precisão quando não necessário</li>
      </ul>
      
      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg my-6">
        <p><strong>Curiosidade:</strong> O sistema métrico é usado por mais de 95% da população mundial, mas os EUA ainda utilizam predominantemente o sistema imperial.</p>
      </div>
    `,
    type: 'guia',
    duration: '8 min',
    level: 'Intermediário',
    tool: 'Conversor de Unidades',
    toolLink: '/unidades',
    date: '10 de Dezembro, 2024',
    author: 'Eng. Roberto Silva',
    authorRole: 'Especialista em Metrologia'
  }
};

// ✅ Componente ASYNC para Next.js 16
export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = tutorials[slug];

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/tutoriais"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Tutoriais
          </Link>
        </div>

        {/* Tutorial Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                tutorial.type === 'video' 
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {tutorial.type === 'video' ? (
                  <PlayCircle className="w-4 h-4 mr-1" />
                ) : (
                  <FileText className="w-4 h-4 mr-1" />
                )}
                {tutorial.type === 'video' ? 'Vídeo' : 'Guia'}
              </span>
              
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                tutorial.level === 'Iniciante' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {tutorial.level}
              </span>
              
              <span className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-1" />
                {tutorial.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {tutorial.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {tutorial.description}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">{tutorial.author}</span>
                  {tutorial.authorRole && (
                    <span className="ml-2 text-gray-400">• {tutorial.authorRole}</span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <span>Publicado em: {tutorial.date}</span>
              </div>
              
              {tutorial.toolLink && (
                <Link 
                  href={tutorial.toolLink}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Usar Ferramenta →
                </Link>
              )}
            </div>
          </div>

          {/* Tutorial Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-600 prose-p:dark:text-gray-400 prose-ul:text-gray-600 prose-ul:dark:text-gray-400 prose-li:text-gray-600 prose-li:dark:text-gray-400 prose-strong:text-gray-900 prose-strong:dark:text-white prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:underline hover:prose-a:text-blue-700 hover:prose-a:dark:text-blue-300"
              dangerouslySetInnerHTML={{ __html: tutorial.content }}
            />
          </div>
        </article>

        {/* Related Tutorials */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Tutoriais Relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(tutorials)
              .filter(([tutorialSlug]) => tutorialSlug !== slug)
              .slice(0, 2)
              .map(([tutorialSlug, relatedTutorial]) => (
                <Link 
                  key={tutorialSlug}
                  href={`/tutoriais/${tutorialSlug}`}
                  className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      relatedTutorial.level === 'Iniciante' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {relatedTutorial.level}
                    </span>
                    <span className="text-xs text-gray-500">{relatedTutorial.duration}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {relatedTutorial.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {relatedTutorial.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Link 
            href="/tutoriais"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ver Todos os Tutoriais
          </Link>
        </div>
      </div>
    </div>
  );
}

// ✅ Generate static paths
export async function generateStaticParams() {
  return Object.keys(tutorials).map((slug) => ({
    slug: slug,
  }));
}

// ✅ Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = tutorials[slug];
  
  if (!tutorial) {
    return {
      title: 'Tutorial Não Encontrado - Utiliverse'
    };
  }

  return {
    title: `${tutorial.title} - Utiliverse Tutorials`,
    description: tutorial.description,
    keywords: `${tutorial.tool}, tutorial, guia, ${tutorial.type}, ${tutorial.level}`,
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      type: 'article',
      publishedTime: tutorial.date,
      authors: [tutorial.author],
    },
  };
}