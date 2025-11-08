// // app/blog/[slug]/page.tsx
// import Link from 'next/link';
// import { 
//   ArrowLeft, 
//   Calculator, 
//   Calendar, 
//   Coins, 
//   Lock, 
//   Ruler, 
//   Thermometer,
//   Clock,
//   Percent,
//   Palette,
//   Code,
//   Text,
//   Image,
//   Users,
//   Brain,
//   DollarSign,
//   Scale,
//   Battery,
//   Timer,
//   Binary,
//   FileText
// } from 'lucide-react';
// import { notFound } from 'next/navigation';

// // Interface para os posts do blog
// interface BlogPost {
//   title: string;
//   content: string;
//   date: string;
//   author: string;
//   excerpt?: string;
//   category?: string;
//   readTime?: string;
//   relatedTools?: string[];
// }

// // 🗂️ MAPEAMENTO COMPLETO DE TODAS AS FERRAMENTAS
// const toolMap = {
//   'imc': { name: 'Calculadora IMC', icon: Calculator, url: '/imc' },
//   'idade': { name: 'Calculadora de Idade', icon: Calendar, url: '/idade' },
//   'moedas': { name: 'Conversor de Moedas', icon: Coins, url: '/moedas' },
//   'senhas': { name: 'Gerador de Senhas', icon: Lock, url: '/senhas' },
//   'temperatura': { name: 'Conversor de Temperatura', icon: Thermometer, url: '/temperatura' },
//   'unidades': { name: 'Conversor de Unidades', icon: Ruler, url: '/unidades' },
//   'regra-tres': { name: 'Calculadora Regra de Três', icon: Percent, url: '/regra-tres' },
//   'agua': { name: 'Calculadora de Água', icon: Battery, url: '/agua' },
//   'gerador-nomes': { name: 'Gerador de Nomes', icon: Users, url: '/gerador-nomes' },
//   'gerador-textos': { name: 'Gerador de Textos', icon: Text, url: '/gerador-textos' },
//   'gerador-logos': { name: 'Gerador de Logos', icon: Palette, url: '/gerador-logos' },
//   'gerador-personagens': { name: 'Gerador de Personagens', icon: Users, url: '/gerador-personagens' },
//   'comparador-precos': { name: 'Comparador de Preços', icon: DollarSign, url: '/comparador-precos' },
//   'exercicios': { name: 'Gerador de Exercícios', icon: Brain, url: '/exercicios' },
//   'porcentagem': { name: 'Calculadora de Porcentagem', icon: Percent, url: '/porcentagem' },
//   'calorias': { name: 'Calculadora de Calorias', icon: Scale, url: '/calorias' },
//   'contador': { name: 'Contador de Palavras', icon: Text, url: '/contador' },
//   'romano': { name: 'Conversor de Números Romanos', icon: Binary, url: '/romano' },
//   'cronometro': { name: 'Cronômetro Online', icon: Timer, url: '/cronometro' },
//   'compressor-imagem': { name: 'Compressor de Imagem', icon: Image, url: '/compressor-imagem' },
//   'conversor-imagem': { name: 'Conversor de Imagem', icon: Image, url: '/conversor-imagem' },
//   'juros': { name: 'Calculadora de Juros', icon: DollarSign, url: '/juros' },
//   'editor-texto': { name: 'Editor de Texto Online', icon: FileText, url: '/editor-texto' },
//   'calculadora-data': { name: 'Calculadora de Datas', icon: Calendar, url: '/calculadora-data' },
//   'bases': { name: 'Conversor de Bases Numéricas', icon: Binary, url: '/bases' },
//   'calculadora': { name: 'Calculadora Básica', icon: Calculator, url: '/calculadora' },
//   'cientifica': { name: 'Calculadora Científica', icon: Calculator, url: '/cientifica' },
//   'paleta-cores': { name: 'Gerador de Paleta de Cores', icon: Palette, url: '/paleta-cores' },
//   'gradientes': { name: 'Gerador de Gradientes CSS', icon: Code, url: '/gradientes' },
//   'tempo': { name: 'Conversor de Tempo', icon: Clock, url: '/tempo' }
// };

// // 📚 DADOS COMPLETOS DOS POSTS - CONTEÚDO ORIGINAL COMPLETO
// const blogPosts: Record<string, BlogPost> = {
//   'como-calcular-imc': {
//     title: 'Como Calcular Seu IMC Corretamente e Interpretar os Resultados',
//     content: `
//       <h2>O que é o IMC?</h2>
//       <p>O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo estatístico belga Adolphe Quetelet no século XIX, o IMC é amplamente utilizado por profissionais de saúde para avaliar o estado nutricional e identificar riscos à saúde associados ao peso.</p>
      
//       <h2>Como calcular o IMC?</h2>
//       <p>A fórmula do IMC é bastante simples:</p>
//       <p><strong>IMC = peso (kg) ÷ (altura × altura) (m)</strong></p>
      
