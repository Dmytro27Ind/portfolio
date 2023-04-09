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
      <Link href='#app'>About Me</Link>
      <Link href='#app'>Contacts</Link>
      <Link href='#app'>Education</Link>
      <Link href='#app'>Skills</Link>
      <Link href='#app'>Projects</Link>
    </Navbar>
  )
}

export default AppNavbar