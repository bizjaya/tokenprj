import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

// import { MoralisProvider } from 'react-moralis';
import { MORALIS } from '../../app/src/jsx/constants';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, 'any');
  library.pollingInterval = 15000;
  return library;
};

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <MoralisProvider appId={MORALIS.AppId} serverUrl={MORALIS.ServerURL}> */}
      <Provider store={store}>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </Provider>
    </Web3ReactProvider>

    {/* </MoralisProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
