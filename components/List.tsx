import { ReactChild } from 'react'
import styled from 'styled-components'

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

const ListItem = ({ children }: { children: ReactChild }) => (
  <ListItemWrapper>
    <BodyText>{children}</BodyText>
  </ListItemWrapper>
)

const List = ({ items }: { items: ReactChild[] }) => (
  <ListWrapper>
    {items.map((item, index) => {
      return <ListItem key={index}>{item}</ListItem>
    })}
  </ListWrapper>
)

export default List
