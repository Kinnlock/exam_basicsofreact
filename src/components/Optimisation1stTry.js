import React, { useState } from 'react';

function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState(null);

  const options = [
    { name: 'Diesel', label: 'Type de Carburant' },
    { name: 'Essence', label: 'Transmission' },
    // Ajoutez d'autres options au besoin
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderButtons = (option) => {
    return (
      <div key={option.name}>
        <label>{option.label}</label> <br />
        {option.buttons.map((button) => (
          <Button
            key={button.name}
            name={button.name}
            color={selectedButton === button.name ? 'cyan' : 'light grey'}
            handleClick={handleButtonClick}
          />
        ))}
        <br />
        <br />
      </div>
    );
  };

  const Button = ({ name, color, handleClick }) => {
    return (
      <button style={{ backgroundColor: color }} onClick={() => handleClick(name)}>
        {name}
      </button>
    );
  };

  return <>{options.map(renderButtons)}</>;
}

export default ButtonGroup;
