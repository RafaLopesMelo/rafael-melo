import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';

export const metadata: Metadata = {
    title: {
        template: '%s | Rafael Melo',
        default: 'Rafael Melo',
    },
    description: 'Rafael Melo is a full-stack software engineer specialized in back-end development, proficient in NodeJS, React/NextJS, and PHP',
    openGraph: {
        title: 'Rafael Melo',
        description: 'Rafael Melo is a full-stack software engineer specialized in back-end development, proficient in NodeJS, React/NextJS, and PHP'
    },
    alternates: {
        canonical: 'https://rafamelo.dev.br'
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className="dark">{children}</body>
            <GoogleAnalytics gaId='G-ZCS2CQGSGQ' />
        </html>
    );
}
