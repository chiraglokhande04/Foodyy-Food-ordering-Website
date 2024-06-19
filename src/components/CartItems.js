import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { addItem as addOrderItem } from "../utils/orderSlice";

const CartItems = ({ items }) => {
  const [qty, setQty] = useState(items.quantity || 1);
  const [size, setSize] = useState(items.size || '');
  const priceRef = useRef();
  const options = items.options;
  const priceOptions = Object.keys(options[0]);
  const finalPrice = qty * parseInt(options[0][size]);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem({ id: item._id }));
  }

  const handleOrders = (item) => {
    const itemWithDetails = {
      ...item,
      quantity: qty,
      size: size,
      finalPrice: finalPrice,
      orderedAt: new Date().toLocaleString()
    };
    dispatch(addOrderItem(itemWithDetails));
    dispatch(removeItem({ id: item._id }));
  }

  useEffect(() => {
    if (items.size) {
      setSize(items.size);
    } else {
      setSize(priceRef.current.value);
    }
  }, [items.size]);

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={items.img} className="card-img-top" alt="..." style={{ height: '120px', objectFit: 'fill' }} />
        <div className="card-body">
          <h5 className="card-title fs-3">{items.name}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-block h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <div>
            <button className="btn btn-success ms-2" onClick={() => handleOrders(items)}>Buy</button>
            <button className="btn btn-danger ms-2" onClick={() => handleRemove(items)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
