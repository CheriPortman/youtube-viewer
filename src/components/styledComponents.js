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
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  /* margin: auto; */
  margin-left: 15px;
  margin-right: 15px;
  height: 100%;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
`;

export const VideoCardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

export const SearchResults = styled.h1`
  margin: 2rem;
  font-size: 2em;
`;
