import { AboutHeader } from '@/components/about/header';
import { Paragraph } from '@/shared/components/paragraph';

export default function About() {
    return (
        <>
            <AboutHeader />

            <div className="mt-16">
                <Paragraph>
                    Hi, I&apos;m Rafael Melo, a full-stack software engineer
                    specialized in back-end development, proficient in NodeJS,
                    React/NextJS, and PHP.
                </Paragraph>

                <Paragraph>
                    Throughout my career, I&apos;ve primarily worked in a
                    startup called{' '}
                    <a href="https://curseduca.com" target="_blank">
                        Curseduca
                    </a>{' '}
                    which is a platform that able content creators to delivery
                    their content to their students.
                    <br />
                    Within this startup environment, I&apos;ve engaged with
                    various technologies, including NodeJS and PHP for back-end
                    operations, as well as ReactJS and NextJS for front-end
                    development. Additionally, I&apos;ve utilized DevOps tools
                    like Docker and AWS.
                    <br />
                    At Curseduca I&apos;m responsible to deliver new features,
                    fix bugs, create internal tooling and also to help the team
                    to improve the code quality. Furthermore I&apos;m
                    responsible to organize and minister internal workshops to
                    help the team to improve their skills.
                </Paragraph>

                <Paragraph>
                    I&apos;m also an active member of{' '}
                    <a href="https://www.campinhodigital.org/" target="_blank">
                        Campinho Digital
                    </a>
                    , a community dedicated to assisting underprivileged youth
                    in entering the job market through technology.
                </Paragraph>

                <Paragraph>
                    My goal is to become a better software engineer every day,
                    but more, I want to help other people to become better too.
                    <br />I firmly believe that teaching is the most effective
                    method of learning, which is why I actively seek
                    opportunities to share my knowledge through articles and
                    educational initiatives.
                </Paragraph>
            </div>
        </>
    );
}
