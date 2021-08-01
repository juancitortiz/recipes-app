import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataBase from './../data/db.json';

export default function RecetaDetalle() {

    const {id, db} = useParams()
    // console.log(id)
    // console.log(db)

    const[receta, setReceta] = useState({})

    useEffect(() => {
        if(db === "true") {
            dbObtenerDatos()            
        }
        else {
            fetchObtenerDatos()
        } 
    }, [])

    function dbObtenerDatos() {
        console.log("Obteniendo datos desde db!!")
        const objetoReceta = () => {
            const data = dataBase.meals;
            const resultado = getIdDataBase(data);
            
            // console.log(resultado)
            return resultado;
        };
        setReceta(objetoReceta)
    }

    function getIdDataBase(data) {
        if(data.length > 0){
            for(let i=0; i<data.length; i++){
                for(var prop in data[i]){
                    if(data[i].hasOwnProperty(prop) && prop === "idMeal"){                        
                        if(data[i][prop] === id){
                            return data[i];
                        }
                    }
                }
            }
        }

        return {};
    } 

    const fetchObtenerDatos = async() => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const jsonData = await data.json()
        if(jsonData.meals)
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