import React from 'react'
import { useDispatch } from 'react-redux'
import { setDark, setLight } from '@/store'
import Avatar from '@/UI/Avatar'
import Button from '@/UI/Button'
import avatar from '@/assets/avatar.png'
import ThemeToggle from '@/components/ThemeToggle'
import { RiContactsBook2Fill } from 'react-icons/ri'


const Test = () => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className='mt-40 flex'>
        <Button
          size='small'
          className='m-5 text-sm'
          leftIcon={<RiContactsBook2Fill className='w-4 h-4' />}
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
          size='large'
          className='m-5 text-lg'
          leftIcon={<RiContactsBook2Fill className='w-5 h-5' />}
        >
          Connect With Me
        </Button>
      </div>
      <div className='flex'>
        <ThemeToggle
          className='m-5 text-sm'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='small'
        />
        <ThemeToggle
          className='m-5 text-base'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='medium'
        />
        <ThemeToggle
          className='m-5 text-lg'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='large'
        />
      </div>
      <div className='flex'>
        <ThemeToggle
          className='m-5 text-sm'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='small'
          hideText
        />
        <ThemeToggle
          className='m-5 text-base'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='medium'
          hideText
        />
        <ThemeToggle
          className='m-5 text-lg'
          onDarkClick={() => dispatch(setDark())}
          onLightClick={() => dispatch(setLight())}
          size='large'
          hideText
        />
      </div>
      <div className='flex'>
        <Avatar className='m-5' avatar={avatar} size='small'/>
        <Avatar className='m-5' avatar={avatar} size='medium'/>
        <Avatar className='m-5' avatar={avatar} size='large'/>
      </div>
    </React.Fragment>
  )
}

export default Test