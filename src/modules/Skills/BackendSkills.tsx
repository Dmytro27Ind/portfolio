import React, { FC, useEffect } from 'react'
import Card from '@/UI/Card'
import classes from './Skills.module.css'
import jsIcon from '@/assets/js-icon.png'
import tsIcon from '@/assets/typescript-icon.png'
import nodeIcon from '@/assets/nodejs-icon.png'
import dockerIcon from '@/assets/docker-icon.png'
import postgresIcon from '@/assets/postgres-icon.png'
import mongodbIcon from '@/assets/mongodb-icon.png'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const BackendSkills: FC = () => {
  const control = useAnimation()
  const [refInitial, inViewInitial] = useInView()
  const [ref, inView] = useInView()

  const variant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.85, y: -50 },
  }

  useEffect(() => {
    if (inViewInitial || inView) {
      control.start("visible")
    } else if (!inViewInitial && !inView) {
      control.start("hidden");
    }
  }, [control, inView, inViewInitial])

  return (
    <motion.div
      className='mb-20 md:mb-40 flex flex-col items-center'
      variants={variant}
      animate={control}
    >
      <h2 className='h2-title mb-10 md:mb-20'>Backend Skills</h2>
      <motion.div ref={refInitial}></motion.div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-5 flex-wrap max-w-3xl justify-center'>
        <Card className='p-4 sm:p-6 flex flex-col items-center gap-y-2 h-fit sm:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <img className='h-11 w-11 sm:w-14 sm:h-14' src={dockerIcon} alt="Docker Logo" />
          <h2 className='text-center'>Docker</h2>
        </Card>
        <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <div className='flex gap-x-5 text-lg'>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='h-20 w-20 sm:w-24 sm:h-24' src={nodeIcon} alt="NodeJS Logo" />
              <p className='text-xl sm:text-2xl font-semibold'>NodeJS / Express</p>
            </div>
          </div>
        </Card>
        <Card className='p-6 flex flex-col items-center gap-y-2 h-fit sm:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl font-semibold text-center'>Communication</h2>
          <ul>
            <li className={classes.li}>Rest API</li>
            <li className={classes.li}>HTTP</li>
            <li className={classes.li}>WebSocket</li>
            <li className={classes.li}>GraphQL</li>
          </ul>
        </Card>
        <Card className='p-8 flex flex-col items-center gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl sm:text-2xl font-semibold text-center'>Languages</h2>
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
        <div>
          <motion.div ref={ref}></motion.div>
          <Card className='p-7 flex flex-col items-center gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <ul>
              <li className={classes.li}>Jest</li>
              <li className={classes.li}>Joi</li>
              <li className={classes.li}>Swagger</li>
          </ul>
          </Card>
        </div>
        <Card className='p-6 flex flex-col items-center sm:items-start gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl font-semibold text-center'>Databases</h2>
          <div className='flex items-center gap-3'>
            <img className='w-9 h-9' src={postgresIcon} alt="Material UI Logo" />
            <p>PostgreSQL</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-9 h-9' src={mongodbIcon} alt="Chakra UI Logo" />
            <p>MongoDB</p>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export default BackendSkills