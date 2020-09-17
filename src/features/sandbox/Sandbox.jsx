import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        content='Increment'
        color='green'
        onClick={() => dispatch(increment(20))}
      />
      <Button
        content='Decrement'
        color='red'
        onClick={() => dispatch(decrement(5))}
      />
      <Button
        content='Open Modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </>
  );
};

export default Sandbox;
