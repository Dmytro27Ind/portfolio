import React, { FC, useEffect } from 'react'
import Stepper, { StepperItem } from '@/components/Stepper'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from 'react-use-scroll-direction';

const Experience: FC = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const { isScrollingDown, isScrollingUp } = useScrollDirection()

  const variant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 }},
    scrollingDown: { opacity: 0, scale: 0.85, y: -50 },
    scrollingUp: { opacity: 0, scale: 0.85, y: 50 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      if (isScrollingDown)
        control.start("scrollingDown");
      else if (isScrollingUp)
        control.start("scrollingUp");
    }
  }, [control, inView])

  const items: StepperItem[] = [
    {
      time: '1 year',
      title: 'Full Stack Developer',
      description: 'Freelance. Depending on the project, I was responsible for the frontend, backend and design. Frontend in React or native HTML/CSS. Backend in NodeJS/Express, design in Figma.'
    }
  ]

  return (
    <React.Fragment>
      <motion.div
        id='experience'
        className='flex flex-col items-center mb-4 sm:mb-24 scroll-mt-[35vh]'
        variants={variant}
        animate={control}
      >
        <h2 className='h2-title mb-12 sm:mb-20'>Experience</h2>
        <motion.div ref={ref}></motion.div>
        <Stepper items={items} />
      </motion.div>
    </React.Fragment>
  )
}

export default Experience