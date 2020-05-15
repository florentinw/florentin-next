import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLink = styled.a`
  color: ${props => props.color || 'var(--higherContrast)'};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noborder ? '0px' : '0 2px 0.15em 2px')};
  border-bottom: ${props => (props.noborder ? 'none' : '0.15em solid var(--lowerContrast)')};
`

const CustomLink = (props) => {
  return props.isExternal ? (
    <StyledLink target='_blank' rel='noopener noreferrer' href={props.href} {...props} />
  ) : (
    <Link href={props.href} {...props}>
      <StyledLink>
        {props.children}
      </StyledLink>
    </Link>
  )
}

CustomLink.propTypes = {
  isExternal: PropTypes.bool.isRequired,
  noborder: PropTypes.bool
}

export default CustomLink
