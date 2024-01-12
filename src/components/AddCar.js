import Transmission from './Transmission.js';
import ButtonGroup from './ButtonGroup.js'
import { useState } from 'react';

const AddCar = () => {

    const [formData, setFormData] = useState({
        Brand: '',
        CarModel: '',
        Year: 2000,
        Mileage: 0,
        CV: 0,
        Price: 0,
        Title: '',
        Description : ''
      });

    const handleFormData = e =>{ 
        console.log(e.target.value);
    setFormData(prevState => ({
    ...prevState,
    [e.target.name]: e.target.value,
    }));}
    

    const AddCar = e => {
        e.preventDefault();
        
        // reinit values of formula
        setFormData({
            Brand: '',
            CarModel: '',
            Year: 2000,
            Mileage: 0,
            CV: 0,
            Price: 0,
            Title: '',
            Description : ''
        });
    };

    const validateForm = () => {
        if (formData.Brand === '' || formData.CarModel === ''|| 
            formData.Year === '' || formData.Mileage === ''|| 
            formData.CV === '' || formData.Price === ''|| 
            formData.Title === '' || formData.Description === '') {
        alert('Veuillez remplir tous les champs.');
        }
    };
        
    return [(
        <form onSubmit={AddCar}>
            <h1>Détails de l'annonce</h1>
            <h6>Ajouter plus de détails sur votre annonce pour un maximum de visibilité</h6>

        {/* MARQUE, MODELE, ANNEE, KILOMETRAGE ET PUISSANCE FISCALE */}
        <div>
            <label>Marque </label>
                <br></br>
                <input
                    value={formData.Brand}
                    onChange={handleFormData}
                    name='Brand'
                />
            <br></br>
                <label>Modèle </label>
            <br></br>
                <input
                    value={formData.CarModel}
                    onChange={handleFormData}
                    name='CarModel'
                />
            <br></br>
                <label>Année </label>
            <br></br>
                <input
                    type='number'
                    value={formData.Year}
                    onChange={handleFormData}
                    name='Year'
                />
            <br></br>
                <label>Kilométrage </label>
            <br></br>
                <input
                    type='number'
                    value={formData.Mileage}
                    onChange={handleFormData}
                    name='Mileage'
                />      
            <br></br>
                <label>Puissance Fiscale </label>
            <br></br>
                <input
                    type='number'
                    value={formData.CV}
                    onChange={handleFormData}
                    name='CV'
                />      
            <br></br>
                <label>Prix</label>
            <br></br>
                <input
                    type='number'
                    value={formData.Price}
                    onChange={handleFormData}
                    name='Price'
                /> 
            <br/>
            <br/>
                <ButtonGroup/>
                <Transmission/>
            <br/>
                <label>Titre de l'annonce</label>
                
            <br></br>
                <input
                    value={formData.Title}
                    onChange={handleFormData}
                    name='Title'
                /> 
            <br></br>
                <label>Description</label>
            <br></br>
                <input
                    type='textarea'
                    value={formData.Description}
                    onChange={handleFormData}
                    name='Description'
                /> 
                                    
        </div>
            <button type="button" onClick={validateForm}>
                Valider
            </button>
        </form>
),];
};

export default AddCar;