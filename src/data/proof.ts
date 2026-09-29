// Homepage "Proof of work" (Act 1) and "Draw your blueprint" (Act 2).
// Every number here must match the live product or its /projects/ page.
// Screenshots: public/images/proof/ (live captures, Sep 28–29 2026) and public/images/projects/.

export interface ProofProject {
  slug: string;
  img: string;
  url: string; // shown in the browser bar drawn over the screenshot
  name: string;
  tag: string;
  status: string; // stamp shown once the screen is built
  constraint: string;
  built: string;
  stats: [string, string][];
  link: string;
  linkLabel: string;
  external: boolean;
}

export const PROOF_PROJECTS: ProofProject[] = [
  {
    slug: 'helm',
    img: '/images/projects/helm.webp',
    url: 'app.helm.ad',
    name: 'Helm',
    tag: 'Amazon seller intelligence',
    status: 'In testing',
    constraint: 'Answering "why did ACOS jump last week?" took an afternoon of spreadsheets.',
    built: 'One place for Amazon, Ads, Shopify, Meta, Klaviyo and Search Console data, handed to Claude as tools. Now the answer takes one sentence.',
    stats: [['33', 'tools for sales, ads, stock and margin'], ['6', 'data sources in one place'], ['0', 'writes. It reads, never changes a bid']],
    link: '/projects/helm/',
    linkLabel: 'How Helm works',
    external: false,
  },
  {
    slug: 'bronte-harbour-classic',
    img: '/images/proof/bhc-live.webp',
    url: 'bronteharbourclassic.com',
    name: 'Bronte Harbour Classic',
    tag: 'Mercedes-Benz Oakville · the race I direct',
    status: 'Sold out',
    constraint: 'A brand-new race with no history had to sell out registrations, win sponsors and look established from day one.',
    built: 'I am the Race Director, and I built everything online: registration, course maps, sponsor pages, and a permanent archive. The QR code on every finisher medal opens it.',
    stats: [['875', 'runners, sold out in year one'], ['1,800+', 'race photos archived'], ['3 races', 'in 2027: 5K, 10K and Kids 1K']],
    link: 'https://www.bronteharbourclassic.com/',
    linkLabel: 'bronteharbourclassic.com',
    external: true,
  },
  {
    slug: 'bronte-runners',
    img: '/images/proof/bronterunners-live.webp',
    url: 'bronterunners.vercel.app',
    name: 'Bronte Runners',
    tag: 'Community running club website',
    status: 'Shipped',
    constraint: 'A free club with 800+ members needed one place for this week’s runs, the routes, events and photos.',
    built: 'The club website: a live countdown to the next run, mapped routes, events, news, photo albums, team and partner pages. Volunteers update it by editing simple files.',
    stats: [['800+', 'members in Oakville and Burlington'], ['1 day', 'to build and ship it'], ['3', 'group runs a week, year-round']],
    link: 'https://bronterunners.vercel.app/',
    linkLabel: 'bronterunners.vercel.app',
    external: true,
  },
  {
    slug: 'sportsclinicfinder',
    img: '/images/proof/live-scf.webp',
    url: 'sportsclinicfinder.com',
    name: 'SportClinicFinder',
    tag: 'National clinic directory',
    status: 'Shipped',
    constraint: 'Patients had no single place to compare physio, chiro and sports medicine clinics across Canada.',
    built: 'A Canada-wide directory with insurance details, Google ratings and booking links. Clinics can claim and update their own listing.',
    stats: [['12,777', 'clinics listed'], ['519', 'cities, every province'], ['245+', 'search landing pages']],
    link: 'https://www.sportsclinicfinder.com',
    linkLabel: 'sportsclinicfinder.com',
    external: true,
  },
  {
    slug: 'sleepclinicfinder',
    img: '/images/proof/live-slcf.webp',
    url: 'sleepclinicfinder.com',
    name: 'SleepClinicFinder',
    tag: 'Regional health directory',
    status: 'Shipped',
    constraint: 'Sleep patients in Peel, Halton and the GTA could not tell which clinics bill OHIP, need a referral or offer home tests.',
    built: 'An evidence-first directory. Every claim on a clinic profile is quoted from that clinic’s own website.',
    stats: [['221', 'sleep clinics'], ['< 1 wk', 'from idea to live'], ['10', 'patient guides']],
    link: 'https://www.sleepclinicfinder.com',
    linkLabel: 'sleepclinicfinder.com',
    external: true,
  },
  {
    slug: 'sunup',
    img: '/images/proof/live-sunup.webp',
    url: 'getsunup.app',
    name: 'SunUp by GearTOP',
    tag: 'iOS app',
    status: 'Shipped',
    constraint: 'A UV index number does not tell you when you will actually burn.',
    built: 'An app that turns skin type, live UV and cloud cover into one number: minutes to burn. Family mode gives every child a profile.',
    stats: [['Free', 'iOS app, no ads'], ['230+', 'built-in sun safety tips'], ['1', 'number that matters: minutes to burn']],
    link: 'https://www.getsunup.app/',
    linkLabel: 'getsunup.app',
    external: true,
  },
  {
    slug: 'runmate-pro',
    img: '/images/proof/live-runmate.webp',
    url: 'runmatepro.com',
    name: 'RunMate Pro',
    tag: 'iOS app',
    status: 'Shipped',
    constraint: 'Runners do not notice their shoes wearing out until the shin splints start.',
    built: 'GPS run tracking that logs every run against a pair of shoes and warns before a pair is worn out. No feed, no leaderboards.',
    stats: [['39', 'App Store rejections, all fixed'], ['2025', 'live on the App Store'], ['500–800', 'km shoe lifespan it tracks']],
    link: 'https://www.runmatepro.com/',
    linkLabel: 'runmatepro.com',
    external: true,
  },
  {
    slug: 'magpie',
    img: '/images/projects/magpie.webp',
    url: 'magpie · internal',
    name: 'Magpie',
    tag: 'Team research library',
    status: 'Shipped',
    constraint: 'Research kept getting done twice by different people on the team.',
    built: 'Drop in a link, screenshot or quote. Magpie titles, summarizes and files it, and AI agents can search it too.',
    stats: [['2 s', 'to capture, no form'], ['AI', 'titles, summaries, categories'], ['API', 'so agents read and write']],
    link: '/projects/magpie/',
    linkLabel: 'How Magpie works',
    external: false,
  },
];

