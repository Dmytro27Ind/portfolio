import React, { FC, useEffect, useState } from 'react'
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
  git?: string,
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
  const [forMobil, setForMobil] = useState<boolean>(window.matchMedia('(max-width: 767px)').matches)

  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.85 },
  }

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setForMobil(e.matches);
    window.matchMedia("(max-width: 767px)").addEventListener('change', handler);
  }, [])

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden");
    }
  }, [control, inView])

  return (
    <motion.div
      className='flex flex-col md:flex-row gap-y-16 items-center w-[85vw] sm:w-auto'
      variants={variant}
      initial="hidden"
      animate={control}
      ref={ref}
      >
      <div className='flex flex-col gap-5 sm:gap-10 md:w-5/12 md:px-8 lg:px-16 order-1'>
        <h2 className='flex items-center font-nunito text-2xl sm:text-3xl lg:text-4xl font-semibold text-lm-primaryText dark:text-dm-primaryText'>
            {title}
            {git &&
              <IconButton className='ml-2' href={git} newTab icon={<BsGithub className='w-8 h-8' />} />
            }
        </h2>
        <p className='text-lg lg:text-xl text-lm-secondaryText dark:text-dm-secondaryText'>
            {description}
        </p>
        {link &&
          <Link className='text-lg sm:text-xl lg:text-2xl font-semibold' href={link} newTab>
            Link to Website
          </Link>
        }
        <div className='flex gap-1 sm:mt-3 lg:mt-8 flex-wrap'>
            {tags.map((tag, ind) =>
              <Chip className='dark:font-semibold' key={ind}>{tag}</Chip>
            )}
        </div>
      </div>
      <div className={'md:w-7/12 rounded-md overflow-hidden ' + (left && !forMobil? '' : 'order-2')}>
        <Carousel autoplay autoplayInterval={5000} wrapAround withoutControls pauseOnHover={false}
          defaultControlsConfig={{ pagingDotsClassName: 'hidden' }}
        >
          {images.map((img, ind) =>
            <div key={ind} className='flex items-start sm:items-center justify-center sm:w-full h-full'>
              <img className='rounded-lg' style={{maxHeight: (img.maxH? `${img.maxH}px` : '')}} src={img.img} alt='project screenshot'/>
            </div>
          )}
        </Carousel>
      </div>
    </motion.div>
  )
}

export default Project