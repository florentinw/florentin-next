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
  margin: 12px 12px;
  > div {
    position: relative;
    ${squared =>
    squared
      ? `&:before {
    content: "";
    float: left;
    padding-top: 100%;
  }`
      : null}
    >img {
      position: ${squared => (squared ? 'absolute;' : 'relative')};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Gallery = ({ images, squared }) => (
  <Wrapper>
    {images.map((item, index) => {
      return (
        <Item key={index} squared={squared}>
          <Image src={item.src} />
        </Item>
      )
    })}
  </Wrapper>
)

export default Gallery
