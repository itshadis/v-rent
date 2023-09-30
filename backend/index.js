require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.SERVER_PORT || 3001;

const userRouter = require('./src/routes/usersRoutes');
const carRouter = require('./src/routes/carsRoutes');
const transactionRouter = require('./src/routes/transactionsRoutes');
const testimoniRouter = require('./src/routes/testimoniesRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use('/api/users', userRouter);
app.use('/api/cars', carRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/testimoni', testimoniRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));