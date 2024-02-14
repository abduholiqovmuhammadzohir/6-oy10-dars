import { useEffect, useState } from 'react'
import './App.css'
import picture from "./Img/img.png"

function App() {
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

  return (
    <>
      {
        !loader ? (
          <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="left">
              <button className="glow-on-hover" onClick={toggleMode}>Dark/Light</button>
              <h1>
                Hi 👋<br />
                I’m Charles, <br />
                Front-end Developer <br />
              </h1>
              <p>I design and develop experiences that make people’s lives <br /> simpler through Web and Mobile apps.I work with FIgma <br /> , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
              <div className="btn">
                <button className='he'>HIRE ME</button>
                <button className='see'>SEE MY PROJECTS</button>
              </div>
            </div>
            <div className='right'>
              <nav className={darkMode ? 'dark-mode' : ''}> {}
                <ul>
                  <li>About Me</li>
                  <li>Skills</li>
                  <li>Project</li>
                  <li>Contact</li>
                  <select>
                    <option value="uz">uz</option>
                    <option value="en">en</option>
                    <option value="ru">ru</option>
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
