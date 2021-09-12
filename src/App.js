import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
    return (
        <div id="container">
            <Provider store={store}>
                <Routes />
                <GlobalStyle />
            </Provider>
        </div>
    );
}

export default App;
