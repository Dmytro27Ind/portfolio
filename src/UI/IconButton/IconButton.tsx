import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import rippleBtnEffect from './rippleBtnEffect'

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: React.ReactElement,
  size?: 'small' | 'medium' | 'large',
  href?: string,
  newTab?: boolean
}

const IconButton: FC<IconButtonProps> = ({className, icon, href, newTab=false, size='medium', ...props}) => {
  const paddings = { small: 'p-1', medium: 'p-2', large: 'p-3' }

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    rippleBtnEffect(e)
    if (props.onClick)
      props.onClick(e)
  }

  return (
    <button
      {...props}
      className={twMerge("relative overflow-hidden flex items-center justify-center rounded-full",
        "text-lm-primary-300 dark:text-dm-primary-300",
        "hover:text-lm-primary-400 hover:dark:text-dm-primary-100",
        'transition ease-in-out hover:scale-110 duration-300',
        paddings[size], className ?? '')
      }
      onClick={click}
    >
      {newTab?
        <a href={href} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      :
        <a href={href}>
          {icon}
        </a>
      }
    </button>
  )
}

export default IconButton