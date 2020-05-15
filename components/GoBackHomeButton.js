import styled from 'styled-components'

import { CustomLink } from '.'
import ChevronBackIcon from './icons/ChevronBackIcon'

const Wrapper = styled(CustomLink)`
  display: flex;
  align-items: center;
  line-height: 1.3;
  svg {
    margin-right: 10px;
  }
`

const GoBackButton = ({ children }) => (
  <Wrapper isExternal={false} href='/' noBorder>
    <ChevronBackIcon />
    {children}
  </Wrapper>
)

export default GoBackButton