//       <h3>Exemplo prático detalhado:</h3>
//       <p>Vamos supor que você pesa 70 kg e tem 1,75 m de altura:</p>
//       <p>Primeiro, calculamos o quadrado da altura: 1,75 × 1,75 = 3,0625</p>
//       <p>Em seguida, dividimos o peso por esse valor: 70 ÷ 3,0625 = 22,86</p>
//       <p>Portanto, seu IMC é <strong>22,86</strong></p>
      
//       <h2>Interpretando os resultados - Tabela Completa da OMS</h2>
//       <p>De acordo com a Organização Mundial da Saúde (OMS), a classificação do IMC para adultos é a seguinte:</p>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Classificação</th>
//             <th>IMC</th>
//             <th>Riscos para a Saúde</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><strong>Abaixo do peso</strong></td>
//             <td>Abaixo de 18,5</td>
//             <td>Desnutrição, osteoporose, anemia</td>
//           </tr>
//           <tr>
//             <td><strong>Peso normal</strong></td>
//             <td>18,5 - 24,9</td>
//             <td>Risco menor para doenças</td>
//           </tr>
//           <tr>
//             <td><strong>Sobrepeso</strong></td>
//             <td>25 - 29,9</td>
//             <td>Risco aumentado para diabetes, hipertensão</td>
//           </tr>
//           <tr>
//             <td><strong>Obesidade Grau I</strong></td>
//             <td>30 - 34,9</td>
//             <td>Risco alto para doenças cardiovasculares</td>
//           </tr>
//           <tr>
//             <td><strong>Obesidade Grau II</strong></td>
//             <td>35 - 39,9</td>
//             <td>Risco muito alto</td>
//           </tr>
//           <tr>
//             <td><strong>Obesidade Grau III</strong></td>
//             <td>Acima de 40</td>
//             <td>Risco extremamente alto</td>
//           </tr>
//         </tbody>
//       </table>
      
//       <h2>Limitações do IMC</h2>
//       <p>É importante entender que o IMC tem algumas limitações:</p>
      
//       <h3>1. Não considera composição corporal</h3>
//       <p>O IMC não diferencia entre massa muscular e massa gorda. Atletas musculosos podem ter IMC elevado sem ter excesso de gordura.</p>
      
//       <h3>2. Não considera distribuição de gordura</h3>
//       <p>A gordura abdominal é mais perigosa que a gordura subcutânea, mas o IMC não faz essa distinção.</p>
      
//       <h3>3. Variações por etnia e idade</h3>
//       <p>Os pontos de corte podem variar para diferentes grupos étnicos e faixas etárias.</p>
      
//       <h2>Quando o IMC é Mais Apropriado?</h2>
//       <p>O IMC é mais confiável para:</p>
//       <ul>
//         <li>Populações em geral (não atletas)</li>
//         <li>Adultos entre 18 e 65 anos</li>
//         <li>Avaliações epidemiológicas</li>
//       </ul>
      
//       <h2>Próximos Passos Após Calcular o IMC</h2>
//       <p>Se seu IMC estiver fora da faixa ideal:</p>
      
//       <h3>Se estiver abaixo do peso:</h3>
//       <ul>
//         <li>Consulte um nutricionista</li>
//         <li>Aumente a ingestão calórica com alimentos nutritivos</li>
//         <li>Pratique exercícios de força</li>
//       </ul>
      
//       <h3>Se estiver com sobrepeso ou obesidade:</h3>
//       <ul>
//         <li>Procure orientação médica</li>
//         <li>Adote uma alimentação balanceada</li>
//         <li>Inclua atividade física regular</li>
//         <li>Estabeleça metas realistas de perda de peso</li>
//       </ul>
      
//       <h2>Conclusão</h2>
//       <p>O IMC é uma ferramenta útil para triagem inicial, mas não deve ser o único parâmetro para avaliar sua saúde. Consulte sempre profissionais de saúde para uma avaliação completa e personalizada.</p>
//     `,
//     date: '2024-12-15',
//     author: 'Dr. Ana Silva',
//     excerpt: 'Aprenda a calcular seu Índice de Massa Corporal de forma precisa e entender o que os resultados significam para sua saúde. Guia completo com tabelas e interpretação.',
//     category: 'Saúde',
//     readTime: '8 min de leitura',
//     relatedTools: ['imc', 'calculadora']
//   },

//   'ferramentas-online-essenciais': {
//     title: '10 Ferramentas Online Essenciais para o Dia a Dia em 2024',
//     content: `
//       <h2>Por que usar ferramentas online? A Revolução Digital</h2>
//       <p>No mundo digital atual, as ferramentas online tornaram-se indispensáveis para otimizar nosso tempo, aumentar a produtividade e simplificar tarefas complexas. Diferente do software tradicional, as ferramentas online oferecem acessibilidade imediata, atualizações automáticas e compatibilidade universal.</p>
      
//       <h2>As 10 Ferramentas Online Mais Úteis para 2024</h2>
      
