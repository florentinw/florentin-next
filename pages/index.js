import Head from 'next/head'
import { Header, SocialMediaFooter, CustomLink, Logo, Navbar, PortfolioLayout } from '../components'
import calcAge from '../components/util/calcAge'

const index = () => (
  <>
    <Head>
      <title>Florentin Walter | Freelance Graphic Designer</title>
      <meta name='title' content='Florentin Walter | Freelance Graphic Designer' />
      <meta
        name='description' content={`${calcAge(
          '2002/06/17'
        )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`}
      />
      <meta property='og:title' content='Florentin Walter | Freelance Graphic Designer' />
      <meta
        property='og:description' content={`${calcAge(
          '2002/06/17'
        )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`}
      />
      <meta property='og:image' content={'https://florentin.design' + require('../assets/imgs/meta/card.jpg')} />
      <meta name='twitter:title' content='Florentin Walter | Freelance Graphic Designer' />
      <meta
        name='twitter:description' content={`${calcAge(
          '2002/06/17'
        )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`}
      />
      <meta name='twitter:image' content={'https://florentin.design' + require('../assets/imgs/meta/card.jpg')} />
    </Head>
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
