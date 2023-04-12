import React from 'react'
import { useSelector } from 'react-redux'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AppNavbar from './modules/AppNavbar/AppNavbar'
import Header from './modules/Header'
import { RootState } from './store'
import AboutMe from './modules/AboutMe'
import Education from './modules/Education'
import Skills from './modules/Skills'
import whiteCube from '@/assets/white-cube.png'
import whiteCube2 from '@/assets/white-cube-2.png'
import whiteCircle from '@/assets/white-circle.png'
import blackCube from '@/assets/black-cube.png'
import blackCube2 from '@/assets/black-cube-2.png'
import blackCircle from '@/assets/black-circle.png'


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
          <div className='h-1'></div>
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 bg-white dark:bg-dm-bg-300'>
          <Parallax speed={-25} scale={[0.75, 1]}>
            <img className='mt-[400px] ml-20 w-44 opacity-6' src={theme === 'dark'? blackCircle : whiteCircle} alt="black circle" />
          </Parallax>
          <Parallax className='ml-[95%] w-fit' speed={-40} scale={[1.1, 0.7]} translateX={['-200px', '0px']}>
            <img className='mt-[800px] w-28 opacity-6 blur-[2px]' src={theme === 'dark'? blackCube : whiteCube} alt="black cube" />
          </Parallax>
          <Parallax className='ml-32 w-fit' speed={-25} rotate={[-270, 0]}>
            <img className='mt-[1200px] w-44 opacity-6' src={theme === 'dark'? blackCube2 : whiteCube2} alt="black cube" />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
