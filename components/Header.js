import PropTypes from 'prop-types'

import { Container, Headline } from '.'

const Header = ({content}) => (
  <Container style={{ margin: "180px auto 100px auto" }}>
    <Headline>{content}</Headline>
  </Container>
);

Header.propTypes = {
  content: PropTypes.string.isRequired
};

export default Header