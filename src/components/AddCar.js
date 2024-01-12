import { useState, useRef } from 'react';
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
        
        // preparing data to server
    };
    const validateForm = () => {
    // Vérifier si les champs sont vides
        if (formData.champ1 === '' || formData.champ2 === '') {
        alert('Veuillez remplir tous les champs.');
        } else {
        // Traitement du formulaire ici (par exemple, soumission du formulaire)
        console.log('Formulaire soumis avec succès!', formData);
        };
    };  
        

    return (
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
        </div>

        {/* //TYPE DE CARBURANT = PLUSIEUR BOUTON DISPONIBLE ON PEUT EN CHOISIR 1 (FAIRE DISPARAITRE LES AUTRES ? OU JUSTE STYLISER ?) */}

        {/* //BOITE DE VITESSE ON PEUT EN CHOISIR 1 (FAIRE DISPARAITRE LES AUTRES ? OU JUSTE STYLISER ?) */}

        {/* //ETAT IDEM */}

        {/* //ORIGINE IDEM */}

        {/* //NOMBRE DE PORTES IDEM */}

        {/* //PREMIERE MAIN IDEM */}

        {/* //=================INFO ANNONCE====================// */}

        {/* //PRIX EN SAISIE DE VALEUR (CHOISIR DEVISE AVEC CONVERSION ?) */}

        {/* //TITRE DE L'ANNONCE */}

        {/* //DESCRIPTION */}

        {/* //PLUS DE DETAILS SELECTION MULTIPLE DE BOUTONS */}
            <button type="button" onClick={validateForm}>
                Valider
            </button>
        </form>
    );
};


export default AddCar;