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
    // eslint-disable-next-line
  }, [control, inView])

  const items: StepperItem[] = [
    {
      time: '9 months',
      range: '2023-Present',
      title: 'CDESK',
      link: 'https://www.cdesk.sk/',
      description: 'As a Full Stack Developer at CDESK, I specialize in both frontend and backend development. My responsibilities include working with Angular and TypeScript/JavaScript for frontend tasks, websockets with Node.js for real-time communication, and PHP for backend development.'
    },
    {
      time: '1 year',
      range: '2022-2023',
      title: 'Freelance Web',
      description: 'Freelance. Depending on the project, I was responsible for the frontend, backend and design. Frontend in native HTML/CSS or React. Backend in NodeJS/Express or PHP, design in Figma.'
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
        <h2 className='h2-title mb-12 sm:mb-20'>Work Experience</h2>
        <motion.div ref={ref}></motion.div>
        <Stepper items={items} />
      </motion.div>
    </React.Fragment>
  )
}

export default Experience