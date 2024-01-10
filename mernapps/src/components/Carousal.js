import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !importand' }}>
                <div class="carousel-inner" id="carousel">
                    <div class="carousel-caption" style={{ zIndex: "10" }}>
                        <form className='d-flex'>
                            <input className='form-control me-2' type="search" placeholder='Search' aria-label='Search' />
                            <button className='btn btn-outline-success text-white bg-success' type='submit'>search</button>
                        </form>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages
                        -bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.1827765658
                        .1693417641&semt=sph" class="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot
                        -greens-chili-pepper-table_141793-5069.jpg?size=626&ext=jpg&ga=GA1.1.1827765658.1693417641&
                        semt=ais" class="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-
                        view_2829-19996.jpg?size=626&ext=jpg&ga=GA1.1.1827765658
                        .1693417641&semt=ais" class="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
