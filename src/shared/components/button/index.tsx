import NextLink from 'next/link';

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
};

type ButtonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
};

type ButtonProps = LinkButtonProps | ButtonButtonProps;

export const Button = ({ as, children, ...props }: ButtonProps) => {
    const Tag = as === 'a' ? NextLink : 'button';

    const typedProps = props as any;

    return (
        <Tag
            {...typedProps}
            className="bg-zinc-50 hover:bg-zinc-100 text-zinc-800 px-6 py-2 rounded-full font-medium"
        >
            {children}
        </Tag>
    );
};
