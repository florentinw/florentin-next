import PropTypes from 'prop-types'

import { Container, Headline } from '.'

const Header = ({ content }) => (
  <Container
    style={{ margin: '180px auto 100px auto' }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{}}
    transition={{
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }}
  >
    <Headline>{content}</Headline>
  </Container>
)

Header.propTypes = {
  content: PropTypes.string.isRequired
}

export default Header
