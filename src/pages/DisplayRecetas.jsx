import db from './../data/db.json';
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DisplayRecetas() {

    const [recetas, setRecetas] = useState(db.meals)

    const buscarRecetas = async() => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        const jsonData = await data.json()
        setRecetas(jsonData.meals)
    }

    return(
        <Fragment>
            {console.log(recetas)}
            {
            recetas.length > 0 ? 
            recetas.map((item, key) => (
                <div id={item.idMeal} key={key}>
                    <Link to={`/receta-detalle/${item.idMeal}/${true}`}>
                        <div className="left-side">
                            <img src={item.strMealThumb}/>
                        </div>
                        <div className="rigth-side">
                            <h1>{item.strMeal}</h1>
                        </div>
                    </Link>
                </div>
            )) : (
                <h3>Sin datos</h3>
            )}
        </Fragment>
    )
}