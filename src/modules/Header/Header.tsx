import React, { FC } from 'react'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import ThemeToggle from '@/components/ThemeToggle'
import { setDark, setLight } from '@/store'
import Button from '@/UI/Button'

const Header: FC = () => {
  const dispatch = useDispatch()

  return (
    <div className='bg-white dark:bg-gray-950 w-full h-screen'>
      <h1 className="text-3xl font-bold text-gray-950 dark:text-gray-50">portfolio</h1>
      <Button
        size='large'
        className='m-5 text-lg'
        leftIcon={<RiContactsBook2Fill className='w-5 h-5' />}
      >
        Connect With Me
      </Button>
      <Button
        size='medium'
        className='m-5 text-base'
        leftIcon={<RiContactsBook2Fill className='w-4 h-4' />}
      >
        Connect With Me
      </Button>
      <Button
        size='small'
        className='m-5 text-sm'
        leftIcon={<RiContactsBook2Fill className='w-4 h-4' />}
      >
        Connect With Me
      </Button>
      <ThemeToggle
        className='m-4'
        onDarkClick={() => dispatch(setDark())}
        onLightClick={() => dispatch(setLight())}
      />
    </div>
  )
}

export default Header