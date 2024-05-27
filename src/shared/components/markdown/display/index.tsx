'use client';

import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import React from 'react';

import 'katex/dist/katex.min.css';

import { Paragraph } from '../../paragraph';
import { Heading } from '../../heading';
import { Code } from '../../code';
import { Blockquote } from '../../blockquote';
import { ListItem, OrderedList, UnorderedList } from '../../list';

type MarkdownDisplayProps = {
    content: string;
};

export const MarkdownDisplay = ({ content }: MarkdownDisplayProps) => {
    return (
        <Markdown
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkMath]}
            components={{
                p: (props: React.HtmlHTMLAttributes<HTMLParagraphElement>) => (
                    <Paragraph className="text-pretty" {...props} />
                ),
                h1: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h1"
                        className="text-4xl font-bold tracking-tight mt-16 mb-6"
                        {...props}
                    />
                ),
                h2: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h2"
                        className="text-3xl font-bold tracking-tight mt-16 mb-6"
                        {...props}
                    />
                ),
                h3: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h3"
                        className="text-2xl font-bold tracking-tight mt-16 mb-6"
                        {...props}
                    />
                ),
                code: (props: React.HTMLAttributes<HTMLSpanElement>) => (
                    <Code {...props} />
                ),
                blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
                    <Blockquote {...props} />
                ),
                li: (props: React.HTMLAttributes<HTMLLIElement>) => (
                    <ListItem {...props} />
                ),
                ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
                    <OrderedList {...props} />
                ),
                ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
                    <UnorderedList {...props} />
                )
            }}
        >
            {content}
        </Markdown>
    );
};
