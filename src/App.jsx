import React from 'react';
import ValentineApp from './ValentineApp';
import Story from './components/Story';

function App() {
  const path = window.location.pathname;
  
  if (path === '/valentine') {
    return <ValentineApp />;
  }
  
  // Default main page
  return <Story />;
}

export default App;
