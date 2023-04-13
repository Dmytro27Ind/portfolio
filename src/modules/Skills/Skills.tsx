import React, { FC } from 'react'
import BackendSkills from './BackendSkills'
import FrontendSkills from './FrontendSkills'

const Skills: FC = () => {
  return (
    <div id='skills' className='scroll-mt-[10vh]'>
      <FrontendSkills />
      <BackendSkills />
    </div>
  )
}

export default Skills