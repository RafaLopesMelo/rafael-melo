import Link from 'next/link';

import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';
import { Text } from '@/shared/components/text';

type ArticleItemProps = {
    article: {
        title: string;
        slug: string;
        image: string;
        category: string;
        createdAt: Date;
    };
};

export const ArticleItem = ({ article }: ArticleItemProps) => {
    return (
        <article>
            <Link href={`/articles/${article.slug}`}>
                <figure className="aspect-square flex items-center justify-center overflow-hidden rounded-xl from-transparent to-zinc-800 bg-gradient-to-t group">
                    <div className="w-48  drop-shadow-[0_20px_13px_rgba(255,255,255,0.1)] transition group-hover:scale-110 group-hover:drop-shadow-[0_25px_25px_rgba(255,255,255,0.15)] group-hover:-translate-y-3">
                        <img src={article.image} />
                    </div>
                </figure>
            </Link>
            <div className="mt-4">
                <Paragraph className="mb-4 lg:mb-6 text-sm font-mono">
                    <Text as="span" className="uppercase tracking-wide">
                        {article.category}
                    </Text>
                    <Text as="span" className="mx-3">
                        —
                    </Text>
                    <Text as="span">
                        {article.createdAt.toLocaleDateString()}
                    </Text>
                </Paragraph>
                <Link href={`/articles/${article.slug}`}>
                    <Heading
                        as="h4"
                        className="font-bold text-2xl hover:underline"
                    >
                        {article.title}
                    </Heading>
                </Link>
            </div>
        </article>
    );
};
