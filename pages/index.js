import { Header, SocialMediaFooter, CustomLink, Logo, Navbar, PortfolioLayout } from '../components'
import calcAge from '../components/util/calcAge'

const index = () => (
  <>
    <Navbar
      leftContent={<Logo />}
      rightContent={<CustomLink href='/about'>about</CustomLink>}
    />
    <Header
      content={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products`}
    />
    <PortfolioLayout />
    <SocialMediaFooter />
  </>
)

export default index
