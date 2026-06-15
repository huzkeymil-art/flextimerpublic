export type CaseStudy = {
  slug: string
  client: string
  category: string
  headline: string
  subhead: string
  challenge: string
  approach: string[]
  result: string
  services: string[]
  industry: string
  accentColor: string
  bgClass: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'saba-work-like-you',
    client: 'Saba',
    category: 'Brand Launch · Identity · Film',
    headline: 'Launching a new visual identity for the future of work',
    subhead: 'How we gave Saba\'s perspective on Workforce & Talent Management a voice the market could feel',
    challenge:
      'Saba needed to launch a completely new visual identity and a fresh point of view on where Workforce and Talent Management was heading — in a category full of enterprise software brands that all looked and sounded the same. The new identity had to work across a launch film, digital channels, and internal communications simultaneously.',
    approach: [
      'Developed the "work like you" brand platform — a clear stake in the ground that positioned Saba as the software that adapts to how people actually work, rather than forcing work into a rigid system.',
      'Built a new visual identity system from the ground up: color palette, typography, iconography and motion principles that carried the platform\'s energy without being decorative for its own sake.',
      'Produced the launch film — strategy through execution — timed to the company\'s major product release and designed to work as a hero asset, a sales tool, and a cultural signal to Saba\'s own team.',
      'Developed rollout materials across digital, print, and presentation formats so every touchpoint launched with the same voice and visual language.',
    ],
    result:
      'The "work like you" platform gave Saba a distinct identity in a crowded enterprise software market — one that held up from the launch film down to a slide deck. The identity system was built to scale as the company grew.',
    services: ['Brand Strategy', 'Messaging & Positioning', 'Visual Identity', 'Creative Direction', 'Video Production'],
    industry: 'Enterprise Software · HR Tech',
    accentColor: '#6D5BE0',
    bgClass: 'from-[#1a0f2e] via-[#2d1b69] to-[#0f0c1e]',
  },
  {
    slug: 'cox-automotive-find-it-floor-it',
    client: 'Cox Automotive',
    category: 'Campaign · Trade Show · Activation',
    headline: '"Find It. Floor It. Ship It." — a trade show campaign that moved dealers',
    subhead: 'How we gave Cox Automotive a single voice for a portfolio of brands at NIADA 2025',
    challenge:
      'Cox Automotive\'s portfolio includes multiple brands — each solving a different piece of the dealer\'s inventory, financing, and transportation puzzle. At NIADA 2025, they needed dealers to stop, visit the booth, and walk away understanding how those brands work together — not as separate tools, but as an integrated system. In a trade show environment where a dealer has ten competing booths and twenty minutes.',
    approach: [
      'Opened with a simple strategic question: what\'s the one thing a dealer does every day that touches all three of Cox Automotive\'s categories? The answer became the campaign: a car moves from "find it" (inventory) to "floor it" (financing) to "ship it" (transportation).',
      '"Find It. Floor It. Ship It." was built to land in three seconds on a trade show floor — a dealer could read it while walking past and immediately understand the value of stopping.',
      'The campaign ran across pre-show digital outreach, booth graphics, and activation materials — all built to funnel dealers from awareness to the booth to a conversation with a sales rep.',
      'The language was deliberately dealer-language, not corporate-language — fast, direct, and specific to what a dealer actually worries about on a Tuesday morning.',
    ],
    result:
      'The campaign ran at NIADA 2025 and gave Cox Automotive\'s booth a clear, unified message in a show environment where most brands compete on volume rather than clarity.',
    services: ['Campaign Strategy', 'Copywriting', 'Event & Trade Show', 'Creative Direction', 'Digital'],
    industry: 'Automotive Technology',
    accentColor: '#1A6B3A',
    bgClass: 'from-[#0a1f10] via-[#16381f] to-[#080f09]',
  },
  {
    slug: 'spireon-lojack-repositioning',
    client: 'Spireon / LoJack',
    category: 'Rebrand · Repositioning · Advertising',
    headline: 'From theft deterrent to the connected car',
    subhead: 'Repositioning one of America\'s most recognized automotive brands after a major acquisition',
    challenge:
      'When Spireon acquired LoJack, they inherited one of the most recognized names in automotive — and one of the most narrowly defined. LoJack meant one thing: stolen car recovery. Spireon\'s technology did far more than that, but leading with "we\'re more than theft protection" is exactly the kind of positioning that goes nowhere. The challenge was to expand what LoJack stood for without abandoning the equity in the name.',
    approach: [
      'Developed a repositioning that moved LoJack from a single-use theft deterrent to a comprehensive smart car solution — keeping the brand\'s core promise of peace of mind but expanding the territory it could own.',
      'Built a new visual identity system: a refreshed logo, updated color palette, and a design language that felt modern and connected rather than purely security-focused.',
      'Created an advertising campaign that introduced the expanded positioning — showing buyers what a smart, connected vehicle actually meant for their daily life, not just in the theft-scare scenario.',
      'Developed point-of-purchase materials for retail and dealership channels — the environment where most LoJack decisions are made — designed to communicate the broader value proposition in the few seconds a buyer is standing in front of the display.',
    ],
    result:
      'The new identity and repositioning gave LoJack a foundation to grow into a broader connected vehicle category while maintaining the recognition and trust that made the brand worth acquiring in the first place.',
    services: ['Brand Strategy', 'Repositioning', 'Visual Identity', 'Advertising', 'Point-of-Purchase'],
    industry: 'Automotive Technology · Consumer',
    accentColor: '#B83A2A',
    bgClass: 'from-[#1f0a08] via-[#3d1510] to-[#0f0604]',
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