//       <h3>1. Calculadoras Especializadas</h3>
//       <p>Vão muito além da calculadora básica. Incluem:</p>
//       <ul>
//         <li><strong>Calculadora de IMC</strong> - Para controle de saúde</li>
//         <li><strong>Calculadora Financeira</strong> - Juros, investimentos, empréstimos</li>
//         <li><strong>Calculadora de Datas</strong> - Planejamento e prazos</li>
//         <li><strong>Calculadora Científica</strong> - Para estudantes e profissionais</li>
//       </ul>
//       <p><strong>Vantagem:</strong> Precisão instantânea sem esforço mental.</p>
      
//       <h3>2. Conversores de Unidades</h3>
//       <p>Essenciais em um mundo globalizado:</p>
//       <ul>
//         <li><strong>Conversor de Moedas</strong> - Para compras internacionais</li>
//         <li><strong>Conversor de Temperatura</strong> - Celsius, Fahrenheit, Kelvin</li>
//         <li><strong>Conversor de Unidades</strong> - Métrico para imperial e vice-versa</li>
//         <li><strong>Conversor de Tempo</strong> - Horas, minutos, segundos</li>
//       </ul>
//       <p><strong>Vantagem:</strong> Elimina erros de conversão manual.</p>
      
//       <h3>3. Geradores de Senhas Seguras</h3>
//       <p>Proteção essencial na era digital:</p>
//       <ul>
//         <li>Gera combinações aleatórias e seguras</li>
//         <li>Personalizável por comprimento e complexidade</li>
//         <li>Avalia a força da senha</li>
//       </ul>
//       <p><strong>Vantagem:</strong> Protege contra ataques cibernéticos.</p>
      
//       <h3>4. Editores de Texto Online</h3>
//       <p>Mais que um simples bloco de notas:</p>
//       <ul>
//         <li>Formatação básica (negrito, itálico, listas)</li>
//         <li>Contadores de palavras e caracteres</li>
//         <li>Transformação de texto (maiúsculas/minúsculas)</li>
//         <li>Exportação para múltiplos formatos</li>
//       </ul>
//       <p><strong>Vantagem:</strong> Acesso de qualquer dispositivo.</p>
      
//       <h3>5. Ferramentas de Colaboração</h3>
//       <p>Fundamentais para trabalho remoto:</p>
//       <ul>
//         <li>Edição simultânea de documentos</li>
//         <li>Compartilhamento seguro de arquivos</li>
//         <li>Comunicação em tempo real</li>
//       </ul>
      
//       <h3>6. Compressores de Imagem</h3>
//       <p>Otimização para web e redes sociais:</p>
//       <ul>
//         <li>Reduz tamanho sem perder qualidade visível</li>
//         <li>Suporte a múltiplos formatos (JPG, PNG, WebP)</li>
//         <li>Processamento em lote</li>
//       </ul>
      
//       <h3>7. Gravadores de Tela Online</h3>
//       <p>Para tutoriais e apresentações:</p>
//       <ul>
//         <li>Gravação de tela sem instalação</li>
//         <li>Captura de áudio do sistema e microfone</li>
//         <li>Edição básica de vídeo</li>
//       </ul>
      
//       <h3>8. Ferramentas de Análise de Texto</h3>
//       <p>Otimização de conteúdo escrito:</p>
//       <ul>
//         <li>Análise de legibilidade</li>
//         <li>Contagem de palavras e caracteres</li>
//         <li>Detecção de plágio básica</li>
//         <li>Análise de densidade de palavras-chave</li>
//       </ul>
      
//       <h3>9. Conversores de Mídia</h3>
//       <p>Compatibilidade entre formatos:</p>
//       <ul>
//         <li>Conversão de vídeo (MP4, AVI, MOV)</li>
//         <li>Conversão de áudio (MP3, WAV, FLAC)</li>
//         <li>Conversão de imagem (JPG, PNG, WebP)</li>
//       </ul>
      
//       <h3>10. Geradores de Código</h3>
//       <p>Para desenvolvedores e designers:</p>
//       <ul>
//         <li>Geradores de CSS (gradientes, sombras)</li>
//         <li>Geradores de paleta de cores</li>
//         <li>Geradores de código HTML</li>
//         <li>Validadores de código</li>
//       </ul>
      
//       <h2>Vantagens das Ferramentas Online vs Software Tradicional</h2>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Característica</th>
//             <th>Ferramentas Online</th>
//             <th>Software Tradicional</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><strong>Acessibilidade</strong></td>
//             <td>✅ Qualquer dispositivo com internet</td>
//             <td>❌ Apenas no dispositivo de instalação</td>
//           </tr>
//           <tr>
//             <td><strong>Atualizações</strong></td>
//             <td>✅ Automáticas e transparentes</td>
//             <td>❌ Manuais e frequentes</td>
//           </tr>
//           <tr>
//             <td><strong>Custo</strong></td>
//             <td>✅ Muitas opções gratuitas</td>
//             <td>❌ Licenças caras</td>
//           </tr>
//           <tr>
//             <td><strong>Compatibilidade</strong></td>
//             <td>✅ Funciona em qualquer SO</td>
//             <td>❌ Depende do sistema operacional</td>
//           </tr>
//           <tr>
//             <td><strong>Armazenamento</strong></td>
//             <td>✅ Na nuvem (acesso seguro)</td>
//             <td>❌ Local (risco de perda)</td>
//           </tr>
//         </tbody>
//       </table>
      
