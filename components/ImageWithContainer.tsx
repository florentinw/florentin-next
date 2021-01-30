import styled from 'styled-components'

import { Container, Image } from '.'

const StyledImage = styled(Image)`
  @media screen and (max-width: 768px) {
    object-fit: cover;
    min-height: 60vh;
  }
`

const StyledContainer = styled(Container)`
  max-width: 1150px;
  width: 95%;
  position: relative;
  margin: 20px auto;
  min-height: 60vh;
`

const ImageWithContainer = (props: any) => (
  <StyledContainer>
    <StyledImage {...props} layout="fill" />
  </StyledContainer>
)

export default ImageWithContainer
