import React, { FC, useEffect } from 'react'
import Chip from '@/UI/Chip'
import Link from '@/UI/Link'
import Carousel from "nuka-carousel"
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import IconButton from '@/UI/IconButton'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export interface ProjectProps {
  title: string,
  description: string,
  link?: string,
  git: string,
  tags: string[],
  images: {
    img: string,
    maxH?: string
  }[],
  left?: boolean
}

const Project: FC<ProjectProps> = ({title, description, link, git, tags, images, left=false}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.85 },
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
      className='flex items-center'
      variants={variant}
      initial="hidden"
      animate={control}
      >
      <div className='flex flex-col gap-10 w-5/12 px-16 order-1'>
        <h2 className='flex items-center font-nunito text-4xl font-semibold text-lm-primaryText dark:text-dm-primaryText'>
            {title}
            <IconButton className='ml-2' href={git} newTab icon={<BsGithub className='w-8 h-8' />} />
        </h2>
        <motion.p ref={ref} className='text-xl text-lm-secondaryText dark:text-dm-secondaryText'>
            {description}
        </motion.p>
        {link &&
          <Link className='text-2xl font-semibold' href={link} newTab>
            Link to Website
          </Link>
        }
        <div className='flex gap-1 mt-8'>
            {tags.map((tag, ind) =>
              <Chip key={ind}>{tag}</Chip>
            )}
        </div>
      </div>
      <div className={'w-7/12 rounded-md overflow-hidden ' + (left? '' : 'order-2')}>
        <Carousel autoplay autoplayInterval={5000} cellSpacing={40} wrapAround withoutControls
          defaultControlsConfig={{
            nextButtonText: <MdNavigateNext className='w-6 h-6' />,
            prevButtonText: <MdNavigateBefore className='w-6 h-6' />,
            nextButtonStyle: { padding: 6, borderRadius: 100 },
            prevButtonStyle: { padding: 6, borderRadius: 100 },
            pagingDotsClassName: 'hidden'
          }}
        >
          {images.map((img, ind) =>
            <div key={ind} className='flex items-center justify-center w-full h-full'>
              <img className={img.maxH? `max-h-[${img.maxH}px] ` : ''} src={img.img} alt='project screenshot'/>
            </div>
          )}
        </Carousel>
      </div>
    </motion.div>
  )
}

export default Project