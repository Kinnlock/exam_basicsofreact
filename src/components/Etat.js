import React, { useState } from 'react';


function Etat() {
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
    <label> Type de Carburant </label> <br/>
            <Button
        name={'Excellent'}
        color={selectedButton === 'Excellent' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Bon'}
        color={selectedButton === 'Bon' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Endommagé'}
        color={selectedButton === 'Endommagé' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Pour Pièces'}
        color={selectedButton === 'Pour Pièces' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <br/>
      <br/>
      <label></label>
    </div>
  )]
}

export default Etat;
