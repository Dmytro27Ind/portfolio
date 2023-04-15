import React, { FC } from 'react'
import Chip from '@/UI/Chip'
import Link from '@/UI/Link'
import Carousel from "nuka-carousel"
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import IconButton from '@/UI/IconButton'

export interface ProjectProps {
  title: string,
  description: string,
  link: string,
  tags: string[],
  images: {
    img: string,
    maxH?: string
  }[],
}

const Project: FC<ProjectProps> = ({title, description, link, tags, images}) => {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col gap-10 w-5/12 px-16'>
        <h2 className='font-nunito text-4xl font-semibold text-lm-primaryText dark:text-dm-primaryText'>
            {title} <IconButton href='https://github.com/Dmytro27Ind' newTab icon={<BsGithub className='w-8 h-8' />} />
        </h2>
        <p className='text-xl text-lm-secondaryText dark:text-dm-secondaryText'>
            {description}
        </p>
        <Link className='text-2xl font-semibold' href={link} newTab>
            Link to Website
        </Link>
        <div className='flex gap-1 mt-8'>
            {tags.map((tag, ind) =>
              <Chip key={ind}>{tag}</Chip>
            )}
        </div>
      </div>
      <div className='w-7/12 rounded-md overflow-hidden'>
        <Carousel autoplay autoplayInterval={5000} cellSpacing={40} wrapAround cellAlign='center'
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
    </div>
  )
}

export default Project