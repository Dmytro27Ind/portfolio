import React, { FC, useEffect } from 'react'
import Stepper, { StepperItem } from '@/UI/Stepper/Stepper'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Education: FC = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const variant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.85, y: 50 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden");
    }
  }, [control, inView])

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
    <React.Fragment>
      <motion.div
        className='flex flex-col items-center mb-52'
        variants={variant}
        initial="hidden"
        animate={control}
      >
        <h2 className='h2-title mb-20'>Education</h2>
        <motion.div ref={ref}></motion.div>
        <Stepper items={items} />
      </motion.div>
    </React.Fragment>
  )
}

export default Education