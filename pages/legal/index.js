import { Header, BodyText, Highlight, Container, Navbar, GoBackHomeButton, InlineNavItem, CustomLink, MetaHead } from '../../components'
import calcAge from '../../components/util/calcAge'

const LegalDisclosure = ({ match }) => (
  <>
    <MetaHead
      title='Legal Disclosure' description={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`} image='/meta/card.jpg' slug=''
    />
    <Navbar
      leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>}
      rightContent={
        <nav>
          <ul>
            <InlineNavItem href='/legal'>Legal Disclosure</InlineNavItem>
            <InlineNavItem href='/legal/privacypolicy'>Privacy Policy</InlineNavItem>
            <InlineNavItem href='/legal/termsandconditions'>Terms &amp; Conditions</InlineNavItem>
          </ul>
        </nav>
      }
    />
    <Header content='Provider identification pursuant to §5 of the TMG' />
    <Container initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}>
      <BodyText>
        <Highlight>Florentin Walter</Highlight>
        <br />
            Breslauerstraße 12 · 63927 Bürgstadt · Germany
      </BodyText>
      <BodyText>
        <Highlight>Mail:</Highlight> <CustomLink href='mailto:hi@florentin.co?Subject=👋' isExternal>hi@florentin.co</CustomLink> <br />
        <Highlight>Phone:</Highlight> <CustomLink href='tel:004917647397970‬' isExternal>+49 176 47397970‬</CustomLink>
      </BodyText>
    </Container>
  </>
)

export default LegalDisclosure
