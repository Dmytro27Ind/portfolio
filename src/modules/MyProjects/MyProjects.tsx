import React from 'react'
import Project from './Project'

const MyProjects = () => {
  return (
    <div id='projects' className='my-8 flex flex-col items-center'>
      <h2 className='h2-title mb-24'>Projects</h2>
      <div className='flex flex-col gap-32'>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default MyProjects