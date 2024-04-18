'use client';

import * as RxAvatar from '@radix-ui/react-avatar';

type AvatarProps = {
    src: string;
    alt: string;
    fallback: React.ReactNode;
};

export const Avatar = (props: AvatarProps) => {
    return (
        <RxAvatar.Root className="inline-flex h-[36px] w-[36px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <RxAvatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={props.src}
                alt={props.alt}
            />
            <RxAvatar.Fallback
                className="text-zinc-900 leading-1 flex h-full w-full items-center justify-center bg-white text-md font-medium"
                delayMs={600}
            >
                {props.fallback}
            </RxAvatar.Fallback>
        </RxAvatar.Root>
    );
};
