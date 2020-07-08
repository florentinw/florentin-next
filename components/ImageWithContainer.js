import styled from 'styled-components'
import { useMotionValue, useViewportScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { Container, Image } from '.'

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all .5s;
  transform: scale(1.3);
  display: block;
`

const StyledContainer = styled(Container)`
  max-width: 1150px;
  width: 95%;
  margin: 20px auto;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    min-height: 60vh;
  }
`

const percentageSeen = (element) => {
  // Get the relevant measurements and positions
  const viewportHeight = window.innerHeight
  const scrollTop = window.scrollY
  const elementOffsetTop = element.offsetTop
  const elementHeight = element.offsetHeight

  // Calculate percentage of the element that's been seen
  const distance = scrollTop + viewportHeight - elementOffsetTop
  const percentage = Math.round(
    distance / ((viewportHeight + elementHeight) / 100)
  )

  // Restrict the range to between 0 and 100
  return Math.min(100, Math.max(0, percentage))
}


const ImageWithContainer = (props) => {
  const ref = useRef()

  const { scrollYProgress } = useViewportScroll()
  const scale = useMotionValue(1)

  useEffect(() => {
    const unsubscribeScrollYProgress = scrollYProgress.onChange(() => {
      const element = ref.current
      if (element) scale.set(0.2 * percentageSeen(element) / 100 + 1)
    })
    return () => {
      unsubscribeScrollYProgress()
    }
  }, [])

  return (
    <StyledContainer ref={ref}>
      <StyledImage
        style={{ scale }}
        transition={{ delay: 0, ease: 'easeOut' }}
        {...props}
      />
    </StyledContainer>
  )
}

export default ImageWithContainer

/*
Styled container
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99]
      }} */

/*

*/
