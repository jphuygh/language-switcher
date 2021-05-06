import React from 'react';
import LanguageContext from './LanguageContext';
import translations from './translations.json';

const Footer = () => {
  const language = React.useContext(LanguageContext);
  const strings = translations[language];

  return (
    <p className="footer">{strings['footer']}</p>
  );
}

export default Footer;
