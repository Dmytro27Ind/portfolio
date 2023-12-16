import React, { FC } from 'react'
import BackendSkills from './BackendSkills'
import FrontendSkills from './FrontendSkills'
import AwsSkills from "@/modules/Skills/AwsSkills";

const Skills: FC = () => {
  return (
    <div id='skills' className='scroll-mt-[10vh]'>
      <FrontendSkills />
      <BackendSkills />
      <AwsSkills />
    </div>
  )
}

export default Skills