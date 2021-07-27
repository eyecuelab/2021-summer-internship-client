import React, { FC } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiEffect: FC = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={500}
      initialVelocityY={ {min: 1, max: 20} }
      friction={.98}
    />
  )
}

export default ConfettiEffect;