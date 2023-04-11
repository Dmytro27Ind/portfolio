import Stepper, { StepperItem } from '@/UI/Stepper/Stepper'
import React, { FC } from 'react'

const Education: FC = () => {
  const items: StepperItem[] = [
    {
      time: '2019 - 2022',
      title: 'Bachelor\'s degree - Computer Science (Informatics)',
      description: 'Technical University Of Kosice (TUKE)'
    },
    {
      time: '2022 - Present',
      title: 'Master\'s Degree - Computer Science (Informatics)',
      description: 'Technical University Of Kosice (TUKE)'
    }
  ]

  return (
    <div className='flex flex-col items-center mb-52'>
      <h2 className='h2-title'>Education</h2>
      <Stepper className='mt-20' items={items} />
    </div>
  )
}

export default Education