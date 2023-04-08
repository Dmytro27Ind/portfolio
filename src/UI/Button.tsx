import React, { FC } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  leftIcon?: React.ReactElement,
  rightIcon?: React.ReactElement,
  notRounded?: boolean,
  toggleColor?: string,
  size?: 'small' | 'medium' | 'large',
}

const Button: FC<ButtonProps> = ({children, className, leftIcon, rightIcon, notRounded=false, toggleColor, size='medium', ...props}) => {
  const rounded = notRounded? '' : 'rounded-2xl '
  const bgColor = toggleColor? `${toggleColor} ` : 'bg-lm-primary-300 dark:bg-dm-primary-300 '
  const classes = className? className : ''
  const paddings = {
    small: 'px-4 py-2 ',
    medium: 'px-6 py-3 ',
    large: 'px-8 py-4 ',
  }

  return (
    <button
      {...props}
      className={ bgColor + 'dark:text-dm-primary-contr text-lm-primary-contr '
        + paddings[size] + 'flex items-center shadow-lg text-base ' + rounded
        + 'hover:bg-lm-primary-200 hover:dark:bg-dm-primary-400 active:bg-lm-primary-100 active:dark:bg-dm-primary-500 '
        + 'transition ease-in-out hover:scale-105 duration-300 '
        + classes}
    >
      {leftIcon &&
        <div className={{small: 'pr-4', medium: 'pr-6', large: 'pr-8'}[size]}>
          {leftIcon}
        </div>
      }
      {children}
      {rightIcon &&
        <div className={{small: 'pl-4', medium: 'pl-6', large: 'pl-8'}[size]}>
          {rightIcon}
        </div>
      }
    </button>
  )
}

export default Button