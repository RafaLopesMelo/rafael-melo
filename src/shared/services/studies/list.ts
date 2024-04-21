import path from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

type OutputListStudiesDto = {
    metadata: {
        totalCount: number;
    };
    data: {
        title: string;
        description: string;
        status: string;
        period: {
            start: string;
            end: string;
        };
        articles: string[];
    }[];
};

export const ListStudies = async (): Promise<OutputListStudiesDto> => {
    const databaseDir = path.join(process.cwd(), 'public', 'database');
    const studiesDir = path.join(databaseDir, 'studies');

    const files = await readdir(studiesDir);

    const data: Record<string, unknown>[] = [];

    for (const filename of files) {
        const file = path.join(studiesDir, filename);
        const content = await readFile(file, 'utf-8');

        data.push(JSON.parse(content));
    }

    return {
        metadata: {
            totalCount: files.length
        },
        data
    } as OutputListStudiesDto;
};
