import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '.'

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 40px 0;
  text-align: center;
  > *:not(:empty) {
    flex: 1;
  }
  > *:first-child {
    text-align: left;
  }
  > *:last-child {
    text-align: right;
  }
`

const ThreeColumnLayout = ({ leftContent, centerContent, rightContent, className }) => (
  <FlexContainer className={className}>
    <div>{leftContent}</div>
    <div>{centerContent}</div>
    <div>{rightContent}</div>
  </FlexContainer>
)

ThreeColumnLayout.propTypes = {
  leftContent: PropTypes.element.isRequired,
  centerContent: PropTypes.element.isRequired,
  rightContent: PropTypes.element.isRequired,
  className: PropTypes.string
}

export default ThreeColumnLayout
