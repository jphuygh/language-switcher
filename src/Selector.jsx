import React from 'react';
import LanguageContext from './LanguageContext';

function Selector(props) {
  const language = React.useContext(LanguageContext);

  const languages = {
    'en': 'English',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
  };

  const onChangeHandler = (event) => {
    const { setLanguage } = props;
    setLanguage(event.target.value);
  }

  return (
    <select onChange={onChangeHandler} defaultValue={language}>
      {Object.keys(languages).map((key) => (
        <option key={key} value={key}>{languages[key]}</option>
      ))}
    </select>
  )
}

export default Selector;