import { Response, Request } from 'express';
import businessModel from '../models/business';
export const createBusiness=async function (req: Request, res: Response) {
    const businessDetails = await businessModel.findOne({},function(err,result){
        if (err) throw err;
        console.log(result.name);
          
    });
    res.send(businessDetails)
}
export const updateBusiness=async function (req: Request, res: Response) {
    businessModel.updateOne({
            
    }, {
        $set: {
            name: req.name,
            adress: req.adress,
            phone: req.phone,
        }
    })
   
    res.send(updateBusiness)
}
  
