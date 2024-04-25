import { Text } from '../text';

type ComingSoonProps = {
    lines: number;
    perLine: number;
};

export const ComingSoon = ({ lines, perLine }: ComingSoonProps) => {
    const elementsCount = lines * perLine;

    const gridColsClassNames = [
        'md:grid-cols-1',
        'md:grid-cols-2',
        'md:grid-cols-3',
        'md:grid-cols-4'
    ];

    return (
        <div className="relative">
            <div className="flex items-center justify-center absolute w-full h-full bg-gradient-to-b from-transparent to-90% to-zinc-900">
                <Text as="span" className="text-4xl font-bold text-center">
                    Under progress...
                </Text>
            </div>
            <div
                className={`grid ${
                    gridColsClassNames[perLine - 1]
                } sm:grid-cols-2 grid-cols-1 gap-10`}
            >
                {Array.from({ length: elementsCount }).map((_, i) => (
                    <div
                        key={i}
                        className="w-100 h-60 rounded-md bg-zinc-800/20"
                    ></div>
                ))}
            </div>
        </div>
    );
};
