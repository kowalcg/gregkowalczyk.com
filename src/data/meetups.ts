/**
 * meetups.ts — AI for Business, a free monthly meetup series for local
 * business owners.
 *
 * Two locations, each monthly: Hamilton (CoWork at the Cotton Factory, 2-hour
 * evening) and Oakville (ACE Coworking, 1-hour lunch, informal Q&A to 1:30).
 * Hosted by Patricia & Greg Kowalczyk.
 *
 * ⚠️ Never invent a date or a venue. An entry with `status: 'announced'` must
 * have a confirmed date, a confirmed venue, and a live registration URL.
 * Everything else is `status: 'planned'` — it never gets a register button or
 * Event schema. A planned entry may carry a `date` once that date is confirmed
 * (it then renders as "Registration opens soon"); without one it renders as
 * "Date TBA".
 *
 * Past events are split off at build time, so after an event day the site
 * needs a rebuild (any push to main) before the homepage banner moves on.
 *
 * All times are America/Toronto. `start`/`end` are written with the -04:00
 * offset (EDT) because schema.org Event wants a local time with an offset, and
 * a bare local string is read as UTC by some parsers. Check the offset when
 * adding a date between November and March (-05:00, EST).
 */

export type AgendaRow = { time: string; item: string };

export interface Meetup {
  /** URL fragment and React-style key. */
  id: string;
  city: string;
  /** 'announced' = date + venue + registration confirmed. 'planned' = not yet open. */
  status: 'announced' | 'planned';
  /** 'evening' (Hamilton) or 'lunch' (Oakville) — picks the agenda and copy. */
  format: 'evening' | 'lunch';
  /** ISO date. Required when announced; on a planned entry only once confirmed. */
  date?: string;
  /** Human label shown when there is no confirmed date yet. */
  dateLabel?: string;
  /** ISO 8601 local datetime with offset, for schema.org. */
  start?: string;
  end?: string;
  timeLabel?: string;
  /** Session title, as published on the Luma page. */
  topic?: string;
  /** One-paragraph description for the cards. */
  blurb?: string;
  /** Short line for entries without a topic yet. */
  note?: string;
  /** Shown once the event is past, plus an optional link to what was shared. */
  recap?: string;
  recapLink?: { href: string; label: string };
  venue: {
    name: string;
    street: string;
    locality: string;
    region: string;
    postalCode?: string;
    url?: string;
  };
  /** Luma registration page. Only present once the event is live. */
  registerUrl?: string;
  /** Square flyer, 1:1. */
  flyer?: string;
  flyerAlt?: string;
  /** 1200×630 social card for /meetups/ while this is the next event. */
  ogImage?: string;
}

export const SERIES_NAME = 'AI for Business';
export const SERIES_TAGLINE = 'Practical AI for local business owners';
export const HOSTS = 'Patricia & Greg Kowalczyk';

const COTTON_FACTORY = {
  name: 'CoWork at the Cotton Factory',
  street: '270 Sherman Ave N',
  locality: 'Hamilton',
  region: 'ON',
  postalCode: 'L8L 6N4',
  url: 'https://coworkhamilton.com/',
};

export const meetups: Meetup[] = [
  {
    id: 'hamilton-2026-09-10',
    city: 'Hamilton',
    status: 'announced',
    format: 'evening',
    date: '2026-09-10',
    start: '2026-09-10T17:30:00-04:00',
    end: '2026-09-10T19:30:00-04:00',
    timeLabel: '5:30 – 7:30 PM',
    venue: COTTON_FACTORY,
    registerUrl: 'https://luma.com/rbw8r7fp',
    flyer: '/images/meetups/ai-for-business-hamilton-2026-09-10.jpg',
    flyerAlt:
      'AI for Business Hamilton business meetup — Thursday September 10, 5:30 to 7:30 PM at CoWork at the Cotton Factory, free to attend',
    ogImage: '/images/meetups/og-ai-for-business-hamilton.jpg',
    recap:
      'The first one. Thank you to everyone who came out — October in Hamilton picks up where it left off.',
    recapLink: {
      href: '/skills/video-to-skill/',
      label: 'The free Claude Code skill we shared that night →',
    },
  },
  {
    id: 'oakville-2026-10-14',
    city: 'Oakville',
    status: 'announced',
    format: 'lunch',
    date: '2026-10-14',
    start: '2026-10-14T12:00:00-04:00',
    end: '2026-10-14T13:00:00-04:00',
    timeLabel: '12:00 – 1:00 PM',
    topic: 'Practical AI Workflows for Small Business — Save Time, Improve Margins, Get More Done',
    blurb:
      'Not a "what is AI" talk. A lunch-hour session on your actual workflow — the quoting, the follow-ups, the product listings, the blog posts you never get around to writing. Live examples you can copy, open Q&A, and a room of other Oakville owners. Bring a real problem, and a laptop if you want to follow along. Officially an hour; we stay until 1:30 for questions.',
    venue: {
      name: 'ACE Coworking',
      street: '132 Trafalgar Rd',
      locality: 'Oakville',
      region: 'ON',
      postalCode: 'L6J 3G5',
      url: 'https://acecoworking.ca/',
    },
    registerUrl: 'https://luma.com/ronyj460',
    flyer: '/images/meetups/ai-for-business-oakville-2026-10-14.jpg',
    flyerAlt:
      'AI for Business Oakville business meetup — Wednesday October 14, 12:00 to 1:00 PM at ACE Coworking, free to attend',
    ogImage: '/images/meetups/og-ai-for-business-oakville.jpg',
  },
  {
    id: 'hamilton-2026-10-20',
    city: 'Hamilton',
    status: 'announced',
    format: 'evening',
    date: '2026-10-20',
    start: '2026-10-20T17:30:00-04:00',
    end: '2026-10-20T19:30:00-04:00',
    timeLabel: '5:30 – 7:30 PM',
    topic: 'Going Deeper: New AI Features, Live Workflows, and Tips You Can Apply the Next Morning',
    venue: COTTON_FACTORY,
    registerUrl: 'https://luma.com/yo3ybe64',
    flyer: '/images/meetups/ai-for-business-hamilton-2026-10-20.jpg',
    flyerAlt:
      'AI for Business Hamilton business meetup — Tuesday October 20, 5:30 to 7:30 PM at CoWork at the Cotton Factory, free to attend',
  },
];

