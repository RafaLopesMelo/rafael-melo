import { twMerge } from 'tailwind-merge';

type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    as: 'span' | 'strong';
};

export const Text = ({ as, children, className, ...props }: TextProps) => {
    const Tag = as;

    return (
        <Tag
            className={twMerge('text-zinc-600 dark:text-gray-100', className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
