import styled from "styled-components";

export default styled.h1`
  color: var(--higherContrast);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  margin: 0.1em 0 0.9em 0;
  white-space: pre-line;
  @media screen and (max-width: 425px) {
    font-size: 32px;
  }
`;