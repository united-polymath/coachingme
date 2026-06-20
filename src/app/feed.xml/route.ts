import { INSIGHTS, insightTypeLabel } from '@/data/insights';

const BASE_URL = 'https://coachingme.kr';
const SITE_TITLE = 'COACHINGME Korea — 인사이트';
const SITE_DESCRIPTION =
  '취업·이직, 창업, 진로·적성, 인성·성향. COACHINGME Korea의 아티클·리포트·인터뷰·이벤트 인사이트.';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const items = [...INSIGHTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((insight) => {
      const url = `${BASE_URL}/insights/${insight.slug}`;
      const pubDate = new Date(insight.date).toUTCString();
      const category = insightTypeLabel(insight.type);
      return `    <item>
      <title>${escapeXml(insight.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(insight.lead)}</description>
      <category>${escapeXml(category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const lastBuildDate =
    INSIGHTS.length > 0
      ? new Date(
          Math.max(...INSIGHTS.map((i) => new Date(i.date).getTime()))
        ).toUTCString()
      : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${BASE_URL}/insights</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
