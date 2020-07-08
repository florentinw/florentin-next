import styled from 'styled-components'
import { useElementScroll, useViewportScroll, useTransform } from 'framer-motion'
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
  @media screen and (max-width: 768px) {
    min-height: 60vh;
  }
`

const ImageWithContainer = (props) => {
  const ref = useRef()
  const { scrollYProgress } = useElementScroll(ref)
  //  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 2])

  useEffect(() => {
    console.log({ scaleLog: scale })
    console.log({ scrollYProgressLog: scrollYProgress })
  }, [scale, scrollYProgress])

  return (
    <StyledContainer ref={ref}>
      <StyledImage
        style={{ scale }}
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
      }}*/


/*
        transition={{ type: 'tween' }}
*/