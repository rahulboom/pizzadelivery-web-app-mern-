const express = require("express");
const app = express();
const db = require("./db.js")

const Pizza = require('./models/pizzaModel')

app.use(express.json());

const pizzasRoute = require('./Routes/pizzasRoute')
const userRoute = require('./Routes/userRoute')
const ordersRoute = require('./Routes/ordersRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/', ordersRoute)

app.get("/", (req, res) =>{
    res.send("Sever working");
});



const port = 8000;

app.listen(port, () => `server is working on port port`);