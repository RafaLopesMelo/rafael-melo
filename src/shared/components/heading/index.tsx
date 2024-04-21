import { twMerge } from 'tailwind-merge';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({
    as,
    children,
    className,
    ...props
}: HeadingProps) => {
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
