import { Header, Navbar, GoBackHomeButton, MetaHead } from '../components'
import calcAge from '../components/util/calcAge'

const ErrorPage = () => (
  <>
    <MetaHead
      title='Oops!' description={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`} image={require('../public/meta/card.jpg')} slug=''
    />
    <Navbar leftContent={<GoBackHomeButton />} />
    <Header content={'Always expect the unexpected...\n Sorry, but an unexpected error occured.'} />
  </>
)

export default ErrorPage
