import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { CButton } from '@coreui/react'

export const Text = () => <CButton color={'primary'}>Primary</CButton>;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <Text />
          Learn React
            </header>
        </div >
    );
}

export default App;
