import styled from 'styled-components'
import { Headline } from '.'

export default styled(Headline)`
  font-size: 30px;
  margin: ${(props) =>
    props.nopadding ? '0.4em 0 0.6em 0' : '1.5em 0 0.4em 0'};
  max-width: 730px;
  font-weight: 600;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`
