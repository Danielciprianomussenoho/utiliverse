import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
});


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: {
    default: 'Utiliverse - Suíte Completa de Ferramentas Online Gratuitas',
    template: '%s | Utiliverse - Ferramentas Online'
  },
  description: 'Mais de 20 ferramentas online gratuitas: calculadora IMC, conversor de moedas, gerador de senhas seguras, contador de palavras, calculadora de porcentagem e muito mais. 100% gratuito, sem cadastro e fácil de usar.',
  keywords: [
    'ferramentas online',
    'calculadora IMC',
    'conversor moedas',
    'gerador senhas',
    'contador palavras',
    'calculadora porcentagem',
    'conversor unidades',
    'ferramentas gratuitas',
    'calculadora idade',
    'utiliverse',
    'calculadora online',
    'conversor online',
    'ferramentas utiliverse',
    'calculadora juros',
    'conversor temperatura',
    'editor texto online',
    'gerador qr code',
     'gerador-nomes', 
     'gerador-textos',
     'gerador-logos', 
     'gerador-personagens',
      'comparador-precos', 
    'exercicios',
    'contador',
    'unidades',
    'compressor-imagem',
    'conversor-imagem',
    'editor-texto',
    'calculadora-data',
    'tempo',
    'agua',
    'romano',
    'cronometro',
    'bases', 
    'cientifica', 
    'paleta-cores', ,
    'gradientes', 
  ].join(', '),
  
  // Metadados de autoria e propriedade
  authors: [{ name: 'Utiliverse', url: 'https://getutiliverse.com' }],
  creator: 'Utiliverse',
  publisher: 'Utiliverse',
  
  // Metadados técnicos
  applicationName: 'Utiliverse',
  category: 'Utilities',
  classification: 'Tools',
  
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
    url: false,
  },
  
  // URL base e canonical
  metadataBase: new URL('https://getutiliverse.com'), // ALTERE para seu domínio real
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  
  // Open Graph para redes sociais
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://getutiliverse.com',
    siteName: 'Utiliverse',
    title: 'Utiliverse - Ferramentas Online Gratuitas e de Qualidade',
    description: 'Descubra mais de 20 ferramentas online gratuitas para cálculos, conversões e utilitários do dia a dia. Interface simples e resultados precisos.',
    images: [
      {
        url: '/images/og-image.jpg', // RECOMENDADO: Crie esta imagem
        width: 1200,
        height: 630,
        alt: 'Utiliverse - Ferramentas Online Gratuitas',
        type: 'image/jpeg',
      },
    ],
    emails: ['contato@utiliverse.com'], // ALTERE para seu email
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@utiliverse', // ALTERE para seu handle
    creator: '@utiliverse', // ALTERE para seu handle
    title: 'Utiliverse - Ferramentas Online Gratuitas',
    description: 'Mais de 20 ferramentas online gratuitas para seu dia a dia',
    images: ['/images/og-image.jpg'],
  },
  
  // Robots e indexação
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Metadados adicionais
  verification: {
    // ADICIONE: google: 'seu-codigo-verificacao-google',
    // ADICIONE: yandex: 'seu-codigo-verificacao-yandex',
    // ADICIONE: yahoo: 'seu-codigo-verificacao-yahoo',
  },
  
  // Apple específico
  appleWebApp: {
    capable: true,
    title: 'Utiliverse',
    statusBarStyle: 'default',
  },
  
  // AppLinks
  appLinks: {
    web: {
      url: 'https://getutiliverse.com',
      should_fallback: false,
    },
  },
  
};

// Estrutura de dados organizada para Schema.org
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Utiliverse',
  description: 'Ferramentas online gratuitas para cálculos, conversões e utilitários do dia a dia',
  url: 'https://getutiliverse.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://getutiliverse.com/todas-ferramentas?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Utiliverse',
    logo: {
      '@type': 'ImageObject',
      url: 'https://getutiliverse.com/images/logo.png'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning 
      data-scroll-behavior="smooth"
      className={inter.variable}
    >
      <head>
        {/* Preconnect para domínios externos (se tiver) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Favicon e ícones (RECOMENDADO: adicione) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
            <Navbar />
            <main className="pt-16" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}