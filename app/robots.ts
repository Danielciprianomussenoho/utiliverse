// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://utiliverse.com'; // ALTERE para seu domínio
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Bloquear APIs internas
          '/admin/', // Se tiver admin
          '/private/', // Se tiver áreas privadas
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1, // Delay de 1 segundo entre requests
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2, // Delay maior para Bing
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      // Pode adicionar sitemaps adicionais se tiver muitos URLs
      // `${baseUrl}/sitemap-tools.xml`,
      // `${baseUrl}/sitemap-blog.xml`,
    ],
    host: baseUrl,
  };
}