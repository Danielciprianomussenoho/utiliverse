// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utiliverse.com'; // ALTERE para seu domínio
  const now = new Date();

  // URLs estáticas principais
  const staticRoutes = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/todas-ferramentas`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/tutoriais`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/sobre`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/contato`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/privacidade`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/termos`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  // URLs dinâmicas das ferramentas
  const tools = [
    { slug: 'imc', priority: 0.95 },
    { slug: 'idade', priority: 0.9 },
    { slug: 'moedas', priority: 0.9 },
    { slug: 'porcentagem', priority: 0.9 },
    { slug: 'contador', priority: 0.85 },
    { slug: 'senhas', priority: 0.9 },
    { slug: 'romano', priority: 0.7 },
    { slug: 'unidades', priority: 0.8 },
    { slug: 'compressor-imagem', priority: 0.8 },
    { slug: 'conversor-imagem', priority: 0.8 },
    { slug: 'juros', priority: 0.8 },
    { slug: 'editor-texto', priority: 0.8 },
    { slug: 'calculadora-data', priority: 0.8 },
    { slug: 'temperatura', priority: 0.8 },
    { slug: 'bases', priority: 0.7 },
    { slug: 'calculadora', priority: 0.9 },
    { slug: 'cientifica', priority: 0.8 },
    { slug: 'paleta-cores', priority: 0.7 },
    { slug: 'gradientes', priority: 0.7 },
    { slug: 'tempo', priority: 0.8 },
  ];

  const toolRoutes = tools.map(tool => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: tool.priority,
  }));

  // URLs dinâmicas dos tutoriais
  const tutorials = [
    'como-usar-calculadora-imc',
    'conversor-moedas-dicas',
    'criando-senhas-seguras',
    'guia-contador-palavras',
    'calculadora-porcentagem-pratica',
    'conversor-unidades-completo',
  ].map(slug => ({
    url: `${baseUrl}/tutoriais/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // URLs dinâmicas dos posts do blog
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
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...tutorials, ...blogPosts];
}
