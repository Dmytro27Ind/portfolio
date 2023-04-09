import React, { FC } from 'react'
import { RiContactsBook2Fill } from 'react-icons/ri'
import Button from '@/UI/Button'
import avatar from '@/assets/avatar.png'
import Avatar from '@/UI/Avatar'

const Header: FC = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center my-16'>
        <Avatar className='w-60 h-60 mb-2' avatar={avatar} />
        <h1 className='inline-flex text-6xl my-8 text-lm-primaryText dark:text-dm-primaryText'>
          Hi, I'm&nbsp;<div className='font-bold'>Bc. Dmytro Kagirov</div>
        </h1>
        <h2 className='text-4xl text-lm-secondaryText dark:text-dm-secondaryText'>
          Web Developer, Student
        </h2>
        <Button size='large' className='my-10 text-lg' leftIcon={<RiContactsBook2Fill className='w-5 h-5' />}>
          Connect With Me
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Header