// ---- Act 2: Draw your blueprint -------------------------------------------
// Business types mirror the verticals named on /services/.

export const BLUEPRINT_BUSINESSES: { id: string; label: string; noun: string }[] = [
  { id: 'ecom', label: 'E-commerce brand', noun: 'your brand' },
  { id: 'studio', label: 'Studio or gym', noun: 'your studio' },
  { id: 'food', label: 'Food or specialty retail', noun: 'your shop' },
  { id: 'clinic', label: 'Clinic or health practice', noun: 'your practice' },
  { id: 'firm', label: 'Consultancy or services', noun: 'your firm' },
  { id: 'event', label: 'Events or community', noun: 'your event' },
];

export interface BlueprintLeak {
  id: string;
  label: string;
  system: string;
  parts: string[]; // TOOLS and NOUN are filled in on the client
  outcome: string;
  proof: string; // slug in PROOF_PROJECTS (not a position: the list can grow)
  proofText: string;
}

export const BLUEPRINT_LEAKS: BlueprintLeak[] = [
  { id: 'reports', label: 'Reports and numbers take hours', system: 'Decision dashboard with an AI analyst',
    parts: ['Nightly sync from TOOLS', 'One screen for NOUN’s numbers', 'Ask questions in plain English'],
    outcome: 'Answers in a sentence, not an afternoon of spreadsheets', proof: 'helm', proofText: 'Helm, built for my own two brands' },
  { id: 'found', label: 'People can’t find us online', system: 'Search-first website',
    parts: ['A page for every service and area', 'Structured for Google and AI answers', 'Shows which pages bring customers'],
    outcome: 'Found by the people already searching for NOUN', proof: 'sportsclinicfinder', proofText: 'SportClinicFinder: 12,777 clinics, 519 cities' },
  { id: 'leads', label: 'Inquiries slip through the cracks', system: 'Lead catcher with instant follow-up',
    parts: ['Every form and email lands in one place', 'Instant reply plus follow-up reminders', 'Weekly list: who asked, who bought'],
    outcome: 'No inquiry waits until Monday', proof: 'sportsclinicfinder', proofText: 'SportClinicFinder: clinic claims verify and upgrade automatically' },
  { id: 'admin', label: 'The same admin and emails every day', system: 'Admin autopilot',
    parts: ['Drafts the routine emails', 'Files and tags what comes in', 'Sends you one daily brief'],
    outcome: 'Your mornings back', proof: 'helm', proofText: 'Helm: daily ad review and weekly brief by email' },
  { id: 'app', label: 'Customers want an app or a tool', system: 'Your own customer app',
    parts: ['Built around the one number customers care about', 'Brings people back to NOUN', 'Live on the App Store'],
    outcome: 'A reason to open NOUN every day', proof: 'sunup', proofText: 'SunUp and RunMate Pro, both live on the App Store' },
  { id: 'event', label: 'Running an event or community', system: 'Event hub',
    parts: ['Registration, course and sponsor pages', 'Sponsor pages that last all year', 'A permanent photo and results archive'],
    outcome: 'Year two starts with an audience, not from zero', proof: 'bronte-harbour-classic', proofText: 'Bronte Harbour Classic, sold out in year one' },
];

export const BLUEPRINT_TOOLS = ['Shopify', 'Amazon', 'Square or POS', 'QuickBooks', 'Google Sheets', 'Gmail or Outlook', 'Instagram / Meta', 'Google Ads', 'WordPress or Wix', 'Booking software'];

export const BLUEPRINT_DEFAULT = { biz: 'studio', leak: 'reports', tools: ['Square or POS', 'Google Sheets', 'Instagram / Meta'] };
