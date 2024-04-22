import { Text } from '../text';

export const ComingSoon = () => {
    return (
        <div className="relative">
            <div className="flex items-center justify-center absolute w-full h-full bg-gradient-to-b from-transparent to-90% to-zinc-900">
                <Text as="span" className="text-4xl font-bold">
                    Under progress...
                </Text>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-100 h-60 rounded-md bg-zinc-800/20"
                    ></div>
                ))}
            </div>
        </div>
    );
};
