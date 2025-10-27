import { Rocket, Users, Target, Heart, Shield, Zap, Globe, Award } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre o Utiliverse - Nossa Missão, Valores e História | Ferramentas Online Gratuitas',
  description: 'Conheça a história do Utiliverse, nossa missão de fornecer ferramentas online gratuitas de alta qualidade. +20 calculadoras, conversores e utilitários para seu dia a dia.',
  keywords: 'sobre Utiliverse, ferramentas online gratuitas, missão Utiliverse, calculadoras gratuitas, conversores online, história Utiliverse, utiliverse sobre',
  openGraph: {
    title: 'Sobre o Utiliverse - Nossa Missão e Valores | Ferramentas Online Gratuitas',
    description: 'Descubra a história do Utiliverse e nossa missão de democratizar o acesso a ferramentas online úteis e gratuitas para todos.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>›</span>
          <span className="text-gray-900 dark:text-white">Sobre o Utiliverse</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre o Utiliverse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conheça nossa missão de democratizar o acesso a ferramentas online de qualidade para todos os usuários
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Introduction Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Bem-vindo ao Utiliverse - Sua Plataforma de Ferramentas Online
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              O <strong>Utiliverse</strong> nasceu da ideia revolucionária de que <strong>ferramentas online úteis</strong> deveriam ser acessíveis a todos, sem barreiras ou custos ocultos. Em um mundo cada vez mais digital, percebemos que estudantes, profissionais e qualquer pessoa precisava de <strong>calculadoras práticas</strong>, <strong>conversores precisos</strong> e <strong>utilitários eficientes</strong>, mas muitas vezes se deparava com sites complexos ou serviços premium desnecessários.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Nossa Jornada Desde 2024
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Começamos nossa jornada em <strong>2024 com uma seleção cuidadosa</strong> das ferramentas mais úteis para o dia a dia digital. Desde <strong>calculadoras de IMC</strong> até <strong>conversores de moedas em tempo real</strong>, nosso objetivo sempre foi o mesmo: fornecer experiências limpas, rápidas e completamente gratuitas.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hoje, o <strong>Utiliverse já oferece mais de 20 ferramentas especializadas</strong> em diversas categorias, incluindo <strong>calculadoras avançadas</strong>, <strong>conversores de unidades</strong>, <strong>ferramentas de texto</strong> e <strong>utilitários de segurança</strong>. Continuamos evoluindo constantemente, sempre ouvindo o feedback dos nossos usuários e adicionando novas funcionalidades que realmente fazem diferença na vida das pessoas.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🌟 Diferencial Utiliverse
              </h4>
              <p className="text-blue-800 dark:text-blue-200">
                Diferente de outras plataformas, no Utiliverse você encontra <strong>ferramentas 100% gratuitas</strong>, <strong>interface intuitiva</strong> e <strong>resultados precisos</strong> - tudo sem necessidade de cadastro ou download.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Ferramentas Online</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Gratuito</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">PT-BR</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Em Português</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cadastro</div>
          </div>
        </section>

        {/* Values */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Missão
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Democratizar o acesso a ferramentas online úteis, oferecendo soluções 
              gratuitas e de alta qualidade para estudantes, profissionais e todos que 
              precisam de cálculos e conversões no dia a dia.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Visão
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Ser a plataforma de referência para ferramentas online gratuitas em 
              português, reconhecida pela qualidade, confiabilidade e impacto positivo 
              na produtividade dos usuários.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Valores
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Simplicidade, acessibilidade universal, qualidade técnica, inovação 
              constante e compromisso absoluto com a experiência do usuário acima 
              de tudo.
            </p>
          </div>
        </section>

        {/* Why Choose Utiliverse */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Por que Milhares de Usuários Escolhem o Utiliverse?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Totalmente Gratuito - Sem Surpresas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Todas as nossas <strong>20+ ferramentas são 100% gratuitas</strong>, sem limitações 
                  artificiais, versões premium ou custos ocultos. Use quantas vezes precisar.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Privacidade e Segurança Garantidas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Seus dados são processados localmente no navegador. <strong>Não coletamos informações pessoais</strong> nem exigimos cadastro.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Resultados Precisos e Confiáveis
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Desenvolvemos cada ferramenta com <strong>algoritmos testados e validados</strong> para garantir cálculos e conversões precisas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Compatibilidade Total com Dispositivos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Interface <strong>100% responsiva</strong> que funciona perfeitamente em computadores, tablets e smartphones.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Desenvolvimento Contínuo e Atualizações
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Estamos sempre <strong>adicionando novas ferramentas</strong> e melhorando as existentes baseados no feedback da comunidade.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Foco na Experiência do Usuário
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Cada ferramenta é pensada para ser <strong>intuitiva, rápida e resolver problemas reais</strong> do dia a dia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pronto para Explorar Nossas Ferramentas?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Descubra mais de 20 ferramentas online gratuitas que vão simplificar seu dia a dia, 
            desde cálculos matemáticos até conversões práticas e utilitários essenciais.
          </p>
          <Link 
            href="/todas-ferramentas"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            Explorar Todas as Ferramentas
            <Rocket className="w-5 h-5 ml-2" />
          </Link>
        </section>

        {/* FAQ Section for SEO */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Perguntas Frequentes sobre o Utiliverse
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">As ferramentas são realmente gratuitas?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sim! Todas as <strong>ferramentas do Utiliverse são 100% gratuitas</strong>. Não cobramos nenhum valor e não há limitações de uso. Você pode usar quantas ferramentas quiser, quantas vezes precisar.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preciso criar conta ou fazer cadastro?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Não é necessário criar conta ou fazer cadastro. <strong>Todas as ferramentas podem ser usadas instantaneamente</strong>, sem a necessidade de fornecer email ou dados pessoais.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Meus dados estão seguros?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutamente. A maioria das ferramentas processa dados <strong>localmente no seu navegador</strong>, garantindo total privacidade e segurança. Seus dados não são armazenados em nossos servidores.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Posso sugerir novas ferramentas?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Claro! Valorizamos muito o feedback dos nossos usuários. Se você tem uma ideia para uma nova ferramenta ou melhoria, entre em contato conosco através da página de contato.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Link 
            href="/contato"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 font-medium rounded-lg transition-colors"
          >
            Entrar em Contato
          </Link>
        </div>

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}