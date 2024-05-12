import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../Resources/images/image1.jpg';
import Image2 from '../../Resources/images/image2.jpg';
import Image3 from '../../Resources/images/image3.jpg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview.css';
import Overview_description from '../../Component/Description/Overview_descripion';

function Overview() {
    return (
        <dev>
            <Overview_description />

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Carousel className='slide'>
                                <Carousel.Item>
                                    <img className='image-fluid ' src={Image1} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>First Slide Caption</h3>
                                        <p>Some description for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Image2} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>First Slide Caption</h3>
                                        <p>Some description for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>

                                    <img src={Image3} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>First Slide Caption</h3>
                                        <p>Some description for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </dev>


    );
}

export default Overview;
