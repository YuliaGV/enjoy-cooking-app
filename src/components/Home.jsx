import React from 'react'
import { Container} from 'react-bootstrap';
import { CarouselDiv } from './Carousel';
import { FoodList } from './FoodList';
import { Categories } from './Categories';

function Home() {
  return (
    <>

      <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>
        <blockquote>
          <p>
          People who loves to eat are always the Best People.
          <br />
          Julia Child
          </p>
        </blockquote>

        <CarouselDiv />

      </Container>
      
      <FoodList /> 
      <Categories />

      
    </>
    
  );
}

export default Home;
