import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap';
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
        setFood(food.meals[0]); 
    }

    return (
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <h2>Recipe details</h2>

            <div className="row mt-4 mb-4">
                <div className="col-md-4">
                    <img src={food.strMealThumb} alt={food.strMeal} className="img-fluid img-thumbnail" />
                </div>
                <div className="col-md-8">
                    <h3>{food.strMeal}</h3>
                    <p className="card-text"><strong>Category:</strong> {food.strCategory}</p>
                    <p className="card-text"><strong>Area:</strong> {food.strArea}</p>
                    <p className="card-text"><strong>Ingredients:</strong></p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Measure</th>
                                <th scope="col">Ingredient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {food.strIngredient1 ? <tr><td>{food.strMeasure1}</td><td>{food.strIngredient1}</td></tr> : null}
                            {food.strIngredient2 ? <tr><td>{food.strMeasure2}</td><td>{food.strIngredient2}</td></tr> : null}
                            {food.strIngredient3 ? <tr><td>{food.strMeasure3}</td><td>{food.strIngredient3}</td></tr> : null}
                            {food.strIngredient4 ? <tr><td>{food.strMeasure4}</td><td>{food.strIngredient4}</td></tr> : null}
                            {food.strIngredient5 ? <tr><td>{food.strMeasure5}</td><td>{food.strIngredient5}</td></tr> : null}
                            {food.strIngredient6 ? <tr><td>{food.strMeasure6}</td><td>{food.strIngredient6}</td></tr> : null}
                            {food.strIngredient7 ? <tr><td>{food.strMeasure7}</td><td>{food.strIngredient7}</td></tr> : null}
                            {food.strIngredient8 ? <tr><td>{food.strMeasure8}</td><td>{food.strIngredient8}</td></tr> : null}
                            {food.strIngredient9 ? <tr><td>{food.strMeasure9}</td><td>{food.strIngredient9}</td></tr> : null}
                            {food.strIngredient10 ? <tr><td>{food.strMeasure10}</td><td>{food.strIngredient10}</td></tr> : null}
                            {food.strIngredient11 ? <tr><td>{food.strMeasure11}</td><td>{food.strIngredient11}</td></tr> : null}
                            {food.strIngredient12 ? <tr><td>{food.strMeasure12}</td><td>{food.strIngredient12}</td></tr> : null}
                            {food.strIngredient13 ? <tr><td>{food.strMeasure13}</td><td>{food.strIngredient13}</td></tr> : null}
                            {food.strIngredient14 ? <tr><td>{food.strMeasure14}</td><td>{food.strIngredient14}</td></tr> : null}
                            {food.strIngredient15 ? <tr><td>{food.strMeasure15}</td><td>{food.strIngredient15}</td></tr> : null}
                            {food.strIngredient16 ? <tr><td>{food.strMeasure16}</td><td>{food.strIngredient16}</td></tr> : null}
                            {food.strIngredient17 ? <tr><td>{food.strMeasure17}</td><td>{food.strIngredient17}</td></tr> : null}
                            {food.strIngredient18 ? <tr><td>{food.strMeasure18}</td><td>{food.strIngredient18}</td></tr> : null}
                            {food.strIngredient19 ? <tr><td>{food.strMeasure19}</td><td>{food.strIngredient19}</td></tr> : null}
                            {food.strIngredient20 ? <tr><td>{food.strMeasure20}</td><td>{food.strIngredient20}</td></tr> : null}
                        </tbody>
            
                    </table>
                   
                    <br />
                    <p className="card-text"><strong>Directions:</strong></p>
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
