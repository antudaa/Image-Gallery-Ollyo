import React from 'react';
import './index.css';
import MainLayout from './Layouts/MainLayout.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

function App() {

  return (
    // Wrapping the app by store .
    <Provider store={store}>
      <div className='min-h-screen'>
        <MainLayout />
      </div>
    </Provider>
  )
}

export default App
