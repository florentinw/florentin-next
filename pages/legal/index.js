import { Header, BodyText, Highlight, Container, Navbar, GoBackHomeButton, InlineNavItem } from '../../components'

const LegalDisclosure = ({ match }) => (
  <>
    <Navbar
      leftContent={<GoBackHomeButton />}
      rightContent={
        <nav>
          <ul>
            <InlineNavItem href='/legal/'>Legal Disclosure</InlineNavItem>
            <InlineNavItem href='/legal/privacypolicy'>Privacy Policy</InlineNavItem>
            <InlineNavItem href='/legal/termsandconditions/'>Terms &amp; Conditions</InlineNavItem>
          </ul>
        </nav>
      }
    />
    <Header content='Provider identification pursuant to §5 of the TMG' />
    <Container>
      <BodyText>
        <Highlight>Florentin Walter</Highlight>
        <br />
            Breslauerstraße 12 · 63927 Bürgstadt · Germany
      </BodyText>
      <BodyText>
        <Highlight>Mail:</Highlight> hello@florentin.design <br />
        <Highlight>Phone:</Highlight> 0174 8860123
      </BodyText>
    </Container>
  </>
)

export default LegalDisclosure
