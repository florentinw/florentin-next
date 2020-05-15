import Head from 'next/head'
import { Header, Navbar, GoBackHomeButton } from '../components'

const ErrorPage = () => (
  <>
    <Head>
      <title>Oops! | Florentin Walter — Freelance Graphic Designer</title>
    </Head>
    <Navbar leftContent={<GoBackHomeButton />} />
    <Header content={'Always expect the unexpected...\n Sorry, but an unexpected error occured.'} />
  </>
)

export default ErrorPage
