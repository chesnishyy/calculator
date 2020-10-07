import React from 'react';
import { Provider } from 'react-redux';
import Calculator from '../components/Calculator';
import { store } from '../store';
import theme from './App.module.css';
import '../styles/colors.css';

function App() {
  return (
    <div className={theme.container}>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </div>
  );
}

export default App;