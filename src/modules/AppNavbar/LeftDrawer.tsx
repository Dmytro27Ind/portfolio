import React, { FC, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, setDark, setLight } from '@/store'
import lmLogo from '@/assets/lm-logo.png'
import dmLogo from '@/assets/dm-logo.png'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Link from '@/UI/Link'
import ThemeToggle from '@/components/ThemeToggle'
import { FiMenu } from 'react-icons/fi'
import IconButton from '@/UI/IconButton'


const LeftDrawer: FC = () => {
  const theme = useSelector<RootState>((state) => state.theme.theme)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <ChakraProvider>
      <Navbar
        className={'2xl:w-10/12 flex lg:hidden p-1'}
        leftElement={
          <IconButton
            ref={btnRef}
            onClick={onOpen}
            icon={ <FiMenu className="h-6 w-6" /> }
          />
        }
        rightElement={<img className='w-8 h-8' src={theme === 'dark'? dmLogo : lmLogo} alt="portfolio logo"/>}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          className={theme === 'dark'? 'dark' : ''}
          style={{background: (theme === 'dark'? '#18181b' : 'white')}}
        >
          <DrawerCloseButton color='gray' />
          <DrawerHeader>
            <h2 className='text-2xl text-lm-primaryText dark:text-dm-primaryText'>Portfolio</h2>
          </DrawerHeader>

          <DrawerBody className='flex flex-col gap-5 mt-8'>
            <Link className='text-lg' to='#about-me'>About Me</Link>
            <Link className='text-lg' to='#education'>Education</Link>
            <Link className='text-lg' to='#skills'>Skills</Link>
            <Link className='text-lg' to='#projects'>Projects</Link>
          </DrawerBody>

          <DrawerFooter>
            <ThemeToggle
              className='h-10'
              onDarkClick={() => dispatch(setDark())}
              onLightClick={() => dispatch(setLight())}
              size='small'
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  )
}

export default LeftDrawer