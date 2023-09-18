import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

function DraggableButton(props) {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isClickable, setClickable] = useState(true);

  // Store the non-draggable position separately
  const [nonDraggablePosition, setNonDraggablePosition] = useState({ x: 0, y: 0 });

  const handleButtonDrag = (e, data) => {
    console.log('Button dragged:', data.x, data.y);
    // Update the button's position in state
    setButtonPosition({ x: data.x, y: data.y });
  };

  const handleButtonPress = () => {
    setButtonPressed(!buttonPressed);
    setClickable(!isClickable);
    props.onPress();
  };

  useEffect(() => {
    // Update the non-draggable position when draggable is toggled off
    if (!props.draggable) {
      setNonDraggablePosition(buttonPosition);
    }
  }, [props.draggable, buttonPosition]);

  return (
    <div>
      {props.draggable ? (
        <Draggable
          defaultPosition={nonDraggablePosition} // Use non-draggable position
          onDrag={handleButtonDrag}
        >
          <button key={props.key}>Drag me!</button>
        </Draggable>
      ) : (
        <button
          style={{ position: 'relative', top: nonDraggablePosition.y, left: nonDraggablePosition.x }}
          key={props.key}
          onClick={handleButtonPress}
        >
          {props.screenshot.name ?? ''}
        </button>
      )}
    </div>
  );
}

export default DraggableButton;
