import Examples from 'components/pages/ai/examples';
import Hero from 'components/pages/ai/hero';
import Integration from 'components/pages/ai/integration';
import Logos from 'components/pages/ai/logos';
import Stats from 'components/pages/ai/stats';
// import Testimonials from 'components/pages/ai/testimonials';
import CTAWithElephant from 'components/shared/cta-with-elephant';
import Layout from 'components/shared/layout';
import SplitViewGrid from 'components/shared/split-view-grid';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import compatibilityIcon from 'icons/ai/compatibility.svg';
import scalabilityIcon from 'icons/ai/scalability.svg';
import searchIcon from 'icons/ai/search.svg';
import updateIcon from 'icons/ai/update.svg';
import styles from 'styles/Loader.module.scss';
import getMetadata from 'utils/get-metadata';
import 'styles/globals.css';

export const metadata = getMetadata(SEO_DATA.ai);



const items = [
  {
    icon: updateIcon,
    title: 'Reliable & actively maintained',
    description: 'The pgvector extension is open-source and actively maintained',
  },
  {
    icon: scalabilityIcon,
    title: 'Amazing scalability',
    description: 'Grow your vector stores without impacting search performance',
  },
  {
    icon: searchIcon,
    title: 'Blazingly fast search',
    description: 'Use HNSW indexes for fast and scalable vector similarity search in Postgres',
  },
  {
    icon: compatibilityIcon,
    title: 'Highly compatible',
    description: 'Use Exzo Network with pgvector in your Postgres and LangChain projects',
  },
];

const logos = [
  'bunnyshell',
  'hasura',
  'replit',
  'vercel',
  'illa',
  'octolis',
  'cloudflare',
  'airplane',
  'wundergraph',
  'fabric-io',
  'snaplet',
  'fl0',
  'dynaboard',
];


const AIPage = () => (
  <Layout
    className="bg-black-new text-white"
    headerTheme="black-new"
    footerTheme="black-new"
    footerWithTopBorder
  >
  <div className={styles.body}>
    <link
      rel="preload"
      href="/animations/pages/ai/scene.splinecode"
      as="fetch"
      crossOrigin="anonymous"
    />
    <Hero />
    <Stats className="mb-[136px] xl:mb-[104px] lg:mb-20 md:mb-16" />
    <Logos logos={logos} className="mt-[136px] xl:mt-[104px] lg:mt-20 md:mt-16" 
    withGreenFade />
    <Integration
    />
    <SplitViewGrid
      className="mt-52 xl:mt-36 lg:mt-[124px] md:mt-[88px]"
      label="Benefits"
      title="Vector search with Exzo Network"
      description="Use the power of HNSW indexes to unlock new levels of efficiency in high-dimensional vector similarity search in Postgres"
      items={items}
      isGradientLabel
    />
    <Examples />
    {/* removed testimonials section for now as part of removing the pg_embedding references */}
    {/* <Testimonials /> */}
    <CTAWithElephant
      className="mt-[180px] 2xl:mt-40 xl:mt-[125px] lg:mt-16"
      buttonClassName="px-14 xl:px-10 lg:px-9 sm:px-14"
      title="Build your Web3 app now with Exzo Network"
      description="Exzo Network offers a secure, highly-scalable, and low-cost infrastructure for all Web3 applications."
      buttonText="Contact Sales"
      buttonUrl={LINKS.contactSales}
      linkText="Learn more on GitHub"
      linkUrl="https://github.com/Exzo-Network"
      linkTarget="_blank"
    />
    </div>
  </Layout>
);

export default AIPage;
