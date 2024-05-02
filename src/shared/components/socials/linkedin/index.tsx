import { IoLogoLinkedin } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

type LinkedinSocialProps = {
    className?: string;
};

export const LinkedinSocial = ({ className }: LinkedinSocialProps) => {
    return (
        <a
            href="https://www.linkedin.com/in/rafaellopesmelo/"
            target="_blank"
            className={twMerge(
                'text-2xl text-zinc-600 dark:text-zinc-400 flex items-center justify-center',
                className
            )}
        >
            <IoLogoLinkedin className="hover:text-main-500" />
        </a>
    );
};
