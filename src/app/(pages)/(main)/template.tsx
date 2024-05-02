'use client';

import { motion } from 'framer-motion';

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
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: 'just' }}
            className="mt-[3rem] md:mt-[8rem]"
        >
            {children}
        </motion.main>
    );
}
