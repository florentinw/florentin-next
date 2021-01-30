import styled from 'styled-components'

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

const SectionText = ({
  label,
  title,
  text,
  children,
  ...props
}: {
  label?: string
  title?: string
  text?: string
  children?: any
  initial?: any
  animate?: any
  transition?: any
}) => (
  <Wrapper {...props}>
    <TitleColumn>
      {label && <Label>{label}</Label>}
      {title && <Subtitle nopadding={true}>{title}</Subtitle>}
      {text && <BodyText>{text}</BodyText>}
    </TitleColumn>
    <ContentColumn>{children}</ContentColumn>
  </Wrapper>
)

export default SectionText