//       <h2>Como Escolher as Melhores Ferramentas Online</h2>
      
//       <h3>Critérios de Seleção</h3>
//       <ul>
//         <li><strong>Usabilidade:</strong> Interface intuitiva e fácil de usar</li>
//         <li><strong>Privacidade:</strong> Política de dados transparente</li>
//         <li><strong>Velocidade:</strong> Tempos de resposta rápidos</li>
//         <li><strong>Funcionalidades:</strong> Atende às suas necessidades específicas</li>
//         <li><strong>Suporte:</strong> Boa documentação e suporte ao usuário</li>
//       </ul>
      
//       <h2>Tendências para o Futuro</h2>
//       <p>As ferramentas online continuam evoluindo rapidamente:</p>
      
//       <h3>Inteligência Artificial Integrada</h3>
//       <p>Ferramentas com IA para sugestões automáticas e otimizações inteligentes.</p>
      
//       <h3>Colaboração em Tempo Real Avançada</h3>
//       <p>Recursos de colaboração mais sofisticados e integrados.</p>
      
//       <h3>Personalização Baseada em Uso</h3>
//       <p>Interfaces que se adaptam aos padrões de uso de cada usuário.</p>
      
//       <h2>Conclusão</h2>
//       <p>As ferramentas online representam o futuro da produtividade digital. Ao escolher as ferramentas certas, você pode transformar completamente sua eficiência no trabalho e na vida pessoal. O segredo está em experimentar diferentes opções e encontrar aquelas que melhor se adaptam ao seu fluxo de trabalho específico.</p>
//     `,
//     date: '2024-12-10', 
//     author: 'Carlos Oliveira',
//     excerpt: 'Descubra as ferramentas online mais úteis que podem facilitar sua rotina e aumentar sua produtividade. Guia completo com comparações e tendências para 2024.',
//     category: 'Produtividade',
//     readTime: '12 min de leitura',
//     relatedTools: ['imc', 'idade', 'moedas', 'senhas', 'calculadora', 'editor-texto', 'temperatura', 'unidades']
//   },

//   'seguranca-digital-senhas-fortes': {
//     title: 'Segurança Digital: Como Criar Senhas Fortes e Proteger Suas Contas',
//     content: `
//       <h2>A Importância das Senhas Fortes na Era Digital</h2>
//       <p>No mundo digital atual, senhas são a primeira linha de defesa contra acessos não autorizados às suas contas e informações pessoais. Com o aumento de ataques cibernéticos e violações de dados, criar senhas seguras tornou-se uma habilidade essencial para qualquer pessoa que use a internet.</p>
      
//       <h2>Estatísticas Alarmantes sobre Segurança de Senhas</h2>
//       <ul>
//         <li>81% das violações de dados são causadas por senhas fracas</li>
//         <li>23 milhões de contas ainda usam "123456" como senha</li>
//         <li>65% das pessoas reutilizam senhas em múltiplas contas</li>
//         <li>Um hacker pode quebrar uma senha de 6 caracteres em 11 segundos</li>
//       </ul>
      
//       <h2>Características de uma Senha Verdadeiramente Segura</h2>
      
//       <h3>1. Comprimento Adequado - Quanto Mais Longa, Melhor</h3>
//       <p>Senhas devem ter pelo menos 12 caracteres. Veja por que:</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Comprimento</th>
//             <th>Tempo para Quebrar</th>
//             <th>Nível de Segurança</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>6 caracteres</td>
//             <td>11 segundos</td>
//             <td>❌ Muito fraca</td>
//           </tr>
//           <tr>
//             <td>8 caracteres</td>
//             <td>39 minutos</td>
//             <td>❌ Fraca</td>
//           </tr>
//           <tr>
//             <td>10 caracteres</td>
//             <td>4 meses</td>
//             <td>⚠️ Moderada</td>
//           </tr>
//           <tr>
//             <td>12 caracteres</td>
//             <td>34 anos</td>
//             <td>✅ Forte</td>
//           </tr>
//           <tr>
//             <td>14 caracteres</td>
//             <td>3 milênios</td>
//             <td>✅ Muito forte</td>
//           </tr>
//         </tbody>
//       </table>
      
//       <h3>2. Complexidade - Misture Diferentes Tipos de Caracteres</h3>
//       <p>Combine pelo menos três dos quatro tipos:</p>
//       <ul>
//         <li><strong>Letras maiúsculas</strong> (A-Z)</li>
//         <li><strong>Letras minúsculas</strong> (a-z)</li>
//         <li><strong>Números</strong> (0-9)</li>
//         <li><strong>Símbolos especiais</strong> (!@#$%^&*)</li>
//       </ul>
      
//       <h3>3. Imprevisibilidade - Evite Padrões Óbvios</h3>
//       <p>Não use:</p>
//       <ul>
//         <li>Sequências (123456, abcdef)</li>
//         <li>Palavras do dicionário</li>
//         <li>Informações pessoais (nomes, datas, times)</li>
//         <li>Substituições previsíveis (p@ssw0rd)</li>
//       </ul>
      
