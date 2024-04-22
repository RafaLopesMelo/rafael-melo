import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const Footer = () => {
    return (
        <footer className="mt-32">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40 sm:px-8">
                <ul className="flex items-center justify-center gap-5 list-none">
                    <a
                        href="https://github.com/rafaLopesMelo"
                        target="_blank"
                        className="text-2xl text-zinc-600 dark:text-zinc-400"
                    >
                        <IoLogoGithub className="hover:text-main-500" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rafaellopesmelo/"
                        target="_blank"
                        className="text-2xl text-zinc-600 dark:text-zinc-400 "
                    >
                        <IoLogoLinkedin className="hover:text-main-500" />
                    </a>
                </ul>
            </div>
        </footer>
    );
};
