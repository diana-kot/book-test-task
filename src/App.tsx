import React from 'react';

import MainLayout from './layouts/MainLayout/MainLayout';
import Header from 'components/Header/Header';

import './App.css';
import './styles/global.scss';

import RouterConfig from './router/RouterConfig';

function App() {
    return (
        <div className="App">
            <MainLayout>
                <>
                    <Header />
                    <RouterConfig />
                </>
            </MainLayout>
        </div>
    );
}

export default App;
