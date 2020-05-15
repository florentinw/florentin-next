import styled from 'styled-components'

import { Container, Image } from '.'

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1174px;
  width: 95%;
  margin: 8px auto;
  justify-content: space-between;
`

const Item = styled.div`
  flex: 1 0 300px;
  margin: 12px;
  position: relative;
  ${props => props.squared && `
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }`}
  > img {
    ${props => props.squared && `
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: null;
      object-fit: cover;
      `}
      width: 100%;  
    }
  }
`

const Gallery = ({ squared, images }) => (
  <Wrapper>
    {images.map((item, index) => {
      return (
        <Item key={index} squared={squared}>
          <Image {...item} />
        </Item>
      )
    })}
  </Wrapper>
)

export default Gallery
