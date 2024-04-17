"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";

const menus = [
    {
        name: "About",
        link: "/",
        active: "/",
    },
    {
        name: "Studies",
        link: "/studies",
        active: "/studies",
    },
    {
        name: "Articles",
        link: "/articles",
        active: "/articles",
    },
    {
        name: "Contact",
        link: "contact",
        active: "/contact",
    },
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <div className="top-0 z-10 flex items-center justify-center pt-6">
            <div className="flex-1"></div>
            <NavigationMenu.Root className="flex-1">
                <NavigationMenu.List className="flex rounded-full bg-white/90 px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                    {menus.map((menu) => {
                        const isActive = menu.active === pathname;

                        return (
                            <NavigationMenu.Item key={menu.link}>
                                <NavigationMenu.Link
                                    data-active={isActive}
                                    className="relative block text-zinc-800 dark:text-zinc-200 px-3 py-2 data-[active='true']:text-teal-400 dark:data-[active='true']:text-teal-400"
                                    href={menu.link}
                                >
                                    {menu.name}
                                    {isActive ? (
                                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                    ) : (
                                        <></>
                                    )}
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        );
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
            <div className="flex-1"></div>
        </div>
    );
};
