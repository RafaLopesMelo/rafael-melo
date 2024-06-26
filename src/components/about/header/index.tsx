import { Technologies } from '@/components/about/technologies';
import { Heading } from '@/shared/components/heading';
import { Image } from '@/shared/components/image';
import { Paragraph } from '@/shared/components/paragraph';

export const AboutHeader = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
                <Heading as="h1" className="text-5xl font-bold tracking-wide">
                    Rafael Melo
                </Heading>
                <Heading as="h2" className="text-2xl mt-2">
                    Software engineer
                </Heading>
                <Paragraph className="text-xl mt-3 text-zinc-600 dark:text-zinc-400 mb-0">
                    Sharing what I learn through the journey to become better
                </Paragraph>
                <div className="mt-8">
                    <Technologies />
                </div>
            </div>
            <div className="lg:px-20">
                <Image
                    src="/img/me_2.webp"
                    alt="Rafael Melo"
                    className="rounded-full w-60 h-60 md:w-80 md:h-80"
                />
            </div>
        </div>
    );
};
