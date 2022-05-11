const express = require('express');
const app = express();
const cors = require('cors');
const abbrevRoutes = require('./routes/abbrevRoutes')

app.use(cors());
app.use(express.json());
app.use('/', abbrevRoutes);

app.listen(5000, () => console.log("The app is running on port 5000."));