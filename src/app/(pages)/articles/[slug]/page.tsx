import { ArticleDisplay } from '@/components/articles/display';
import { FindArticleBySlug } from '@/shared/services/articles/find-by-slug';
import { ListArticles } from '@/shared/services/articles/list';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const articles = await ListArticles();
    return articles.data.map((article) => ({ slug: article.slug }));
}

type ArticleProps = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: ArticleProps
): Promise<Metadata> {
    const article = await FindArticleBySlug(params.slug);

    if (!article) return {};

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description
        }
    }
}

export default async function Article({ params }: ArticleProps) {
    const article = await FindArticleBySlug(params.slug);

    if (!article) return null;

    return (
        <div className="mt-8">
            <ArticleDisplay article={article} />
        </div>
    );
}
