import Head from 'next/head';

type SEOProps = {
  title: string | undefined;
};

const SEO = ({ title }: SEOProps) => {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page
  const description = process.env.siteDescription;
  const keywords = process.env.siteKeywords;
  const siteURL = process.env.siteUrl;
  const { twitterHandle } = process.env;
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;

  return (
    <Head>
      <meta charSet={'utf-8'} />
      <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
      <meta name={'description'} content={description} />
      <meta name={'keywords'} content={keywords} />
      {/* Twitter */}
      <meta
        name={'twitter:card'}
        content={'summary_large_image'}
        key={'twcard'}
      />
      <meta name={'twitter:creator'} content={twitterHandle} key={'twhandle'} />

      {/* Open Graph */}
      <meta property={'og:url'} content={siteURL} key={'ogurl'} />
      <meta property={'og:image'} content={imagePreview} key={'ogimage'} />
      <meta property={'og:site_name'} content={siteURL} key={'ogsitename'} />
      <meta property={'og:title'} content={title} key={'ogtitle'} />
      <meta property={'og:description'} content={description} key={'ogdesc'} />

      <title>{title}</title>

      <link
        rel={'apple-touch-icon'}
        sizes={'57x57'}
        href={'/assets/img/site/apple-icon-57x57.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'60x60'}
        href={'/assets/img/site/apple-icon-60x60.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'72x72'}
        href={'/assets/img/site/apple-icon-72x72.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'76x76'}
        href={'/assets/img/site/apple-icon-76x76.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'114x114'}
        href={'/assets/img/site/apple-icon-114x114.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'120x120'}
        href={'/assets/img/site/apple-icon-120x120.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'144x144'}
        href={'/assets/img/site/apple-icon-144x144.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'152x152'}
        href={'/assets/img/site/apple-icon-152x152.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'180x180'}
        href={'/assets/img/site/apple-icon-180x180.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'192x192'}
        href={'/assets/img/site/android-icon-192x192.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'32x32'}
        href={'/assets/img/site/favicon-32x32.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'96x96'}
        href={'/assets/img/site/favicon-96x96.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'16x16'}
        href={'/assets/img/site/favicon-16x16.png'}
      />
      <link rel={'manifest'} href={'/assets/img/site/manifest.json'} />
      <meta name={'msapplication-TileColor'} content={'#ffffff'} />
      <meta name={'msapplication-TileImage'} content={'/ms-icon-144x144.png'} />
      <meta name={'theme-color'} content={'#ffffff'} />
    </Head>
  );
};

export default SEO;
