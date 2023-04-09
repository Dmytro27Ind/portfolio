import React, { FC } from 'react'
import GithubCalendar from './GithubCalendar'

const AboutMe: FC = () => {
  return (
    <div className='flex justify-evenly my-32'>
      <div className='w-4/12 flex flex-col gap-y-10'>
        <h2 className='text-lm-primaryText text-5xl font-semibold self-center'>
          I love building web apps
        </h2>
        <h3 className='text-lm-secondaryText text-2xl'>
          &emsp; I am frontend developer and student at the Technical University of Kosice.
          I spend most of my free time to improve my programming skills.
          I'm currently learning React, Redux, TypeScript, NodeJS and English.
          Also I am responsible and meet deadlines.
        </h3>
      </div>
      <div className='w-6/12'>
        <GithubCalendar />
      </div>
    </div>
  )
}

export default AboutMe