const express = require("express");



const app = express(); // creates a new application



app.get('/', (req, res) => {
    res.send({"hello": "hello"});
})



const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
}); 


