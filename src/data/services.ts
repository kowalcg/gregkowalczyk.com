// The services offered on /services/ — one source for the jump menu
// (ServicesNav.astro), the animated cards (ServiceGrid.astro) and the
// OfferCatalog / Service schema on the page. Titles are written the way people
// search for them. Proof lines were already live; do not invent new ones.
// Race directors has its own page and its own band (RaceFeature.astro).

export interface ServiceItem {
  slug: string; title: string; anim: string; line: string;
  stat: string; statLabel: string; proof: string; body: string;
  tracks?: { name: string; points: string[] }[];
  examples?: string[]; // shown as tags on the card and listed in the schema
  link: { href: string; label: string };
  wide?: boolean;
}

export const services: ServiceItem[] = [
  {
    slug: 'custom-ai-tools', title: 'Custom AI tools for small business', anim: 'tools',
    examples: ['Lead generation', 'AI receptionist', 'Social media expert', 'Content creator', 'Copywriter', 'Research for newsletters, blogs and emails', 'Facebook and Instagram media buyer'],
    line: 'Tools built around how your business actually works. You own them.',
    stat: '6 wks', statLabel: 'client build, now running daily',
    proof: 'Built Content Creator PRO for a client in 6 weeks. Running in production daily.',
    body: 'Prompt generators, product launch content orchestration, internal search assistants, analytics dashboards — built for your specific business. Not off-the-shelf SaaS. Custom tools you own and control.',
    link: { href: '/projects/helm/', label: 'See one built: Helm' },
  },
  {
    slug: 'ecommerce-ai', title: 'E-commerce AI systems for Amazon and Shopify', anim: 'ecom',
    line: 'One product, every channel. Content, listings and stock handled at scale.',
    stat: '5–10×', statLabel: 'content volume, same or better quality',
    proof: '5-10x content volume. 90% faster production. Same or better quality.',
    body: 'Product content at scale, inventory automation, multi-channel optimization. Tested on my own brands first — two e-commerce businesses I’ve built and run since 2014, using AI tools I built myself.',
    link: { href: '/projects/', label: 'See my own brands' },
  },
  {
    slug: 'marketing-automation', title: 'Marketing automation', anim: 'mail',
    line: 'Emails, social and ads that go out on schedule, without you.',
    stat: '$75K+', statLabel: 'a year in agency costs replaced',
    proof: 'Replaced $75K-$125K in agency and freelancer costs with $2K in tools.',
    body: 'Email sequences, social content workflows, ad optimization, customer journey orchestration. Replace repetitive manual work with systems that run while you sleep.',
    link: { href: '/projects/helm/', label: 'See the daily brief in Helm' },
  },
  {
    slug: 'ai-assessment', title: 'AI Readiness Assessment', anim: 'rank',
    line: 'Not sure where to start? I map the work and sort what to fix first.',
    stat: '6 wks', statLabel: 'from audit to full roadmap, retail client',
    proof: 'Local retail client: operations audited and a full e-commerce growth roadmap delivered in 6 weeks.',
    body: 'Not sure where to start with AI? I watch how the work really runs and write down every step. Then I sort each one: delete it, hand it to plain code, hand it to an AI agent, or keep it with a person. You get a ranked plan with real costs. Then I build it.',
    link: { href: '#how-step-2', label: 'How the assessment works' },
  },
  {
    slug: 'digital-launch', title: 'Digital launch, local SEO and AI search', anim: 'search',
    line: 'Get found: a store or site, local search, and AI-answer visibility.',
    stat: '2', statLabel: 'brands launched from zero',
    proof: 'Two brands launched from zero. Local retail client: offline shop to full digital presence in 6 weeks.',
    body: 'Not online yet? I coach product businesses through Amazon, Shopify, and Walmart setup — and service businesses (electricians, landscapers, trades) through website, local SEO, and LLM optimization. You run the business. I build the AI layer that scales it.',
    tracks: [
      { name: 'Product businesses: e-commerce launch', points: ['Platform setup: Amazon Seller Central, Shopify, or Walmart', 'AI-powered product content and listing optimization', 'Email marketing automation (Klaviyo setup and sequences)', 'Paid ads orientation and marketing strategy', 'Analytics dashboard and growth KPIs'] },
      { name: 'Service businesses: local digital growth', points: ['Professional website setup and mobile optimization', 'Google Business Profile optimization', 'Local SEO — rank where your customers search', 'LLM optimization — get recommended by AI assistants', 'Lead generation tracking and content strategy'] },
    ],
    link: { href: '/projects/sportsclinicfinder/', label: 'See it at scale: SportClinicFinder' },
  },
  {
    slug: 'product-research', title: 'Product research and validation', anim: 'funnel',
    line: 'Real demand and real margins, checked before a dollar goes to inventory.',
    stat: '11 yrs', statLabel: 'of hands-on product launches',
    proof: 'Not just market research — structural evaluation. Built custom AI research systems for clients to do this at scale.',
    body: 'Mechanical engineer turned e-commerce operator — I evaluate products differently. I combine 11 years of hands-on product launches with deep engineering analysis and AI-powered tools (Data Dive, Jungle Scout, web scraping) to surface real demand, stress-test margins, and validate physical and market viability before a dollar goes to inventory.',
    link: { href: '/contact/', label: 'Ask about a product' },
  },
];
