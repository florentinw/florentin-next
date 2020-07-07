import styled from 'styled-components'
import { ThreeColumnLayout } from '.'

const Navbar = styled(ThreeColumnLayout)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`

export default function (props) {
  return (
    <Navbar
      {...props}
      initial={{ opacity: 0, y: -20, position: 'absolute', top: '0', right: 0, left: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    />
  )
}
