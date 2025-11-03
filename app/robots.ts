// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://getutiliverse.com'; 
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Permite indexação de todas as páginas públicas
        disallow: [
          '/api/',      // Bloqueia APIs internas
          '/admin/',    // Bloqueia área de administração
          '/private/',  // Bloqueia áreas privadas futuras
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',   // Google indexa normalmente
        // crawlDelay é desnecessário para Google e pode ser removido
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2, // Mantém delay para não sobrecarregar
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,          // Sitemap principal
      `${baseUrl}/sitemap-tools.xml`,    // Sitemap separado para ferramentas
      `${baseUrl}/sitemap-blog.xml`,     // Sitemap separado para blog
      // Adicione mais sitemaps se criar mais seções
    ],
    host: baseUrl, 
  };
}
