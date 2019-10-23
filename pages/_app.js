import App from "next/app";

import Layout from "../components/layout";
import Header from "../components/page-header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
