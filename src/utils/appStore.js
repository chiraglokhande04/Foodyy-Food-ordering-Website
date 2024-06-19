import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'

const Appstore = configureStore({
    reducer:{
        cart:cartReducer,
        Order:orderReducer
    }
})

export default Appstore