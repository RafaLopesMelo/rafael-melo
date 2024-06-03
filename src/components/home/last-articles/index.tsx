import { ArticleItem } from '@/components/articles/item';
import { Button } from '@/shared/components/button';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';
import { ListArticles } from '@/shared/services/articles/list';

export const LastArticles = async () => {
    const articles = await ListArticles();

    return (
        <section>
            <div className="mb-6">
                <Heading as="h3" className="text-3xl font-medium">
                    Last articles
                </Heading>
                <Paragraph className="text-lg text-zinc-600 dark:text-zinc-400 mb-0">
                    What I&apos;ve been writing
                </Paragraph>
            </div>
            <div className="grid md:grid-cols-4">
                {articles.data.slice(0, 3).map((article) => (
                    <ArticleItem key={article.slug} article={article} />
                ))}
            </div>

            <div className="flex items-center justify-center mt-10">
                <Button as="a" href="/articles">
                    See all articles
                </Button>
            </div>
        </section>
    );
};
