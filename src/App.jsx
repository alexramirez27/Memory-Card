import { useState } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  function toggleTheme() {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  return (
    <>
      <Header 
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
      <Main />
      <Footer />
    </>
  )
}

export default App
