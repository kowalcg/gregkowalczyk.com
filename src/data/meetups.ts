/**
 * meetups.ts — AI for Business, a free monthly meetup series for local
 * business owners.
 *
 * Two cities on rotation: Hamilton (CoWork at the Cotton Factory) and Oakville
 * (ACE Coworking). Hosted by Patricia & Greg Kowalczyk.
 *
 * ⚠️ Never invent a date or a venue. An entry with `status: 'announced'` must
 * have a confirmed date, a confirmed venue, and a live registration URL.
 * Everything still being scheduled is `status: 'planned'` — it renders without
 * a date and without a register button. The October Oakville evening is
 * planned: the venue is confirmed, the date is not.
 *
 * All times are America/Toronto. `start`/`end` are written with the -04:00
 * offset (EDT) because schema.org Event wants a local time with an offset, and
 * a bare local string is read as UTC by some parsers. Check the offset when
 * adding a date between November and March (-05:00, EST).
 */

export interface Meetup {
  /** URL fragment and React-style key. */
  id: string;
  city: string;
  /** 'announced' = date + venue + registration confirmed. 'planned' = TBA. */
  status: 'announced' | 'planned';
  /** ISO date, only when status is 'announced'. */
  date?: string;
  /** Human label shown when there is no confirmed date yet. */
  dateLabel?: string;
  /** ISO 8601 local datetime with offset, for schema.org. */
  start?: string;
  end?: string;
  timeLabel?: string;
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
}

export const SERIES_NAME = 'AI for Business';
export const SERIES_TAGLINE = 'Practical AI for local business owners';
export const HOSTS = 'Patricia & Greg Kowalczyk';

export const meetups: Meetup[] = [
  {
    id: 'hamilton-2026-09-10',
    city: 'Hamilton',
    status: 'announced',
    date: '2026-09-10',
    start: '2026-09-10T17:30:00-04:00',
    end: '2026-09-10T19:30:00-04:00',
    timeLabel: '5:30 – 7:30 PM',
    venue: {
      name: 'CoWork at the Cotton Factory',
      street: '270 Sherman Ave N',
      locality: 'Hamilton',
      region: 'ON',
      postalCode: 'L8L 6N4',
      url: 'https://coworkhamilton.com/',
    },
    registerUrl: 'https://luma.com/rbw8r7fp',
    flyer: '/images/meetups/ai-for-business-hamilton-2026-09-10.jpg',
    flyerAlt:
      'AI for Business Hamilton business meetup — Thursday September 10, 5:30 to 7:30 PM at CoWork at the Cotton Factory, free to attend',
  },
  {
    id: 'oakville-2026-10',
    city: 'Oakville',
    status: 'planned',
    dateLabel: 'October 2026 — date to be announced',
    timeLabel: 'Evening',
    venue: {
      name: 'ACE Coworking',
      street: '295 Robinson St, Suite 100',
      locality: 'Oakville',
      region: 'ON',
      postalCode: 'L6J 1G7',
      url: 'https://acecoworking.ca/',
    },
  },
];

/** The next event with a confirmed date, or undefined if none is scheduled. */
export const nextMeetup = (): Meetup | undefined =>
  meetups
    .filter((m) => m.status === 'announced' && m.date)
    .sort((a, b) => a.date!.localeCompare(b.date!))[0];

/** Everything after the next one — announced or still being scheduled. */
export const upcomingMeetups = (): Meetup[] => {
  const next = nextMeetup();
  return meetups.filter((m) => m.id !== next?.id);
};

export const agenda: { time: string; item: string }[] = [
  { time: '5:30', item: 'Doors open, coffee, and open networking' },
  { time: '6:00', item: 'Practical AI presentation with live, real-world examples' },
  { time: '6:30', item: 'Q&A — bring the thing you are stuck on' },
  { time: '6:45', item: 'Structured networking: one AI challenge each, around the room' },
  { time: '7:20', item: 'Wrap up' },
];

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
      description: `A free evening meetup for ${m.city}-area business owners on using AI to save time, improve margins, and get more done. Hosted by ${HOSTS}.`,
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
