import  type {  Request,Response,NextFunction,RequestHandler } from "express"
const asynchandler = (reqhandler:RequestHandler): RequestHandler=>{
  return (req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(reqhandler(req,res,next)).catch((err)=> next(err))

  }

}
export {asynchandler}