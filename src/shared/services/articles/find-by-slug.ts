import path, { basename } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

type OutputFindArticleBySlugDto = {
    title: string;
    slug: string;
    image: string;
    content: string;
} | null;

const getContent = (filename: string) => {
    const completePath = path.join(
        process.cwd(),
        'public',
        'assets',
        'articles',
        'contents',
        filename
    );
    return readFile(completePath, 'utf-8');
};

export const FindArticleBySlug = async (
    slug: string
): Promise<OutputFindArticleBySlugDto> => {
    const databaseDir = path.join(process.cwd(), 'public', 'database');
    const articlesDir = path.join(databaseDir, 'articles');

    const files = await readdir(articlesDir);
    const file = files.find((file) => basename(file, '.json') === slug);

    if (!file) return null;

    const filePath = path.join(articlesDir, file);
    const stringifiedProps = await readFile(filePath, 'utf-8');
    const parsedProps = JSON.parse(stringifiedProps);
    const data = {
        ...parsedProps,
        slug,
        content: await getContent(parsedProps.content)
    };

    return data;
};
