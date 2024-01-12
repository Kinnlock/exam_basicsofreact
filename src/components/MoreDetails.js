import React, { useState } from 'react';

function Moredetails() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttonConfigs = [
    { label: 'Type de Carburant', buttons: ['Diesel', 'Essence', 'Electrique', 'LPG', 'Hybride'] },
    { label: 'Transmission', buttons: ['Manuelle', 'Automatique'] },
    // Ajoutez d'autres configurations de groupe de boutons selon vos besoins
  ];

  return (
    <div>
      {buttonConfigs.map((config, index) => (
        <div key={index}>
          <label>{config.label}</label> <br />
          {config.buttons.map((buttonName) => (
            <Button
              key={buttonName}
              name={buttonName}
              color={selectedButton === buttonName ? 'cyan' : 'light grey'}
              handleClick={handleButtonClick}
            />
          ))}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

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

export default Moredetails;
