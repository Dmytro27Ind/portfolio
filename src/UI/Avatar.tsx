import React from 'react'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string,
  size?: 'small' | 'medium' | 'large',
}

const Avatar: FC<AvatarProps> = ({avatar, size='medium', className, ...props}) => {
  const sizes = { small: 'w-12 h-12', medium: 'w-20 h-20', large: 'w-32 h-32'}

  return (
    <div {...props} className={twMerge('rounded-full dark:bg-dm-bg-200 shadow-2xl overflow-hidden', sizes[size], className)}>
      <img src={avatar} alt='avatar' />
    </div>
  )
}

export default Avatar