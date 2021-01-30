import styled from 'styled-components'

import { Subtitle, Container, CustomLink } from '.'

const Wrapper = styled(Container)`
  margin: 100px auto;
`

const SocialMediaFooter = () => (
  <Wrapper>
    <Subtitle>
      Find out about what I’m currently working on over at{' '}
      <CustomLink isExternal color='#ff73c5' href='https://dribbble.com/florentin'>
        Dribbble
      </CustomLink>
        , like some of my awesome tweets on{' '}
      <CustomLink isExternal color='#1da1f2' href='https://twitter.com/florentin'>
        Twitter
      </CustomLink>
        , shoot me an{' '}
      <CustomLink isExternal color='#ffcd65' href='mailto:hi@florentin.co?Subject=👋'>
        Email
      </CustomLink>
      {' '}or let's do some business on{' '}
      <CustomLink isExternal color='#2867b2' href='https://linkedin.com/in/florentinw/'>
        LinkedIn
      </CustomLink>
        .
    </Subtitle>
    <Subtitle>– I’d love to hear from you!</Subtitle>
  </Wrapper>
)

export default SocialMediaFooter
