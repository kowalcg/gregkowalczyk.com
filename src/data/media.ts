/**
 * media.ts — Podcast appearances, talks, and teaching.
 *
 * Why this exists as structured data rather than hand-written cards:
 *
 * "Greg Kowalczyk" is a contested brand SERP. As of July 2026 the owned domain
 * held positions 2, 10 and 16, while LinkedIn held #1 and positions 3–9 were
 * occupied by a different Gregory Kowalczyk's obituaries, a namesake's
 * Instagram, a retired professor, and a medical-device entrepreneur. Third-party
 * media corroboration — marked up as PodcastEpisode and wired to the Person
 * node via subjectOf/sameAs — is the mechanism for consolidating the entity.
 *
 * ⚠️ Every date, duration, and episode number below was verified against the
 * shows' own RSS feeds on 2026-07-29. Do not add an entry from memory; pull the
 * feed. The site previously listed the two Rock Star appearances as "2019 &
 * 2021" when the feed shows 2018 and 2020.
 *
 * ⚠️ The Erwin Szeto episode's own show notes quote a monthly revenue figure.
 * Per the standing rule, revenue figures never appear in public-facing content —
 * link the episode, never restate the number.
 */

export interface MediaLink {
  label: string;
  href: string;
}

export interface MediaItem {
  kind: 'podcast' | 'talk' | 'teaching';
  /** Episode or talk title. */
  title: string;
  /** Podcast series or event name. */
  show: string;
  hosts?: string;
  /** ISO date, verified against the source feed. */
  date?: string;
  /** Human label used when there is no single publication date. */
  dateLabel?: string;
  /** ISO 8601 duration for schema.org (e.g. PT1H9M57S). */
  duration?: string;
  durationLabel?: string;
  /** Canonical URL for the appearance — used in schema. */
  url: string;
  /** Show cover art, pulled from the podcast's own RSS <itunes:image>. */
  artwork?: string;
  links: MediaLink[];
  summary: string;
  topics?: string[];
  featured?: boolean;
}

