import Error from 'next/error'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'

import Navbar from '@modules/Navbar'

NProgress.configure({ trickle: true, trickleSpeed: 200 })

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps && pageProps.error) {
    return <Error statusCode={404} />
  }
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
