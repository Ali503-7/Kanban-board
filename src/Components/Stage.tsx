import StyledStage from "../StyleComponents/StyledStage";

interface PropsInterface {
  stageTitle: string;
}

export default function StageComponent({ stageTitle }: PropsInterface) {
  return (
    <StyledStage>
      <p className="stage-title">{stageTitle}</p>
      <button>+</button>
    </StyledStage>
  );
}
