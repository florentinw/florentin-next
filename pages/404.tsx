import { Header, Navbar, GoBackHomeButton, MetaHead } from '../components'
import calcAge from '../components/util/calcAge'

const NotFoundPage = () => (
  <>
    <MetaHead
      title='Oops!' description={`${calcAge(
          '2002/06/17'
        )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`} image='/meta/card.jpg' slug=''
    />
    <Navbar leftContent={<GoBackHomeButton />} />
    <Header content={'Looks like you\'re lost...\n Sorry, but the page you are looking for does not exist.'} />
  </>
)

export default NotFoundPage
