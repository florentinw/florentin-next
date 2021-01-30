import { ReactChild } from 'react'
import styled from 'styled-components'

export default styled.p<{ children: ReactChild | ReactChild[] }>`
  color: var(--mediumContrast);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.7;
  max-width: 730px;
  letter-spacing: 0.02em;
  margin: 0.1em 0 1em 0;
`
