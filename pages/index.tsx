import dynamic from 'next/dynamic';
import Layout from '@/src/layout/Layout';
import About from 'components/About';
import Contact from 'components/Contact';
import Home from 'components/Home';
import Service from 'components/Service';

const Portfolio = dynamic(
  () => import('components/Portfolio').then((mod) => mod.Portfolio),
  {
    ssr: false,
  }
);

const Index = () => (
  <Layout>
    {/* HOME */}
    <Home />
    {/* /HOME */}
    {/* ABOUT */}
    <About />
    {/* /ABOUT */}
    {/* SERVICE */}
    <Service />
    {/* /SERVICE */}
    <div className={'tokyo_tm_portfolio_titles'} />
    {/* PORTFOLIO */}
    <Portfolio />
    {/* /PORTFOLIO */}
    {/* CONTACT */}
    <Contact />
    {/* /CONTACT */}
  </Layout>
);

export default Index;
