import React from 'react';
import { twMerge } from 'tailwind-merge';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = ({
    children,
    className,
    ...props
}: ParagraphProps) => {
    return (
        <p
            className={twMerge(
                'text-zinc-600 dark:text-gray-100 leading-relaxed mb-3',
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
};
