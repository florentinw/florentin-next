import React, { ReactChild } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { useRouter } from 'next/router'

const CustomNavLinkWrapper = styled.a<{ noborder?: boolean }>`
  color: ${(props) => props.color || 'var(--higherContrast)'};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  cursor: pointer;
  padding: ${(props) => (props.noborder ? '0px' : '0 2px 0.15em 2px')};
  border-bottom: ${(props) =>
    props.noborder ? 'none' : '0.15em solid var(--lowerContrast)'};
  &.active {
    border-bottom: ${(props) =>
      props.noborder ? 'none' : '0.15em solid var(--higherContrast)'};
  }
`

const CustomNavLink = (props: {
  href: string
  children: ReactChild | ReactChild[]
  className?: string
}) => {
  const router = useRouter()

  let className = props.className || ''
  if (router.pathname === props.href) {
    className = `${className} active`
  }

  return (
    <Link {...props}>
      {React.cloneElement(
        <CustomNavLinkWrapper>{props.children}</CustomNavLinkWrapper>,
        { className }
      )}
    </Link>
  )
}

export default CustomNavLink
