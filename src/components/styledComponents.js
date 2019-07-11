import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: bold 1em cursive;
  }

`;

export const Wrapper = styled.section`
  background-color: paleturquoise;
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: start;
`;

export const Form = styled.form`
  padding: 1rem;
  margin: 3rem;
  border: 1px solid black;
`

export const Label = styled.label`
  font-size: 1.5em;
`;

export const IframeWrapper = styled.div`
  grid-column-start: 2;
  position: relative;
  margin: auto;
  width: 100%;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 450px;
`;

export const VideoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1rem;
  margin: 2rem;
  border: 2px solid black;
  width: 25vw;
  background-color: lightcyan;
  cursor: pointer;
`;

export const VideoCardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

export const SearchResults = styled.h1`
  margin: 2rem;
  font-size: 2em;
  display: block;

`;
