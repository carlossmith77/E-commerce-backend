const express = require('express');
const routes = require('./routes/api');
// import sequelize connection
const sequelize=require('../develop/config/connection');
const Category = require('./models/Category');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/release", (req,res)=>{
  res.send("Hello");
});
app.use(routes);

// "C:\Users\carlo\Downloads\UofM-VIRT-FSF-PT-08-2022-U-LOLC-main (25)\UofM-VIRT-FSF-PT-08-2022-U-LOLC-main\13-ORM\02-Challenge\Develop\"
// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
