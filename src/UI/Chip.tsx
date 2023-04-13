import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

const Chip: FC<ChipProps> = ({children, className, ...props}) => {
  return (
    <div
      {...props}
        className={twMerge('py-1 px-4 rounded-full',
          "bg-lm-primary-300 dark:bg-dm-primary-300 text-lm-primary-contr dark:text-dm-primary-contr",
          className)
        }
      >
        {children}
    </div>
  )
}

export default Chip