//       <h3>4. Unicidade - Senha Diferente para Cada Conta</h3>
//       <p>Usar a mesma senha em múltiplas contas é como usar a mesma chave para sua casa, carro e cofre. Se uma conta for comprometida, todas estarão em risco.</p>
      
//       <h2>Técnicas Comprovadas para Criar Senhas Fortes</h2>
      
//       <h3>Método da Frase de Passagem</h3>
//       <p>Transforme uma frase fácil de lembrar em uma senha forte:</p>
//       <p><strong>Frase:</strong> "Minha filha Maria nasceu no dia 15 de março de 2020!"</p>
//       <p><strong>Senha:</strong> <code>MfMnd15dm2020!</code></p>
      
//       <h3>Método de Substituição Avançada</h3>
//       <p>Substitua letras por números e símbolos de forma criativa:</p>
//       <p><strong>Palavra base:</strong> "senhasegura"</p>
//       <p><strong>Senha:</strong> <code>53nh@_53gur@_f0rt3!</code></p>
      
//       <h3>Método Aleatório com Geradores</h3>
//       <p>Use geradores de senhas para criar combinações completamente aleatórias:</p>
//       <p><strong>Exemplo:</strong> <code>K8#pL$2mQ9*wN1@v</code></p>
      
//       <h2>Gerenciamento de Senhas - A Chave para a Segurança</h2>
      
//       <h3>Por que Usar um Gerenciador de Senhas?</h3>
//       <ul>
//         <li>Armazena todas as senhas com criptografia</li>
//         <li>Gera senhas fortes automaticamente</li>
//         <li>Preenche automaticamente formulários de login</li>
//         <li>Sincroniza entre dispositivos</li>
//       </ul>
      
//       <h3>Gerenciadores Recomendados</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Gerenciador</th>
//             <th>Preço</th>
//             <th>Recursos Principais</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><strong>Bitwarden</strong></td>
//             <td>Grátis/Premium</td>
//             <td>Código aberto, sincronização ilimitada</td>
//           </tr>
//           <tr>
//             <td><strong>1Password</strong></td>
//             <td>Assinatura</td>
//             <td>Interface amigável, recursos avançados</td>
//           </tr>
//           <tr>
//             <td><strong>LastPass</strong></td>
//             <td>Grátis/Premium</td>
//             <td>Compatibilidade ampla, preenchimento automático</td>
//           </tr>
//         </tbody>
//       </table>
      
//       <h2>Autenticação de Dois Fatores (2FA) - Camada Extra de Segurança</h2>
      
//       <h3>O que é 2FA?</h3>
//       <p>Um segundo método de verificação além da senha, como:</p>
//       <ul>
//         <li>Código por SMS</li>
//         <li>App autenticador (Google Authenticator, Authy)</li>
//         <li>Biometria (impressão digital, reconhecimento facial)</li>
//         <li>Chaves de segurança física</li>
//       </ul>
      
//       <h3>Por que 2FA é Essencial?</h3>
//       <p>Mesmo se sua senha for roubada, o invasor não poderá acessar sua conta sem o segundo fator de autenticação.</p>
      
//       <h2>Práticas de Segurança Adicionais</h2>
      
//       <h3>Atualização Regular</h3>
//       <p>Mude senhas importantes a cada 3-6 meses, especialmente para:</p>
//       <ul>
//         <li>Email principal</li>
//         <li>Contas bancárias</li>
//         <li>Redes sociais</li>
//         <li>Contas de trabalho</li>
//       </ul>
      
//       <h3>Verificação de Vazamentos</h3>
//       <p>Use serviços como "Have I Been Pwned" para verificar se suas senhas foram comprometidas em vazamentos de dados.</p>
      
//       <h3>Educação Contínua</h3>
//       <p>Mantenha-se informado sobre novas ameaças e técnicas de segurança.</p>
      
//       <h2>O que Nunca Fazer com Senhas</h2>
//       <ul>
//         <li>❌ Anotar em papéis ou arquivos não criptografados</li>
//         <li>❌ Compartilhar por email ou mensagem</li>
//         <li>❌ Usar em computadores públicos sem cautela</li>
//         <li>❌ Criar senhas baseadas em informações públicas</li>
//         <li>❌ Ignorar avisos de segurança do navegador</li>
//       </ul>
      
//       <h2>Conclusão</h2>
//       <p>Criar e gerenciar senhas seguras não precisa ser complicado. Com as técnicas certas e ferramentas adequadas, você pode proteger suas contas de forma eficaz. Lembre-se: a segurança digital é uma jornada contínua, não um destino. Mantenha-se vigilante e atualizado sobre as melhores práticas.</p>
//     `,
//     date: '2024-12-05',
//     author: 'Mariana Santos',
//     excerpt: 'Guia completo sobre criação de senhas seguras e melhores práticas para proteger suas informações online. Aprenda técnicas comprovadas e evite os erros mais comuns.',
//     category: 'Segurança',
//     readTime: '10 min de leitura',
//     relatedTools: ['senhas']
//   },

