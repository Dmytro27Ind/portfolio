import React, { FC } from 'react'
import BackendSkills from './BackendSkills'
import FrontendSkills from './FrontendSkills'

const Skills: FC = () => {
  return (
    <React.Fragment>
      <FrontendSkills />
      <BackendSkills />
    </React.Fragment>
  )
}

export default Skills