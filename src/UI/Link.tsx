import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  newTab?: boolean,
  to: string,
  ref?: React.RefObject<HTMLAnchorElement>,
}

const Link: FC<LinkProps> = ({children, newTab= false, className, ...props}) => {
  const classes = twMerge(
    'text-lm-primaryText dark:text-dm-primaryText text-base hover:shadow-[0_1px_0_0_currentcolor]',
    'transition ease-in-out duration-300',
    className
  )

  return (
    <React.Fragment>
      {newTab?
        <RouterLink className={classes} {...props} target="_blank" rel="noopener noreferrer">{children}</RouterLink>
      :
        <RouterLink className={classes} {...props}>{children}</RouterLink>
      }
    </React.Fragment>
  )
}

export default Link