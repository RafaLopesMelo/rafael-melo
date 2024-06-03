import { IoLogoGithub } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

type GithubSocialProps = {
    className?: string;
};

export const GithubSocial = ({ className }: GithubSocialProps) => {
    return (
        <a
            href="https://github.com/rafaLopesMelo"
            target="_blank"
            className={twMerge(
                'text-2xl text-zinc-600 dark:text-zinc-400 flex items-center justify-center',
                className
            )}
        >
            <IoLogoGithub className="hover:text-main-500" />
        </a>
    );
};
