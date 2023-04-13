import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import whiteCube from '@/assets/white-cube.png'
import whiteCube2 from '@/assets/white-cube-2.png'
import whiteCircle from '@/assets/white-circle.png'
import blackCube from '@/assets/black-cube.png'
import blackCube2 from '@/assets/black-cube-2.png'
import blackCircle from '@/assets/black-circle.png'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ParallaxBg = () => {
  const theme = useSelector<RootState>((state) => state.theme.theme)

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 bg-white dark:bg-dm-bg-300'>
      <Parallax speed={-25} scale={[0.75, 1]}>
        <img className='mt-[400px] ml-20 w-44 opacity-6' src={theme === 'dark'? blackCircle : whiteCircle} alt="black circle" />
      </Parallax>
      <Parallax className='ml-[95%] w-fit' speed={-30} scale={[1.1, 0.7]} translateX={['-200px', '0px']}>
        <img className='mt-[800px] w-28 opacity-6 blur-[2px]' src={theme === 'dark'? blackCube : whiteCube} alt="black cube" />
      </Parallax>
      <Parallax className='ml-32 w-fit' speed={-25} rotate={[-270, 0]}>
        <img className='mt-[1200px] w-44 opacity-6' src={theme === 'dark'? blackCube2 : whiteCube2} alt="black cube" />
      </Parallax>
    </div>
  )
}

export default ParallaxBg