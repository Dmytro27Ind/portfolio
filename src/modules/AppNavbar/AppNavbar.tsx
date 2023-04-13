import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '@/components/Navbar'
import lmLogo from '@/assets/lm-logo.png'
import dmLogo from '@/assets/dm-logo.png'
import { RootState, setDark, setLight } from '@/store'
import ThemeToggle from '@/components/ThemeToggle'
import Link from '@/UI/Link'

const AppNavbar = () => {
  const theme = useSelector<RootState>((state) => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <div className='fixed right-0 left-0 z-10 bg-white dark:bg-dm-bg-300 bg-opacity-50 dark:bg-opacity-70 backdrop-blur-lg'>
      <Navbar
        className='2xl:w-10/12'
        leftElement={<img className='w-10 h-10' src={theme === 'dark'? dmLogo : lmLogo} alt="portfolio logo"/>}
        rightElement={
          <ThemeToggle
            className='h-10'
            onDarkClick={() => dispatch(setDark())}
            onLightClick={() => dispatch(setLight())}
            size='small'
            hideText
          />
        }
      >
        <Link href='#about-me'>About Me</Link>
        <Link href='#education'>Education</Link>
        <Link href='#skills'>Skills</Link>
        <Link href='#projects'>Projects</Link>
      </Navbar>
    </div>
  )
}

export default AppNavbar