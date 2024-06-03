import path from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

type OutputListArticlesDto = {
    metadata: {
        totalCount: number;
    };
    data: {
        title: string;
        slug: string;
        description: string;
        image: string;
        category: string;
        createdAt: Date;
    }[];
};

export const ListArticles = async (): Promise<OutputListArticlesDto> => {
    const databaseDir = path.join(process.cwd(), 'public', 'database');
    const articlesDir = path.join(databaseDir, 'articles');

    const files = await readdir(articlesDir);

    const data: Record<string, unknown>[] = [];

    for (const filename of files) {
        const file = path.join(articlesDir, filename);
        const content = await readFile(file, 'utf-8');

        const slug = path.basename(file, '.json');
        const parsed = JSON.parse(content);

        data.push({ ...parsed, createdAt: new Date(parsed.createdAt), slug });
    }

    return {
        metadata: {
            totalCount: files.length
        },
        data: data.sort((a, b) =>
            (a.createdAt as Date) > (b.createdAt as Date) ? -1 : 1
        )
    } as OutputListArticlesDto;
};
