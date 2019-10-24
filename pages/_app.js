import App from 'next/app'
import { withRouter } from 'next/router'

import Layout from '../components/layout'
import Header from '../components/page-header'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const path = router.pathname
    const headerData =
      path === '/'
        ? { type: 1, title: 'Home' }
        : path === '/about'
        ? { type: 2, title: 'About' }
        : path === '/contact'
        ? { type: 3, title: 'Contact' }
        : { type: 1, title: 'Home' }
    return (
      <>
        <Layout>
          <Header headerData={headerData} />
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withRouter(MyApp)
