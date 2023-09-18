import React, { useState, useRef } from 'react';
import DraggableButton from './DraggableButton';
import { lotus_viper } from '../assets/objects';

function MapImage(props) {
  const [enableDrag, setEnableDrag] = useState(false);
  const [buttonCount, setButtonCount] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [isShowingScreenshot, setShowingScreenshot] = useState(false);
  const [pressedButton, setPressedButton] = useState(undefined);
  const [currentScreenshot, setCurrentScreenshot] = useState(undefined);

  // Create an array to store refs for each button
  const buttonRefs = useRef([]);

  const toggleDraggability = () => {
    setEnableDrag(!enableDrag);
  };

  const addDraggableButton = () => {
    setButtonCount(buttonCount + 1);
    setButtons([...buttons, { x: 100, y: 100 }]);

    // Create a new ref for the added button and store it in the refs array
    buttonRefs.current.push(React.createRef());
  };

  const onButtonPressed = (index) => {
    setShowingScreenshot(true);
    setPressedButton(buttons[index]);
    // Check if the ref exists and is not null before calling getScreenshot
    const buttonRef = buttonRefs.current[index];
    if (buttonRef && buttonRef.current) {
      setCurrentScreenshot(buttonRef.current.getScreenshot());
    }
  };

  const closeShownScreenshot = () => {
    setShowingScreenshot(false);
  }

  return (
    <div>
  <div className="map-container">
    <h1 className="center" id="currentMap">
      {props.name}
    </h1>
    {isShowingScreenshot && pressedButton && currentScreenshot ? (
      <img src={currentScreenshot} alt="" id="currentScreenshot" className="center" />
    ) : (
      <div />
    )}
    <img src={props.img} alt="" id="currentMap" className="center" />
  </div>
  <div className="button-column">
    <button key={"add"} onClick={addDraggableButton}>
      Add
    </button>
    <button key={"edit"} onClick={toggleDraggability}>
      {enableDrag ? 'Stop Editing' : 'Edit'}
    </button>
    {buttons.map((position, index) => (
      <DraggableButton
        key={index}
        initialPosition={position + index}
        onPress={() => onButtonPressed(index)}
        screenshot={lotus_viper[index] ?? { name: undefined, img: undefined }}
        ref={buttonRefs.current[index]} // Pass the ref to the DraggableButton component
        closeScreenshot={closeShownScreenshot}
        draggable={enableDrag}
      />
    ))}
  </div>
</div>

  );
}

export default MapImage;
