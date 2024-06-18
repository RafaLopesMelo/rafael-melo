import { ArticleItem } from '@/components/articles/item';
import { Heading } from '@/shared/components/heading';
import { ListArticles } from '@/shared/services/articles/list';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles'
}

export default async function Articles() {
    const articles = await ListArticles();

    return (
        <>
            <Heading as="h2" className="text-4xl font-bold tracking-wide">
                ✍🏼 What I&apos;m writing
            </Heading>
            <div className="mt-20"></div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {articles.data.map((article) => (
                    <ArticleItem key={article.slug} article={article} />
                ))}
            </div>
        </>
    );
}
