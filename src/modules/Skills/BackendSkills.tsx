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

const FrontendSkills: FC = () => {
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
      className='mb-40 flex flex-col items-center'
      variants={variant}
      animate={control}
    >
      <h2 className='h2-title mb-20'>Backend Skills</h2>
      <motion.div ref={refInitial}></motion.div>
      <div className='flex gap-5 flex-wrap max-w-3xl justify-center'>
        <Card className='p-6 flex flex-col gap-y-2 h-fit self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <img className='w-14 h-14' src={dockerIcon} alt="Angular Logo" />
          <h2 className='text-center'>Docker</h2>
        </Card>
        <Card className='p-8 flex flex-col gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <div className='flex gap-x-5 text-lg'>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-24 h-24' src={nodeIcon} alt="Angular Logo" />
              <p className='text-2xl font-semibold'>NodeJS / Express</p>
            </div>
          </div>
        </Card>
        <Card className='p-6 flex flex-col gap-y-2 h-fit self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-xl font-semibold text-center'>Communication</h2>
          <ul>
            <li className={classes.li}>Rest API</li>
            <li className={classes.li}>HTTP</li>
            <li className={classes.li}>WebSocket</li>
            <li className={classes.li}>GraphQL</li>
          </ul>
        </Card>
        <Card className='p-8 flex flex-col gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <h2 className='text-2xl font-semibold text-center'>Languages</h2>
          <div className='flex gap-x-5 text-lg'>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-16 h-16 rounded-xl' src={jsIcon} alt="JavaScript Logo" />
              <p>JavaScript</p>
            </div>
            <div className='flex flex-col gap-y-3 items-center'>
              <img className='w-16 h-16 rounded-xl' src={tsIcon} alt="TypeScript Logo" />
              <p>TypeScript</p>
            </div>
          </div>
        </Card>
        <div>
          <motion.div ref={ref}></motion.div>
          <Card className='p-7 flex flex-col gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
          <ul>
              <li className={classes.li}>Jest</li>
              <li className={classes.li}>Joi</li>
              <li className={classes.li}>Swagger</li>
          </ul>
          </Card>
        </div>
        <Card className='p-6 flex flex-col gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
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

export default FrontendSkills