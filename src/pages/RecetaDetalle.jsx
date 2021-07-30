import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecetaDetalle() {

    const {id} = useParams()

    const[receta, setReceta] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const jsonData = await data.json()
        setReceta(jsonData.meals[0])
    }

    return(
        <Fragment>
            {receta.length !== null ? 
            (
            <div id={receta.idMeal}>
                <h3>{receta.strMeal}</h3>
            </div>
            ) : (
                <h3>Sin datos</h3>
            )}
        </Fragment>
    )
}