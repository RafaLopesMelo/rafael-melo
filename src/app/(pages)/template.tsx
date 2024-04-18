'use client';

import { motion } from 'framer-motion';

import { Header } from '@/shared/components/header';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
};

export default function RootTemplate({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen dark:bg-black">
            <div className="mx-auto max-w-7xl w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:px-8">
                <div className="mx-auto lg:px-16">
                    <Header />
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ type: 'just' }}
                        className="mt-16"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
