import styled from 'styled-components'
import { Container, Image } from '.'
import Fade from 'react-reveal/Fade'

const StyledImage = styled(Image)`
  @media screen and (max-width: 768px) {
    object-fit: cover;
    min-height: 60vh;
  }
`

const StyledContainer = styled(Container)`
  max-width: 1150px;
  width: 95%;
  margin: 20px auto;
`

const ImageWithContainer = (props) => (
  <Fade bottom>
    <StyledContainer>
      <StyledImage {...props} />
    </StyledContainer>
  </Fade>
)

export default ImageWithContainer
