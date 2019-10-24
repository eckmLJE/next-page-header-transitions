import App from 'next/app'
import { withRouter } from 'next/router'

import Layout from '../components/layout'
import Header from '../components/page-header'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const path = router.pathname
    const headerType =
      path === '/' ? 1 : path === '/about' ? 2 : path === '/contact' ? 3 : 1
    return (
      <>
        <Layout>
          <Header headerType={headerType} />
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withRouter(MyApp)
