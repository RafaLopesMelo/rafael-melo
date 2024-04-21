import { ComingSoon } from '@/shared/components/coming-soon';
import { Heading } from '@/shared/components/heading';

export default function Projects() {
    return (
        <>
            <Heading as="h2" className="text-4xl font-bold tracking-wide">
                🛠️ What I&apos;m working
            </Heading>
            <div className="mt-20"></div>
            <ComingSoon />
        </>
    );
}
