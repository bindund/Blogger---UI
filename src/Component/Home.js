import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import {Link } from 'react-router-dom'
import "./app.css"


const Home = (props) => {
    return(
                    <div>  
                        <p class="subtitle">Welcome to my website!</p>
                        <h1> Welcome  to  BLOOGER UI Project</h1>
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="1000">
                            <img src="/logo2.jpg" class="img-fluid"  max-width="auto" height="auto" alt="Responsive image"/>
                            
                            </div>
                            <div class="carousel-item" data-bs-interval="500">
                            <img src="/logo1.jpg" class="img-fluid"  max-width="auto" height="auto" alt="Responsive image"/>
                            </div>
                            <div class="carousel-item">
                            <img src="/logo3.jpg" class="img-fluid"  max-width="auto" height="auto" alt="Responsive image"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                 </div>
           
    )
}
export default Home