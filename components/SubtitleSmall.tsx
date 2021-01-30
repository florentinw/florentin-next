import { ReactChild } from 'react'
import styled from 'styled-components'
import { Subtitle } from '.'

export default styled(Subtitle)<{ children: ReactChild | ReactChild[] }>`
  font-size: 22px;
  max-width: 730px;
  margin: 0.4em 0 0.6em 0;
  @media screen and (max-width: 425px) {
    font-size: 22px;
  }
`
