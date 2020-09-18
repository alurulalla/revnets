import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({
      ...location,
      center: {
        lat: latLng.lat,
        lng: latLng.lng,
      },
    });
  }
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
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
};
// AIzaSyBqn6RzRfuITQR68tr2J6hl0npgL7BjwQs
export default Sandbox;
