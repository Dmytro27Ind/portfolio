import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavbarProps {
  children?: React.ReactElement[],
  leftElement?: React.ReactElement,
  rightElement?: React.ReactElement,
  className?: string
}

const Navbar: FC<NavbarProps> = ({children, leftElement, rightElement, className}) => {
  return (
    <div className={twMerge('flex items-center w-11/12 mx-auto py-4', className)}>
      <div className='w-2/12 flex justify-start'>
        {leftElement}
      </div>
      <ul className='w-8/12 flex justify-evenly'>
        {children?.map((child, ind) =>
          <li key={ind}>{child}</li>
        )}
      </ul>
      <div className='w-2/12 flex justify-end'>
        {rightElement}
      </div>
    </div>
  )
}

export default Navbar