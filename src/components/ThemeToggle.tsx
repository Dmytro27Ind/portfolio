import React, { FC } from 'react'
import Button from '../UI/Button'
import ButtonGroup from '../UI/ButtonGroup'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface ThemeToggleProps {
  onLightClick: () => void,
  onDarkClick: () => void,
  size?: 'small' | 'medium' | 'large',
  hideText?: boolean,
  className?: string,
}

const ThemeToggle: FC<ThemeToggleProps> = ({ onDarkClick, onLightClick, size='medium', hideText=false, className }) => {
  const theme = useSelector<RootState>((state) => state.theme.theme)

  const iconSize = {small: 'w-4 h-4', medium: 'w-5 h-5', large: 'w-5 h-5'}
  const textSize = {small: 'text-sm', medium: 'text-base', large: 'text-lg'}

  return (
    <ButtonGroup className={className} size={size}>
      <Button
        className={(theme === 'light'? 'bg-lm-primary-200' : '') + ' ' + textSize[size]}
        onClick={onLightClick}
        leftIcon={<BsSunFill className={iconSize[size]} />}
        notRounded
        size={size}
      >
        {!hideText && 'Light'}
      </Button>
      <Button
        className={(theme === 'dark'? 'dark:bg-dm-primary-400' : '') + ' ' + textSize[size]}
        onClick={onDarkClick}
        leftIcon={<BsMoonFill className={iconSize[size]} />}
        notRounded
        size={size}
      >
        {!hideText && 'Dark'}
      </Button>
    </ButtonGroup>
  )
}

export default ThemeToggle