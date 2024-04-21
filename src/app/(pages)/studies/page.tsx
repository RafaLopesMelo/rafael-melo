import { StudyItem } from '@/components/studies/item';
import { Heading } from '@/shared/components/heading';
import { ListStudies } from '@/shared/services/studies/list';

export default async function Studies() {
    const studies = await ListStudies();

    return (
        <>
            <Heading
                as="h2"
                className="text-4xl md:text-5xl font-bold tracking-wide"
            >
                📚 What I&apos;m learning
            </Heading>
            <div className="mt-20"></div>
            <ul className="flex flex-col gap-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                {studies.data.map((study) => (
                    <StudyItem
                        key={study.title}
                        title={study.title}
                        description={study.description}
                        period={study.period}
                        articles={study.articles}
                    />
                ))}
            </ul>
        </>
    );
}
