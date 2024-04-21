import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';
import { Text } from '@/shared/components/text';

type StudyItemProps = {
    title: string;
    description: string;
    period: {
        start: string;
        end: string;
    };
    articles: string[];
};

export const StudyItem = (props: StudyItemProps) => {
    const start = new Date(props.period.start);
    const end = props.period.end ? new Date(props.period.end) : null;

    return (
        <div className="grid grid-cols-12">
            <div className="md:col-span-3 hidden md:block">
                <Text
                    as="span"
                    className="block text-zinc-600 dark:text-zinc-400 text-sm"
                >
                    Started at: {start.toLocaleDateString()}
                </Text>
                <Text
                    as="span"
                    className="block text-zinc-600 dark:text-zinc-400 text-sm"
                >
                    Finished at: {end ? end.toLocaleDateString() : '-'}
                </Text>
            </div>
            <div className="col-span-12 md:col-span-9 bg-zinc-800/25 px-8 py-6 rounded-lg">
                <Heading as="h4" className="text-2xl font-bold">
                    {props.title}
                </Heading>
                <Paragraph
                    className="mt-3 text-zinc-600 dark:text-zinc-400"
                    dangerouslySetInnerHTML={{ __html: props.description }}
                />

                <Link
                    data-disabled={props.articles.length === 0}
                    href="#"
                    className="flex items-center font-medium text-main-500 gap-1 data-[disabled='true']:cursor-not-allowed data-[disabled='true']:opacity-70"
                >
                    Read articles
                    <IoChevronForward className="text-xs" />
                </Link>
            </div>
        </div>
    );
};
