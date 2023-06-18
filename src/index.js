import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './constants/theme';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <BrowserRouter basename="goit-react-hw-08-phonebook"> */}
          <BrowserRouter>
            <GlobalStyle />
            <App title="Phonebook" />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
