import { Header, Navbar, GoBackHomeButton } from '../components'

const ErrorPage = () => (
  <>
    <Navbar leftContent={<GoBackHomeButton />} />
    <Header content={'Always expect the unexpected...\n Sorry, but an unexpected error occured.'} />
  </>
)

export default ErrorPage
