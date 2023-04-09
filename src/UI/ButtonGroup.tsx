import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonGroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactElement[],
    className?: string,
    size?: 'small' | 'medium' | 'large',
}

const ButtonGroup: FC<ButtonGroupProps> = ({children, className, size='medium', ...props}) => {
  const height = { small: 'h-10', medium: 'h-12', large: 'h-18' }

  return (
    <div {...props} className={twMerge('flex shadow-lg rounded-2xl overflow-hidden', height[size], className ?? '')}>
        {children?.map(button => (button))}
    </div>
  )
}

export default ButtonGroup