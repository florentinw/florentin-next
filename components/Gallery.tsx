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

const Item = styled.div<{ squared?: boolean }>`
  flex: 1 0 300px;
  margin: 12px;
  position: relative;
  ${(p) =>
    p.squared &&
    `
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }`}

  > img {
      width: 100%;  
    }
  }
`

const Gallery = ({
  squared,
  images,
}: {
  squared?: boolean
  images: {
    src: string
    alt?: string
    height: number
    width: number
    layout?: 'fixed' | 'fill'
  }[]
}) => (
  <Wrapper>
    {images.map((i, index) => {
      return (
        <Item key={index} squared={squared}>
          <Image layout={squared ? 'fill' : 'intrinsic' || i.layout} {...i} />
        </Item>
      )
    })}
  </Wrapper>
)

export default Gallery
