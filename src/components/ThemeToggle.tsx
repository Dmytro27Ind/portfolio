import React, { FC } from 'react'
import Button from '../UI/Button'
import ButtonGroup from '../UI/ButtonGroup'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface ThemeToggleProps {
  onLightClick: () => void,
  onDarkClick: () => void,
  className?: string,
}

const ThemeToggle: FC<ThemeToggleProps> = ({ onDarkClick, onLightClick, className }) => {
  const theme = useSelector<RootState>((state) => state.theme.theme)

  console.log(theme)

  return (
    <ButtonGroup className={className}>
      <Button
        toggleColor={theme === 'light'? 'bg-lm-primary-200' : undefined}
        onClick={onLightClick}
        leftIcon={<BsSunFill className='w-5 h-5' />}
        notRounded
      >
        Light
      </Button>
      <Button
        toggleColor={theme === 'dark'? 'bg-dm-primary-400' : undefined}
        onClick={onDarkClick}
        leftIcon={<BsMoonFill className='w-5 h-5' />}
        notRounded
      >
        Dark
      </Button>
    </ButtonGroup>
  )
}

export default ThemeToggle