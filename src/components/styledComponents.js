import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100vw;
  }

`;

export const Wrapper = styled.section`
  background-color: paleturquoise;
`;
