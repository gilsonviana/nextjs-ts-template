import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="TEST" />
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          {/* <meta property='og:image' content='/assets/images/logo@2x.png' />
          <meta property='og:title' content="Pawprint - Get your pet's medical records!" />
          <meta property='og:description' content='Official electronic medical records for your pet' />
          <meta property='og:url' content='https://www.getpawprint.com' />
          <meta property='og:site_name' content='Pawprint' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://www.getpawprint.com' />
          <meta name='twitter:title' content='Pawprint' />
          <meta name='twitter:description' content="Get the most up-to-date copy of your pet's vaccination records from your vet" />
          <meta name='twitter:image' content='/assets/images/logo-mark-brand' />
          <link rel='apple-touch-icon' sizes='76x76' href='/assets/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' /> */}
          <meta name="msapplication-TileColor" content="#6E0BD6" />
          <meta name="theme-color" content="#6E0BD6" />
          {/* <link rel="manifest" href="/assets/favicon/site.webmanifest" /> */}
          <link
            rel="mask-icon"
            href="/assets/favicon/safari-pinned-tab.svg"
            color="#6E0BD6"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