export const media: MediaItem[] = [
  {
    kind: 'podcast',
    title: 'He Talks to AI While Walking the Dog',
    show: 'The Truth About Financial Independence for Canadians',
    hosts: 'Erwin Szeto',
    date: '2026-05-25',
    duration: 'PT1H25M4S',
    durationLabel: '1 hr 25 min',
    url: 'https://podcasts.apple.com/ca/podcast/he-talks-to-ai-while-walking-the-dog-greg-kowalczyk/id1100488294?i=1000769484484',
    artwork: '/images/media/truth-about-fi.webp',
    links: [
      {
        label: 'Apple Podcasts',
        href: 'https://podcasts.apple.com/ca/podcast/he-talks-to-ai-while-walking-the-dog-greg-kowalczyk/id1100488294?i=1000769484484',
      },
      {
        label: 'Spotify',
        href: 'https://creators.spotify.com/pod/profile/erwinszeto/episodes/He-Talks-to-AI-While-Walking-the-Dog--Greg-Kowalczyk-e3josig',
      },
    ],
    summary:
      'A long-form conversation on the whole arc: engineering, buying and renovating property across Ontario, building two product brands, and the shift that changed how I work — using Claude, ChatGPT and Gemini to build apps without a coding background and replace development costs that would have run $50K–$70K. Also, yes, I talk to AI while walking the dog.',
    topics: ['Building apps without coding', 'Replacing dev costs with AI', 'Automating operations', 'Real estate and e-commerce'],
    featured: true,
  },
  {
    kind: 'podcast',
    title: 'This Is How People Are Getting Ahead With A.I.',
    show: 'The Your Life! Your Terms! Show',
    hosts: 'Tom & Nick Karadza (Rock Star Inner Circle)',
    date: '2026-04-07',
    duration: 'PT1H9M57S',
    durationLabel: '1 hr 10 min',
    url: 'https://rockstarinnercircle.com/podcasts/ai-greg-kowalcyzk-charles-sathmary/',
    artwork: '/images/media/your-life-your-terms.webp',
    links: [
      { label: 'Rock Star Inner Circle', href: 'https://rockstarinnercircle.com/podcasts/ai-greg-kowalcyzk-charles-sathmary/' },
      {
        label: 'Spotify',
        href: 'https://podcasters.spotify.com/pod/show/ylytshow/episodes/This-Is-How-People-Are-Getting-Ahead-With-A-I---Greg-Kowalcyzk--Charles-Sathmary-e3hgshv',
      },
    ],
    summary:
      'Charles J. Sathmary and I joined Tom and Nick to talk about how fast AI now turns an idea into a real business — and why most people are still using it wrong. We also got into the Bronte Harbour Classic: how a first-year road race actually gets organized, and why community, health, and real-world connection are becoming the genuine advantage as everything else gets automated.',
    topics: ['AI for building and launching', 'Common AI mistakes', 'Organizing a road race', 'Community as advantage'],
    featured: true,
  },
  {
    kind: 'talk',
    title: 'Building Two iOS Apps as a Non-Coder',
    show: 'VibeMarketer Community',
    date: '2025-12-11',
    url: 'https://kowalcg.github.io/vibemarketer-mentor-session-11dec2025/',
    links: [{ label: 'View the session', href: 'https://kowalcg.github.io/vibemarketer-mentor-session-11dec2025/' }],
    summary:
      'A mentor session walking through how RunMate Pro and SunUp by GearTOP were actually built — the VibeCode, Cursor and Claude Code stack, what broke, and the 39 App Store rejections it took to get one of them approved.',
    topics: ['VibeCode', 'Claude Code', 'App Store submission', 'Shipping without a dev team'],
  },
  {
    kind: 'podcast',
    title: 'Amazon Updates, Pirated Listings, E-Commerce Trends & The Future of Online Retail',
    show: 'The Your Life! Your Terms! Show',
    hosts: 'Tom & Nick Karadza (Rock Star Inner Circle)',
    date: '2020-12-02',
    url: 'https://www.youtube.com/watch?v=LjCDdJWowSM',
    artwork: '/images/media/your-life-your-terms.webp',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=LjCDdJWowSM' }],
    summary:
      'Brian Zammit and I came back to cover what had changed on Amazon: listing hijackers and pirated listings, shifting marketplace rules, and where online retail was heading.',
    topics: ['Amazon marketplace', 'Listing protection', 'E-commerce trends'],
  },
  {
    kind: 'podcast',
    title: 'Building eCommerce & Amazon.com Empires',
    show: 'The Your Life! Your Terms! Show',
    hosts: 'Tom & Nick Karadza (Rock Star Inner Circle)',
    date: '2018-05-22',
    duration: 'PT1H10M35S',
    durationLabel: '1 hr 11 min',
    url: 'https://www.youtube.com/watch?v=uTJEX53rWBY',
    artwork: '/images/media/your-life-your-terms.webp',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=uTJEX53rWBY' }],
    summary:
      'The first long conversation about the e-commerce side: private labelling, wholesaling, working with agents in China, shipping strategy, and building a brand on Amazon from nothing.',
    topics: ['Private label', 'Sourcing in China', 'Amazon FBA', 'Brand building'],
  },
  {
    kind: 'teaching',
    title: 'E-Commerce Instructor',
    show: 'Rock Star Inner Circle',
    dateLabel: '5 years',
    url: 'https://rockstarinnercircle.com/',
    links: [{ label: 'Rock Star Inner Circle', href: 'https://rockstarinnercircle.com/' }],
    summary:
      'Five years teaching e-commerce inside the Rock Star Inner Circle community — helping members go from an idea to a product brand actually selling on Amazon and Shopify.',
  },
  {
    kind: 'teaching',
    title: 'China Sourcing Trips — Organizer & Guide',
    show: 'Independent',
    dateLabel: '4 trips',
    url: 'https://www.gregkowalczyk.com/about/',
    links: [],
    summary:
      'Organized and led four sourcing trips to China, taking groups of up to 25 entrepreneurs through factories, trade shows, and supplier negotiations.',
  },
];

/** Podcasts and talks, newest first — what the /media page renders. */
export const appearances = media.filter((m) => m.kind !== 'teaching');

/** Long-running roles that have no single publication date. */
export const ongoing = media.filter((m) => m.kind === 'teaching');

/** The strip on the homepage: the freshest, most recognisable proof. */
export const featuredMedia = media.filter((m) => m.featured);

/**
 * PodcastEpisode / Event nodes for the @graph, wired back to the Person node.
 * Google uses these corroborating edges to decide which "Greg Kowalczyk" a page
 * is about.
 */
export function mediaSchema(siteUrl: string) {
  return appearances.map((item) => ({
    '@type': item.kind === 'podcast' ? 'PodcastEpisode' : 'Event',
    '@id': `${siteUrl}/media/#${slugify(item.title)}`,
    name: item.title,
    url: item.url,
    ...(item.date ? { datePublished: item.date } : {}),
    ...(item.duration ? { timeRequired: item.duration } : {}),
    description: item.summary,
    ...(item.kind === 'podcast'
      ? {
          partOfSeries: {
            '@type': 'PodcastSeries',
            name: item.show,
            ...(item.hosts ? { author: item.hosts } : {}),
          },
        }
      : { organizer: item.show }),
    ...(item.kind === 'podcast'
      ? { actor: { '@id': `${siteUrl}/#person` } }
      : { performer: { '@id': `${siteUrl}/#person` } }),
  }));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Every appearance URL, added to Person.sameAs as corroborating evidence. */
export const mediaSameAs = appearances.map((m) => m.url);
