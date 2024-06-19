import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems';
import { clearCart, updateCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      dispatch(updateCart(JSON.parse(storedCartItems)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className='text-center p-4 m-4'>
      <h1 className='text-center fs-2 fw-bold'>Cart</h1>
      <Link className="btn bg-danger text-white mx-1" onClick={handleClearCart}>Clear Cart</Link>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cartItems.map((item, index) => (
            <div className='col' key={index}>
              <CartItems items={item} isInCart={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
