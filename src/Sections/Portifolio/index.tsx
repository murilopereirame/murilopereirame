import React from 'react';
import './styles.css'
import Projects from '../../Components/Projects';
import safyPetImage from '../../Assets/images/safypet.png';
import pokeZapImage from '../../Assets/images/PokeZap.png';
import proffyImage from '../../Assets/images/Proffy.png';
import ecoletaImage from '../../Assets/images/Ecoleta.png';
import organImage from '../../Assets/images/Organ.png';

const Carousel =  require('react-grid-carousel');

function Portifolio() {    
    return (
        <div className="portfolioContainer">
            <p>
                P O R T I F Ó L I O
            </p>
            <div className="projectsContainer">
                <Carousel 
                    responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 3,
                            rows: 4
                        },
                        {
                            breakpoint: 990,
                            cols: 2,
                            rows: 3
                        }
                    ]} 
                    containerStyle={{
                        top: 0
                    }}
                    cols={4} rows={2} showDots={true} scrollSnap={true} gap={10} hideArrow={true} mobileBreakpoint={0} loop>
                    <Carousel.Item>
                        <Projects src={safyPetImage}/>
                    </Carousel.Item>                    
                    <Carousel.Item>
                        <Projects src={pokeZapImage}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Projects src={proffyImage}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Projects src={ecoletaImage}/>
                    </Carousel.Item>      
                    <Carousel.Item>
                        <Projects src={organImage}/>
                    </Carousel.Item>            
                </Carousel>
            </div>
        </div>
    );
}

export default Portifolio;