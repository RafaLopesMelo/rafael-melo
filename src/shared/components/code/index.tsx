import { twMerge } from 'tailwind-merge';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Code = ({ children, className, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');

    return match ? (
        <SyntaxHighlighter
            {...props}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={atomDark}
        />
    ) : (
        <code
            className={twMerge(
                'rounded-md border border-gray-800 bg-zinc-900 whitespace-nowrap px-1 py-[0.1rem] font-mono text-main-400',
                className
            )}
            {...props}
        >
            {children}
        </code>
    );
};
