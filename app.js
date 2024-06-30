const express = require('express');

const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const PORT = process.env.PORT
const businessRouter = require('./router/business.router');
const meetingRouter = require('./router/meeting.router');
const serviceRouter = require('./router/servic.router');
const userRouter = require('./router/user.router');
const { verifyToken } = require('./middleware/auth.middleware');
// import express from 'express';
// import bodyParser from 'body-parser';
// import * as dotevnv from "dotenv"



require('./services/db.service');
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(verifyToken);
app.use('/business', businessRouter);
app.use('/meeting', meetingRouter);
app.use('/service', serviceRouter);
app.use('/user', userRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


pp.listen(PORT, function () {
    console.log("http://localhost:".concat(PORT));
}).on('error', function (err) { console.log("Error occurred, server can't start", err); });

