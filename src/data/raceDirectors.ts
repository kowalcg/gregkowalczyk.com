/**
 * raceDirectors.ts — the "AI for race directors" offer at /race-directors/.
 *
 * One source for the visible cards and the FAQPage schema.
 *
 * Every number traces to a file (checked Sep 15, 2026):
 * - 875 runners: 2026 registrations, sold out (why-we-archived-every-race-forever).
 * - 1,843 photos, 92% of bibs detected: race site photos-manifest.json + Part 2.
 * - 80 partner pages (21 sponsors, 52 vendors, 7 organizers): race-site partner files + Part 3.
 * - 2027: Kids 1K, 5K and 10K with room for 1,500 runners (race brief caps).
 *
 * ⚠️ No prices on this page — every call to action books the free call. Do not
 * publish the 2027 race date, 2027 pricing, or a 2027 sponsor list beyond the
 * title sponsor until each is confirmed.
 */

export const RACE_CTA = '/contact/?topic=race';

export const problems: string[] = [
  'A race date that does not move, and a volunteer team with day jobs.',
  'Sponsors who want more than a logo on a banner that comes down Sunday afternoon.',
  'A website rebuilt from scratch every spring, with last year’s results and photos gone.',
  'Hundreds of race photos nobody can find — or that runners have to pay for.',
  'Participant emails, sponsor updates and social posts written by hand, one at a time.',
];

export interface ProofCard {
  title: string;
  body: string;
  href?: string;
}

export const proof: ProofCard[] = [
  {
    title: 'Race photos, sorted by AI',
    body: '1,843 photos. Google Vision reads the bib numbers (92% of bibs detected), so every runner finds their photos free, by bib or by name. The AI cost for the whole race was about $5.',
    href: '/news/how-ai-organized-race-photos-drone-videos/',
  },
  {
    title: '80 permanent partner pages',
    body: 'Every sponsor, vendor and organizer — 21, 52 and 7 — gets its own page, researched and written with AI, and kept online after race day instead of a logo that disappears.',
    href: '/news/why-every-sponsor-vendor-gets-permanent-web-presence/',
  },
  {
    title: 'Participant emails without the busywork',
    body: 'Race Roster broadcasts drafted from a house template, test-sent, and only sent on approval — plus a personal “your photos are ready” email to every runner.',
  },
  {
    title: 'Next year’s registration, set up in one session',
    body: 'The full 2027 registration event — races, pricing tiers, settings — was built with AI in a single working session, not a week of clicking.',
  },
  {
    title: 'QR code medals',
    body: 'Every finisher medal carries a QR code that opens the permanent race archive: results, photos and the story of the day.',
    href: '/news/qr-code-race-medals/',
  },
  {
    title: 'A race website that grows',
    body: 'More than 50 articles and a permanent archive. Year two started with everything year one built, instead of a blank page.',
    href: '/news/race-website-that-grows-instead-of-starting-over/',
  },
  {
    title: 'A sun-safety plan for 875 runners',
    body: 'Start times, water placement and UV messaging planned for a June race on open water — not a sunscreen line at the bottom of an email.',
    href: '/news/sun-protection-for-runners/',
  },
];

export interface Tier {
  step: string;
  name: string;
  summary: string;
  points: string[];
}

export const tiers: Tier[] = [
  {
    step: '01',
    name: 'Free race-tech call',
    summary:
      'Thirty minutes on your race — website, registration, sponsors, emails, photos. I name the one fix worth doing first.',
    points: [
      'No cost and no pitch',
      'One prescribed fix, with the tool and the first step',
      'Useful for a first-year race or a twenty-year-old one',
    ],
  },
  {
    step: '02',
    name: 'Done-for-you race website',
    summary:
      'A race site built like bronteharbourclassic.com — and kept for years, not rebuilt every spring.',
    points: [
      'Race, course, festival and FAQ pages',
      'A permanent page for every sponsor and vendor',
      'A yearly archive: results, photos and the story of the day',
      'Links into the registration platform you already use',
    ],
  },
  {
    step: '03',
    name: 'AI race-ops toolkit',
    summary: 'The automations, set up on your stack and handed over to your team.',
    points: [
      'Race photos sorted by bib number, searchable free by runners',
      'Sponsor and vendor pages generated from a short intake',
      'Participant email drafts from your template, sent only on your approval',
      'Blog and social posts from your race updates',
    ],
  },
  {
    step: '04',
    name: 'Race-season retainer',
    summary: 'I stay with you from planning through race day and the wrap-up.',
    points: [
      'Monthly working sessions and a shared task list',
      'Pre-race: sponsor, vendor and participant communications',
      'Race week: day-of information, updates and photos',
      'Post-race: archive, sponsor recap, and next year set up',
    ],
  },
];

export const playbook: { part: string; title: string; href: string }[] = [
  { part: 'Guide', title: 'How to Organize a 5K Race: What Building One From Scratch Taught Me', href: '/news/building-bronte-harbour-classic-inaugural-race/' },
  { part: 'Part 1', title: 'Why We Archived Every Race Forever', href: '/news/why-we-archived-every-race-forever/' },
  { part: 'Part 2', title: 'How AI Organized 1,800+ Race Photos (and Drone Videos)', href: '/news/how-ai-organized-race-photos-drone-videos/' },
  { part: 'Part 3', title: 'Why Every Sponsor and Vendor Gets a Permanent Web Presence', href: '/news/why-every-sponsor-vendor-gets-permanent-web-presence/' },
  { part: 'Part 4', title: 'Why Our Medals Have QR Codes', href: '/news/qr-code-race-medals/' },
  { part: 'Part 5', title: 'A Race Website That Grows Instead of Starting Over', href: '/news/race-website-that-grows-instead-of-starting-over/' },
  { part: 'Part 6', title: 'Runner Safety Ecosystem: Building Beyond Race Day', href: '/news/runner-safety-ecosystem-sun-safety-injury-prevention/' },
  { part: 'Part 7', title: 'Why Every Outdoor Race Needs a Sun-Safety Plan', href: '/news/sun-protection-for-runners/' },
];

export const faq: { q: string; a: string }[] = [
  {
    q: 'Do I need to be technical?',
    a: 'No. You run the race; I build and set up the systems, then show your team how to use them. There is nothing to code.',
  },
  {
    q: 'Will this replace my registration platform?',
    a: 'No. Registration stays on the platform you already use — the Bronte Harbour Classic runs on Race Roster. The website, partner pages, photos and emails work around it.',
  },
  {
    q: 'How big does my race need to be?',
    a: 'Any size. The Bronte Harbour Classic sold out at 875 runners in its first year and is growing to three races with room for 1,500. The same setup works for a 200-person charity run or a community festival.',
  },
  {
    q: 'Do you only work with races in Ontario?',
    a: 'No. I am based in Oakville, Ontario, and work remotely with race directors and event organizers across Canada and the United States.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on the size of the event and what you need. Every engagement starts with the free race-tech call, and you get a quote after it, not before.',
  },
];
