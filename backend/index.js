const express = require("express");
const app = express();


const dogs = [
    {
        id: 1,
        name: "Mie Ramen",
        breed: "FMSTYLE",
        price: "20.2",
        description: "lorem ipsum",
        imageUrl:
          "https://www.blibli.com/friends-backend/wp-content/uploads/2022/07/bahan-bahan-membuat-ramen.jpg",
      },
      {
        id: 2,
        name: "Salad Tahu",
        breed: "HUE",
        price: "15.5",
        description: "lorem ipsum",
        imageUrl:
          "https://cdn.tgdd.vn/Files/2020/06/22/1264687/salad-la-gi-salad-dressing-la-gi-phan-loai-va-ca.jpg",
      },
      {
        id: 3,
        name: "Roti Bakar",
        breed: "YODY",
        price: "17.3",
        description: "lorem ipsum",
        imageUrl:
          "https://www.dapurkobe.co.id/wp-content/uploads/roti-bakar-sosis-pedas.jpg",
      },
      {
        id: 4,
        name: "Hamburgur",
        breed: "BOVIND",
        price: "18.5",
        description: "lorem ipsum",
        imageUrl:
          "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/08/mon-ngon-han-quoc16.jpg",
      },
      {
        id: 5,
        name: "Chicken Roast",
        breed: "LV",
        price: "35.2",
        description: "lorem ipsum",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/dutch-oven-roast-chicken-recipe-2-1664219307.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      },
      {
        id: 6,
        name: "Salad Salmon",
        breed: "SAVANI",
        price: "20.0",
        description: "lorem ipsum",
        imageUrl:
          "https://www.recipetineats.com/wp-content/uploads/2019/07/Salmon-Salad_1-SQ.jpg",
      },
      {
        id: 7,
        name: "Chicken Friel",
        breed: "YODY",
        price: "22.1",
        description: "lorem ipsum",
        imageUrl:
          "https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg",
      },
      {
        id: 8,
        name: "Cartilage",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://trungtamtienghan.edu.vn/uploads/blog/2015_06/mon-an-tieng-han1_1.jpg",
      },

];


app.get("/v1/dogs", (req,res)=>{
    res.status(200).json(dogs);
});

app.listen("8080",()=>{
    console.log("Server is running...");
});