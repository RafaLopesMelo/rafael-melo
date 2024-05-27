import { twMerge } from 'tailwind-merge';

type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ className, children, ...props }: ListItemProps) => {
    return (
        <li
            className={twMerge(
                'text-zinc-600 dark:text-gray-100 leading-relaxed mb-3',
                className
            )}
            {...props}
        >
            {children}
        </li>
    );
};

type OrderedListProps = React.HTMLAttributes<HTMLOListElement>;

export const OrderedList = ({
    className,
    children,
    ...props
}: OrderedListProps) => {
    return (
        <ol className={twMerge('list-decimal', className)} {...props}>
            {children}
        </ol>
    );
};

type UnorderedListProps = React.HTMLAttributes<HTMLUListElement>;

export const UnorderedList = ({
    className,
    children,
    ...props
}: UnorderedListProps) => {
    return (
        <ul className={twMerge('list-decimal', className)} {...props}>
            {children}
        </ul>
    );
};
