'use client';
import { Mail, MessageCircle, Send, Clock, HelpCircle } from 'lucide-react';
import AdSense from '@/components/ui/AdSense';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email ou API
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>›</span>
          <span className="text-gray-900 dark:text-white">Contato</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato com o Utiliverse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tem dúvidas, sugestões ou feedback sobre nossas ferramentas online? Nossa equipe está pronta para ajudar você!
          </p>
        </header>

        {/* AdSense Top */}
        <div className="mb-8">
          <AdSense />
        </div>

        {/* Introduction Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Sua Opinião é Fundamental para Nós
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No <strong>Utiliverse</strong>, valorizamos profundamente o feedback dos nossos usuários. Cada mensagem que recebemos nos ajuda a <strong>melhorar nossas ferramentas online</strong> e criar uma experiência ainda melhor para todos.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Seja para <strong>reportar um problema técnico</strong>, <strong>sugerir uma nova funcionalidade</strong>, <strong>compartilhar uma ideia</strong> ou simplesmente <strong>dar seu feedback</strong> sobre alguma das nossas <strong>calculadoras gratuitas</strong> ou <strong>conversores online</strong>, nossa equipe está comprometida em responder cada mensagem com atenção e cuidado.
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Suporte Técnico
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">Especializado</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Precisa de ajuda com alguma <strong>ferramenta online</strong>? Encontrou algum problema em nossas <strong>calculadoras</strong> ou <strong>conversores</strong>? Nossa equipe de suporte está preparada para resolver suas dúvidas técnicas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Resposta Rápida
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-sm">Garantido</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Comprometemo-nos a responder todas as mensagens em <strong>até 48 horas úteis</strong>. Para questões urgentes relacionadas a <strong>ferramentas essenciais</strong>, priorizamos seu atendimento.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Sugestões Criativas
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">Inovação</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tem uma ideia para uma <strong>nova ferramenta online</strong>? Quer sugerir melhorias em nossos <strong>conversores</strong> ou <strong>calculadoras</strong>? Sua criatividade é bem-vinda!
              </p>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span className="text-lg mr-2">💡</span>
                Dicas para um Atendimento Mais Rápido
              </h3>
              <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Descreva detalhadamente</strong> sua dúvida ou problema</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mencione qual <strong>ferramenta específica</strong> está usando</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inclua <strong>prints ou exemplos</strong> se possível</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Verifique nossa <Link href="/blog" className="underline hover:text-blue-900">página de blog</Link> para tutoriais</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Como prefere ser chamado"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Seu Email para Contato *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tipo de Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione o tipo de assunto</option>
                    <option value="suporte">Suporte Técnico - Problemas com Ferramentas</option>
                    <option value="sugestao">Sugestão de Melhoria ou Nova Ferramenta</option>
                    <option value="bug">Reportar Bug ou Erro em Calculadora</option>
                    <option value="parceria">Proposta de Parceria ou Colaboração</option>
                    <option value="feedback">Feedback Geral sobre o Utiliverse</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sua Mensagem Detalhada *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva detalhadamente sua dúvida, sugestão, problema técnico ou feedback. Quanto mais informações, melhor poderemos ajudá-lo!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem para a Equipe Utiliverse</span>
                </button>
                
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Ao enviar esta mensagem, você concorda com nosso tratamento de dados para fins de atendimento.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Perguntas Frequentes - Utiliverse
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">As ferramentas do Utiliverse são realmente gratuitas?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Sim, completamente gratuitas!</strong> Todas as nossas <strong>calculadoras online</strong>, <strong>conversores</strong> e <strong>ferramentas utilitárias</strong> são 100% gratuitas, sem necessidade de cadastro, limitações de uso ou versões premium.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Posso sugerir novas ferramentas ou funcionalidades?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Adoramos receber sugestões!</strong> Muitas das nossas melhores ferramentas nasceram de ideias da comunidade. Use o formulário acima para nos enviar suas sugestões de <strong>novas calculadoras</strong> ou <strong>melhorias</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Como o Utiliverse se mantém gratuito?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Através de <strong>anúncios discretos e não intrusivos</strong> que não interferem na sua experiência. Garantimos que <strong>nunca cobraremos</strong> por nenhuma de nossas ferramentas online.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Encontrei um erro em uma calculadora, o que fazer?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nos <strong>reporte imediatamente!</strong> Use o formulário selecionando <strong>Reportar Bug</strong> e descreva o problema detalhadamente. Corrigimos erros rapidamente para manter a <strong>qualidade das nossas ferramentas</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Posso usar as ferramentas em dispositivos móveis?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Com certeza!</strong> Todas as ferramentas do Utiliverse são <strong>totalmente responsivas</strong> e funcionam perfeitamente em smartphones, tablets e computadores.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preciso criar conta para usar as ferramentas?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Não é necessário!</strong> Todas as ferramentas podem ser usadas <strong>instantaneamente sem cadastro</strong>. Acreditamos na simplicidade e acessibilidade acima de tudo.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Não Encontrou o que Precisa?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Explore nossa <strong>página de ferramentas</strong> para descobrir todas as calculadoras e conversores disponíveis, 
            ou visite nosso <strong>blog</strong> para tutoriais e dicas de uso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/todas-ferramentas"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explorar Ferramentas
            </Link>
            <Link 
              href="/blog"
              className="border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver Blog e Tutoriais
            </Link>
          </div>
        </section>

        {/* AdSense Bottom */}
        <div className="mt-12">
          <AdSense />
        </div>
      </div>
    </div>
  );
}