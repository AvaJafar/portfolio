export const CATEGORIES = [
  'Entertainment & Culture',
  'Brand Partnerships',
  'Consumer Brands',
  'Social Impact & Organizations',
  'Tech & Platform'
] as const;

export type Category = typeof CATEGORIES[number];

export const categorySlug = (cat: string): string =>
  'rail-' + cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export interface Metric {
  value: string;
  label: string;
  sub?: string;
  feature?: boolean;
}

export interface PressItem {
  outlet: string;
  title: string;
  year: string;
  url?: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  org: string;
  role: string;
  timeframe: string;
  category: Category;
  cardImage: string;
  heroImage: string;
  heroDriveVideoId?: string;
  intro: string;
  challenge?: string;
  approachStatement?: string;
  approachBody?: string;
  owned: string[];
  metrics: Metric[];
  notes: string[];
  context?: string;
  press: PressItem[];
  links: LinkItem[];
}

export const projects: ProjectItem[] = [
  {
    slug: 'moulin-rouge',
    title: 'Moulin Rouge! The Musical',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'February 26, 2026',
    category: 'Entertainment & Culture',
    cardImage: 'https://i.imgur.com/82R1CbY.jpeg',
    heroImage: 'https://i.imgur.com/82R1CbY.jpeg',
    heroDriveVideoId: '1Jyh_6265Eur84T4CRO6Kb2nwbVq-eS1k',
    intro: "A historic casting announcement, turned into ticket demand in Moulin Rouge!'s final months on Broadway.",
    challenge: "Moulin Rouge! The Musical announced it was closing after seven years on Broadway. The challenge: turn a historic casting announcement into ticket demand, reaching beyond Broadway's traditional audience in the show's final months.",
    approachStatement: 'Lead with the historic-first framing.',
    approachBody: "The casting came with two built-in cultural hooks: a historic gender-swapped portrayal of Zidler, the first by a female-identifying performer in any Moulin Rouge! production worldwide, and a timely announcement at the start of International Women's Month. I story-mined the casting for the angles that would carry outside the theater press and led with the historic-first framing.",
    owned: [
      'Story-mining the casting for angles that would carry beyond theater press',
      'Announcement sequencing across owned, talent, and partner channels',
      'Content capture and on-set filming direction',
      'Social content strategy, calendar development, and promotional ideation'
    ],
    metrics: [
      { value: '72K', label: 'Website sessions in 48 hours', sub: '+400% day-over-day', feature: true },
      { value: '249.4M', label: 'Topic reach across the announcement' },
      { value: '19.7K', label: 'Social mentions' },
      { value: '~16K', label: 'Clicks to ticketing' }
    ],
    notes: [
      'Highest-traffic cast announcement in Moulin Rouge! history',
      'Production extended five weeks beyond its originally announced closing date'
    ],
    press: [],
    links: []
  },
  {
    slug: 'nbc-olympics',
    title: 'NBC Olympics x YouTube',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'February 10, 2026',
    category: 'Entertainment & Culture',
    cardImage: 'https://i.imgur.com/WRV83mM.jpeg',
    heroImage: 'https://i.imgur.com/WRV83mM.jpeg',
    intro: "Turning Olympic access into content that felt like Megan's own, not borrowed sports coverage.",
    challenge: "NBCUniversal had the access and authority of the Olympics. Megan had the audience and cultural influence. The opportunity was to connect the two without making Olympic coverage feel like an ad or forcing Megan into the role of a traditional sports correspondent. With her Olympics content living exclusively on her 7.3M-subscriber YouTube channel, the strategy was to make the Games feel native to her audience rather than asking her audience to adapt to the Olympics.",
    approachStatement: 'Arrive as a fan, not a celebrity.',
    approachBody: "Megan's own framing became the creative unlock: she wasn't arriving as a celebrity, she was arriving as a fan. That let her experience the Games with genuine curiosity, humor, and personality, turning Olympic access into entertainment that felt like Megan's content first and Olympic coverage second.",
    owned: [
      "Content strategy and POV for Megan's Olympic coverage",
      'Content pillars translating Olympic access into Megan-native entertainment',
      'Content opportunity mapping against the live Games calendar, talent access, and audience relevance',
      'Real-time production across five channels during a live global event',
      'Editorial decisions, editing, and publishing cadence across the six-day window'
    ],
    metrics: [
      { value: '54', label: 'Pieces published in 5 days', sub: '19 Shorts · 4 long-form · 15 IG · 6 TikTok · 10 X', feature: true },
      { value: '7.3M', label: "Engagements on Megan's channels" },
      { value: '71M', label: "Impressions on Megan's channels" },
      { value: '~64.9K', label: 'New followers in one week' }
    ],
    notes: [
      '29K mentions and 157M topic reach across the broader Milan conversation',
      '5.3K engagements and 150K unique impressions across Roc Nation owned channels',
      'New followers by platform: IG 31.7K, FB 12.3K, X 10.3K, YouTube 10K'
    ],
    press: [],
    links: []
  },
  {
    slug: 'jay-z30',
    title: "JAŸ-Z30: '96 & Forever",
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'June 25, 2026',
    category: 'Entertainment & Culture',
    cardImage: 'https://i.imgur.com/zILcgwM.jpeg',
    heroImage: 'https://i.imgur.com/zILcgwM.jpeg',
    intro: 'Thirty years of catalog, told as one cohesive citywide narrative instead of scattered nostalgia.',
    challenge: "JAY-Z didn't need a comeback. He needed a cultural moment. Thirty years after Reasonable Doubt and 25 years after The Blueprint, JAŸ-Z30 had to make a legacy celebration feel relevant beyond nostalgia. With a citywide physical program building toward the Yankee Stadium shows, the digital strategy needed to turn dozens of disconnected moments across New York into one cohesive narrative, while translating a 30-year catalog for both longtime fans and a generation that discovered JAY-Z long after the albums were released.",
    owned: [
      'Social strategy translating the citywide physical program into a sustained digital narrative',
      'Digital identity work across the campaign',
      'Content production across the June 25 citywide tribute and the Yankee Stadium residency',
      'Live activation coverage: custom JAŸ-Z30 subway maps, commemorative library cards, Manhattan and Brooklyn pop-ups, and the closing fireworks display'
    ],
    metrics: [
      { value: '23.5M', label: 'Accounts reached on Instagram', feature: true },
      { value: '55,009', label: 'New Instagram followers' },
      { value: 'SOLD OUT', label: '3-night Yankee Stadium residency' }
    ],
    notes: [],
    press: [],
    links: []
  },
  {
    slug: 'walmart-hgs',
    title: 'Walmart x Hot Girl Summer',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'April 15, 2026',
    category: 'Brand Partnerships',
    cardImage: 'https://i.imgur.com/SuoT3dI.png',
    heroImage: 'https://i.imgur.com/SuoT3dI.png',
    intro: "Scaling Hot Girl Summer from a swimwear drop into a lifestyle collection, without losing what made it resonate.",
    challenge: "Following the debut 2025 collection, Walmart returned for a second Hot Girl Summer collaboration with a bigger ambition: move the idea beyond a women's swimwear drop and build it into a broader lifestyle proposition. The 2026 collection expanded into men's swimwear and pet apparel, transforming Hot Girl Summer from something you could wear into something the whole Hot Girl Universe could participate in.",
    approachStatement: 'Scale without dilution.',
    approachBody: 'Translate cultural equity into a broader retail ecosystem while preserving the confidence, humor, and inclusivity that made the concept resonate in the first place.',
    owned: [
      'Rollout and activation strategy for the 2026 category expansion across digital, CRM, talent, and experiential',
      'CRM strategy and lifecycle communications, from audience segmentation through timed promotional pushes',
      'Love Island commerce strategy, connecting broadcast discovery to purchase through QR, timed CRM, onsite merchandising, and cart and checkout upsells',
      "Integration of the collection into Megan's owned content ecosystem and summer content calendar",
      'Cross-functional execution across Walmart, talent, Roc Nation, and production',
      'Miami Swim Week experience on the ground: model selection, show execution, real-time content capture'
    ],
    metrics: [
      { value: '94%', label: 'Sell-through, 2026 swim collection', sub: '+77% YoY', feature: true },
      { value: '93%', label: 'Sell-through, pet category' },
      { value: '65.6M', label: 'Combined owned-channel audience activated' },
      { value: '22.2K', label: 'Follower growth during campaign' }
    ],
    notes: [
      "Sorbet Summer Trunk became one of the higher-selling men's products, proving the expansion beyond women's swim",
      '3,953 mentions and 6.34M estimated topic reach (April 14–20 monitoring window)',
      'Consumer conversation centered on pricing, availability, and accessibility — signaling active purchase consideration, not passive awareness'
    ],
    press: [],
    links: []
  },
  {
    slug: 'coty-edp',
    title: 'Coty: Hot Girl Summer Eau de Parfum',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'July 5, 2026',
    category: 'Brand Partnerships',
    cardImage: 'https://i.imgur.com/Z2DyOsn.png',
    heroImage: 'https://i.imgur.com/Z2DyOsn.png',
    intro: 'Turning a limited-edition fragrance launch into a staggered series of moments, not one launch day.',
    challenge: 'Megan Thee Stallion was entering fragrance for the first time with a limited-edition, unisex Eau de Parfum developed with Coty. The challenge was to introduce a new product category while creating enough demand around a limited-edition product to make the staggered retail rollout feel like a series of moments rather than one launch day.',
    approachStatement: 'Turn a staggered rollout into a series of moments.',
    approachBody: "With early access through Megan's site and Ulta.com before broader retail, the rollout converted Megan's cultural audience into early buyers while building anticipation for the wider Ulta release.",
    owned: [
      "Phased digital rollout strategy across Megan's owned channels and MeganTheeStallion.com",
      'Content and messaging cadence across early access, online launch, and retail launch',
      "Cross-functional execution across Coty, Ulta, Megan's team, and Roc Nation",
      'Real-time content strategy and publishing around each launch moment'
    ],
    metrics: [
      { value: '#2', label: 'Most popular fragrance at Ulta', feature: true },
      { value: 'SOLD OUT', label: 'On MeganTheeStallion.com' }
    ],
    notes: ['Most successful celebrity fragrance launch at Ulta this year'],
    press: [],
    links: []
  },
  {
    slug: 'cheetos-nickelback',
    title: "Cheetos x Nickelback: \"Pickle's Back\"",
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'March 26, 2026',
    category: 'Brand Partnerships',
    cardImage: 'https://i.imgur.com/sbXcPS4.png',
    heroImage: 'https://i.imgur.com/sbXcPS4.png',
    intro: "Turning a flavor's comeback into a music video people sought out and shared.",
    challenge: "Cheetos Flamin' Hot Dill Pickle had become the fastest-selling limited-edition flavor in the brand's history, creating strong consumer demand for its return. The challenge was to turn that fan demand into a cultural moment worthy of a permanent comeback, without relying on the scarcity that had originally fueled the hype.",
    approachStatement: 'Entertainment over announcement.',
    approachBody: 'Cheetos chose entertainment over a conventional product announcement, tapping Megan Thee Stallion, Nickelback, and director Dave Meyers to create a full music video. Meyers was given creative freedom to build something unexpected and culturally relevant, turning the flavor\'s return into a moment audiences would actively seek out, watch, and share.',
    owned: [
      "Megan Thee Stallion's talent strategy and execution for the campaign",
      'Social strategy translating the "Pickle\'s Back" creative into Megan-native content',
      "Rollout across Megan's owned channels around the music video launch",
      'Execution across Cheetos, talent, creative, and Roc Nation teams',
      "Real-time social opportunity identification around the campaign's cultural moments"
    ],
    metrics: [
      { value: '88M', label: 'Topic reach on the Megan x Cheetos conversation', sub: '18.8K mentions', feature: true },
      { value: '5.5M', label: "Views across Megan's BTS & commercial TikToks" },
      { value: '175+', label: 'UGC taste tests & reactions' }
    ],
    notes: [],
    press: [],
    links: []
  },
  {
    slug: 'nyx-caramelt',
    title: 'NYX: Caramelt Mami',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'April 21, 2026',
    category: 'Brand Partnerships',
    cardImage: 'https://i.imgur.com/gkFXRbr.jpeg',
    heroImage: 'https://i.imgur.com/gkFXRbr.jpeg',
    intro: "Using Megan's song \"Body\" to launch NYX's first move from face to body care.",
    challenge: "NYX had built its identity around face artistry. Caramelt Mami marked the brand's first expansion from face to body in its 27-year history, making the challenge bigger than introducing a new product: NYX had to establish body care as a natural extension of its artistry and self-expression.",
    approachStatement: 'Turn a song into a category launch.',
    approachBody: 'Megan\'s identity is deeply rooted in confidence and body celebration, while her song "Body" already had a strong cultural association with self-expression and empowerment. We turned "BODY" into the creative platform, using an existing piece of Megan\'s cultural equity to introduce NYX\'s first entry into the body oil category.',
    owned: [
      'Campaign messaging and social copy across the launch',
      'Creative concept for the "Caramelt Mami" character and the "dripping in oil" campaign world, anchored in Megan\'s "Body"',
      'Hot Girl Summer Miami Swim Week integration, extending the campaign from digital into a live cultural experience',
      'Cross-functional execution across brand, talent, creative, and production',
      'Content capture and real-time storytelling across campaign moments'
    ],
    metrics: [
      { value: '617K', label: 'Likes, launch video', feature: true },
      { value: '517K', label: 'Likes, second video' }
    ],
    notes: ['NYX integrated into the second annual Hot Girl Summer Miami Swim Week show'],
    press: [],
    links: []
  },
  {
    slug: 'ordo-squishmallows',
    title: 'Ordo x Squishmallows',
    org: 'Milk & Honey PR',
    role: 'Senior Account Executive',
    timeframe: 'US market entry, 2025',
    category: 'Consumer Brands',
    cardImage: 'https://i.imgur.com/ACS7xzB.jpeg',
    heroImage: 'https://i.imgur.com/ACS7xzB.jpeg',
    intro: 'Introducing a UK oral care brand to the US, and turning a single skinny CVS test tower into national retail placement.',
    challenge: 'Ordo was a UK-based oral care brand with no US presence entering a category dominated by Colgate, Oral-B, and Crest. CVS gave them a skinny sales tower for holiday 2024 as a test rather than shelf space. The brand had to prove sell-through fast enough to earn real placement, in a category where the purchase decision belongs to a parent but the demand has to come from a child.',
    approachStatement: 'Speak to the child. Give the parent a reason to say yes.',
    approachBody: 'Pitch a licensing partnership that speaks directly to the child, then add a purpose layer so the parent has a reason to say yes.',
    owned: [
      'Pitched and secured the Squishmallows partnership',
      'Concept and layout design for the Squishmallows-branded NYC pop-up',
      "Built the America's ToothFairy partnership into the activation, with $1 per purchase donated",
      'Influencer and press targeting and invites for the pop-up'
    ],
    metrics: [
      { value: '45%+', label: "Share of CVS's children's oral care category", feature: true },
      { value: '2K → 6K', label: 'CVS store doors' },
      { value: '$1.6M', label: 'Sales in 12 weeks' },
      { value: '+28%', label: 'vs. prior 12 weeks' }
    ],
    notes: [
      'CVS upgraded displays in March 2025 and moved to standard shelf placement by September 2025',
      'The CVS sell-through case opened Target, Walgreens, Walmart, and Amazon',
      'Top customer search terms were "Ordo Squishmallow" and "Ordo Squish" — affinity transferred to Ordo, not the license',
      'The NYC pop-up drew a line around the block'
    ],
    press: [
      {
        outlet: 'Inc.',
        title: 'How a Collaboration With Squishmallows Helped This Brand Gain Serious Market Share Fast',
        year: '2025',
        url: 'https://www.inc.com/annabel-burba/how-a-collaboration-with-squishmallows-helped-this-brand-gain-serious-market-share-fast/91176614'
      },
      { outlet: 'Chief Marketer', title: 'Market-entry case study coverage', year: '2025' }
    ],
    links: []
  },
  {
    slug: 'chicas-divertidas',
    title: 'Chicas Divertidas',
    org: 'Roc Nation',
    role: 'Head Strategist',
    timeframe: 'Ongoing',
    category: 'Consumer Brands',
    cardImage: 'https://i.imgur.com/Ox6u0uq.png',
    heroImage: 'https://i.imgur.com/Ox6u0uq.png',
    intro: 'Evolving a celebrity-backed tequila into a standalone lifestyle brand with its own identity.',
    challenge: 'Chicas Divertidas entered the premium tequila market alongside established celebrity-backed brands including Casamigos, Teremana, and 818 Tequila. After the first year, the challenge was to build Chicas into a standalone brand beyond Megan Thee Stallion.',
    approachStatement: 'A lifestyle brand, not a celebrity product.',
    approachBody: 'Evolve Chicas from a product-led social presence into a lifestyle brand with its own world, voice, and point of view. Shift toward aspirational lifestyle storytelling and prioritize cultural moments across nightlife, fashion, drag, music, and entertainment so Chicas reads as a premium tequila people discover and identify with, not a celebrity product.',
    owned: [
      'End-to-end brand strategy and marketing across social, CRM, experiential, partnerships, on-premise, and market expansion',
      'Brand ambassador program: directly manage four ambassadors and oversee strategy, content, and deliverables',
      'Cocktail program: hired and directed a mixologist to build seasonal serves and signature cocktails',
      'New market launch strategy across social, CRM, events, on-premise activations, and local programming',
      'POS and trade marketing concepts translating the brand into physical retail touchpoints',
      'Content production from treatment through execution: creative development, budgets, production management, run of show, talent and vendor hiring',
      "Cross-portfolio integration, embedding Chicas across Megan's broader business ecosystem so campaigns run as one consumer experience"
    ],
    metrics: [
      { value: '45K', label: 'Instagram growth in 5 months', feature: true },
      { value: '21', label: 'New markets launched' },
      { value: '3', label: 'Influencer brand events in 9 months' }
    ],
    notes: [],
    press: [],
    links: []
  },
  {
    slug: 'vs-pink',
    title: "Victoria's Secret PINK x Van Leeuwen",
    org: 'Collab x Collab',
    role: 'Creative Strategist',
    timeframe: 'January 30, 2025',
    category: 'Consumer Brands',
    cardImage: 'https://i.imgur.com/cwgHUq3.png',
    heroImage: 'https://i.imgur.com/cwgHUq3.png',
    intro: "Turning a Tribeca ice cream shop into a Valentine's Day destination built for Gen Z discovery.",
    challenge: "PINK needed a culturally relevant partner to create a Valentine's Day moment that felt native to Gen Z and gave its creator-led product story a real-world expression.",
    approachStatement: 'Turn an ice cream shop into a destination.',
    approachBody: 'Instead of a traditional retail activation, transform a popular Tribeca ice cream shop into a temporary PINK destination — an unexpected, social-first experience Gen Z could discover, participate in, and share.',
    owned: [
      'Sourced the brand partnership and pitched it to VS PINK',
      "Cultural and social strategy connecting the physical activation to PINK's creator-led collection",
      'On-site activation support and content opportunities',
      'Themed product integration into the collaboration'
    ],
    metrics: [
      { value: '1.5M+', label: 'Combined creator reach', sub: 'Halley Kate & Jazzmeen', feature: true },
      { value: '2,000+', label: 'Pop-up guests' }
    ],
    notes: ['The format became a template — PINK ran a LoveShackFancy pop-up on the same model in August 2025'],
    context: "PINK's parent business reported a 15% net sales increase to $1.6 billion in early 2026, driven by growth in physical and digital customer traffic.",
    press: [],
    links: []
  },
  {
    slug: 'rci-caregivers',
    title: 'Rosalynn Carter Institute for Caregivers',
    org: 'Milk & Honey PR',
    role: 'Account Executive',
    timeframe: '2024 to 2025',
    category: 'Social Impact & Organizations',
    cardImage: 'https://i.imgur.com/LjFRjnc.png',
    heroImage: 'https://i.imgur.com/LjFRjnc.png',
    intro: 'Moving caregiving from a private family issue into national public conversation and policy momentum.',
    challenge: 'Millions of Americans provide unpaid care for family members, but the issue stays private, fragmented, and absent from public conversation.',
    approachStatement: 'Make caregiving a national issue, not a private one.',
    approachBody: 'Shifting caregiving from a personal family responsibility to a national public health and economic issue, building the cultural and political momentum required to drive policy change.',
    owned: [
      'Campaign narratives and messaging making caregiving urgent and culturally relevant',
      'High-impact storytelling opportunities bringing caregivers into the spotlight',
      'Strategic partnerships and advocacy opportunities with organizations, policymakers, and influential voices',
      "Impact measurement and translation into strategic recommendations for RCI's broader communications"
    ],
    metrics: [
      { value: '+6pts', label: 'Share of voice growth', sub: '26% → 32% YoY', feature: true },
      { value: '13.8%', label: 'LinkedIn engagement rate' },
      { value: '~7', label: 'Top-tier placements, year round' }
    ],
    notes: ['Marquee partnerships with Duke, Bradley Cooper, and Pivotal'],
    press: [
      { outlet: 'Forbes', title: 'The $157 Billion Caregiving Crisis Employers Can No Longer Ignore', year: '2025' },
      { outlet: 'NPR', title: 'Caregiving can be a tough, lonely mission. One daughter found ways to reconnect', year: '2024' },
      { outlet: 'Fortune', title: "A caregiver's guide to dementia", year: '2024' },
      { outlet: "McKnight's Home Care", title: 'Home caregiving reaches critical stage: Care for the caregiver', year: '2025' }
    ],
    links: []
  },
  {
    slug: 'pete-thomas',
    title: 'Pete & Thomas Foundation x Habitat for Humanity',
    org: 'Roc Nation',
    role: 'Digital Marketing & Strategy',
    timeframe: 'Launched on Megan Thee Stallion Day',
    category: 'Social Impact & Organizations',
    cardImage: 'https://i.imgur.com/Yl9h3GL.png',
    heroImage: 'https://i.imgur.com/Yl9h3GL.png',
    intro: 'Turning a home-repair philanthropy investment into a story fans could participate in, not just watch.',
    challenge: "The Pete & Thomas Foundation needed to turn a philanthropic investment in Houston and Dallas into a story that could resonate beyond the homes being renovated. Partnering with Habitat for Humanity's Aging in Place program, the initiative provided critical repairs and safety upgrades for senior homeowners. The communications challenge was making the work feel personal, culturally relevant, and connected to Megan's broader commitment to her communities.",
    approachStatement: 'Make philanthropy something fans do, not just watch.',
    approachBody: "Spotlight the people behind the impact while mobilizing Megan's fans to see philanthropy as something they could participate in.",
    owned: [
      "Social storytelling strategy translating the initiative across Megan's digital ecosystem",
      "The #HottiesHelping framework, connecting Megan's fan community to her philanthropic work with a participatory call to action",
      'On-the-ground content and volunteer storytelling, including traveling to Houston to participate in the build',
      'Amplification strategy connecting the activation to the broader Pete & Thomas narrative'
    ],
    metrics: [
      { value: '30+', label: 'Homes repaired across Houston & Dallas', feature: true },
      { value: '1.55M', label: 'Impressions across P&T social properties' },
      { value: '40M', label: 'Topic reach on the partnership conversation' },
      { value: '515', label: 'New P&T followers during tracking period' }
    ],
    notes: [
      '9.4K engagements across Pete & Thomas social properties',
      "Megan's Instagram story reshare alone drove 1.50M of those impressions",
      '3.4K mentions on the partnership conversation'
    ],
    press: [],
    links: []
  },
  {
    slug: 'bcny',
    title: "Boys' Club of New York",
    org: 'Milk & Honey PR',
    role: 'Senior Account Executive',
    timeframe: '2025',
    category: 'Social Impact & Organizations',
    cardImage: 'https://i.imgur.com/FPUlFSN.png',
    heroImage: 'https://i.imgur.com/FPUlFSN.png',
    intro: "Reframing a century-old boys' club as essential infrastructure, not an after-school extra.",
    challenge: 'At a time when conversations around the "boy crisis" focused on what young men were doing wrong, BCNY had an opportunity to shift the conversation toward what boys actually need.',
    approachStatement: 'Position a clubhouse as infrastructure.',
    approachBody: "Position BCNY's century-plus legacy as more than an after-school program: an essential community where boys build confidence, develop relationships, and grow into the people they want to become.",
    owned: [
      "BCNY's communications narrative around the changing needs of boys and young men",
      'Thought leadership positioning BCNY executives in the national conversation',
      'Human-centered stories highlighting members, mentors, and program impact',
      'Media relations across education, youth development, culture, and New York media',
      'Pitched and developed the BCNY x Wollman Rink partnership, framing the "boy crisis" as an infrastructure gap and creating more free space for boys to explore sports and gather'
    ],
    metrics: [{ value: '$1M+', label: 'Raised at BCNY Fall Dance', sub: 'Forbes, 2025', feature: true }],
    notes: ['New South Bronx clubhouse opened (Bronx Times, 2025)'],
    press: [
      { outlet: 'Forbes', title: 'BCNY Fall Dance at the Waldorf Astoria Raises Over $1 Million', year: '2025' },
      { outlet: 'Bronx Times', title: 'Boys\' Club of New York opens new South Bronx clubhouse', year: '2025' }
    ],
    links: [{ label: 'Wollman Rink Partnership', url: 'https://wollmanrinknyc.com/partner/boys-club-of-new-york' }]
  },
  {
    slug: 'nesst',
    title: 'NESsT',
    org: 'Milk & Honey PR',
    role: 'Account Executive',
    timeframe: '2025',
    category: 'Social Impact & Organizations',
    cardImage: 'https://i.imgur.com/f76r98N.png',
    heroImage: 'https://i.imgur.com/f76r98N.png',
    intro: 'Translating complex impact-investing models into stories investors, policymakers, and the public could feel.',
    challenge: 'NESsT needed to make impact investing feel credible, measurable, and human. In a crowded space where organizations increasingly made claims about social impact, NESsT had to prove that capital could create measurable economic opportunity for underrepresented communities.',
    approachStatement: 'Translate financial models into human stories.',
    approachBody: 'Translate complex investment models into stories that resonated with investors, policymakers, and the public.',
    owned: [
      'Year-long communications strategy across impact investing, economic opportunity, and social enterprise',
      'Messaging and thought leadership translating complex financial models into accessible narratives',
      'Human-centered impact stories, turning enterprise outcomes and community voices into media opportunities',
      'Proactive media relations and strategic announcements: partnership launches, executive visibility, industry commentary',
      'Writing and production of the 2024 NESsT Annual Report'
    ],
    metrics: [],
    notes: [],
    press: [],
    links: [{ label: '2024 NESsT Annual Report', url: 'https://issuu.com/nesster/docs/2024_nesst_annual_report_may_9_2025' }]
  },
  {
    slug: 'public-notifier',
    title: 'Public Notifier',
    org: 'Public Notifier',
    role: 'Co-Founder & CEO',
    timeframe: 'Founded February 2026',
    category: 'Tech & Platform',
    cardImage: 'https://i.imgur.com/wGAPT7R.png',
    heroImage: 'https://i.imgur.com/wGAPT7R.png',
    intro: 'Building software that makes a manual, legally risky filing process simple and repeatable.',
    challenge: 'Public notification requirements in real estate approval processes are manual and legally consequential. A missed or improperly executed notice can invalidate an approval and restart the process.',
    approachStatement: 'Make notice-filing simple, accurate, repeatable.',
    approachBody: 'My technical co-founder and I built software that makes the process simpler to request, accurate, and repeatable from county to county.',
    owned: [
      'Co-founded the company with a technical co-founder, built on nights and weekends',
      'County-by-county rules research and requirement mapping',
      'Website, brand, and positioning',
      'LLC formation and business setup',
      'Administrative operations and customer onboarding'
    ],
    metrics: [
      { value: '3', label: 'Florida jurisdictions live', sub: 'Hollywood, Hallandale, Fort Lauderdale', feature: true },
      { value: '~48 hrs', label: 'Saved per approval' },
      { value: '0', label: 'Notice errors across projects' }
    ],
    notes: [],
    press: [],
    links: [{ label: 'thepublicnotifier.com', url: 'https://www.thepublicnotifier.com/' }]
  },
  {
    slug: 'airtime',
    title: 'Airtime (formerly mmhmm)',
    org: 'Milk & Honey PR',
    role: 'Senior Account Executive',
    timeframe: '2025',
    category: 'Tech & Platform',
    cardImage: 'https://i.imgur.com/azvT5ow.jpeg',
    heroImage: 'https://i.imgur.com/azvT5ow.jpeg',
    intro: 'Keeping a pandemic-born video tool relevant as the category it created got crowded.',
    challenge: 'Airtime, a suite of professional video communication tools from the creators of mmhmm, was built to solve the attention problem in virtual meetings, replacing static screen sharing with dynamic, immersive presentations. Created during COVID-19, Airtime needed to stay relevant as virtual communication evolved past the pandemic and differentiate in an increasingly crowded video collaboration space.',
    owned: [
      'Day-to-day client account management and communications',
      'Media relations and PR strategy, developed and executed',
      'Proactive media outreach, pitching, and relationship building',
      'Thought leadership and executive positioning for founder Phil Libin'
    ],
    metrics: [],
    notes: [],
    press: [
      { outlet: 'TechCrunch', title: "Evernote founder's video startup mmhmm becomes Airtime, launches new products", year: '2025' },
      { outlet: 'Fast Company', title: 'The startup that wants to fix everything you hate about video calls', year: '2025' },
      { outlet: 'Axios', title: '"AI slop" is in the eye of the beholder', year: '2025' }
    ],
    links: []
  }
];

export const getProjectsByCategory = (cat: Category): ProjectItem[] =>
  projects.filter((p) => p.category === cat);

export const getProjectBySlug = (slug: string): ProjectItem | undefined =>
  projects.find((p) => p.slug === slug);
