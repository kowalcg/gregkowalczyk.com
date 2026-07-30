import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../data/site';

/**
 * /rss.xml — the site had no feed at all until July 2026.
 *
 * Worth having for two reasons beyond human subscribers: feed readers and
 * syndication services discover new posts faster than a crawler will, and AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot — all explicitly allowed in
 * robots.txt) use feeds as a cheap freshness signal.
 */
export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Greg Kowalczyk — AI & Digital Growth',
    description:
      'Build notes from an engineer turned AI tool builder: custom AI systems, e-commerce automation, and shipping software without a coding background.',
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/news/${post.slug}/`,
      categories: post.data.tag ? [post.data.tag] : undefined,
      author: 'Greg Kowalczyk',
    })),
    customData: '<language>en-ca</language>',
  });
}
