'use client';

import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import React from 'react';

import 'katex/dist/katex.min.css';

import { Paragraph } from '../../paragraph';
import { Heading } from '../../heading';
import { Code } from '../../code';
import { Blockquote } from '../../blockquote';
import { ListItem, OrderedList, UnorderedList } from '../../list';
import { Table } from '../../table';
import { Link } from '../../Link';
import { Image } from '../../image';

type MarkdownDisplayProps = {
    content: string;
};

export const MarkdownDisplay = ({ content }: MarkdownDisplayProps) => {
    return (
        <Markdown
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkMath, remarkGfm]}
            components={{
                p: (props: React.HtmlHTMLAttributes<HTMLParagraphElement>) => (
                    <Paragraph className="text-pretty" {...props} />
                ),
                a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                    <Link target="_blank" href={href as string} className="text-pretty" {...props} />
                ),
                h1: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h2"
                        className="text-3xl font-bold tracking-tight mt-12 mb-6"
                        {...props}
                    />
                ),
                h2: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h3"
                        className="text-2xl font-bold tracking-tight mt-10 mb-6"
                        {...props}
                    />
                ),
                h3: (props: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                    <Heading
                        as="h4"
                        className="text-xl font-bold tracking-tight mt-6 mb-6"
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
                    <OrderedList className="mb-6" {...props} />
                ),
                ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
                    <UnorderedList className="mb-6" {...props} />
                ),
                img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                    <Image
                        className="w-full h-auto my-6"
                        {...props}
                        alt={props.alt || ''}
                        src={props.src || ''}
                    />
                ),
                table: (props: React.HTMLAttributes<HTMLTableElement>) => (
                    <Table className="my-8" {...props} />
                ),
                tbody: (
                    props: React.HTMLAttributes<HTMLTableSectionElement>
                ) => <Table.Body {...props} />,
                thead: (
                    props: React.HTMLAttributes<HTMLTableSectionElement>
                ) => <Table.Header {...props} />,
                tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
                    <Table.Row {...props} />
                ),
                th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
                    <Table.Column {...props} />
                ),
                td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
                    <Table.Cell {...props} />
                )
            }}
        >
            {content}
        </Markdown>
    );
};
