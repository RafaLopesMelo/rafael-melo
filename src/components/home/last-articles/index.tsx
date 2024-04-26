import { ComingSoon } from '@/shared/components/coming-soon';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

export const LastArticles = () => {
    return (
        <section>
            <div className="mb-4">
                <Heading as="h3" className="text-3xl font-medium">
                    Last articles
                </Heading>
                <Paragraph className="text-lg text-zinc-600 dark:text-zinc-400 mb-0">
                    What I&apos;ve been writing
                </Paragraph>
            </div>
            <ComingSoon lines={1} perLine={3} />
        </section>
    );
};
