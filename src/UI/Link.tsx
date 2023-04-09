import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  newTab?: boolean
}

const Link: FC<LinkProps> = ({children, newTab=false, className, ...props}) => {
  const classes = twMerge(
    'text-lm-primaryText dark:text-dm-primaryText text-base hover:shadow-[0_1px_0_0_currentcolor]',
    'transition ease-in-out duration-300',
    className
  )

  return (
    <React.Fragment>
      {newTab?
        <a className={classes} {...props} target="_blank" rel="noopener noreferrer">{children}</a>
      :
        <a className={classes} {...props}>{children}</a>
      }
    </React.Fragment>
  )
}

export default Link