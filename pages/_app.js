import Head from "next/head";

import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {
  return (
    <div className="page-container">
      <Head>
        <title>Scrumind</title>
      </Head>
      <Header />
      <main className="page-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