//   'juros-simples-compostos': {
//     title: 'Juros Simples vs Compostos: Qual a Diferença e Como Calcular',
//     content: `
//       <h2>O que são Juros? Entendendo o Custo do Dinheiro</h2>
//       <p>Juros representam o custo do dinheiro ao longo do tempo. São a remuneração paga por quem toma dinheiro emprestado ou o rendimento recebido por quem investe. Desde a antiguidade, os juros são uma parte fundamental dos sistemas financeiros, permitindo o crescimento econômico e a distribuição temporal do consumo.</p>
      
//       <h2>Juros Simples: O Cálculo Linear e Previsível</h2>
//       <p>Nos juros simples, o valor dos juros é calculado sempre sobre o capital inicial. É como se a cada período, você ganhasse o mesmo valor em juros, independente de quanto tempo o dinheiro já esteve aplicado.</p>
      
//       <h3>Fórmula dos Juros Simples:</h3>
//       <p><strong>J = P × i × t</strong></p>
//       <p>Onde:<br/>
//       • <strong>J</strong> = Juros<br/>
//       • <strong>P</strong> = Capital (valor principal)<br/>
//       • <strong>i</strong> = Taxa de juros (em decimal)<br/>
//       • <strong>t</strong> = Tempo (mesmo período da taxa)</p>
      
//       <h3>Exemplo Prático Detalhado:</h3>
//       <p>Se você investir R$ 1.000,00 a uma taxa de 5% ao mês por 6 meses:</p>
//       <p>J = 1000 × 0,05 × 6 = R$ 300,00<br/>
//       Montante Final = R$ 1.000,00 + R$ 300,00 = <strong>R$ 1.300,00</strong></p>
      
//       <h2>Juros Compostos: O Poder do "Juros sobre Juros"</h2>
//       <p>Nos juros compostos, os juros são calculados sobre o capital inicial mais os juros acumulados. É o famoso "juros sobre juros" que faz o dinheiro crescer exponencialmente. Albert Einstein chamou os juros compostos de "a oitava maravilha do mundo".</p>
      
//       <h3>Fórmula dos Juros Compostos:</h3>
//       <p><strong>M = P × (1 + i)ᵗ</strong></p>
//       <p>Onde:<br/>
//       • <strong>M</strong> = Montante final<br/>
//       • <strong>P</strong> = Capital inicial<br/>
//       • <strong>i</strong> = Taxa de juros (em decimal)<br/>
//       • <strong>t</strong> = Tempo (mesmo período da taxa)</p>
      
//       <h3>Exemplo Prático Detalhado:</h3>
//       <p>Usando os mesmos valores do exemplo anterior (R$ 1.000,00 a 5% ao mês por 6 meses):</p>
//       <p>M = 1000 × (1 + 0,05)⁶ = 1000 × 1,340095 = <strong>R$ 1.340,10</strong><br/>
//       Juros = R$ 1.340,10 - R$ 1.000,00 = <strong>R$ 340,10</strong></p>
      
//       <h2>Comparação Detalhada: Simples vs Compostos</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Período</th>
//             <th>Juros Simples</th>
//             <th>Juros Compostos</th>
//             <th>Diferença</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1 ano</td>
//             <td>R$ 600,00</td>
//             <td>R$ 795,86</td>
//             <td>+32,6%</td>
//           </tr>
//           <tr>
//             <td>5 anos</td>
//             <td>R$ 3.000,00</td>
//             <td>R$ 6.386,16</td>
//             <td>+112,9%</td>
//           </tr>
//           <tr>
//             <td>10 anos</td>
//             <td>R$ 6.000,00</td>
//             <td>R$ 16.288,95</td>
//             <td>+171,5%</td>
//           </tr>
//           <tr>
//             <td>20 anos</td>
//             <td>R$ 12.000,00</td>
//             <td>R$ 265.329,77</td>
//             <td>+2.111,1%</td>
//           </tr>
//         </tbody>
//       </table>
      
//       <h2>Regra dos 72 - Estimando o Tempo de Duplicação</h2>
//       <p>Uma regra prática para estimar quanto tempo leva para um investimento dobrar com juros compostos:</p>
//       <p><strong>Tempo para dobrar = 72 ÷ taxa de juros anual</strong></p>
//       <p><em>Exemplo:</em> Com taxa de 8% ao ano: 72 ÷ 8 = 9 anos</p>
      
//       <h2>Aplicações Práticas no Mundo Real</h2>
      
//       <h3>Quando Usar Juros Simples?</h3>
//       <p>Juros simples são comuns em:</p>
//       <ul>
//         <li><strong>Empréstimos de curto prazo</strong> - Entre amigos/família</li>
//         <li><strong>Financiamentos com parcelas fixas</strong> - Alguns tipos de crédito</li>
//         <li><strong>Alguns investimentos de renda fixa</strong> - Prefixados simples</li>
//         <li><strong>Cobranças por atraso</strong> - Multas e juros moratórios</li>
//       </ul>
      
