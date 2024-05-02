import { ComingSoon } from '@/shared/components/coming-soon';
import { Heading } from '@/shared/components/heading';

export default function Articles() {
    return (
        <>
            <Heading as="h2" className="text-4xl font-bold tracking-wide">
                ✍🏼 What I&apos;m writing
            </Heading>
            <div className="mt-20"></div>
            <ComingSoon lines={2} perLine={4} />
        </>
    );
}
