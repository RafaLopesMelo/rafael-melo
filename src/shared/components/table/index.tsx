import { twMerge } from 'tailwind-merge';

type TableProps = React.HTMLAttributes<HTMLTableElement>;

export const Table = ({ children, className, ...props }: TableProps) => {
    const tableClassName = twMerge('table-auto w-full', className);

    return (
        <table className={tableClassName} {...props}>
            {children}
        </table>
    );
};

type HeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

const Header = ({ children, className, ...props }: HeaderProps) => {
    return (
        <thead className={className} {...props}>
            {children}
        </thead>
    );
};

Table.Header = Header;

type ColumnProps = React.HTMLAttributes<HTMLTableCellElement>;

const Column = ({ children, className, ...props }: ColumnProps) => {
    const columnClassName = twMerge(
        `py-4 px-4 border-b text-2xs border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300 text-left`,
        className
    );

    return (
        <th scope="col" className={columnClassName} {...props}>
            {children}
        </th>
    );
};

Table.Column = Column;

type RowProps = React.HTMLAttributes<HTMLTableRowElement>;

const Row = ({ children, className, ...props }: RowProps) => {
    const rowClassName = twMerge(
        'border-b border-gray-50 dark:border-gray-600 mx-10',
        className
    );

    return (
        <tr className={rowClassName} {...props}>
            {children}
        </tr>
    );
};

Table.Row = Row;

type BodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

const Body = ({ children, className, ...props }: BodyProps) => {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>
    );
};

Table.Body = Body;

type CellProps = React.HTMLAttributes<HTMLTableCellElement>;

const Cell = ({ children, className, ...props }: CellProps) => {
    const cellClassName = twMerge(
        `py-4 px-4 border-b text-2xs border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300 text-left`,
        className
    );

    return (
        <td scope="row" className={cellClassName} {...props}>
            {children}
        </td>
    );
};

Table.Cell = Cell;
