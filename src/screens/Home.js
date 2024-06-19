import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'


export default function Home() {
    const [search,setsearch] = useState('')
    const [foodCat,setfoodCat] = useState([])
    const [foodItems,setfoodItems]=useState([])

    const loadData = async()=>{
        try{
            let response = await fetch('http://localhost:5000/api/displayitems',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            response = await response.json();
           // console.log(response[0],response[1])
            setfoodItems(response[0])
            setfoodCat(response[1])
        
        }catch(err){
            console.log('ERR IN DISPLAY items ',err)
        }
    }

   

    useEffect(()=>{
        loadData()
    },[])


    return (
        <div>
            <div><Navbar /></div>
            <div className="vh-100">
            <div
                id="carouselExampleControls"
                className="carousel slide h-100"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner h-100">
                    <div className="carousel-caption d-flex" style={{ zIndex: '10' }}>
                        <input type="search" className="form-control rounded me-2" placeholder="Search" aria-label="Search" onChange={(e)=>{setsearch(e.target.value)}} aria-describedby="search-addon" />
                        <button type="button" className="btn btn-success" data-mdb-ripple-init>Search</button>
                    </div>
                    <div className="carousel-item active h-100">
                        <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" className="d-block w-100 h-100" alt="Classic Cheese Pizza" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item h-100">
                        <img src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" className="d-block w-100 h-100" alt="Steamed Momos Wontons" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item  h-100">
                        <img src="https://image.similarpng.com/very-thumbnail/2022/02/Delicious-fresh-home-made-burger-isolated-on-transparent-background-PNG.png" className="d-block w-100 h-100" alt="Crispy Fried Chicken Burgers" style={{ objectFit: 'cover' }} />
                    </div>
                    
                    
                    
                    
                    
                    
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

            <div className='m-3'>
               {
                  foodCat.length > 0
                  ?
                  foodCat.map((data)=>{
                     return(
                        <div className='row mb-3'> 
                             <hr/>
                             <div className='fs-3 m-3' key={data._id}>{data.CategoryName} </div>
                            
                           
                            {
                                foodItems.length > 0 ?
                                foodItems.filter((items)=>(items.CategoryName == data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                                .map((filteredItems)=>{
                                   return(
                                    <div className='col-12 col-md-6 col-lg-3' key={filteredItems._id}> 
                                       {/* <Card name={filteredItems.name} desc={filteredItems.description} img={filteredItems.img}
                                              options={filteredItems.options[0]}/>  */}
                                              <Card items={filteredItems}/> 
                                              
                                    </div>
                                ) 
                                })  : ''
                            }
                        </div>
                     ) 
                    }) : ''
               }
                </div>
            <div><Footer /></div>

        </div>
    )
}
