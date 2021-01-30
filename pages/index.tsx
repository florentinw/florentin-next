import {
  Header,
  SocialMediaFooter,
  CustomLink,
  Logo,
  Navbar,
  PortfolioLayout,
  MetaHead,
} from '../components'
import calcAge from '../components/util/calcAge'

const index = () => (
  <>
    <MetaHead
      isHome
      title="Florentin Walter — Freelance Graphic Designer"
      description={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`}
      image="/meta/card.jpg"
      slug=""
    />
    <Navbar
      leftContent={<Logo />}
      rightContent={<CustomLink href="/about">about</CustomLink>}
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
