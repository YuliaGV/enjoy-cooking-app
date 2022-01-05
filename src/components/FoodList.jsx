import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

export const FoodList = () => {

    const [foods, setFoods] = useState([]); //Guardando los datos de la API en un array

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    });
    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=l'); //Tocó fetch sobre la letra m
        const foods = await data.json();
        setFoods(foods.meals);
    }
    return (
        <>
            <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                <h2 className="title-section">Recetas</h2>
                <div className="row">
                    {foods.map(food => (
                        <div className="col-md-3" key={food.idMeal}>
                            <div className="card mb-4 shadow-sm">
                                <img src={food.strMealThumb} alt={food.strMeal} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{food.strMeal}</p>
                                    <div className="btn-group">
                                        <Button className="btn btn-block btn-ver" href={`/food/${food.idMeal}`}>Ver detalle</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}
