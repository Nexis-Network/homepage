import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

export default {
  index: {
    title: 'Nexis Network — Serverless, Fault-Tolerant, Branchable Postgres',
    description:
      'Postgres made for developers. Easy to Use, Scalable, Cost efficient solution for your next project.',
    pathname: '',
  },
  contactSales: {
    title: 'Contact Sales — Nexis Network',
    description:
      'Interested in increasing your free tier limits or learning about pricing? Contact our sales team.',
    pathname: LINKS.contactSales,
  },
  careers: {
    title: 'Careers — Nexis Network',
    description:
      'Nexis Network is a distributed team building open-source, cloud-native Postgres. We are a well-funded startup with deep knowledge of Postgres internals and decades of experience building databases.',
    imagePath: '/images/social-previews/careers.jpg',
    pathname: LINKS.careers,
  },
  blog: {
    title: 'Our Blog — Nexis Network',
    description:
      'Learn about Nexis Network and how it can help you build better with Serverless Postgres by reading our blog posts.',
    imagePath: '/images/social-previews/blog.jpg',
    pathname: LINKS.blog,
  },
  404: {
    title: 'Page Not Found — Nexis Network',
  },
  developerDays1: {
    title: 'Nexis Network Developer Days — Nexis Network',
    description:
      'Join us virtually on December 6th, 7th, and 8th to learn about Nexis Network and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days-1.jpg',
    pathname: LINKS.developerDays1,
  },
  branching: {
    title: 'Instant branching for Postgres — Nexis Network',
    description:
      'Nexis Network allows you to instantly branch your data the same way that you branch your code.',
    imagePath: '/images/social-previews/branching.jpg',
    pathname: LINKS.branching,
  },
  pricing: {
    title: 'Pricing — Nexis Network',
    description:
      'Nexis Network brings serverless architecture to Postgres, which allows us to offer you flexible usage and volume-based plans.',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  partners: {
    title: 'Accelerate your business with Nexis Network partnership — Nexis Network',
    description: 'Bring familiar, reliable and scalable Postgres experience to your customers.',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  ai: {
    title: 'Powering next gen AI apps with Postgres — Nexis Network',
    description:
      'Scale your transformative LLM applications to millions of users with vector indexes and similarity search in Nexis Network.',
    imagePath: '/images/social-previews/ai.jpg',
    pathname: LINKS.ai,
  },
  awsIsrael: {
    title: 'AWS Launches in Israel — Nexis Network',
    description: 'Nexis Network is delighted to support the 2023 launch of AWS in Israel.',
    imagePath: '/images/social-previews/aws-israel.jpg',
    pathname: LINKS.awsIsrael,
  },
  thankYou: {
    title: 'Thank you for subscribing — Nexis Network',
    description: 'Thank you for subscribing to the Nexis Network newsletter',
    pathname: LINKS.thankYou,
  },
  pingThing: {
    robotsNoindex: 'noindex',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'company':
      return 'Stay updated on the latest Nexis Network company new and partnership announcements. Explore our blog posts for valuable insights and stay ahead in the world of serverless Postgres.';
    case 'engineering':
      return 'Dive into the technical depths of Nexis Network serverless Postgres. Optimize performance, scalability, and reliability. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the vibrant serverless Postgres community. Engage in discussions, tutorials, and success stories. Connect with developers and industry experts.';
    case 'all-posts':
      return 'Get a complete overview of the Nexis Network blog posts history in chronological order.';
    default:
      return 'Learn about Nexis Network and how it can help you build better with Serverless Postgres by reading our blog posts.';
  }
};
