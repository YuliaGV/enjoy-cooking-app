import React from 'react'
import { Container} from 'react-bootstrap';
import about from '../img/about.PNG';

export const About = () => {
    return (
        <Container style={{ marginTop: '0.5rem', textAlign: 'center' }}>

            <div className="row mt-4">

                <div className="col-md-6">
                    <img src={about} alt="about" className="img-fluid" />
                </div>


                <div className="col-md-6">
                    <h2 className="title-section">About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur vitae eleifend sem. Donec quis diam nec nisi ultrices condimentum. 
                    Aenean nec metus sit amet purus sodales fringilla. Praesent interdum lobortis ante a placerat. 
                    Quisque venenatis rhoncus lacus, eu gravida justo consectetur sed. 
                    Aenean nec hendrerit purus. In ullamcorper accumsan mauris, quis rhoncus velit dictum ac. 
                    Sed volutpat justo in nisl ullamcorper, non tempor lacus scelerisque.  
                    </p>
                </div>

            </div>
                    

            
        </Container>
    )
}
