import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiEffect = () => {
  // const { width, height } = useWindowSize()
  return (
    <Confetti
      width={1000}
      height={1000}
      numberOfPieces={200}
      confettiSource={{x: 0, y: 0, w: 1000, h: 1000}}
      friction={0.99}
      wind={0}
      gravity={0.1}
      colors={['#f44336']}
    />
  )
}

export default ConfettiEffect;