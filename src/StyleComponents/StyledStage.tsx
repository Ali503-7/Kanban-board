import styled from "styled-components";
import { StagesProps } from "../TS Tyes/Tyes"; // Make sure the path is correct

const StyledStage = styled.div<StagesProps>`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: calc(80% / 3);
  & button {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #027e67;
    font-size: 38px;
    color: #fff;
    width: 100%;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: rgb(16, 134, 95);
      transition: all 0.3s;
      transform: scale(1.02);
    }
  }

  & p {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
  }
`;

export default StyledStage; // Rename the exported component
