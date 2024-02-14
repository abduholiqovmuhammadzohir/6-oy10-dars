import { useEffect, useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import picture from "./Img/img.png"

function App() {

  const[lang, setLang] = useState('en')

  const { t, i18n } = useTranslation();

  const [loader, setLoader] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode
    })
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    let lang = localStorage.getItem('lang')

    if (lang) {
      i18n.changeLanguage(lang)
      setLang(lang)
    }

  }, [])

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }

  return (
    <>
      {
        !loader ? (
          <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="left">
              <button className="glow-on-hover" onClick={toggleMode}>{t("dark")}</button>
              <h1>
                {t('me')}
              </h1>
              <p>{t('text')}</p>
              <div className="btn">
                <button className='he'>{t("mee")}</button>
                <button className={`see ${darkMode ? 'dark-mode' : ''}`}>{t('see')}</button>
              </div>
            </div>
            <div className='right'>
              <nav className={darkMode ? 'dark-mode' : ''}> {}
                <ul>
                  <li>{t('about')}</li>
                  <li>{t('skill')}</li>
                  <li>{t('project')}</li>
                  <li>{t('contact')}</li>
                  <select onChange={handleChangeLang} value={lang}>
                    <option value="en">en</option>
                    <option value="ru">ru</option>
                    <option value="uz">uz</option>
                  </select>
                </ul>
              </nav>
              <div className="picture">
                <img src={picture} alt="Bu yerda rasm bo'lish kerak edi" width={550} />
              </div>
            </div>
          </div>
        ) : (
          <div className='handle'>
            <div className='cup'>
            </div>
          </div>
        )
      }

    </>
  )
}

export default App
