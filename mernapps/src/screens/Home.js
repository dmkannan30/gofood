import React, { useEffect, useState } from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0], response[1]);

    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div><Navbars /></div>
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !importand' }}>
                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className='d-flex justify-content-center'>
                                <input className='form-control me-2' type="search" placeholder='Search' aria-label='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <button className='btn btn-outline-success text-white bg-success' type='submit'>search</button>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages
                        -bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.1827765658
                        .1693417641&semt=sph" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot
                        -greens-chili-pepper-table_141793-5069.jpg?size=626&ext=jpg&ga=GA1.1.1827765658.1693417641&
                        semt=ais" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-
                            chili-top-view_2829-19996.jpg?size=626&ext=jpg&ga=GA1.1.1827765658
                        .1693417641&semt=ais" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                    </div >
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div >

            </div >
            < div className='container' >
                {
                    foodCat != []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3 '>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem != []
                                    ?
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}

                                                    ></Card>
                                                </div>
                                            )
                                        }
                                        ) : <div>No Such Data Found</div>}
                            </div>
                            )
                        })
                        : ""
                }

            </div>
            <div><Footer /></div>
        </div >
    )
}
