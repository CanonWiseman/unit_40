import React, {useState, useEffect} from 'react';
import "./MadlibsForm.css";

let fieldsFilled = false;

const MadlibsForm = (props) =>{
    // sets initial values for form
    const INITIAL_VALUES = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }

    //sets state for form fields
    const [formData, setFormData] = useState(INITIAL_VALUES);

    //sets useEffect for checking if all form fields are filled out and allows button to be clicked
    useEffect(function checkFields(){
        fieldsFilled = true;
        for (const [key, value] of Object.entries(formData)) {
            if(!value){
                fieldsFilled = false;
            }
          }
    }, [formData])

    //handle change sets specific field while keeping older fields the same
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    //handles submit and resets form back to initial values
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        fieldsFilled = false;
        props.createStory(formData);
        setFormData(INITIAL_VALUES);
    }

    return (
        <form className="MadlibForm-form" onSubmit={handleFormSubmit}>
            <input
                id="noun1"
                name="noun1"
                type="text"
                placeholder="noun"
                value={formData.noun1}
                onChange={handleChange}
            />
            <input
                id="noun2"
                name="noun2"
                type="text"
                placeholder="noun 2"
                value={formData.noun2}
                onChange={handleChange}
            />
            <input
                id="adjective"
                name="adjective"
                type="text"
                placeholder="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <input
                id="color"
                name="color"
                type="text"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button className={fieldsFilled ? "MadlibForm-button-active" : "MadlibForm-button-inactive"}>Get Story</button>
            
        </form>
        
        
    )
}

export default MadlibsForm;