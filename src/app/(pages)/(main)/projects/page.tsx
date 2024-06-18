import { ComingSoon } from '@/shared/components/coming-soon';
import { Heading } from '@/shared/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects'
}

export default function Projects() {
    return (
        <>
            <Heading as="h2" className="text-4xl font-bold tracking-wide">
                🛠️ What I&apos;m working
            </Heading>
            <div className="mt-20"></div>
            <ComingSoon lines={2} perLine={4} />
        </>
    );
}
