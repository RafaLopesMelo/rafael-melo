'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { usePathname } from 'next/navigation';
import { Avatar } from '../avatar';

const menus = [
    {
        name: 'Home',
        link: '/',
        active: '/'
    },
    {
        name: 'Studies',
        link: '/studies',
        active: '/studies'
    },
    {
        name: 'Articles',
        link: '/articles',
        active: '/articles'
    },
    {
        name: 'Projects',
        link: 'projects',
        active: '/projects'
    },
    {
        name: 'About',
        link: '/about',
        active: '/about'
    }
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="top-0 z-10 flex items-center justify-center pt-6">
            <div className="hidden md:block flex-1">
                <Avatar src="/img/me.webp" fallback="RM" alt="Rafael Melo" />
            </div>
            <NavigationMenu.Root>
                <NavigationMenu.List className="flex flex-wrap justify-center rounded-full bg-white/90 px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                    {menus.map((menu) => {
                        const isActive = menu.active === pathname;

                        return (
                            <NavigationMenu.Item key={menu.link}>
                                <NavigationMenu.Link
                                    data-active={isActive}
                                    className="relative block text-zinc-800 dark:text-zinc-200 px-3 py-2 data-[active='true']:text-main-400 dark:data-[active='true']:text-main-400"
                                    href={menu.link}
                                >
                                    {menu.name}
                                    {isActive ? (
                                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-main-500/0 via-main-500/40 to-main-500/0 dark:from-main-400/0 dark:via-main-400/40 dark:to-main-400/0"></span>
                                    ) : (
                                        <></>
                                    )}
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        );
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
            <div className="flex-1 hidden md:block"></div>
        </header>
    );
};
