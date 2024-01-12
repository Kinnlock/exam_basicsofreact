import React, { useState } from 'react';

function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const Button = ({ id, color, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => handleClick(id)}
    >
      Bouton {id}
    </button>
  );
};
};


export function ButtonGroup;
