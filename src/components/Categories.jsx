import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

export const Categories = () => {

    const [categories, setCategories] = useState([]); //Guardando los datos de la API en un array

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php'); 
        const categories = await data.json();
        setCategories(categories.categories);
    }

    return (
        <>
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <h2 className="title-section">Explore food by categories</h2>
            <div className="row">
                {categories.map(category => (
                    <div className="col-md-3" key={category.idCategory}>
                        <div className="card mb-4 shadow-sm">
                            <img src={category.strCategoryThumb} alt={category.strCategory} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{category.strCategory}</p>
                                <div className="btn-group">
                                    <Button className="btn btn-block btn-show" href={`/category/${category.strCategory}`}>Show category</Button>
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
