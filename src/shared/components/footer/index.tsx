import { GithubSocial } from '../socials/github';
import { LinkedinSocial } from '../socials/linkedin';

export const Footer = () => {
    return (
        <footer className="mt-32">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40 sm:px-8">
                <ul className="flex items-center justify-center gap-5 list-none">
                    <GithubSocial />
                    <LinkedinSocial />
                </ul>
            </div>
        </footer>
    );
};
