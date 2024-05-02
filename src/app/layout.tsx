import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'Rafael Melo'
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
