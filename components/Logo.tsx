import styled from 'styled-components'

const LogoSVGFill = styled.svg`
  fill: var(--higherContrast);
`
const Logo = () => (
  <LogoSVGFill
    style={{ height: 36 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 454.83 340"
    fill="currentColor"
  >
    <path d="M333.92,0H454.83L408.16,140H308.5L275.16,240H175.5L142.16,340H0L113.33,0H333.92ZM266.33,140H266L299.33,40h-57.5L188.5,200h57.83ZM199.67,40H142.16L55.5,300h57.83l20-60H133Zm199.66,0H341.5l-20,60h57.83Z" />
  </LogoSVGFill>
)

export default Logo
