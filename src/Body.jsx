import React from 'react';
import LanguageContext from './LanguageContext';
import translations from './translations.json';

const Body = () => {
  const language = React.useContext(LanguageContext);
  const strings = translations[language];

  return (
    <p className="body">{strings['body']}</p>
  );
}

export default Body;