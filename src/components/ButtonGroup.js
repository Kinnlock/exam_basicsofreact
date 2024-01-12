import React, { useState } from 'react';


function ButtonGroup() {
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
        name={'Diesel'}
        color={selectedButton === 'Diesel' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Essence'}
        color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Electrique'}
        color={selectedButton === 'Electrique' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'LPG'}
        color={selectedButton === 'LPG' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Hybride'}
        color={selectedButton === 'Hybride' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />      
      <br/>
      <br/>
      <label></label>
    </div>
  ),
  (
    <div>
    <label> Transmission </label> <br/>
    <Button
      name={'Manuelle'}
      color={selectedButton === 'Manuelle' ? 'cyan' : 'light grey'}
      handleClick={handleButtonClick}
    />
    <Button
      name={'Essence'}
      color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
      handleClick={handleButtonClick}
    /> 
    <br/>
    <br/>     
  </div>
   ),
   (
     <div>
     <label> Type de Carburant </label> <br/>
     <Button
       name={'Diesel'}
       color={selectedButton === 'Diesel' ? 'cyan' : 'light grey'}
       handleClick={handleButtonClick}
     />
     <Button
       name={'Essence'}
       color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
       handleClick={handleButtonClick}
     />
     <Button
       name={'Electrique'}
       color={selectedButton === 'Electrique' ? 'cyan' : 'light grey'}
       handleClick={handleButtonClick}
     />
     <Button
       name={'LPG'}
       color={selectedButton === 'LPG' ? 'cyan' : 'light grey'}
       handleClick={handleButtonClick}
     />
     <Button
       name={'Hybride'}
       color={selectedButton === 'Hybride' ? 'cyan' : 'light grey'}
       handleClick={handleButtonClick}
     />      
     <br/>
     <br/>
   </div>
    ),
    (
      <div>
      <label> Type de Carburant </label> <br/>
      <Button
        name={'Diesel'}
        color={selectedButton === 'Diesel' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Essence'}
        color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Electrique'}
        color={selectedButton === 'Electrique' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'LPG'}
        color={selectedButton === 'LPG' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />
      <Button
        name={'Hybride'}
        color={selectedButton === 'Hybride' ? 'cyan' : 'light grey'}
        handleClick={handleButtonClick}
      />   
      <br/>
      <br/>   
    </div>
     ),
     (
       <div>
       <label> Type de Carburant </label> <br/>
       <Button
         name={'Diesel'}
         color={selectedButton === 'Diesel' ? 'cyan' : 'light grey'}
         handleClick={handleButtonClick}
       />
       <Button
         name={'Essence'}
         color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
         handleClick={handleButtonClick}
       />
       <Button
         name={'Electrique'}
         color={selectedButton === 'Electrique' ? 'cyan' : 'light grey'}
         handleClick={handleButtonClick}
       />
       <Button
         name={'LPG'}
         color={selectedButton === 'LPG' ? 'cyan' : 'light grey'}
         handleClick={handleButtonClick}
       />
       <Button
         name={'Hybride'}
         color={selectedButton === 'Hybride' ? 'cyan' : 'light grey'}
         handleClick={handleButtonClick}
       />    
       <br/>
       <br/>  
     </div>
      ),
      (
        <div>
        <label> Type de Carburant </label> <br/>
        <Button
          name={'Diesel'}
          color={selectedButton === 'Diesel' ? 'cyan' : 'light grey'}
          handleClick={handleButtonClick}
        />
        <Button
          name={'Essence'}
          color={selectedButton === 'Essence' ? 'cyan' : 'light grey'}
          handleClick={handleButtonClick}
        />
        <Button
          name={'Electrique'}
          color={selectedButton === 'Electrique' ? 'cyan' : 'light grey'}
          handleClick={handleButtonClick}
        />
        <Button
          name={'LPG'}
          color={selectedButton === 'LPG' ? 'cyan' : 'light grey'}
          handleClick={handleButtonClick}
        />
        <Button
          name={'Hybride'}
          color={selectedButton === 'Hybride' ? 'cyan' : 'light grey'}
          handleClick={handleButtonClick}
        />      
      </div>
       )]
}

export default ButtonGroup;
