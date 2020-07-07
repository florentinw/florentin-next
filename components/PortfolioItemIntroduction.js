import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Label, SubtitleSmall, Container } from '.'

const Wrapper = styled(Container)`
  display: flex;
  margin-top: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TitleColumn = styled.aside`
  flex: 2;
  margin-right: 20px;
  * {
    max-width: 245px;
  }
`

const ContentColumn = styled.main`
  flex: 5;
`

const InfoGroup = styled.div`
  margin-bottom: 40px;
`

const PortfolioItemIntroduction = ({ client, skills, children, ...props }) => (
  <Wrapper {...props}>
    <TitleColumn>
      <InfoGroup>
        <Label>Client</Label>
        <SubtitleSmall>{client}</SubtitleSmall>
      </InfoGroup>
      <InfoGroup>
        <Label>Skills</Label>
        <SubtitleSmall>{skills}</SubtitleSmall>
      </InfoGroup>
    </TitleColumn>
    <ContentColumn>{children}</ContentColumn>
  </Wrapper>
)

PortfolioItemIntroduction.propTypes = {
  client: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
}

export default PortfolioItemIntroduction
