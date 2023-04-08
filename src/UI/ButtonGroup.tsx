import React, { FC, ReactElement } from 'react'

interface ButtonGroupProps {
    children: ReactElement[],
    className?: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({children, className}) => {
  return (
    <div className={'inline-flex shadow-lg rounded-2xl overflow-hidden ' + (className? className : '')}>
        {children?.map(button => (button))}
    </div>
  )
}

export default ButtonGroup