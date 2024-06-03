import { ArticleDisplay } from '@/components/articles/display';
import { FindArticleBySlug } from '@/shared/services/articles/find-by-slug';
import { ListArticles } from '@/shared/services/articles/list';

export async function generateStaticParams() {
    const articles = await ListArticles();
    return articles.data.map((article) => ({ slug: article.slug }));
}

type ArticleProps = {
    params: { slug: string };
};

export default async function Article({ params }: ArticleProps) {
    const article = await FindArticleBySlug(params.slug);

    if (!article) return null;

    return (
        <div className="mt-8">
            <ArticleDisplay article={article} />
        </div>
    );
}
