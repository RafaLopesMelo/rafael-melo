import { Image } from "@/shared/components/image";

const icons: { title: string; icon: string }[] = [
    {
        icon: '/img/technologies/typescript.svg',
        title: 'TypeScript'
    },
    {
        icon: '/img/technologies/react.svg',
        title: 'React'
    },
    {
        icon: '/img/technologies/nodejs.svg',
        title: 'NodeJS'
    },
    {
        icon: '/img/technologies/go.svg',
        title: 'Go'
    },
    {
        icon: '/img/technologies/mongodb.svg',
        title: 'MongoDB'
    },
    {
        icon: '/img/technologies/rabbitmq.svg',
        title: 'RabbitMQ'
    },
    {
        icon: '/img/technologies/postgresql.svg',
        title: 'PostgreSQL'
    },
    {
        icon: '/img/technologies/docker.svg',
        title: 'Docker'
    },
    {
        icon: '/img/technologies/aws.svg',
        title: 'AWS'
    },
    {
        icon: '/img/technologies/azure.svg',
        title: 'Azure'
    }
];

export const Technologies = () => {
    return (
        <div className="w-full max-w-[520px] rounded bg-main-400/[0.03] p-3">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        title={icon.title}
                        className="rounded-md aspect-square p-2 flex flex-col items-center justify-center"
                    >
                        <Image src={icon.icon} alt={icon.title} className="w-8 h-8" />
                        <h5 className="text-sm text-center text-main-400 mt-2">
                            {icon.title}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
};
