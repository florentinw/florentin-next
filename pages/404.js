import Head from 'next/head'
import { Header, Navbar, GoBackHomeButton } from '../components'

const NotFoundPage = () => (
  <>
    <Head>
      <title>Oops! | Florentin</title>
    </Head>
    <Navbar leftContent={<GoBackHomeButton />} />
    <Header content={'Looks like you\'re lost...\n Sorry, but the page you are looking for does not exist.'} />
  </>
)

export default NotFoundPage