//       <h3>Quando Usar Juros Compostos?</h3>
//       <p>Juros compostos são ideais para:</p>
//       <ul>
//         <li><strong>Investimentos de longo prazo</strong> - Ações, fundos imobiliários</li>
//         <li><strong>Poupança e previdência</strong> - Acumulação de patrimônio</li>
//         <li><strong>Fundos de investimento</strong> - Reinvestimento automático</li>
//         <li><strong>Juros sobre juros em aplicações</strong> - CDB, LCI, LCA</li>
//       </ul>
      
//       <h2>Fatores que Influenciam o Poder dos Juros Compostos</h2>
      
//       <h3>1. Tempo - O Fator Mais Importante</h3>
//       <p>Quanto mais tempo o dinheiro ficar aplicado, maior será o efeito dos juros compostos. Começar a investir cedo faz uma diferença enorme.</p>
      
//       <h3>2. Taxa de Juros - O Multiplicador</h3>
//       <p>Pequenas diferenças na taxa de juros geram grandes diferenças no longo prazo.</p>
      
//       <h3>3. Frequência de Capitalização</h3>
//       <p>Juros podem ser capitalizados mensalmente, trimestralmente, anualmente. Quanto mais frequente, melhor.</p>
      
//       <h3>4. Contribuições Regulares</h3>
//       <p>Adicionar dinheiro regularmente ao investimento acelera exponencialmente o crescimento.</p>
      
//       <h2>Calculando Juros em Diferentes Situações</h2>
      
//       <h3>Para Empréstimos</h3>
//       <p>Entenda o custo real do dinheiro emprestado:</p>
//       <p><strong>Custo Total = Valor das Parcelas × Número de Parcelas - Valor Emprestado</strong></p>
      
//       <h3>Para Investimentos</h3>
//       <p>Calcule o retorno esperado de suas aplicações:</p>
//       <p><strong>Retorno = Montante Final - Investimento Inicial</strong></p>
      
//       <h3>Para Financiamentos</h3>
//       <p>Compreenda a composição das parcelas:</p>
//       <p><strong>Parcela = Amortização + Juros</strong></p>
      
//       <h2>Erros Comuns e Como Evitá-los</h2>
      
//       <h3>1. Subestimar o Poder dos Juros Compostos</h3>
//       <p><strong>Erro:</strong> Achar que pequenas quantias não fazem diferença<br/>
//       <strong>Solução:</strong> Comece com qualquer valor, mas comece cedo</p>
      
//       <h3>2. Confundir Taxas de Juros</h3>
//       <p><strong>Erro:</strong> Não converter entre taxas mensais e anuais<br/>
//       <strong>Solução:</strong> Use a fórmula: (1 + i_mensal)¹² - 1 = i_anual</p>
      
//       <h3>3. Ignorar a Inflação</h3>
//       <p><strong>Erro:</strong> Considerar apenas juros nominais<br/>
//       <strong>Solução:</strong> Calcule juros reais: (1 + i_nominal) ÷ (1 + inflação) - 1</p>
      
//       <h2>Ferramentas para Cálculo de Juros</h2>
      
//       <h3>Calculadoras Online</h3>
//       <p>Use calculadoras especializadas para simulações precisas.</p>
      
//       <h3>Planilhas Eletrônicas</h3>
//       <p>Excel e Google Sheets têm funções financeiras embutidas.</p>
      
//       <h3>Aplicativos Móveis</h3>
//       <p>Apps de finanças pessoais com calculadoras de juros.</p>
      
//       <h2>Conclusão</h2>
//       <p>Entender a diferença entre juros simples e compostos é fundamental para tomar decisões financeiras inteligentes. Enquanto os juros simples são previsíveis e lineares, os juros compostos oferecem o poder do crescimento exponencial. Use esse conhecimento a seu favor: para investimentos, priorize juros compostos e comece o quanto antes; para empréstimos, entenda claramente qual tipo de juros está sendo cobrado e calcule o custo total.</p>
      
//       <p>Lembre-se do conselho de Warren Buffett: "Não poupe o que sobra depois de gastar, mas gaste o que sobra depois de poupar."</p>
//     `,
//     date: '2024-12-20',
//     author: 'Carlos Financeiro',
//     excerpt: 'Entenda a diferença entre juros simples e compostos e aprenda a calcular investimentos e empréstimos de forma precisa. Guia completo com exemplos práticos e comparações.',
//     category: 'Finanças',
//     readTime: '12 min de leitura',
//     relatedTools: ['juros', 'calculadora', 'cientifica']
//   },

//   // ... (CONTINUA COM TODOS OS OUTROS POSTS COMPLETOS)
// };

