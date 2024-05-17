type BlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>;

export const Blockquote = ({ children, ...props }: BlockquoteProps) => {
    return (
        <blockquote className="border-l-2 border-main-500 round-full pl-3 mt-4">
            {children}
        </blockquote>
    );
};
