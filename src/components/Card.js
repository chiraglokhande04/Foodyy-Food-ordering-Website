import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


export default function Card({items}) {
  
  const [qty,setqty]=useState(1)
  const [size,setSize]=useState('')

  const priceRef = useRef()
    
  let options = items.options
  
  let priceOptions = Object.keys(options[0])
  let prices = Object.values(options[0])
 

  const dispatch = useDispatch()

  const handleAddToCart =(item)=>{
    const itemWithDetails = {
      ...item,
      quantity: qty,
      size: size,
      finalPrice: qty * parseInt(options[0][size])
    };
    dispatch(addItem(itemWithDetails));
  }

  //let finalPrice = qty*parseInt(options[0][size])
  

  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={items.img} className="card-img-top" alt="..." style={{height:'120px',objectFit:'fill'}} />
        <div className="card-body">
          <h5 className="card-title fs-3">{items.name}</h5>
          {/* <p className="card-text">{items.desc}</p> */}
          <div className="container w-100">
            <select name="" id="" className="m-2 h-100 bg-success rounded" onChange={(e)=>{setqty(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
              {
                priceOptions.map((data)=>{
                  return( <option key={data} value={data}>{data}</option>)
                })
              }
            </select>
            <div className="d-block h-100 fs-5">₹{ qty * parseInt(options[0][size])}/-</div>
           
          </div>
          <hr />
          <button className="btn btn-success justify-content ms-2" to='/cart' onClick={()=>handleAddToCart(items)} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
