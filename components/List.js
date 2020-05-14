import styled from 'styled-components'
import PropTypes from 'prop-types'

import { BodyText } from '.'

const ListItemWrapper = styled.li`
  list-style-type: disc;
  list-style-position: inside;
  > p {
    display: inline;
  }
`

const ListWrapper = styled.ul`
  margin: 1em 0;
`

const ListItem = ({ children }) => (
  <ListItemWrapper>
    <BodyText>{children}</BodyText>
  </ListItemWrapper>
)

const List = ({ items }) => (
  <ListWrapper>
    {items.map((item, index) => {
      return <ListItem key={index}>{item}</ListItem>
    })}
  </ListWrapper>
)

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List
