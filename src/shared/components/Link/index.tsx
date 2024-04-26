import React from 'react';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

export const Link = ({ href, className, children, ...props }: LinkProps) => {
    const isUrl = href.startsWith('http');

    const Tag = isUrl ? 'a' : NextLink;

    return (
        <Tag
            href={href}
            className={twMerge(
                "text-main-400 hover:text-main-500 data-[disabled] font-medium data-[disabled='true']:cursor-not-allowed data-[disabled='true']:opacity-70",
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
};
