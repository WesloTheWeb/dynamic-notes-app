import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { increment, decrement } from '../../store/counterSlice';

const Instructions = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Instructions</h2>
      <p>
        This is a simple note app that you can post a note and generate a PDF report (coming soon!).
      </p>
      <div>
        <p>Counter value: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Instructions;
