import React, { Component, PropTypes } from 'react';
import { Provider } from 'mobx-react';
// import { initBaseStore, initAuthStore } from '../stores';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'

//Need this for material ui click events
try {
	injectTapEventPlugin()
}
catch(e) {
	//Don't do anything
}


export default function initializePage(ComposedComponent) {
    return class PageComponent extends Component {
        static async getInitialProps(ctx) {
            const { req } = ctx;
            const isServer = !!req;
            const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            // const baseStore = initBaseStore(isServer);
            // const authStore = initAuthStore(isServer);

            let pageProps = {};
            if (ComposedComponent.getInitialProps) {
              pageProps = await ComposedComponent.getInitialProps(ctx);
            }

            return {
              ...pageProps,
              // initialState: store.getState(),
              isServer,
              userAgent,
            };
        }

        constructor(props) {
            super(props);
            // this.baseStore = initBaseStore(props.isServer, props.helloMessage);
        }

        render() {
            return (
                <Provider>
                  <MuiThemeProvider muiTheme={getMuiTheme({userAgent: this.props.userAgent})}>
                        <ComposedComponent {...this.props}
                        />
                  </MuiThemeProvider>
                </Provider>
            )
        }
    }
}
