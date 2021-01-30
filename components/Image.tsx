import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageComponent = styled(Image)<{
  height?: number
  width?: number
  src: string
  alt?: string
  layout?: 'intrinsic' | 'fill' | 'responsive'
}>`
  border-radius: 5px;
  width: 100%;
`

const ImageC = ({
  height,
  width,
  src,
  alt,
  layout,
  ...props
}: {
  height?: number
  width?: number
  src: string
  alt?: string
  layout?: 'intrinsic' | 'fill' | 'responsive'
}) => (
  <motion.div>
    {layout === 'fill' ? (
      <ImageComponent src={src} alt={alt} layout={layout} objectFit="cover" />
    ) : (
      <ImageComponent
        src={src}
        alt={alt}
        layout={'intrinsic'}
        height={height}
        width={width}
      />
    )}
  </motion.div>
)

export default ImageC