// // 🛠️ COMPONENTE: Ferramentas Relacionadas
// function RelatedTools({ tools }: { tools: string[] }) {
//   return (
//     <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
//         <Calculator className="w-5 h-5 mr-2 text-blue-600" />
//         Ferramentas Relacionadas no utiliverse
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {tools.map(toolSlug => {
//           const tool = toolMap[toolSlug as keyof typeof toolMap];
//           if (!tool) return null;
          
//           const IconComponent = tool.icon;
//           return (
//             <Link
//               key={toolSlug}
//               href={tool.url}
//               className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md group"
//             >
//               <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
//               <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
//                 {tool.name}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // 📄 COMPONENTE PRINCIPAL (MESMO CÓDIGO ANTERIOR)
// export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const post = blogPosts[slug];

//   if (!post) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Navigation */}
//         <div className="mb-8">
//           <Link 
//             href="/blog"
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Voltar para o Blog
//           </Link>
//         </div>

//         {/* Article */}
//         <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//           {/* Category */}
//           {post.category && (
//             <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
//               {post.category}
//             </span>
//           )}
          
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
//             {post.title}
//           </h1>
          
//           <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
//             <span>Por {post.author}</span>
//             <span className="mx-2">•</span>
//             <span>{post.date}</span>
//             {post.readTime && (
//               <>
//                 <span className="mx-2">•</span>
//                 <span>{post.readTime}</span>
//               </>
//             )}
//           </div>

//           {post.excerpt && (
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic border-l-4 border-blue-500 pl-4">
//               {post.excerpt}
//             </p>
//           )}

//           <div 
//             className="prose prose-lg dark:prose-invert max-w-none
//                       prose-headings:text-gray-900 prose-headings:dark:text-white
//                       prose-p:text-gray-700 prose-p:dark:text-gray-300
//                       prose-strong:text-gray-900 prose-strong:dark:text-white
//                       prose-ul:text-gray-700 prose-ul:dark:text-gray-300
//                       prose-ol:text-gray-700 prose-ol:dark:text-gray-300
//                       prose-table:text-gray-700 prose-table:dark:text-gray-300
//                       prose-a:text-blue-600 prose-a:dark:text-blue-400 hover:prose-a:text-blue-700"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />

//           {/* 🆕 SEÇÃO: Ferramentas Relacionadas */}
//           {post.relatedTools && post.relatedTools.length > 0 && (
//             <RelatedTools tools={post.relatedTools} />
//           )}

//           {/* 🆕 SEÇÃO: Call-to-Action */}
//           <div className="mt-12 text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//               Explore Mais Ferramentas no utiliverse
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4">
//               Descubra todas as nossas ferramentas gratuitas para facilitar seu dia a dia
//             </p>
//             <Link
//               href="/todas-ferramentas"
//               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
//             >
//               Ver Todas as Ferramentas
//               <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
//             </Link>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// }

// // 📊 GERAÇÃO DE PARÂMETROS ESTÁTICOS
// export async function generateStaticParams() {
//   return Object.keys(blogPosts).map((slug) => ({
//     slug: slug,
//   }));
// }

// // 🔍 METADADOS PARA SEO
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const post = blogPosts[slug];
  
//   if (!post) {
//     return {
//       title: 'Post Não Encontrado - utiliverse',
//       description: 'Post não encontrado no blog do utiliverse.'
//     };
//   }

//   return {
//     title: `${post.title} - utiliverse Blog`,
//     description: post.excerpt || `Aprenda mais sobre ${post.title} no utiliverse.`,
//     openGraph: {
//       title: `${post.title} - utiliverse Blog`,
//       description: post.excerpt || `Aprenda mais sobre ${post.title} no utiliverse.`,
//       type: 'article',
//       publishedTime: post.date,
//       authors: [post.author],
//     },
//     robots: {
//       index: true,
//       follow: true,
//     }
//   };
// }





import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { RelatedTools } from '@/components/RelatedTools';
import { CTASection } from '@/components/CTASection';
import { blogPosts } from '@/data/blog-posts';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
        </div>

        {/* Article */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          {/* Category */}
          {post.category && (
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
          )}
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span>Por {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic border-l-4 border-blue-500 pl-4">
              {post.excerpt}
            </p>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none
                      prose-headings:text-gray-900 prose-headings:dark:text-white
                      prose-p:text-gray-700 prose-p:dark:text-gray-300
                      prose-strong:text-gray-900 prose-strong:dark:text-white
                      prose-ul:text-gray-700 prose-ul:dark:text-gray-300
                      prose-ol:text-gray-700 prose-ol:dark:text-gray-300
                      prose-table:text-gray-700 prose-table:dark:text-gray-300
                      prose-a:text-blue-600 prose-a:dark:text-blue-400 hover:prose-a:text-blue-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Ferramentas Relacionadas */}
          {post.relatedTools && post.relatedTools.length > 0 && (
            <RelatedTools tools={post.relatedTools} />
          )}

          {/* Call-to-Action */}
          <CTASection />
        </article>
      </div>
    </div>
  );
}

// Geração de parâmetros estáticos
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// Metadata para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: 'Post Não Encontrado - utiliverse',
      description: 'Post não encontrado no blog do utiliverse.'
    };
  }

  return {
    title: `${post.title} - utiliverse Blog`,
    description: post.excerpt || `Aprenda mais sobre ${post.title} no utiliverse.`,
    openGraph: {
      title: `${post.title} - utiliverse Blog`,
      description: post.excerpt || `Aprenda mais sobre ${post.title} no utiliverse.`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}



