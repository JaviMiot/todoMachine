import React from 'react';

import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';

import './App.scss';

function App() {
  return (
    <TodoProvider>
      <div className='App'>
        <AppUi />
      </div>
    </TodoProvider>
  );
}

export default App;
