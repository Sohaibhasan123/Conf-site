import React from 'react';
import versityOne from '../../../asset/images/basketField.jpg';
import versityTwo from '../../../asset/images/wetView.jpg';
import versityThree from '../../../asset/images/versity1`.jpg';
import './Carousel.css'


const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item  active" data-bs-interval="4000">
                        <img src={versityOne} style={{height: '750px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="d-block w-100" alt="..." />
                            <h1 class="carousel-caption d-none d-md-block fw-bold text-light">
                                <button type="button" class="btn btn-outline-danger">Submit Paper</button>
                                <p>Some representative placeholder content for the first slide.</p>
                            </h1>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={versityTwo} style={{height: '750px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block fw-bold text-light">
                            <button type="button" class="btn btn-outline-danger">Submit Paper</button>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={versityThree} style={{height: '750px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="d-block w-100" alt="..." />
                            <h1 class="carousel-caption d-none d-md-block fw-bold text-light">
                                <button type="button" class="btn btn-outline-danger">Submit Paper</button>
                                <p>Some representative placeholder content for the first slide.</p>
                            </h1>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;