import path, { basename } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

type OutputFindArticleBySlugDto = {
    title: string;
    slug: string;
    image: string;
    content: string;
} | null;

export const FindArticleBySlug = async (
    slug: string
): Promise<OutputFindArticleBySlugDto> => {
    const databaseDir = path.join(process.cwd(), 'public', 'database');
    const articlesDir = path.join(databaseDir, 'articles');

    const files = await readdir(articlesDir);
    const file = files.find((file) => basename(file, '.json') === slug);

    if (!file) return null;

    const filePath = path.join(articlesDir, file);
    const content = await readFile(filePath, 'utf-8');
    const data = { ...JSON.parse(content), slug };

    return data;
};
