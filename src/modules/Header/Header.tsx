import React, { FC } from 'react'
import avatar from '@/assets/avatar.png'
import Avatar from '@/UI/Avatar'
import { motion } from "framer-motion";
import IconButton from '@/UI/IconButton/IconButton'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'
import Chip from '@/UI/Chip'

const Header: FC = () => {
  return (
    <React.Fragment>
      <motion.div
        className='flex flex-col items-center h-screen justify-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Avatar className='w-40 h-40 md:w-60 md:h-60 mb-0 md:mb-2' avatar={avatar} />
        <h1 className='block text-center md:inline-flex text-3xl md:text-5xl lg:text-6xl my-5 md:my-8 text-lm-primaryText dark:text-dm-primaryText font-nunito'>
          <p className='hidden md:block'>Hi, I'm&nbsp;</p>
          <div className='font-bold'>Bc. Dmytro Kagirov</div>
        </h1>
        <h2 className='font-semibold md:font-normal text-xl md:text-3xl lg:text-4xl text-lm-secondaryText dark:text-dm-secondaryText'>
          Full Stack Developer, Student
        </h2>
        <div className='flex items-center flex-col md:flex-row gap-2 md:gap-1 mt-12'>
          <Chip className='w-fit'>
            <h2 className='text-base font-normal dark:font-semibold'>
              dmytro27kagirov@gmail.com
            </h2>
          </Chip>
          <Chip className='w-fit'>
            <h2 className='text-base font-normal dark:font-semibold'>
              +421 951 338 470
            </h2>
          </Chip>
        </div>
        <div className='flex gap-3 mt-4'>
          <IconButton href='https://github.com/Dmytro27Ind' newTab icon={<BsGithub className='w-8 h-8' />} />
          <IconButton href='https://www.linkedin.com/in/dmytro-kagirov-a29394266/' newTab icon={<BsLinkedin className='w-8 h-8' />} />
          <IconButton href='https://www.facebook.com/dmytro.kagirov.1' newTab icon={<BsFacebook className='w-8 h-8' />} />
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Header