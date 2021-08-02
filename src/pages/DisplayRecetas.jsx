import db from './../data/db.json';
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './displayRecetas.css';

export default function DisplayRecetas() {

    const [recetas, setRecetas] = useState(db.meals)
    document.title = 'Home';

    const buscarRecetas = async() => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        const jsonData = await data.json()
        setRecetas(jsonData.meals)
    }

    return(
        <Fragment>
            <div className="container">
                {console.log(recetas)}
                {
                recetas.length > 0 ? 
                recetas.map((item, key) => (
                    <div id={item.idMeal} key={key} className="card">
                        <Link to={`/receta-detalle/${item.idMeal}/${true}`}>
                            <div className="meal-img">
                                <img src={item.strMealThumb} alt={`Imagen receta ${item.strMeal}`}/>
                            </div>
                            <div className="meal-name">
                                <h1>{item.strMeal}</h1>
                            </div>
                        </Link>
                    </div>
                )) : (
                    <h3>Sin datos</h3>
                )}
            </div>
        </Fragment>
    )
}