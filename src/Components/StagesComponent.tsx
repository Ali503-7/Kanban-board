import Stage from "./Stage";
import StyledStages from "../StyleComponents/Stages";
import { useState } from "react";

export default function StagesComponent() {
  const [notStarted, setNotStarted] = useState<string[]>([]);
  const [inProgress, setInProgress] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  return (
    <StyledStages>
      <Stage
        stageTitle="Not Started"
        notStarted={notStarted}
        setNotStarted={setNotStarted}
      />
      <Stage
        stageTitle="In Progress"
        inProgress={inProgress}
        setInProgress={setInProgress}
      />
      <Stage
        stageTitle="Completed"
        completed={completed}
        setCompleted={setCompleted}
      />
    </StyledStages>
  );
}
