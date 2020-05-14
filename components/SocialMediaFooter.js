import styled from 'styled-components'

import { Subtitle, Container, CustomLink } from '.'

const Wrapper = styled(Container)`
  margin: 100px auto;
`;

const SocialMediaFooter = () => (
  <Wrapper>
    <Subtitle>
      Find out about what I’m currently working on over at{" "}
      <CustomLink isExternal={true} color="#ff73c5" to="https://dribbble.com/florentin">
        Dribbble
      </CustomLink>
          , like some of my awesome tweets on{" "}
      <CustomLink isExternal={true} color="#1da1f2" to="https://twitter.com/florentin">
        Twitter
          </CustomLink>{" "}
          , shoot me an{" "}
      <CustomLink isExternal={true} color="#ffcd65" to="mailto:hello@florentin.design?Subject=👋">
        Email
          </CustomLink>
      {" "}or let's do some business on{" "}
      <CustomLink isExternal={true} color="#2867b2" to="https://linkedin.com/in/florentinw/">
        Linkedin
          </CustomLink>
          .
        </Subtitle>
    <Subtitle>– I’d love to hear from you!</Subtitle>
  </Wrapper> 
);

export default SocialMediaFooter