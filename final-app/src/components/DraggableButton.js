import React, { useState } from 'react';
import Draggable from 'react-draggable';

function DraggableButton(props) {
const [buttonPosition, setButtonPosition] = useState({ x: 100, y: 100 });
const [buttonPressed, setButtonPressed] = useState(false);
const [isClickable, setClickable] = useState(true);

  const handleButtonDrag = (x, y) => {
    // Update the button's position in state
    setButtonPosition({ x, y });
  };

  const handleButtonPress = () => {
    setButtonPressed(!buttonPressed);
    setClickable(!isClickable);
    props.onPress();
  }

  // eslint-disable-next-line no-unused-vars
  const getScreenshot = () => (
    <div>
      <button key={"close"} onClick={props.closeScreenshot}>X</button>
      {props.screenshot && props.screenshot.img ? 
        <img src={props.screenshot.img} alt="" id="currentMap" className="center" /> 
        : <div />}
    </div>
  );
  

  return (
  <div>
    {props.draggable ? (
      <Draggable
        initialPosition={buttonPosition}
        onDrag={handleButtonDrag}
        bounds="parent"
      >
        <button key={props.key}>Drag me!</button>
      </Draggable>
    ) : (
      <button
        key={props.key}
        onClick={handleButtonPress}
        disabled={!isClickable}>
          {props.screenshot.name ?? ""}
      </button>
    )}
  </div>
  );
}

export default DraggableButton