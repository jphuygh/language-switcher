import React from 'react';
import LanguageContext from './LanguageContext';
import translations from './translations.json';

const Heading = () => {
  const language = React.useContext(LanguageContext);
  const strings = translations[language];

  return (
    <h1>{strings['heading']}</h1>
  );
}

export default Heading;