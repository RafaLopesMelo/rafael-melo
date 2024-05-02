import { twMerge } from 'tailwind-merge';

type CodeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Code = ({ children, className, ...props }: CodeProps) => {
    return (
        <code
            className={twMerge(
                'rounded-md border border-gray-800 bg-gray-600 whitespace-nowrap px-1 py-[0.1rem] font-mono',
                className
            )}
            {...props}
        >
            {children}
        </code>
    );
};
