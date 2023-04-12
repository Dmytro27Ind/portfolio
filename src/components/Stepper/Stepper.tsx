import React, { DetailedHTMLProps, FC, OlHTMLAttributes } from 'react'
import classes from './Stepper.module.scss'

export interface StepperItem {
  time: string,
  title: string,
  description: string,
}

interface StepperProps extends DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {
  items: StepperItem[],
}

const Stepper: FC<StepperProps> = ({items, className, ...props}) => {
  return (
    <ol {...props} className={className}>
      {items.map((item, ind) =>
        <li key={ind} className={classes.item + " gap-8"}>
          <div className={classes.content + " pl-8 pb-16" +
            " before:bg-lm-primary-100 after:bg-lm-primary-100 after:border-lm-primary-100" +
            " before:dark:bg-dm-primary-100 after:dark:bg-dm-primary-100 after:dark:border-dm-primary-100"
          }>
            <h3 className="font-bold mb-2 text-lm-primaryText dark:text-dm-primaryText text-lg">
              {item.title}
            </h3>
            <p className="text-lm-secondaryText dark:text-dm-secondaryText">
              {item.description}
            </p>
          </div>
          <time className={classes.time + " text-lm-secondaryText dark:text-dm-secondaryText"}>
            {item.time}
          </time>
        </li>
      )}
    </ol>
  )
}

export default Stepper