import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: {
        template: '%s | Rafael Melo',
        default: 'Rafael Melo'
    },
    description: 'full-stack software engineer specialized in back-end development, proficient in NodeJS, React/NextJS, and PHP'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className="dark">{children}</body>
        </html>
    );
}
