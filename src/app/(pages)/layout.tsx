import { Header } from '@/shared/components/header';
import { Footer } from '@/shared/components/footer';

export default function RootTemplate({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen dark:bg-black">
            <div className="mx-auto max-w-7xl w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 flex flex-col px-5 lg:px-20">
                <Header />
                <div className="grow">
                    <div className="mx-auto">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
