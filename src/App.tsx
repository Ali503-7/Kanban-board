<<<<<<< main
import Page from "./Components/Page";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./StyleComponents/Header";
import StagesComponent from "./Components/Stages";
import { Body } from "./StyleComponents/Page";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;
=======
import Page from './Components/Page';
import Stages from './Components/Stages';
>>>>>>> main

function App() {
  return (
    <Page>
<<<<<<< main
      <GlobalStyle />
      <Body>
        <Header>Kanban Board</Header>
        <StagesComponent /> {/* Use the new component function name */}
      </Body>
=======
      <h1 className='title'>Kanban Board</h1>
      <Stages />
>>>>>>> main
    </Page>
  );
}

export default App;
