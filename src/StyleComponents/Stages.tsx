import { styled } from "styled-components";
import { StagesProps } from "../TS Types/Types";

const StyledStages = styled.div<StagesProps>`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default StyledStages;
