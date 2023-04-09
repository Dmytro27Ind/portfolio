import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import rippleBtnEffect from './rippleBtnEffect'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  leftIcon?: React.ReactElement,
  rightIcon?: React.ReactElement,
  notRounded?: boolean,
  size?: 'small' | 'medium' | 'large',
}

const Button: FC<ButtonProps> = ({children, className, leftIcon, rightIcon, notRounded=false, size='medium', ...props}) => {
  const rounded = notRounded? '' : 'rounded-2xl'
  const classes = className ?? ''
  const paddings = { small: 'px-4 py-2', medium: 'px-6 py-3', large: 'px-8 py-4' }
  const height = { small: 'h-10', medium: 'h-12', large: 'h-18' }
  const gap = { small: 'gap-4', medium: 'gap-6', large: 'gap-8' }

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    rippleBtnEffect(e)
    if (props.onClick)
      props.onClick(e)
  }

  return (
    <button
      {...props}
      className={twMerge('relative flex m-0 items-center shadow-lg text-base overflow-hidden',
        'dark:text-dm-primary-contr text-lm-primary-contr bg-lm-primary-300 dark:bg-dm-primary-300',
        'hover:bg-lm-primary-200 hover:dark:bg-dm-primary-400 active:bg-lm-primary-100 active:dark:bg-dm-primary-500',
        'transition ease-in-out hover:scale-105 duration-300',
        paddings[size], gap[size], height[size], rounded, classes)}
      onClick={click}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}

export default Button