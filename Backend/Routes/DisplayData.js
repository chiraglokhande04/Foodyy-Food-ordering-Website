const express = require('express');
const itemsRouter = express.Router();

itemsRouter.post('/displayitems',(req,res)=>{
    try{
        res.send([global.foodItems,global.foodCategory])

    }catch(error){
        console.log('ERR IN DISPLAYING',error)

    }
})

module.exports = itemsRouter;