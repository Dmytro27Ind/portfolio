import React, { DetailedHTMLProps, FC, OlHTMLAttributes } from 'react'
import classes from './Stepper.module.scss'

export interface StepperItem {
  time: string,
  range?: string,
  title: string,
  link?: string,
  description: string,
}

interface StepperProps extends DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {
  items: StepperItem[],
}

const Stepper: FC<StepperProps> = ({items, className, ...props}) => {
  return (
    <ol {...props} className={className}>
      {items.map((item, ind) =>
        <li key={ind} className={classes.item + " gap-8 justify-center"}>
          <div className={classes.content + " pl-8 pb-16 md:w-4/6 lg:w-3/6" +
            " before:bg-lm-primary-100 after:bg-lm-primary-100 after:border-lm-primary-100" +
            " before:dark:bg-dm-primary-100 after:dark:bg-dm-primary-100 after:dark:border-dm-primary-100"
          }>
            <h3 className="font-bold mb-2 text-lm-primaryText dark:text-dm-primaryText text-lg">
              <a href={item.link} className={ item.link ? "underline underline-offset-2" : "" } target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>
            <p className="text-lm-secondaryText dark:text-dm-secondaryText">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col basis-16 sm:basis-36">
            <time className={classes.time + " text-lm-secondaryText dark:text-dm-secondaryText text-left sm:text-right pb-0"}>
              {item.time}
            </time>
            <time className={classes.time + " text-lm-secondaryText dark:text-dm-secondaryText text-left sm:text-right"}>
              {item.range}
            </time>
          </div>
        </li>
      )}
    </ol>
  )
}

export default Stepper