import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from './ToDoApp';

import './globals.css';

import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
