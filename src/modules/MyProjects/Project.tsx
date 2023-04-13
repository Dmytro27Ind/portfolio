import React from 'react'
import Chip from '@/UI/Chip'
import Link from '@/UI/Link'

const Project = () => {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col gap-10 w-5/12 px-16'>
        <h2 className='font-nunito text-4xl font-semibold text-lm-primaryText dark:text-dm-primaryText'>
            React Music Player
        </h2>
        <p className='text-xl text-lm-secondaryText dark:text-dm-secondaryText'>
            This is a music player written in React using libraries such as Redux and MUI for UI elements.
            This web application also uses the Spotify API, but I didn't add Spotify users authorization
            and because of this each track will be 30 seconds long.
        </p>
        <Link className='text-2xl font-semibold' href='https://dmytro27ind.github.io/react-music-player/' newTab>
            Link to Website
        </Link>
        <div className='flex gap-1 mt-8'>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>MUI</Chip>
            <Chip>js</Chip>
        </div>
      </div>
      <div className='w-7/12 rounded-md overflow-hidden'>
          <img src='https://raw.githubusercontent.com/Dmytro27Ind/images/main/react-music-player-1.PNG' alt='project screenshot'/>
      </div>
    </div>
  )
}

export default Project