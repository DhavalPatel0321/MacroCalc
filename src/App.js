import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField.react';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          Use this calculator to figure out what macros you should use!
        </div>
      </header>
        <InputField label='weight' />
    </div>
  );
}

export default App;
