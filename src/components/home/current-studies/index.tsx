import { Link } from '@/shared/components/Link';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';
import { Text } from '@/shared/components/text';
import { ListStudies } from '@/shared/services/studies/list';
import { IoChevronForward } from 'react-icons/io5';

type StudyItemProps = {
    title: string;
    description: string;
    period: {
        start: string;
        end: string;
    };
};

const StudyItem = (props: StudyItemProps) => {
    const start = new Date(props.period.start);
    const description = props.description.substring(0, 100) + '...';

    return (
        <div className="py-4 px-6 rounded-md bg-zinc-800/25">
            <Heading as="h4" className="text-xl font-medium mb-3">
                {props.title}
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Text as="span" className="block">
                Started at: {start.toLocaleDateString()}
            </Text>
            <div className="flex items-end">
                <Link
                    className="ml-auto flex items-center mt-2"
                    href="/studies"
                >
                    See more
                    <IoChevronForward className="inline ml-1" />
                </Link>
            </div>
        </div>
    );
};

export const CurrentStudies = async () => {
    const studies = await ListStudies();
    const unfinished = studies.data.filter(
        (study) => study.status === 'PROGRESS'
    );

    return (
        <section>
            <div className="mb-6">
                <Heading as="h3" className="text-3xl font-medium">
                    Current studies
                </Heading>
                <Paragraph className="text-lg text-zinc-600 dark:text-zinc-400 mb-0">
                    What I&apos;m currently learning
                </Paragraph>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {unfinished.map((study) => (
                    <StudyItem
                        key={study.title}
                        title={study.title}
                        description={study.description}
                        period={study.period}
                    />
                ))}
            </div>
        </section>
    );
};
