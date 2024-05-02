'use client';

import { Remark } from 'react-remark';
import { Paragraph } from '../../paragraph';
import React from 'react';
import { Heading } from '../../heading';
import { Code } from '../../code';

type MarkdownDisplayProps = {
    content: string;
};

export const MarkdownDisplay = ({ content }: MarkdownDisplayProps) => {
    return (
        <Remark
            rehypeReactOptions={{
                components: {
                    p: (
                        props: React.HtmlHTMLAttributes<HTMLParagraphElement>
                    ) => <Paragraph className="text-pretty" {...props} />,
                    h1: (
                        props: React.HtmlHTMLAttributes<HTMLHeadingElement>
                    ) => (
                        <Heading
                            as="h1"
                            className="text-4xl font-bold tracking-tight mt-16 mb-6"
                            {...props}
                        />
                    ),
                    h2: (
                        props: React.HtmlHTMLAttributes<HTMLHeadingElement>
                    ) => (
                        <Heading
                            as="h2"
                            className="text-3xl font-bold tracking-tight mt-16 mb-6"
                            {...props}
                        />
                    ),
                    h3: (
                        props: React.HtmlHTMLAttributes<HTMLHeadingElement>
                    ) => (
                        <Heading
                            as="h3"
                            className="text-2xl font-bold tracking-tight mt-16 mb-6"
                            {...props}
                        />
                    ),
                    code: (props: React.HTMLAttributes<HTMLSpanElement>) => (
                        <Code {...props} />
                    )
                }
            }}
        >
            {content}
        </Remark>
    );
};
