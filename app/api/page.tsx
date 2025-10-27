import { Code, Shield, Database, Rocket, Mail } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';

export const metadata = {
  title: 'API Utiliverse - Integre Nossas Ferramentas em Seus Projetos',
  description: 'Documentação da API Utiliverse para desenvolvedores. Integre calculadoras, conversores e ferramentas em seus aplicativos.',
  keywords: 'API Utiliverse, desenvolvedores, integração, ferramentas online, REST API, documentação',
};

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            API Utiliverse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Integre nossas ferramentas diretamente em seus aplicativos e sistemas
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Status da API */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  API em Desenvolvimento
                </h2>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800 mb-6">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  🚀 Lançamento Previsto - 1º Trimestre 2026
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Estamos construindo uma API robusta para integrar as ferramentas do Utiliverse 
                  em seus projetos. Foco em performance, segurança e facilidade de uso.
                </p>
              </div>
            </section>

            {/* Recursos Planejados */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Recursos da API
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    🧮 Calculadoras
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                    <li>• Cálculo de IMC</li>
                    <li>• Porcentagens</li>
                    <li>• Juros compostos</li>
                    <li>• Idade e datas</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                    🔄 Conversores
                  </h3>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                    <li>• Moedas em tempo real</li>
                    <li>• Unidades de medida</li>
                    <li>• Temperatura</li>
                    <li>• Sistemas numéricos</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    🛠️ Utilitários
                  </h3>
                  <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                    <li>• Gerador de senhas</li>
                    <li>• Contador de palavras</li>
                    <li>• Compressão de texto</li>
                    <li>• Validação de dados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Exemplo de Uso */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Exemplo de Implementação
                </h2>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm font-medium">JavaScript</span>
                  <span className="text-gray-500 text-sm">Endpoint: /v1/imc</span>
                </div>
                <pre className="text-gray-300 text-sm overflow-x-auto">
{`// Cálculo de IMC via API Utiliverse
const calculateIMC = async (peso, altura) => {
  const response = await fetch('https://api.utiliverse.com/v1/imc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer SUA_API_KEY'
    },
    body: JSON.stringify({ peso, altura })
  });
  
  return await response.json();
};

// Uso prático
const resultado = await calculateIMC(70, 1.75);
console.log(resultado.imc); // 22.86
console.log(resultado.classificacao); // "Peso normal"
console.log(resultado.mensagem); // "Peso dentro da faixa saudável"`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Resposta de Sucesso</h4>
                  <pre className="text-green-800 dark:text-green-200 text-xs">
{`{
  "imc": 22.86,
  "classificacao": "Peso normal",
  "mensagem": "Peso dentro da faixa saudável",
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Erro de Validação</h4>
                  <pre className="text-red-800 dark:text-red-200 text-xs">
{`{
  "erro": "Dados inválidos",
  "mensagem": "Altura deve ser maior que zero",
  "codigo": 400
}`}</pre>
                </div>
              </div>
            </section>

            {/* Segurança e Limites */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Segurança e Limites
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    🔐 Medidas de Segurança
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>• Autenticação via API Key</li>
                    <li>• Rate limiting inteligente</li>
                    <li>• Criptografia SSL/TLS</li>
                    <li>• Validação de entrada rigorosa</li>
                    <li>• Logs de auditoria detalhados</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    📊 Planos e Limites
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>• <strong>Free:</strong> 1.000 requests/dia</li>
                    <li>• <strong>Pro:</strong> 10.000 requests/dia</li>
                    <li>• <strong>Business:</strong> 100.000 requests/dia</li>
                    <li>• Suporte prioritário</li>
                    <li>• Endpoints exclusivos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acesso Antecipado */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-indigo-600 mr-3" />
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 text-lg">
                    Programa de Acesso Antecipado
                  </h3>
                </div>
                <p className="text-indigo-800 dark:text-indigo-200 mb-4">
                  Estamos selecionando desenvolvedores para testar a API antes do lançamento oficial. 
                  Participe e influencie o desenvolvimento!
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">🎯 Perfil Ideal</h4>
                    <ul className="text-indigo-800 dark:text-indigo-200 space-y-1">
                      <li>• Desenvolvedores ativos</li>
                      <li>• Startups em crescimento</li>
                      <li>• Projetos open source</li>
                      <li>• Empresas com necessidade específica</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">🎁 Benefícios</h4>
                    <ul className="text-indigo-800 dark:text-indigo-200 space-y-1">
                      <li>• Acesso gratuito por 6 meses</li>
                      <li>• Suporte técnico direto</li>
                      <li>• Influência no roadmap</li>
                      <li>• Reconhecimento como early adopter</li>
                    </ul>
                  </div>
                </div>
                <a 
                  href="/contato" 
                  className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Solicitar Acesso Antecipado
                </a>
              </div>
            </section>

            {/* Roadmap */}
            <section>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-xl">
                🗓️ Roadmap de Desenvolvimento
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Q4 2024</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Especificação técnica e arquitetura</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Q1 2025</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Desenvolvimento do core da API</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Q3 2025</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Programa de acesso antecipado</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Q1 2026</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Lançamento público oficial</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}