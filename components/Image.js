import styled from 'styled-components'

const StyledImage = styled.img`
  border-radius: 5px;
  width: 100%;
`

const Image = (props) => (
  <StyledImage {...props} />
)

export default Image
