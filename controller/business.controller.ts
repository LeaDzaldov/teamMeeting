// const { Router } = require('express');
// const BusinessService = require('../services/business.service');
// const express = require('express');
// const app = express.Router();

import { Response, Request } from 'express';
 import bodyParser from 'body-parser';
 import {  businessDetails, updateBusiness } from '../service/busniess.service';
import express from 'express';
 const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
export const get = async (req: Request, res: Response) => {
    await businessDetails(req, res)
}

export const put = async (req: Request, res: Response) => {
    await updateBusiness(req, res);
}
module.exports = router;