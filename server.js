const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const posts = require('./routes/api/posts');
const app = express();
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('мой проектик'));
app.use('/api/posts', posts);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`работает ребята ${port}`));