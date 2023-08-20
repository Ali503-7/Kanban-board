interface PropsInterface {
  stageTitle: string;
}

export default function Stage({ stageTitle }: PropsInterface) {
  return (
    <div className='stage'>
      <p className='stage-title'>{stageTitle}</p>
      <button>+</button>
    </div>
  );
}
