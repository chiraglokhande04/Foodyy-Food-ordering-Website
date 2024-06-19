import React from "react";

export default function Carousel() {
    return (
        <div>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              
            >
                <div className="carousel-inner" style={{maxHeight:'900px',objectFit:'contain !important'}} >
                    <div className="carousel-caption d-flex" style={{zIndex:'10'}}>
                        <input type="search" className=" form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-success " data-mdb-ripple-init>search</button>

                   </div>
                    <div className="carousel-item active">
                        <img src="https://www.recipetineats.com/wp-content/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg" style={{filter:'brightness(50%)'}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" style={{filter:'brightness(50%)'}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" style={{filter:'brightness(50%)'}} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
