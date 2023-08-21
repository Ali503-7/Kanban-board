import Page from "./Components/Page";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./StyleComponents/Header";
import StagesComponent from "./Components/Stages";
import { Body } from "./StyleComponents/Page";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Page>
      <GlobalStyle />
      <Body>
        <Header>Kanban Board</Header>
        <StagesComponent /> {/* Use the new component function name */}
      </Body>
    </Page>
  );
}

export default App;
