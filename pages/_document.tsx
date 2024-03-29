import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang={'en'}>
    <Head>
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        }
        rel={'stylesheet'}
      />
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        }
        rel={'stylesheet'}
      />
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
        }
        rel={'stylesheet'}
      />
      <link rel={'stylesheet'} href={'assets/css/plugins.css'} />
      <link rel={'stylesheet'} href={'assets/css/custom.css'} />
      <link rel={'stylesheet'} href={'assets/css/main.css'} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
