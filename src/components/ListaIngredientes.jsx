import { Fragment } from "react";

export default function ListaIngredientes() {
    
    return(
        <Fragment>
            <label>
                Part name:
                <input id="part-name" name="part-name"/>
            </label>
            <label>
                1st Ingredient:
                <input id="ingredient" name="ingredient"/>
            </label>
        </Fragment>
    )
}