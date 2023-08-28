import React from 'react';
import './App.css';

type AppProps = {
    children: React.ReactNode
}

function App({children}: AppProps) {
    return <div className="app">
        {children}
    </div>;
}

export default App;
