import { AppProps } from "next/app"

import Navbar from '@modules/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
