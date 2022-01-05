import React, { useState, useEffect } from 'react';
import { Container, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export const CategoryDetail = () => {


    const { name } = useParams(); //Sacando el id del url

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    });

    const fetchData = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        const foods = await data.json();
        setFoods(foods.meals);
    }

    return (
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>

            <h2>Recetas en la categoría {name}</h2>

            <div className="row">
                {foods.map(food => (
                    <div className="col-md-3" key={food.idMeal}>
                        <div className="card mb-4 shadow-sm">
                            <img src={food.strMealThumb} alt={food.strMeal} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{food.strMeal}</p>
                                <div className="btn-group">
                                    <Button className="btn btn-block btn-ver" href={`/food/${food.idMeal}`}>Ver receta</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    )
}
