import { Header } from '../components'
import calcAge from '../components/util/calcAge'

const index = () => (
  <>
    <Header
      content={`${calcAge(
        "2002/06/17"
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products`}
    />
  </>
);

export default index