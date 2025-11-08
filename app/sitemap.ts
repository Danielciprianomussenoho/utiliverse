// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getutiliverse.com';
  
  // Datas realistas para melhor SEO
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  // URLs estáticas principais com datas realistas
  const staticRoutes = [
    { 
      url: baseUrl, 
      lastModified: now,
      changeFrequency: 'daily' as const, 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/todas-ferramentas`, 
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: now,
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/tutoriais`, 
      lastModified: lastMonth, 
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/sobre`, 
      lastModified: lastMonth, 
      changeFrequency: 'yearly' as const, 
      priority: 0.5 
    },
    { 
      url: `${baseUrl}/contato`, 
      lastModified: lastMonth, 
      changeFrequency: 'yearly' as const, 
      priority: 0.5 
    },
    { 
      url: `${baseUrl}/cookies`, 
      lastModified: lastMonth, 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${baseUrl}/privacidade`, 
      lastModified: lastMonth, 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${baseUrl}/termos`, 
      lastModified: lastMonth, 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
  ];

  // TODAS as 30 ferramentas com prioridades realistas
  const tools = [
    // Ferramentas TOP (alta prioridade)
    { slug: 'imc', priority: 1.0, frequency: 'weekly' as const },
    { slug: 'calculadora', priority: 1.0, frequency: 'weekly' as const },
    { slug: 'idade', priority: 0.9, frequency: 'weekly' as const },
    { slug: 'moedas', priority: 0.9, frequency: 'daily' as const },
    { slug: 'senhas', priority: 0.9, frequency: 'weekly' as const },
    
    // Ferramentas populares
    { slug: 'porcentagem', priority: 0.9, frequency: 'monthly' as const },
    { slug: 'regra-tres', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'juros', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'calorias', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'temperatura', priority: 0.8, frequency: 'monthly' as const },
    
    // Geradores de conteúdo
    { slug: 'gerador-nomes', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'gerador-textos', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'gerador-logos', priority: 0.8, frequency: 'monthly' as const },
    { slug: 'gerador-personagens', priority: 0.8, frequency: 'monthly' as const },
    
    // Ferramentas utilitárias
    { slug: 'comparador-precos', priority: 0.8, frequency: 'weekly' as const },
    { slug: 'exercicios', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'contador', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'unidades', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'compressor-imagem', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'conversor-imagem', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'editor-texto', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'calculadora-data', priority: 0.7, frequency: 'monthly' as const },
    { slug: 'tempo', priority: 0.7, frequency: 'monthly' as const },
    
    // Ferramentas de nicho (menor prioridade)
    { slug: 'agua', priority: 0.6, frequency: 'yearly' as const },
    { slug: 'romano', priority: 0.6, frequency: 'yearly' as const },
    { slug: 'cronometro', priority: 0.6, frequency: 'yearly' as const },
    { slug: 'bases', priority: 0.6, frequency: 'yearly' as const },
    { slug: 'cientifica', priority: 0.6, frequency: 'yearly' as const },
    { slug: 'paleta-cores', priority: 0.6, frequency: 'monthly' as const },
    { slug: 'gradientes', priority: 0.6, frequency: 'monthly' as const },
  ];

  const toolRoutes = tools.map(tool => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: tool.frequency === 'daily' ? now : 
                  tool.frequency === 'weekly' ? lastWeek : lastMonth,
    changeFrequency: tool.frequency,
    priority: tool.priority,
  }));

  // Tutoriais
  const tutorials = [
    'como-usar-calculadora-imc',
    'conversor-moedas-dicas',
    'criando-senhas-seguras',
    'guia-contador-palavras',
    'calculadora-porcentagem-pratica',
    'conversor-unidades-completo',
  ].map(slug => ({
    url: `${baseUrl}/tutoriais/${slug}`,
    lastModified: lastMonth,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Posts do blog
  const blogPosts = [
    'como-calcular-imc',
    'ferramentas-online-essenciais',
    'seguranca-digital-senhas-fortes',
    'juros-simples-compostos',
    'conversao-temperatura',
    'calculadora-datas',
    'editor-texto-online',
    'qr-codes-criativos',
    'ferramentas-toolverse-guia',
    'conversor-moedas-guia',
    'calculadora-porcentagem',
    'conversor-tempo',
    'calculadora-idade',
    'gerador-senhas-seguras',
    'conversor-unidades',
    'conversor-bases-numericas',
    'calculadora-cientifica',
    'gerador-paleta-cores',
    'gerador-gradientes-css',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: lastMonth,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...toolRoutes, ...tutorials, ...blogPosts];
}