// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utiliverse.com'; // ALTERE para seu domínio
  const currentDate = new Date();

  // URLs estáticas principais
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/todas-ferramentas`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tutoriais`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // URLs dinâmicas das ferramentas (todas as 20 ferramentas)
  const tools = [
    { slug: 'imc', priority: 0.9 },
    { slug: 'tempo', priority: 0.8 },
    { slug: 'idade', priority: 0.9 },
    { slug: 'moedas', priority: 0.9 },
    { slug: 'porcentagem', priority: 0.9 },
    { slug: 'contador', priority: 0.8 },
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
  ];

  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: tool.priority,
  }));

  // URLs dinâmicas dos tutoriais
  const tutorials = [
    { slug: 'como-usar-calculadora-imc' },
    { slug: 'conversor-moedas-dicas' },
    { slug: 'criando-senhas-seguras' },
    { slug: 'guia-contador-palavras' },
    { slug: 'calculadora-porcentagem-pratica' },
    { slug: 'conversor-unidades-completo' },
  ];

  const tutorialRoutes = tutorials.map((tutorial) => ({
    url: `${baseUrl}/tutoriais/${tutorial.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // URLs dinâmicas dos posts do blog (todos os 20 posts)
  const blogPosts = [
    { slug: 'como-calcular-imc' },
    { slug: 'ferramentas-online-essenciais' },
    { slug: 'seguranca-digital-senhas-fortes' },
    { slug: 'juros-simples-compostos' },
    { slug: 'conversao-temperatura' },
    { slug: 'calculadora-datas' },
    { slug: 'editor-texto-online' },
    { slug: 'qr-codes-criativos' },
    { slug: 'ferramentas-toolverse-guia' },
    { slug: 'conversor-moedas-guia' },
    { slug: 'calculadora-porcentagem' },
    { slug: 'conversor-tempo' },
    { slug: 'calculadora-idade' },
    { slug: 'gerador-senhas-seguras' },
    { slug: 'conversor-unidades' },
    { slug: 'conversor-bases-numericas' },
    { slug: 'calculadora-cientifica' },
    { slug: 'gerador-paleta-cores' },
    { slug: 'gerador-gradientes-css' },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...toolRoutes, ...tutorialRoutes, ...blogRoutes];
}