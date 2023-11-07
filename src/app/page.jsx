import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';
import AIPage from './ai/page';

export const metadata = getMetadata(SEO_DATA.index);

const Home = () => (
  <Layout headerTheme="black" isSignIn footerWithTopBorder withOverflowHidden>
    <AIPage/>
  </Layout>
);

export default Home;

export const revalidate = 60;
