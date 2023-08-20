import Stage from './Stage';

export default function Stages() {
  return (
    <div className='stages'>
      <Stage stageTitle='Not Started' />
      <Stage stageTitle='In Progress' />
      <Stage stageTitle='Completed' />
    </div>
  );
}
