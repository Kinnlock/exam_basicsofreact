import React, { useState } from 'react';


function Transmission() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

const Button = ({ name, color, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

  return [(
    <div>
    <label> Transmission </label> <br/>
    <Button
      name={'Manuelle'}
      color={selectedButton === 'Manuelle' ? 'cyan' : 'light grey'}
      handleClick={handleButtonClick}
    />
    <Button
      name={'Automatique'}
      color={selectedButton === 'Automatique' ? 'cyan' : 'light grey'}
      handleClick={handleButtonClick}
    /> 
    <br/>
    <br/>     
  </div>

       )]
}

export default Transmission;
