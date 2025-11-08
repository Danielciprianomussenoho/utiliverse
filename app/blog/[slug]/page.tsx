
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



