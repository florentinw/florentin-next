import { ReactChild } from 'react'
import styled from 'styled-components'

import { CustomNavLink } from '.'

const Wrapper = styled.li`
  display: inline;
  margin-left: 15px;
  @media screen and (max-width: 425px) {
    display: block;
    line-height: 1.6;
    margin: 6px 0;
  }
`

const InlineNavItem = ({
  children,
  href,
}: {
  children: ReactChild | ReactChild[]
  href: string
}) => (
  <Wrapper>
    <CustomNavLink href={href}>{children}</CustomNavLink>
  </Wrapper>
)

export default InlineNavItem
