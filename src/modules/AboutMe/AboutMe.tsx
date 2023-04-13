import React, { FC, useEffect  } from 'react'
import GithubCalendar from './GithubCalendar'
import gitContrLm from '@/assets/lm-github-contr.png'
import gitContrDm from '@/assets/dm-github-contr.png'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe: FC = () => {
  const theme = useSelector<RootState>((state) => state.theme.theme)
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

  return (
    <motion.div
      id='about-me'
      className='flex justify-evenly mt-16 mb-52 scroll-mt-[35vh]'
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      <div className='w-4/12 flex flex-col gap-y-14'>
        <h2 className='h2-title'>
          I love building web applications
        </h2>
        <h3 className='text-lm-secondaryText dark:text-dm-secondaryText text-xl'>
          I am frontend / backend developer and student at the Technical University of Kosice.
          I spend most of my free time to improve my programming skills.
          I'm learning React, Angular, TypeScript, NodeJS and English.
        </h3>
      </div>
      <div className='w-5/12 flex items-center mt-10'>
        <div className='w-full relative flex flex-col'>
          <img className='w-48 absolute right-0 -top-40' src={theme === 'dark'? gitContrDm : gitContrLm} alt='arrow to my contributions' />
          <GithubCalendar />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe