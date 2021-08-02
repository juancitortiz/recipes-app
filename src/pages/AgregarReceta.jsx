import { Fragment, useState } from "react";
import db from './../data/db.json';
import './agregarReceta.css';

export default function AgregarReceta() {
    
    //const [recetas, setRecetas] = useState(db.meals)
    const [form, setForm] = useState({})
    document.title = 'Add Recipe';

    function guardarDatos(params) {
        if(form){
            console.log(form.id)
        }
        else{
            console.log("form = null")
        }
    }

    return(
        <Fragment>
            <form id="add-recipe" className="form">
                <div className="general-description">
                    <div className="input-pair">
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text"/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="category">Category</label>
                        <input id="category" name="category" type="text"/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="area">Area Origin</label>
                        <input id="area" name="area" type="text"/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" name="instructions" placeholder="Write instructions here..."  />
                    </div>
                    <div className="input-pair">
                        <label htmlFor="thumb">Meal Thumb</label>
                        <input id="thumb" name="thumb" type="url"/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="tags">Tags</label>
                        <input id="tags" name="tags" type="text"/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="youtube">YouTube link</label>
                        <input id="youtube" name="youtube" type="url"/>
                    </div>
                </div>
                <div className="ingredients-list">
                    
                </div>
                <input className="submit-button" type="submit"/>
            </form>
        </Fragment>
    )
}