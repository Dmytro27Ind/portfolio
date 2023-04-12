import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const Card: FC<CardProps> = ({className, children, ...props}) => {
  return (
    <div {...props} className={twMerge("shadow-lg rounded-2xl dark:bg-dm-bg-200", className)}>
        {children}
    </div>
  )
}

export default Card