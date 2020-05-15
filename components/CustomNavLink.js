import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const CustomNavLinkWrapper = styled.a`
  color: ${props => props.color || 'var(--higherContrast)'};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noborder ? '0px' : '0 2px 0.15em 2px')};
  border-bottom: ${props => (props.noborder ? 'none' : '0.15em solid var(--lowerContrast)')};
  &.active {
    border-bottom: ${props => (props.noborder ? 'none' : '0.15em solid var(--higherContrast)')};
  }
`

const CustomNavLink = (props) => {
  const router = useRouter()

  let className = props.className || ''
  if (router.pathname === props.href) {
    className = `${className} active`
  }

  return (
    <Link href={props.href} {...props}>
      {React.cloneElement((
        <CustomNavLinkWrapper>
          {props.children}
        </CustomNavLinkWrapper>), { className })}
    </Link>
  )
}

CustomNavLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default CustomNavLink
