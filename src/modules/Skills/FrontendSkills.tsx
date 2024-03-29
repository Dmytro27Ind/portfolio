import React, { FC, useEffect } from 'react'
import Card from '@/UI/Card'
import classes from './Skills.module.css'
import reactIcon from '@/assets/react-icon.png'
import angularIcon from '@/assets/angular-icon.png'
import jsIcon from '@/assets/js-icon.png'
import tsIcon from '@/assets/typescript-icon.png'
import muiIcon from '@/assets/mui-icon.png'
import chakraIcon from '@/assets/chakra-icon.png'
import webpackIcon from '@/assets/webpack-icon.png'
import viteIcon from '@/assets/vite-icon.png'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const FrontendSkills: FC = () => {
  const control = useAnimation()
  const [refInitial, inViewInitial] = useInView()
  const [ref, inView] = useInView()
  const [refStyling, inViewStyling] = useInView()

  const variant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.85, y: -50 },
  }

  useEffect(() => {
    if (inViewInitial || inView) {
      control.start("visible")
    } else if (!inViewInitial && !inView && !inViewStyling) {
      control.start("hidden");
    }
  }, [control, inView, inViewInitial, inViewStyling])

  return (
    <motion.div
      className='mb-12 sm:mb-28 flex flex-col items-center'
      variants={variant}
      animate={control}
    >
      <h2 className='h2-title mb-10 md:mb-20'>Frontend Skills</h2>
      <motion.div ref={refInitial}></motion.div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-2 md:gap-5 flex-wrap max-w-3xl justify-center'>
        <Card className='p-4 sm:p-6 flex flex-col items-center gap-y-2 h-fit sm:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl font-semibold text-center'>Basic</h2>
          <ul>
            <li className={classes.li}>HTML</li>
            <li className={classes.li}>CSS</li>
          </ul>
        </Card>
        <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-2xl md:text-3xl font-semibold text-center'>Frameworks</h2>
          <div className='flex gap-x-5 text-lg'>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-14 h-14 sm:w-20 sm:h-20' src={angularIcon} alt="Angular Logo" />
              <p>Angular</p>
            </div>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-14 h-14 sm:w-20 sm:h-20' src={reactIcon} alt="React Logo" />
              <p>React</p>
            </div>
          </div>
        </Card>
        <Card className='p-4 sm:p-6 flex flex-col items-center gap-y-2 h-auto justify-center md:h-fit md:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 ref={refStyling} className='text-xl font-semibold text-center'>Styling</h2>
          <ul>
            <li className={classes.li}>scss / sass</li>
            <li className={classes.li}>tailwind</li>
            <li className={classes.li}>styled-components</li>
            <li className={classes.li}>emotion</li>
          </ul>
        </Card>
        <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-2xl md:text-3xl font-semibold text-center'>Languages</h2>
          <div className='flex gap-x-5 text-lg'>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-11 h-11 sm:w-16 sm:h-16 rounded-xl' src={jsIcon} alt="JavaScript Logo" />
              <p>JavaScript</p>
            </div>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-11 h-11 sm:w-16 sm:h-16 rounded-xl' src={tsIcon} alt="TypeScript Logo" />
              <p>TypeScript</p>
            </div>
          </div>
        </Card>
        <div className='flex flex-col items-center gap-2 md:gap-5 relative'>
          <Card className='p-4 sm:p-7 flex flex-col items-center gap-y-2 w-full sm:w-auto h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
            <h2 className='text-xl font-semibold text-center'>State Management</h2>
            <ul>
              <li className={classes.li}>Redux Toolkit</li>
              <li className={classes.li}>Redux Saga</li>
              <li className={classes.li}>Zustand</li>
            </ul>
          </Card>
          <div className='absolute top-32' ref={ref}></div>
          <Card className='p-4 sm:p-6 flex flex-col items-center sm:items-start sm:self-start gap-y-2 w-full sm:w-auto h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
            <h2 className='text-xl font-semibold text-center'>Bundlers</h2>
            <div className='flex items-center gap-3'>
              <img className='w-10 h-10' src={webpackIcon} alt="Webpack Logo" />
              <p>Webpack</p>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-10 h-10' src={viteIcon} alt="Vite Logo" />
              <p>Vite</p>
            </div>
          </Card>
        </div>
        <Card className='z-[1] p-4 sm:p-6 flex flex-col items-center gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl font-semibold text-center'>UI libraries</h2>
          <div className='flex items-center gap-3'>
            <img className='w-10 h-10' src={muiIcon} alt="Material UI Logo" />
            <p>Material UI</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-10 h-10' src={chakraIcon} alt="Chakra UI Logo" />
            <p>Chakra UI</p>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export default FrontendSkills