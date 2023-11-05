import CalendarIcon from 'icons/calendar.inline.svg';
import ConsoleIcon from 'icons/console.inline.svg';
import aboutUsIcon from 'icons/header-about-us.svg';
import careersIcon from 'icons/header-careers.svg';
import partnersIcon from 'icons/header-partners.svg';
import TransactionsIcon from 'icons/transactions.inline.svg';

import LINKS from './links';

export default {
  header: [
      {
       text: 'Ecosystem',
       items: [
          {
            icon: TransactionsIcon,
            text: 'Exzo Web Wallet',
            description: 'Store, swap, and delegate to earn rewards.',
            to: 'https://wallet.exzo.network',
          },
          {
            icon: TransactionsIcon,
            text: 'Exzo Dex',
            to: 'https://dex.exzo.network',
            description: 'Swap tokens, earn rewards, provide liquidity.',
          },
          {
            icon: TransactionsIcon,
            text: 'Cross-Chain Bridge',
            to: 'https://bridge.exzo.network',
            description: 'Bridge to and from other blockchains.',
          },
          {
            icon: TransactionsIcon,
            text: 'Governance Portal',
            to: 'https://governance.exzo.technology',
            description: 'Contribute to the growth of Exzo Network.',
          },
        ],
      },
      {
        text: 'Network',
        items: [
          {
            icon: TransactionsIcon,
            text: 'EVM Block Explorer',
            to: 'https://evm.exzoscan.io',
            description: 'Track & explore EVM TXNs on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Native Block Explorer',
            to: 'https://exzoscan.io',
            description: 'Track & explore native TXNs on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Testnet Block Explorer',
            to: 'https://evm-testnet.exzoscan.io',
            description: 'Test and explore Exzo Networks blockchain data in real time.',
          },
        ],
      },
      {
        text: 'Developers',
        items: [
          {
            icon: TransactionsIcon,
            text: 'Developer Documentation',
            to: 'https://docs.exzo.network',
            description: 'Learn how to integrate and build on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Node Validator Tutorial',
            to: 'https://validator.exzo.network/',
            description: 'Deploy your own node validator.',
          },
          {
            icon: TransactionsIcon,
            text: 'Exzo Program Library',
            to: 'https://github.com/ExzoNetwork/exzo-program-library',
            description: 'Interact with nodes and build on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Audit Reports & KYC',
            to: 'https://github.com/ExzoNetwork/Smart-Contract-Audit-Reports',
            description: 'View audit reports and KYC docs.',
          },
          {
            icon: TransactionsIcon,
            text: 'Hackathons',
            to: 'https://dorahacks.io/org/exzonetwork/hackathon',
            description: 'Contribute to our ecosystem and earn rewards.',
          },
          {
            icon: TransactionsIcon,
            text: 'Bug Bounties',
            to: 'https://hackenproof.com/programs?title=Exzo%20Network',
            description: 'Earn rewards for finding vulnerbilities.',
          },
          {
            icon: TransactionsIcon,
            text: 'GitHub',
            to: 'https://github.com/ExzoNetwork/',
            description: 'Core foundation of Exzo Network.',
          },
        ],
    },
    {
      text: 'Blog',
      to: LINKS.blog,
    },
    {
      text: 'AI',
      to: LINKS.ai,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
  ],
  footer: [
    {
      text: 'Company',
      links: [
        {
          text: 'About us',
          to: LINKS.aboutUs,
        },
        {
          text: 'Careers',
          to: LINKS.careers,
        },
        {
          text: 'Partners',
          to: LINKS.partners,
        },
        {
          text: 'Trust',
          to: LINKS.trust,
        },
        {
          text: 'Pricing',
          to: LINKS.pricing,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },

        // {
        //   text: 'Release notes',
        //   to: LINKS.releaseNotes,
        // },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'AI',
          to: LINKS.ai,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Release notes',
          to: LINKS.releaseNotes,
        },
        {
          text: 'Support',
          to: LINKS.support,
        },
        {
          text: 'Security',
          to: LINKS.security,
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'X',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        // {
        //   text: 'Discord',
        //   to: LINKS.discord,
        // },
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'Discourse',
          to: LINKS.discourse,
          icon: 'discourse-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
    {
      text: 'Legal',
      links: [
        {
          text: 'Privacy Policy',
          to: LINKS.privacy,
        },
        {
          text: 'Terms of Service',
          to: LINKS.terms,
        },
        {
          text: 'DPA',
          to: LINKS.dpa,
        },
        {
          text: 'Subprocessors List',
          to: LINKS.subprocessors,
        },
        {
          text: 'Privacy Guide',
          to: LINKS.privacyGuide,
        },
        {
          text: 'Cookie Policy',
          to: LINKS.cookiePolicy,
        },
      ],
    },
  ],
  mobile: [
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Branching',
      to: LINKS.branching,
    },
    {
      text: 'About us',
      to: LINKS.aboutUs,
    },
    {
      text: 'Careers',
      to: LINKS.careers,
    },
    {
      text: 'Blog',
      to: LINKS.blog,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Partners',
      to: LINKS.partners,
    },
    {
      text: 'AI',
      to: LINKS.ai,
    },
    // {
    //   iconName: 'discord',
    //   text: 'Discord',
    //   description: 'Join our community',
    //   to: LINKS.discord,
    // },
    {
      text: 'GitHub',
      to: LINKS.github,
    },
  ],
  docSidebar: [
    {
      icon: TransactionsIcon,
      title: 'API Reference',
      slug: LINKS.apiReference,
    },
    {
      icon: ConsoleIcon,
      title: 'CLI Reference',
      slug: LINKS.cliReference,
    },
    {
      icon: CalendarIcon,
      title: 'Release notes',
      slug: LINKS.releaseNotes,
    },
  ],
};
