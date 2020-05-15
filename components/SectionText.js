import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import { Container, Label, Subtitle, BodyText } from '.'

const Wrapper = styled(Container)`
  display: flex;
  margin: 80px auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TitleColumn = styled.header`
  flex: 2;
  margin-right: 20px;
  * {
    max-width: 245px;
  }
`

const ContentColumn = styled.main`
  flex: 5;
`

const SectionText = ({ label, title, text, children }) => (
  <Fade bottom>
    <Wrapper>
      <TitleColumn>
        {label ? <Label>{label}</Label> : null}
        {title ? <Subtitle nopadding='true'>{title}</Subtitle> : null}
        {text ? <BodyText>{text}</BodyText> : null}
      </TitleColumn>
      <ContentColumn>{children}</ContentColumn>
    </Wrapper>
  </Fade>
)

SectionText.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default SectionText
