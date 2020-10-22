/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  // or const [t, i18n] = useTranslation();
  const { t, i18n } = useTranslation();

  function handleLang(lang) {

    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <button className="bg-blue mr-10" onClick={() => handleLang('ar')}>
        Arabic{' '}
      </button>
      <button
        className="bg-blue-400 mr-10 from-red-800"
        onClick={() => handleLang('en')}
      >
        English{' '}
      </button>
      <h1 className="text-3xl text-red-300">{t('Hello.1')}</h1>
      <p>text</p>
    </div>
  );
}

export default App;
