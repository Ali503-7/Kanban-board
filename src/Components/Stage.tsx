import StyledStage from "../StyleComponents/StyledStage";
import { PropsInterface } from "../TS Types/Types";
import ListOfTodo from "./ListOfTodo";

export default function StageComponent({
  stageTitle,
  notStarted,
  setNotStarted,
  inProgress,
  setInProgress,
  completed,
  setCompleted,
}: PropsInterface) {
  
  const PropsData: PropsInterface = {
    notStarted,
    setNotStarted,
    inProgress,
    setInProgress,
    completed,
    setCompleted,
  };

  return (
    <StyledStage>
      <p>{stageTitle}</p>
      <ListOfTodo PropsData={PropsData} />
      <button>+</button>
    </StyledStage>
  );
}
