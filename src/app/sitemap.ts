import type { MetadataRoute } from 'next';
import { INSIGHTS } from '@/data/insights';
import { ASSESSMENTS } from '@/data/assessments';

const BASE_URL = 'https://coachingme.kr';

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/coach', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/assessment', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/education', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const assessmentRoutes: MetadataRoute.Sitemap = ASSESSMENTS.map((assessment) => ({
    url: `${BASE_URL}/assessment/${assessment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightRoutes, ...assessmentRoutes];
}
