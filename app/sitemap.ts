import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stacknothing.com';

  const routes = [
    '',
    '/portfolio',
    '/pricing',
    '/roadmap',
    '/partners',
    '/careers',
    '/careers/apply',
    '/contact',
    '/services/web-dev',
    '/services/ecommerce',
    '/services/mobile',
    '/services/ui-ux',
    '/terms',
    '/privacy',
    '/refund',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
