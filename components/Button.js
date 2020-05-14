import styled from 'styled-components'

export default styled.button`
  background-color: ${props => props.theme.higherContrast || 'gray'};
  border: none;
  color: ${props => props.theme.background || 'black'};
  padding: 12px 18px;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "CircularStd";
  font-size: 12px;
  letter-spacing: 0.03em;
  cursor: pointer;
  white-space: nowrap;
`
