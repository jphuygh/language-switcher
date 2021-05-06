import React, { useState } from 'react';
import LanguageContext from './LanguageContext';
import Heading from './Heading';
import Body from './Body';
import Footer from './Footer';
import Selector from './Selector';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <Selector setLanguage={setLanguage} />
        <Heading />
        <Body />
        <Footer />
      </div>
    </LanguageContext.Provider>

  );
}

export default App;
