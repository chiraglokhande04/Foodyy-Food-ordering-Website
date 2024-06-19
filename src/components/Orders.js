import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearAll } from '../utils/orderSlice';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orderItems = useSelector((store) => store.Order.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => { 
    dispatch(removeItem({ id: item._id }));
  }

  const handleClearOrders = () => {
    dispatch(clearAll());
  }

  // Calculate the total price
  const totalPrice = orderItems.reduce((total, item) => total + item.finalPrice, 0);

  return (
    <div>
      <h1 className='text-center fs-2 fw-bold'>My Orders</h1>
      {orderItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-primary">
            <thead className='bg-success'>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Ordered At</th> {/* New column for ordered date and time */}
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.CategoryName}</td>
                  <td>{item.quantity}</td> {/* Display selected quantity */}
                  <td>{item.size}</td> {/* Display selected size */}
                  <td>₹{item.finalPrice}/-</td> {/* Display final price */}
                  <td>{item.orderedAt}</td> {/* Display ordered time and date */}
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* Total price row */}
              <tr>
                <td colSpan="4" className="text-right fw-bold">Total:</td>
                <td>₹{totalPrice}/-</td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">You have no orders yet.</p>
      )}
      <Link className="btn bg-danger text-white mx-1" onClick={handleClearOrders}>Clear All</Link>
    </div>
  )
}

export default Orders;
