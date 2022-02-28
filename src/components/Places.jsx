import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

export const Places = () => {

    const [places, setPlaces] = useState([]); //Guardando los datos de la API en un array

    useEffect(() => {
        fetchData(); //Cargando los datos de la API al cargar el componente
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const places = await data.json();
        setPlaces(places.meals);
    }

    return (
        <>
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <h2 className="title-section">Places</h2>
            <p>Explore food from many places in the world!</p>
            <div className="row">
                {places.map(place => (
                    <div className="col-md-4" key={place.strArea}>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p className="card-text">{place.strArea}</p>
                                <div className="btn-group">
                                    <Button className="btn btn-block btn-show" href={`/places/${place.strArea}`}>Show foods</Button>
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
