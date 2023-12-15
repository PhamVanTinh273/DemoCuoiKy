const express = require("express");
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(express.json());
app.use(cors(corsOptions));
const bcrypt = require("bcryptjs");


const users = [];

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
      {
        id: 9,
        name: "Fried Ramen",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://flyfood.vn/web/image/5668-4a2bfd17/khai-vi-tam-hop-1.jpg?access_token=41c3e2d9-7684-4606-9a7a-34b082e2b2bd",
      },
      {
        id: 10,
        name: "Sashimi",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://statics.vincom.com.vn/xu-huong/chi_tiet_xu_huong/1/14-4/1/sashimi-ngon.jpg",
      },
      {
        id: 11,
        name: "Corish Pasty",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://static.toiimg.com/thumb/60701612.cms?imgsize=475429&width=800&height=800",
      },
      {
        id: 12,
        name: "Sundubu Jjigae",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://static01.nyt.com/images/2022/01/20/dining/kc-kimchi-soondubu-jjigae/kc-kimchi-soondubu-jjigae-superJumbo.jpg",
      },
      {
        id: 13,
        name: "Tokbokki",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0617/2497/files/cach-lam-tokbokki_a2179426-f894-4dda-a709-52fe9f07d6ab.jpg?v=1636019190",
      },
      {
        id: 14,
        name: "Pierogi",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/pierogi-1.jpg",
      },
      {
        id: 15,
        name: "Zrayzy",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://duhocchd.edu.vn/files/editor/images/Zrayzy.jpg",
      },
      {
        id: 16,
        name: "Lasagne",
        breed: "SAVANI",
        price: "30.0",
        description: "lorem ipsum",
        imageUrl:
          "https://www.marionskitchen.com/wp-content/uploads/2021/08/Marions-Best-Lasagne-04.jpg",
      },

];



app.post("/v1/users/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    //"Hash the password" có nghĩa là thực hiện quá trình mã hóa mật khẩu bằng cách chuyển đổi mật khẩu từ dạng văn bản thông thường thành 
    //một chuỗi ký tự không thể đọc ngược trở lại (hash). Mục đích của việc hash mật khẩu là bảo vệ thông tin cá nhân của người dùng và đảm bảo rằng mật khẩu không được lưu trữ dưới dạng gốc hoặc dễ dàng đoán được.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/v1/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





app.post('/v1/dogs', (req, res) => {
  const { id, name, breed, price, description, imageUrl , email, feedback} = req.body;

  // Thêm món mới vào danh sách
  const newDog = { id, name, breed, price, description, imageUrl, email, feedback };
  dogs.push(newDog);



  
  res.send('Hello from /v1/dogs!');
});


const PORT = 8080;
app.get("/v1/dogs", (req,res)=>{
    res.status(200).json(dogs);



});
app.use('/v1/users', require('./users'));
app.listen(PORT,()=>{
    console.log(`Server is running...${PORT}`);
});