import React, { useState, useEffect } from 'react';
import { Container, ListGroup} from 'react-bootstrap';
import { useParams } from 'react-router-dom';



export const FoodDetail = () => {


    const { id } = useParams(); //Sacando el id del url

    const [food, setFood] = useState({}); //Objeto de la receta

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    });

    const fetchData = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`); 
        const food = await data.json();
        setFood(food.meals[0]); //el cero por si las moscas
    }

    return (
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <h2>Detalles de receta</h2>

            <div className="row mt-4 mb-4">
                <div className="col-md-4">
                    <img src={food.strMealThumb} alt={food.strMeal} className="img-fluid img-thumbnail" />
                </div>
                <div className="col-md-8">
                    <h3>{food.strMeal}</h3>
                    <p className="card-text"><strong>Categoría:</strong> {food.strCategory}</p>
                    <p className="card-text"><strong>Región:</strong> {food.strArea}</p>
                    <p className="card-text"><strong>Ingredientes:</strong></p>
                    <ListGroup> 
                        {food.strIngredient1 && <ListGroup.Item>{food.strIngredient1}</ListGroup.Item>}
                        {food.strIngredient2 && <ListGroup.Item>{food.strIngredient2}</ListGroup.Item>}
                        {food.strIngredient3 && <ListGroup.Item>{food.strIngredient3}</ListGroup.Item>}
                        {food.strIngredient4 && <ListGroup.Item>{food.strIngredient4}</ListGroup.Item>}
                        {food.strIngredient5 && <ListGroup.Item>{food.strIngredient5}</ListGroup.Item>}
                        {food.strIngredient6 && <ListGroup.Item>{food.strIngredient6}</ListGroup.Item>}
                        {food.strIngredient7 && <ListGroup.Item>{food.strIngredient7}</ListGroup.Item>}
                        {food.strIngredient8 && <ListGroup.Item>{food.strIngredient8}</ListGroup.Item>}
                        {food.strIngredient9 && <ListGroup.Item>{food.strIngredient9}</ListGroup.Item>}
                        {food.strIngredient10 && <ListGroup.Item>{food.strIngredient10}</ListGroup.Item>}
                        {food.strIngredient11 && <ListGroup.Item>{food.strIngredient11}</ListGroup.Item>}
                        {food.strIngredient12 && <ListGroup.Item>{food.strIngredient12}</ListGroup.Item>}
                        {food.strIngredient13 && <ListGroup.Item>{food.strIngredient13}</ListGroup.Item>}
                        {food.strIngredient14 && <ListGroup.Item>{food.strIngredient14}</ListGroup.Item>}
                        {food.strIngredient15 && <ListGroup.Item>{food.strIngredient15}</ListGroup.Item>}
                        {food.strIngredient16 && <ListGroup.Item>{food.strIngredient16}</ListGroup.Item>}
                        {food.strIngredient17 && <ListGroup.Item>{food.strIngredient17}</ListGroup.Item>}
                        {food.strIngredient18 && <ListGroup.Item>{food.strIngredient18}</ListGroup.Item>}
                        {food.strIngredient19 && <ListGroup.Item>{food.strIngredient19}</ListGroup.Item>}
                        {food.strIngredient20 && <ListGroup.Item>{food.strIngredient20}</ListGroup.Item>}
                    </ListGroup>
                    <br />
                    <p className="card-text"><strong>Instrucciones:</strong></p>
                    <p className="card-text text-left">{food.strInstructions}</p>
                    <p className="card-text text-left"><strong>Video: </strong>
                        <a href={food.strYoutube} target="_blank" rel="noopener noreferrer">
                            {food.strYoutube}
                        </a>
                    </p>


                </div>
            </div>

        </Container>
    )
}
