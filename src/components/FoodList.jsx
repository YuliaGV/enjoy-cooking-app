import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';

export const FoodList = () => {

    const [foodsToday, setFoodsToday] = useState([]); 

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    }, []);

    const fetchData = async () => {
        const data1 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const food1 = await data1.json();
        const data2 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const food2 = await data2.json();
        const data3 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const food3 = await data3.json();
        const data4 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const food4 = await data4.json();
        const foodsSet = new Set( [food1.meals[0], food2.meals[0], food3.meals[0], food4.meals[0]] );
        setFoodsToday(Array.from(foodsSet));
    }
    
    return (
        <>
            <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                <h2 className="title-section">Recipes for you</h2>
                <div className="row">
                    {foodsToday.map(food => (
                        <div className="col-md-3" key={food.idMeal}>
                            <div className="card mb-4 shadow-sm">
                                <img src={food.strMealThumb} alt={food.strMeal} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{food.strMeal}</p>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Categorie: {food.strCategory}</ListGroup.Item>
                                        <ListGroup.Item>Recipe from: {food.strArea}</ListGroup.Item>
                                    </ListGroup>
                                    <div className="btn-group">
                                        <Button className="btn btn-block btn-show" href={`/food/${food.idMeal}`}>Show full recipe</Button>
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
