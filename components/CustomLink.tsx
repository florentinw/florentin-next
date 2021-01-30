import Link from 'next/link'
import styled from 'styled-components'
import { ReactChild } from 'react'

const StyledLink = styled.a<{ noBorder?: boolean }>`
  color: ${(props) => props.color || 'var(--higherContrast)'};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${(props) => (props.noBorder ? '0px' : '0 2px 0.0.8em 2px')};
  border-bottom: ${(props) =>
    props.noBorder ? 'none' : '0.15em solid var(--lowerContrast)'};
`

const CustomLink = (props: {
  href: string
  isExternal?: boolean
  noBorder?: boolean
  color?: string
  children?: ReactChild | ReactChild[]
}) => {
  return props.isExternal ? (
    <StyledLink target="_blank" rel="noopener noreferrer" {...props} />
  ) : (
    <Link href={props.href}>
      <StyledLink {...props}>{props.children}</StyledLink>
    </Link>
  )
}

export default CustomLink
