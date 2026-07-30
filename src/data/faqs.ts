/**
 * faqs.ts — Single source of truth for the FAQ.
 *
 * Both the visible accordion (`components/FAQ.astro`) and the FAQPage JSON-LD
 * (`layouts/Layout.astro`) read from this array. Google requires the structured
 * data to match the content visible on the page, so never hardcode FAQ copy in
 * either place — edit it here.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How much does AI implementation cost for a small business?",
    answer:
      "Custom AI tool development typically runs $5,000-$25,000 depending on complexity and scope. Compare that to $75,000+ per year for agency retainers delivering similar capabilities. Most of my projects deliver ROI within the first quarter. I scope every project with a clear budget before writing a line of code.",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Most projects deliver working systems in 2-8 weeks. A recent client project — 100+ pages of strategy plus a custom AI tool — shipped in 6 weeks. Simple automation workflows can be live in days. I don't do 6-month timelines. You get working software fast, then we iterate based on real data.",
  },
  {
    question: "What are the risks of implementing AI in my business?",
    answer:
      "The biggest risk is doing nothing while competitors adopt AI tools that cut their costs and speed up their operations. Implementation risks are manageable: I test everything on my own businesses before recommending it, build incrementally so you see results early, and train your team so you're never dependent on me. You own everything I build.",
  },
  {
    question: "How do I choose the right AI consultant?",
    answer:
      "Look for someone who builds, not just advises. Ask to see working tools they've deployed, not just strategy documents they've written. Check if they have skin in the game — do they use AI in their own business? I run two e-commerce brands on AI tools I built myself. That's the difference between theory and practice.",
  },
  {
    question: "What is an AI readiness assessment?",
    answer:
      "It's a practical evaluation of where AI and automation will generate the highest return in your specific business. I look at your operations, identify repetitive manual work, assess your existing tech stack, and prioritize implementation by ROI. Not a generic checklist — a targeted plan with specific tools and timelines. Then I build it.",
  },
  {
    question: "How do I measure AI implementation ROI?",
    answer:
      "Track what matters: time saved, costs reduced, revenue generated. For my own brands, the math is simple — $75K-$125K in annual agency costs replaced by $2K in AI tools. For clients, I set measurable benchmarks before building anything. If we can't quantify the return, we don't build it.",
  },
  {
    question: "What AI tools work best for e-commerce businesses?",
    answer:
      "It depends on your biggest pain point. For content generation: Claude + custom prompt systems. For email automation: Klaviyo with AI-driven segmentation. For ad optimization: AI-assisted bid management across Google, Amazon, and Meta. For operations: custom automation workflows connecting Shopify, Amazon, and your fulfillment systems. I've built and tested all of these on my own e-commerce brands.",
  },
  {
    question: "Can AI really replace marketing agencies?",
    answer:
      "Not entirely — but it can replace the $75K-$125K in repetitive work you're paying agencies to do manually. Content generation, email sequences, social media scheduling, reporting, ad copy testing — all of this can be automated with custom AI tools. You still need strategic thinking. But you don't need to pay agency rates for execution work that AI handles better and faster.",
  },
  {
    question: "Can you help my brick-and-mortar store go online?",
    answer:
      "Yes — and this is where real experience beats theory. I've built two product brands from zero to multi-platform e-commerce since 2014. I know exactly what breaks when you first launch on Amazon, why Shopify stores don't convert out of the box, and how to avoid the expensive mistakes most businesses make trying to figure it out alone. I coach you through the setup and build the AI tools that make it scale.",
  },
  {
    question: "Do you work with service businesses like contractors or trades?",
    answer:
      "Yes. Electricians, landscapers, plumbers, HVAC — any local service business that's invisible online. I build your digital foundation: professional website, Google Business Profile, and local SEO. Then I optimize it for LLM search so AI assistants recommend you when people search for your services. The next generation finds local businesses by asking Siri, ChatGPT, and Google. I make sure you show up in all of them.",
  },
  {
    question: "What does it cost to get started selling online?",
    answer:
      "Platform fees are low — Shopify starts at $39/month, Amazon at $39.99/month. The real investment is the setup: getting listings right, content optimized, and systems in place so you don't waste money on ads before the foundation is solid. My coaching engagements typically run $3,000–$8,000 for the initial setup phase. After that you're running independently with AI tools I've built for you.",
  },
];
