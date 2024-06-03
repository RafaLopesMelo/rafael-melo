'use client';

import { Avatar } from '@/shared/components/avatar';
import { Heading } from '@/shared/components/heading';
import { MarkdownDisplay } from '@/shared/components/markdown/display';
import { GithubSocial } from '@/shared/components/socials/github';
import { LinkedinSocial } from '@/shared/components/socials/linkedin';
import { motion } from 'framer-motion';

type ArticleDisplayProps = {
    article: {
        title: string;
        content: string;
        image: string;
    };
};

type AnimatedDivProps = {
    children: React.ReactNode;
    delay: number;
    className?: string;
};

const AnimatedDiv = ({ children, className, delay }: AnimatedDivProps) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            animate="enter"
            variants={{
                hidden: { opacity: 0, y: -50 },
                enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: delay / 1000,
                        duration: 0.5
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export const ArticleDisplay = ({ article }: ArticleDisplayProps) => {
    return (
        <>
            <header className="text-center relative max-w-3xl mx-auto py-4">
                <div className="h-[90%] hidden xl:block pattern left-0 -translate-x-full opacity-20 w-[200px]"></div>
                <div className="h-[90%] hidden xl:block pattern right-0 translate-x-full opacity-20 w-[200px]"></div>
                <AnimatedDiv
                    className="w-48 mx-auto pb-5 lg:pb-10 drop-shadow-[0_25px_25px_rgba(255,255,255,0.15)]"
                    delay={50}
                >
                    <img src={article.image} />
                </AnimatedDiv>
                <AnimatedDiv delay={150} className="flex flex-col items-center">
                    <Heading
                        className="text-3xl md:text-4xl font-bold text-center md:max-w-[80%]"
                        as="h1"
                    >
                        {article.title}
                    </Heading>

                    <div className="inline-grid grid-cols-[2fr_auto_auto_auto_2fr] items-center gap-6 mt-24 font-medium text-2xl w-full md:w-[80%]">
                        <hr className="border border-gray-400" />
                        <GithubSocial />
                        <Avatar
                            src="/img/me.webp"
                            fallback="RM"
                            alt="Rafael Melo"
                        />
                        <LinkedinSocial />
                        <hr className="border border-gray-400" />
                    </div>
                </AnimatedDiv>
            </header>
            <AnimatedDiv
                className="max-w-3xl mx-auto mt-6 md:mt-16"
                delay={250}
            >
                <MarkdownDisplay content={article.content} />
            </AnimatedDiv>
        </>
    );
};
