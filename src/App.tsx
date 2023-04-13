import React from 'react'
import { useSelector } from 'react-redux'
import { ParallaxProvider } from 'react-scroll-parallax';
import AppNavbar from './modules/AppNavbar/AppNavbar'
import Header from './modules/Header'
import { RootState } from './store'
import AboutMe from './modules/AboutMe'
import Education from './modules/Education'
import Skills from './modules/Skills'
import ParallaxBg from './modules/ParallaxBg';
import MyProjects from './modules/MyProjects';


function App() {
  const theme = useSelector<RootState>((state) => state.theme.theme)

  return (
    <ParallaxProvider>
      <div id='app' className={`font-inter ${theme} relative`}>
        <AppNavbar />
        <div className='w-10/12 mx-auto'>
          <Header />
          <AboutMe />
          <Education />
          <Skills />
          <MyProjects />
          <div className='h-1'></div>    {/* _______________________________________________ */}
        </div>
        <ParallaxBg />
      </div>
    </ParallaxProvider>
  )
}

export default App
