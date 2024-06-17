import { MetadataRoute } from 'next';
import { BASE_URL } from './lib/constants';
import { ListArticles } from '@/shared/services/articles/list';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await ListArticles();

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${BASE_URL}/studies`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4
        },
        {
            url: `${BASE_URL}/articles`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5
        },
        ...articles.data.map(article => ({
            url: `${BASE_URL}/articles/${article.slug}`,
            lastModified: article.createdAt,
            changeFrequency: "never" as const
        }))
    ];
}
