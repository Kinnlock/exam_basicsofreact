import React, { useState } from 'react';


function Origin() {
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
        name={'Dédouanée'}
        color={selectedButton === 'Dédouanée' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Non Dédouanée'}
        color={selectedButton === 'Non Dédouanée' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'WW en Algérie'}
        color={selectedButton === 'WW en Algérie' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Importée Neuve'}
        color={selectedButton === 'Importée Neuve' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />      
      <br/>
      <br/>
      <label></label>
    </div>
  )]
}

export default Origin;
