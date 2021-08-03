import { Fragment, useState } from "react";
import db from './../data/db.json';
import './agregarReceta.css';
import ListaIngredientes from "../components/ListaIngredientes";

export default function AgregarReceta() {
    
    //const [recetas, setRecetas] = useState(db.meals)
    const [form, setForm] = useState({})
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [area, setArea] = useState('')
    const [instructions, setInstructions] = useState('')
    const [thumb, setThumb] = useState('')
    const [tags, setTags] = useState('')
    const [youtube, setYoutube] = useState('')
    document.title = 'Add Recipe';

    function manejarName(event) {
        setName(event.target.value)
    }
    function manejarCategory(event) {
        setCategory(event.target.value)
    }
    function manejarArea(event) {
        setArea(event.target.value)
    }
    function manejarInstructions(event) {
        setInstructions(event.target.value)
    }
    function manejarThumb(event) {
        setThumb(event.target.value)
    }
    function manejarTags(event) {
        setTags(event.target.value)
    }
    function manejarYoutube(event) {
        setYoutube(event.target.value)
    }

    function guardarDatos(event) {
        event.preventDefault()
        console.log(name)
        console.log(category)
        console.log(area)
        console.log(instructions)
        console.log(thumb)
        console.log(tags)
        console.log(youtube)
    }

    return(
        <Fragment>
            <form id="add-recipe" className="form" onSubmit={guardarDatos}>
                <div className="general-description">
                    <div className="input-pair">
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" value={name} onChange={manejarName}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="category">Category:</label>
                        <input id="category" type="text" value={category} onChange={manejarCategory}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="area">Area Origin:</label>
                        <input id="area" type="text" value={area} onChange={manejarArea}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="instructions">Instructions:</label>
                        <textarea id="instructions" placeholder="Write instructions here..." 
                        value={instructions} onChange={manejarInstructions}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="thumb">Meal Thumb:</label>
                        <input id="thumb" type="text" value={thumb} onChange={manejarThumb}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="tags">Tags:</label>
                        <input id="tags" type="text" value={tags} onChange={manejarTags}/>
                    </div>
                    <div className="input-pair">
                        <label htmlFor="youtube">YouTube link:</label>
                        <input id="youtube" type="url" value={youtube} onChange={manejarYoutube}/>
                    </div>
                </div>
                <div className="ingredients-list">
                    <ListaIngredientes />
                </div>
                <input className="submit-button" type="submit"/>
            </form>
        </Fragment>
    )
}
