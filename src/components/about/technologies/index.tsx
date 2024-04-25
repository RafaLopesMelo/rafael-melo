import { Heading } from '@/shared/components/heading';

type TechnologyHeadingProps = {
    children: React.ReactNode;
};

export const TechnologyHeading = ({ children }: TechnologyHeadingProps) => {
    return (
        <Heading as="h6" className="font-bold text-lg text-center mb-3">
            {children}
        </Heading>
    );
};

type TechnologyIconProps = {
    icons: { src: string; alt: string }[];
};

export const TechnologyIconsGrid = ({ icons }: TechnologyIconProps) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="rounded-md aspect-square bg-zinc-800"
                >
                    <img
                        src={icon.src}
                        alt={icon.alt}
                        className="rounded-md object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export const Technologies = () => {
    return (
        <div className="w-full max-w-[500px] border border-zinc-700 rounded">
            <table className="table-fixed">
                <tbody>
                    <tr>
                        <td className="p-4 w-[33%]">
                            <TechnologyHeading>Front-end</TechnologyHeading>
                            <TechnologyIconsGrid
                                icons={[
                                    {
                                        src: '/img/technologies/javascript.png',
                                        alt: 'JavaScript'
                                    },
                                    {
                                        src: '/img/technologies/typescript.png',
                                        alt: 'TypeScript'
                                    },
                                    {
                                        src: '/img/technologies/reactjs.png',
                                        alt: 'ReactJS'
                                    },
                                    {
                                        src: '/img/technologies/nextjs.png',
                                        alt: 'NextJS'
                                    }
                                ]}
                            />
                        </td>
                        <td className="py-2 px-3 w-[33%] border-x border-zinc-700">
                            <TechnologyHeading>Back-end</TechnologyHeading>
                            <TechnologyIconsGrid
                                icons={[
                                    {
                                        src: '/img/technologies/nodejs.png',
                                        alt: 'NodeJS'
                                    },
                                    {
                                        src: '/img/technologies/php.png',
                                        alt: 'PHP'
                                    },
                                    {
                                        src: '/img/technologies/python.webp',
                                        alt: 'Python'
                                    },
                                    {
                                        src: '/img/technologies/mongodb.png',
                                        alt: 'MongoDB'
                                    },
                                    {
                                        src: '/img/technologies/rabbitmq.png',
                                        alt: 'RabbitMQ'
                                    },
                                    {
                                        src: '/img/technologies/mysql.png',
                                        alt: 'MySql'
                                    }
                                ]}
                            />
                        </td>
                        <td className="py-2 px-3 w-[33%]">
                            <TechnologyHeading>Infra</TechnologyHeading>
                            <TechnologyIconsGrid
                                icons={[
                                    {
                                        src: '/img/technologies/git.png',
                                        alt: 'Git'
                                    },
                                    {
                                        src: '/img/technologies/docker.png',
                                        alt: 'Docker'
                                    },
                                    {
                                        src: '/img/technologies/nginx.png',
                                        alt: 'Nginx'
                                    },
                                    {
                                        src: '/img/technologies/aws.png',
                                        alt: 'AWS'
                                    },
                                    {
                                        src: '/img/technologies/vercel.png',
                                        alt: 'Vercel'
                                    },
                                    {
                                        src: '/img/technologies/azure.png',
                                        alt: 'Azure'
                                    }
                                ]}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
