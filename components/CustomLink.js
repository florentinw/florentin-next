import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLink = styled.a`
  color: ${props => props.color || 'var(--higherContrast)'};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noBorder ? '0px' : '0 2px 0.0.8em 2px')};
  border-bottom: ${props => (props.noBorder ? 'none' : '0.15em solid var(--lowerContrast)')};
`

const CustomLink = (props) => {
  return props.isExternal ? (
    <StyledLink target='_blank' rel='noopener noreferrer' href={props.href} {...props} />
  ) : (
    <Link href={props.href}>
      <StyledLink {...props}>
        {props.children}
      </StyledLink>
    </Link>
  )
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  noBorder: PropTypes.bool
}

export default CustomLink