export const agendas: Record<Meetup['format'], AgendaRow[]> = {
  evening: [
    { time: '5:30', item: 'Doors open, coffee, and open networking' },
    { time: '6:00', item: 'Practical AI presentation with live, real-world examples' },
    { time: '6:30', item: 'Q&A — bring the thing you are stuck on' },
    { time: '6:45', item: 'Structured networking: one AI challenge each, around the room' },
    { time: '7:20', item: 'Wrap up' },
  ],
  lunch: [
    { time: '12:00', item: 'Arrive and settle in' },
    { time: '12:10', item: 'Practical AI for business: strategies, live examples, workflows' },
    { time: '12:40', item: 'Open Q&A — bring a real problem from your business' },
    { time: '1:00', item: 'Wrap up — we stay until 1:30 for anyone with more questions' },
  ],
};

export const formatLabel = (f: Meetup['format']) =>
  f === 'lunch' ? 'Lunch hour' : 'Evening';

/** Today in Toronto as YYYY-MM-DD, evaluated at build time. */
const today = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'America/Toronto' });

const isPast = (m: Meetup) => !!m.date && m.date < today();

const byDate = (a: Meetup, b: Meetup) =>
  (a.date ?? '9999').localeCompare(b.date ?? '9999');

/** The next open event: confirmed, registration live, not yet happened. */
export const nextMeetup = (): Meetup | undefined =>
  meetups
    .filter((m) => m.status === 'announced' && m.date && !isPast(m))
    .sort(byDate)[0];

/** Everything after the next one — announced or still being scheduled. */
export const upcomingMeetups = (): Meetup[] => {
  const next = nextMeetup();
  return meetups.filter((m) => m.id !== next?.id && !isPast(m)).sort(byDate);
};

/** Events that have happened, most recent first. */
export const pastMeetups = (): Meetup[] =>
  meetups.filter(isPast).sort((a, b) => byDate(b, a));

export const formatMeetupDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const formatMeetupDateShort = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-CA', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const fullAddress = (m: Meetup) =>
  `${m.venue.street}, ${m.venue.locality}, ${m.venue.region}${
    m.venue.postalCode ? ` ${m.venue.postalCode}` : ''
  }`;

export const mapsUrl = (m: Meetup) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${m.venue.name}, ${fullAddress(m)}`
  )}`;

/**
 * schema.org nodes for /meetups/. Only events with a confirmed date and a
 * registration URL are emitted — Google rejects Event markup without a
 * startDate, and a "planned" placeholder would be a false listing.
 */
export const meetupsSchema = (site: string): Record<string, unknown>[] => {
  const events = meetups
    .filter((m) => m.status === 'announced' && m.start)
    .map((m) => ({
      '@type': 'Event',
      '@id': `${site}/meetups/#${m.id}`,
      name: `${SERIES_NAME} — ${m.city} Meetup`,
      description: `A free ${
        m.format === 'lunch' ? 'lunch-hour' : 'evening'
      } meetup for ${m.city}-area business owners on using AI to save time, improve margins, and get more done. Hosted by ${HOSTS}.`,
      startDate: m.start,
      endDate: m.end,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: `${site}/meetups/`,
      image: m.flyer ? [`${site}${m.flyer}`] : undefined,
      location: {
        '@type': 'Place',
        name: m.venue.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: m.venue.street,
          addressLocality: m.venue.locality,
          addressRegion: m.venue.region,
          postalCode: m.venue.postalCode,
          addressCountry: 'CA',
        },
      },
      organizer: { '@id': `${site}/#person` },
      performer: { '@id': `${site}/#person` },
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: m.registerUrl,
        validFrom: '2026-08-21T00:00:00-04:00',
      },
    }));

  return [
    {
      '@type': 'EventSeries',
      '@id': `${site}/meetups/#series`,
      name: `${SERIES_NAME} Meetups`,
      description: `A free monthly meetup series for small business owners in Hamilton and Oakville, Ontario. Practical AI for marketing and operations — no sales pitch, no technical prerequisites. Hosted by ${HOSTS}.`,
      url: `${site}/meetups/`,
      organizer: { '@id': `${site}/#person` },
      subEvent: events.map((e) => ({ '@id': e['@id'] })),
    },
    ...events,
  ];
};
