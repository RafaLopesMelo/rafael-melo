import ExportedImage from "next-image-export-optimizer";

type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
};

export const Image = (props: ImageProps) => {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        return <ExportedImage {...props} />
    }
    
    return <img {...props} />
}
