import React, { useContext, useState } from 'react';
import { ThemeContext, ThemeProvider, themes } from './theme-context'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import './styles/styles.css'

export default function App() {
  let theme = useContext(ThemeContext)
  const [activeTheme, setTheme] = useState(themes.dark)

  const toggleTheme = () => {
    setTheme(activeTheme => (activeTheme === themes.dark ? themes.light : themes.dark))
  }

  return (
    <ThemeProvider value={ theme }>
      <div className={`container theme--${ activeTheme === themes.dark ? 'dark' : 'light' }`}>
          <h2>Current theme is: { activeTheme === themes.dark ? 'dark' : 'light' }</h2>
          
          <ThemeButton onClick={ toggleTheme } className='btn' />

          <Card title={ 'This is a card title' } />
      </div>
    </ThemeProvider>
  );
}
