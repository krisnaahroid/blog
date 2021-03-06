import React from 'react'
import App from 'next/app';
import Router from 'next/router';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import configureStore from '../store';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';

import SEO from '../lib/next-seo.config'

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class MyApp extends App{
 componentDidMount(){
    const handleRouteChange = url => {
      console.log('App is changing to: ', url)
    }
  
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
 }

  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
        <Provider store={store}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Provider>
    );
}
}


export default withRedux(configureStore, { debug: true })(MyApp)
