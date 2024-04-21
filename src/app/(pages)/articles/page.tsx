import { ArticlesGrid } from '@/components/articles/grid';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

export default function Articles() {
    return (
        <>
            <Heading as="h2" className="text-4xl font-bold tracking-wide">
                ✍🏼 What I&apos;m writing
            </Heading>
            <div className="mt-20"></div>
            <ArticlesGrid />
        </>
    );
}
