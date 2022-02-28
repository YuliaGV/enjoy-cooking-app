import React, { useState } from 'react';
import { Container, Button, Form, FormControl, ListGroup } from 'react-bootstrap';

export const SearchFood = () => {


    const [foodsFound, setFoodsFound] = useState([]);
    const [search, setSearch] = useState('');

    //Search

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
    }


    const fetchData = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const foods = await data.json();
        setFoodsFound(foods.meals);
    }


  return (
    <>
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <h2 className="title-section">Search foods by name</h2>

            <div className="row">

                <div className="col-md-6 col-sm-12" style={{ margin: '0 auto' }}>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                            />
                            <Button className="btn btn-block btn-show" type="submit" onClick={handleSubmit}>Search</Button>
                        </Form>
                </div> 

            </div>

            {foodsFound.length > 0 ? (

            <>

              <h3 className="title-section">Results</h3>

              <div className="row">
              
                  {foodsFound.map(food => (
                    
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

            </>

            ) : (
            null
            )}

        </Container>
    </>
    
  )
}
