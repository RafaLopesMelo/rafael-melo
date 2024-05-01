const icons: { title: string; icon: string }[] = [
    {
        icon: '/img/technologies/javascript.svg',
        title: 'JavaScript'
    },
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
        icon: '/img/technologies/php.svg',
        title: 'PHP'
    },
    {
        icon: '/img/technologies/python.svg',
        title: 'Python'
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
        icon: '/img/technologies/mysql.svg',
        title: 'MySql'
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
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        title={icon.title}
                        className="rounded-md aspect-square p-2 flex flex-col items-center justify-center"
                    >
                        <img src={icon.icon} className="w-8 h-8" />
                        <h5 className="text-sm text-center text-main-400 mt-2">
                            {icon.title}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
};
