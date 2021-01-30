import { ReactChild } from 'react'
import styled from 'styled-components'

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

const PortfolioItemIntroduction = ({
  client,
  skills,
  children,
  ...props
}: {
  client: string
  skills: string
  children: ReactChild | ReactChild[]
  initial: any
  animate: any
  transition: any
}) => (
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

export default PortfolioItemIntroduction
