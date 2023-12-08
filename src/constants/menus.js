import CalendarIcon from 'icons/calendar.inline.svg';
import ConsoleIcon from 'icons/console.inline.svg';
import TransactionsIcon from 'icons/transactions.inline.svg';

import LINKS from './links';

export default {
  header: [
      {
       text: 'Ecosystem',
       items: [
          {
            icon: TransactionsIcon,
            text: 'nexis Web Wallet',
            description: 'Store, swap, and delegate to earn rewards.',
            to: 'https://wallet.nexis.network',
          },
          {
            icon: TransactionsIcon,
            text: 'nexis Dex',
            to: 'https://dex.nexis.network',
            description: 'Swap tokens, earn rewards, provide liquidity.',
          },
          {
            icon: TransactionsIcon,
            text: 'Cross-Chain Bridge',
            to: 'https://bridge.nexis.network',
            description: 'Bridge to and from other blockchains.',
          },
          {
            icon: TransactionsIcon,
            text: 'Governance Portal',
            to: 'https://governance.nexis.technology',
            description: 'Contribute to the growth of nexis Network.',
          },
        ],
      },
      {
        text: 'Network',
        items: [
          {
            icon: TransactionsIcon,
            text: 'EVM Block Explorer',
            to: 'https://evm.nexscan.io',
            description: 'Track & explore EVM TXNs on nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Native Block Explorer',
            to: 'https://nexscan.io',
            description: 'Track & explore native TXNs on nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Testnet Block Explorer',
            to: 'https://evm-testnet.nexisscan.io',
            description: 'Test and explore nexis Networks blockchain data in real time.',
          },
        ],
      },
      {
        text: 'Developers',
        items: [
          {
            icon: TransactionsIcon,
            text: 'Developer Documentation',
            to: 'https://docs.nexis.network',
            description: 'Learn how to integrate and build on nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Node Validator Tutorial',
            to: 'https://validator.nexis.network/',
            description: 'Deploy your own node validator.',
          },
          {
            icon: TransactionsIcon,
            text: 'nexis Program Library',
            to: 'https://github.com/Nexis-Network/nexis-program-library',
            description: 'Interact with nodes and build on nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Audit Reports & KYC',
            to: 'https://github.com/Nexis-Network/Smart-Contract-Audit-Reports',
            description: 'View audit reports and KYC docs.',
          },
          {
            icon: TransactionsIcon,
            text: 'Hackathons',
            to: 'https://dorahacks.io/org/Nexis-Network/hackathon',
            description: 'Contribute to our ecosystem and earn rewards.',
          },
          {
            icon: TransactionsIcon,
            text: 'Bug Bounties',
            to: 'https://hackenproof.com/programs?title=nexis%20Network',
            description: 'Earn rewards for finding vulnerbilities.',
          },
          {
            icon: TransactionsIcon,
            text: 'GitHub',
            to: 'https://github.com/Nexis-Network/',
            description: 'Core foundation of nexis Network.',
          },
        ],
    },
      {
        text: 'Community',
        items: [
          {
            text: 'CoinMarketCap',
            to: 'https://coinmarketcap.com/currencies/nexis-network/',
         },
          {
            text: 'Twitter',
            to: LINKS.twitter,
          },
          {
            text: 'Telegram',
            to: 'https://t.me/nexis_Network',
         },
          {
             text: 'Discord',
             to: LINKS.discord,
          },
          {
            text: 'GitHub',
            to: 'https://github.com/orgs/nexis-Network/',
          },
          {
            text: 'YouTube',
            to: LINKS.youtube,
          },
        ],
    },
    {
      text: 'Blog',
      to: 'https://Nexis-Network.medium.com',
    },
    // {
    //   text: 'AI',
    //   to: LINKS.ai,
    // },
    // {
    //   text: 'Pricing',
    //   to: LINKS.pricing,
    // },
  ],
  footer: [
    {
      text: 'Company',
      links: [
        {
          text: 'nexis Web Wallet',
          to: 'https://wallet.nexis.network',
        },
        {
          text: 'nexis Wallet Extension',
          to: 'https://chrome.google.com/webstore/detail/nexis-wallet/jiieejiponjbbnldnklcbamkembhhpka',
        },
        {
          text: 'Cross-chain Bridge',
          to: 'https://bridge.nexis.network',
        },
        {
          text: 'Governance',
          to: 'https://governance.nexis.network',
        },
        {
          text: 'nexis Dex',
          to: 'https://bridge.nexis.network',
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
          text: 'Developer Docs',
          to: 'https://docs.nexis.network',
        },
        {
          text: 'Block Explorer',
          to: 'https://nexisscan.io',
        },
        {
          text: 'Native Explorer',
          to: 'https://nexisscan.io',
        },
        {
          text: 'Tutorials',
          to: 'https://Nexis-Network.medium.com/',
        },
        {
          text: 'Developer Chat',
          to: 'https://t.me/nexis_network_developers_official',
        },
        {
          text: 'Testnet Faucet',
          to: 'https://evm-faucet.nexis.network/',
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Twitter',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
           text: 'Discord',
           to: LINKS.discord,
           icon: 'telegram-icon',
        },
        {
          text: 'GitHub',
          to: 'https://github.com/orgs/nexis-Network/',
          icon: 'github-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
  ],
  mobile: [
      {
        text: 'nexis Web Wallet',
        to: 'https://wallet.nexis.network',
      },
      {
        text: 'nexis Wallet Extension',
        to: 'https://chrome.google.com/webstore/detail/nexis-wallet/jiieejiponjbbnldnklcbamkembhhpka',
      },
      {
        text: 'Cross-chain Bridge',
        to: 'https://bridge.nexis.network',
      },
      {
        text: 'Governance',
        to: 'https://governance.nexis.network',
      },
      {
        text: 'nexis Dex',
        to: 'https://bridge.nexis.network',
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
