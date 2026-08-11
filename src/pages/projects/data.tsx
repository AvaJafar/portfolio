import React from 'react';

export const GENRES = ['Entertainment', 'Brands', 'Commerce', 'B2B'] as const;
export type Genre = typeof GENRES[number];

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface ExternalLink {
  url: string;
  label: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  genres: Genre[];
  tagline: string;
  posterImage: string;
  backdropImage: string;
  previewImages: string[];
  description: React.ReactNode;
  details?: string[];
  gallery?: GalleryImage[];
  externalLink?: ExternalLink;
  featured?: boolean;
}

const linkStyle: React.CSSProperties = {
  color: '#e50914',
  textDecoration: 'underline',
  fontWeight: 600
};

export const projects: ProjectItem[] = [
  {
    slug: 'megan-nbc-olympics',
    title: 'Megan Thee Stallion x NBC Olympics x YouTube',
    genres: ['Entertainment'],
    tagline: "A flagship Megan Thee Stallion moment marking NBC and YouTube's first major Olympics partnership.",
    posterImage: 'https://i.imgur.com/OnP81WL.png',
    backdropImage: 'https://i.imgur.com/OnP81WL.png',
    previewImages: ['https://i.imgur.com/OnP81WL.png'],
    featured: true,
    externalLink: { url: 'https://www.instagram.com/p/DVBqCw7kdU2/?hl=en&img_index=1', label: 'View Post' },
    description: (
      <>
        A flagship cross-platform moment marking NBC and YouTube's first major Olympics partnership, anchored by Megan Thee Stallion. I cross-collaborated on concept with the brand team, directed styling, production, and crew, built the shot list and slotted it into the content calendar, reviewed contracts, made real-time edits alongside creative, and led native publishing and cross-platform amplification. Watch the long-form YouTube{' '}
        <a href="https://www.youtube.com/watch?v=zDhTLXSlbpI" target="_blank" rel="noopener noreferrer" style={linkStyle}>here</a>.
      </>
    ),
    details: [
      '19 short-form YouTube videos',
      '4 long-form YouTube videos',
      '15 in-feed Instagram posts (outside deliverables)',
      '6 TikToks (outside deliverables)',
      '10 posts on X',
      'Anchor IG post: 978K likes, 3,715 comments'
    ],
    gallery: [
      { src: 'https://i.imgur.com/OnP81WL.png', caption: 'Instagram rollout (978K likes, 3,715 comments)' }
    ]
  },
  {
    slug: 'chicas-divertidas',
    title: 'Chicas Divertidas Brand Transformation',
    genres: ['Brands', 'Entertainment'],
    tagline: 'Repositioning a tequila brand from a graphic-heavy ad account into a culturally relevant lifestyle brand.',
    posterImage: 'https://i.imgur.com/Bq5Wfn5.png',
    backdropImage: 'https://i.imgur.com/Bq5Wfn5.png',
    previewImages: ['https://i.imgur.com/Bq5Wfn5.png'],
    externalLink: { url: 'https://www.instagram.com/p/DVhRnijDsBy/', label: 'View Post' },
    description: (
      <>
        Repositioned Megan Thee Stallion's tequila brand Chicas Divertidas from a graphic-heavy ad account into a lifestyle, culturally relevant brand that lives where its audience already is. Built two distinct content pillars: talent-led moments that capitalize on Megan's cultural pull, and brand-owned storytelling that holds the account's identity in moments without talent. Examples of talent-led work:{' '}
        <a href="https://www.instagram.com/p/DVhRnijDsBy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post one</a>{' '}and{' '}
        <a href="https://www.instagram.com/p/DWUJZ1wEXb9/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post two</a>. Examples of brand-owned work:{' '}
        <a href="https://www.instagram.com/p/DXZ5gQ9Ey5s/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post one</a>{' '}and{' '}
        <a href="https://www.instagram.com/p/DWM9UKEEz4L/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post two</a>. The shift scaled the account from 68K to 88.8K followers in 3 months (+31%) while driving both awareness and measurable sales lift, turning the account into a community, not a billboard.
      </>
    ),
    gallery: [
      { src: 'https://i.imgur.com/Bq5Wfn5.png', caption: 'New brand direction: lifestyle and culture-first' }
    ]
  },
  {
    slug: 'megan-moulin-rouge',
    title: 'Megan Thee Stallion x Moulin Rouge Broadway',
    genres: ['Entertainment'],
    tagline: 'Proof that cultural instinct beats production value: 3.3M views, 630K likes.',
    posterImage: 'https://i.imgur.com/F5ptySG.jpeg',
    backdropImage: 'https://i.imgur.com/F5ptySG.jpeg',
    previewImages: ['https://i.imgur.com/F5ptySG.jpeg'],
    externalLink: { url: 'https://www.tiktok.com/@theestallion/video/7620875586902314253?lang=en', label: 'View Post' },
    description:
      "A trend-led social rollout for Megan's Moulin Rouge Broadway moment, built around tying a viral sound to her appearance. The lowest-production asset of the entire campaign delivered the highest reach and engagement, hitting 3.3M views and 630K likes. A reminder that cultural instinct often outperforms polish.",
    gallery: [
      { src: 'https://i.imgur.com/F5ptySG.jpeg', caption: 'TikTok rollout: 3.3M views, 630K likes' }
    ]
  },
  {
    slug: 'ordo-squishmallow',
    title: 'Ordo x Squishmallow',
    genres: ['Commerce', 'Brands'],
    tagline: 'A Squishmallows pop-up that helped a UK oral care brand crack the U.S. market.',
    posterImage: 'https://i.imgur.com/REuEgZB.png',
    backdropImage: 'https://i.imgur.com/vOPorM5.png',
    previewImages: [
      'https://i.imgur.com/REuEgZB.png',
      'https://i.imgur.com/vOPorM5.png',
      'https://i.imgur.com/vGuRjID.png',
      'https://i.imgur.com/uVCkfYf.jpeg',
      'https://i.imgur.com/NWJzck6.jpeg',
      'https://i.imgur.com/dFCM45Q.jpeg'
    ],
    externalLink: { url: 'https://www.inc.com/annabel-burba/how-a-collaboration-with-squishmallows-helped-this-brand-gain-serious-market-share-fast/91176614', label: 'Article Link' },
    description: (
      <>
        To introduce UK-based oral care brand Ordo to the U.S. market, I pitched and led the concept for a Squishmallows-branded NYC pop-up, merging fandom with family-friendly utility to spark cultural traction. The activation, paired with a partnership with America's ToothFairy, generated buzz, drove purpose-led engagement, and helped Ordo break into the U.S. market with heart and hype. The strategy delivered real category share: Ordo now makes up more than 45% of{' '}
        <a href="https://www.inc.com/jennifer-conrad/cvs-hopes-its-new-ai-will-be-just-what-doctor-ordered.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>CVS</a>'s children's oral care category despite entering the U.S. market just last fall.
      </>
    ),
    gallery: [
      { src: 'https://i.imgur.com/vOPorM5.png', caption: 'Influencer and press invite' },
      { src: 'https://i.imgur.com/vGuRjID.png', caption: "$1 off donated to America's Tooth Fairy" },
      { src: 'https://i.imgur.com/uVCkfYf.jpeg', caption: 'Created layout concept' },
      { src: 'https://i.imgur.com/NWJzck6.jpeg', caption: 'Created layout concept' },
      { src: 'https://i.imgur.com/dFCM45Q.jpeg', caption: 'Created layout concept' },
      { src: 'https://i.imgur.com/aHuJoj0.png', caption: 'Targeted outlets' }
    ]
  },
  {
    slug: 'victoria-secret-pink',
    title: 'Victoria Secret PINK',
    genres: ['Commerce', 'Brands'],
    tagline: "A pink takeover of NYC's Van Leeuwen for a Valentine's Day activation.",
    posterImage: 'https://i.imgur.com/OBnCNKi.png',
    backdropImage: 'https://i.imgur.com/X54vQyA.png',
    previewImages: ['https://i.imgur.com/OBnCNKi.png', 'https://i.imgur.com/X54vQyA.png'],
    externalLink: { url: 'https://www.victoriassecret.com/us/vs/vsinsider/events/youre-invited-pink-van-leeuwen', label: 'Article Link' },
    description:
      "I helped led the execution of a strategic Valentine's Day collaboration between PINK and Van Leeuwen, transforming the NYC scoop shop into a pink takeover. Designed to position PINK to their target audience consumers through cultural touchpoints they already love, the activation blended experiential marketing with retail theater—driving brand affinity, foot traffic, and social engagement at a key moment for seasonal retail.",
    gallery: [
      { src: 'https://i.imgur.com/X54vQyA.png', caption: 'PINK x Van Leeuwen takeover' }
    ]
  },
  {
    slug: 'rosalynn-carter-institute',
    title: 'Rosalynn Carter Institute for Caregivers',
    genres: ['B2B'],
    tagline: "Elevating the national profile of America's 105 million caregivers.",
    posterImage: 'https://i.imgur.com/gKXfK55.jpeg',
    backdropImage: 'https://i.imgur.com/gKXfK55.jpeg',
    previewImages: ['https://i.imgur.com/gKXfK55.jpeg'],
    description:
      "RCI champions the health and resilience of America's 105 million caregivers. I led strategic communications to elevate their national profile, drive policy engagement, and strengthen their stake in public conversations on caregiving.",
    details: [
      'Shifted the conversation around caregiving through targeted press efforts and partnerships...',
      'Redefined narratives with the launch of Profiles of Caregiving...',
      'Amplified voices through strategic podcast placements...',
      'Navigated a merger with The Carter Center...',
      'Boosted share of voice by 24%...',
      'Drove social engagement with 13.8% LinkedIn engagement rate...',
      'Supported by marquee partnerships with Duke, Bradley Cooper, and Pivotal...',
      'Secured placements for RCI at major events...'
    ]
  },
  {
    slug: 'nesst',
    title: 'NESsT',
    genres: ['B2B'],
    tagline: 'Positioning an impact investor for strategic growth and investor visibility.',
    posterImage: 'https://i.imgur.com/XjzT19B.jpeg',
    backdropImage: 'https://i.imgur.com/XjzT19B.jpeg',
    previewImages: ['https://i.imgur.com/XjzT19B.jpeg'],
    description:
      'NESsT is an impact investing organization that builds and finances mission-driven enterprises creating quality jobs for underrepresented communities while sustaining the planet. I helped position the organization for strategic growth and investor visibility through storytelling that balanced financial rigor with purpose.',
    details: [
      "Built foundational materials linking NESsT's work to real-world impact...",
      'Created steady drumbeat of interviews in top impact outlets...',
      'Planned storytelling-led press trip to Brazil for funders and press...',
      'Secured awards including FLII Ignite and ESG Investing recognition...'
    ]
  }
];

export const getProjectsByGenre = (genre: Genre): ProjectItem[] =>
  projects.filter((p) => p.genres.includes(genre));

export const getProjectBySlug = (slug: string): ProjectItem | undefined =>
  projects.find((p) => p.slug === slug);
