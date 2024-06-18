import { AboutHeader } from '@/components/about/header';
import { CurrentProjects } from '@/components/home/current-projects';
import { CurrentStudies } from '@/components/home/current-studies';
import { LastArticles } from '@/components/home/last-articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home'
}

export default function Home() {
    return (
        <div className="flex flex-col gap-16">
            <AboutHeader />
            <div className="hidden md:block"></div>
            <CurrentStudies />
            <LastArticles />
            <CurrentProjects />
        </div>
    );
}
