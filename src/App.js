import React, { useState } from 'react';
import './App.css';
import translations from './translations';

function Selector(props) {
  const { lang } = props;

  const languages = {
    'en': 'English',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
  };

  const onChangeHandler = (event) => {
    const { setLang } = props;
    setLang(event.target.value);
  }

  return (
    <select onChange={onChangeHandler} defaultValue={lang}>
      {Object.keys(languages).map((key) => (
        <option key={key} value={key}>{languages[key]}</option>
      ))}
    </select>
  )
}

const Heading = (props) => {
  const { lang } = props;
  const strings = translations[lang];
  return (
    <h1>{strings['heading']}</h1>
  );
}

const Body = (props) => {
  const { lang } = props;
  const strings = translations[lang];
  return (
    <p className="body">{strings['body']}</p>
  );
}

const Footer = (props) => {
  const { lang } = props;
  const strings = translations[lang];
  return (
    <p className="footer">{strings['footer']}</p>
  );
}

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="App">
      <Selector setLang={setLang} />
      <Heading lang={lang} />
      <Body lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
