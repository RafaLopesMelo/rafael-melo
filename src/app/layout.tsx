import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
            <body className={`${inter.className} dark`}>{children}</body>
        </html>
    );
}
