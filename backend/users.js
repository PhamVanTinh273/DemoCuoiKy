const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem người dùng đã tồn tại hay chưa
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  // thư viện bcrypt dùng để bảo vệ mật khẩu
  // Mã hóa mật khẩu
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Tạo người dùng mới
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Tìm người dùng theo tên đăng nhập
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Kiểm tra mật khẩu
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;