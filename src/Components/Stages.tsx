import Stage from "./Stage";
import StyledStages from "../StyleComponents/Stages";

export default function StagesComponent() {
  return (
    <StyledStages>
      <Stage stageTitle="Not Started" />
      <Stage stageTitle="In Progress" />
      <Stage stageTitle="Completed" />
    </StyledStages>
  );
}
