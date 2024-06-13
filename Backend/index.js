const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const userRouter = require('./Routes/CreateUser');
const itemsRouter = require('./Routes/DisplayData');
require('dotenv').config(); // For loading environment variables

// Use environment variables for sensitive information
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://chiraglokhande14:mdci1234@cluster0.s87k9fg.mongodb.net/Foodyy';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("MongoDB connected !!!");
        try {
            const fetched_data = await mongoose.connection.db.collection('foodItems').find({}).toArray();
            const foodCategory = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
            global.foodItems = fetched_data;
            global.foodCategory = foodCategory;
        } catch (err) {
            console.log('Error fetching data from MongoDB:', err);
        }
    })
    .catch(err => {
        console.log('MongoDB connection error:', err);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

app.use('/api/', userRouter);
app.use('/api/', itemsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
