import { NextFunction, Request, Response } from "express";
import httpResponse from "../utils/httpResponse";
import responseMessage from "../constant/responseMessage";
import httpError from "../utils/httpError";



export const DemoControllers = (req: Request, res: Response , next:NextFunction) => {
  try {
      throw new Error("some thing went wrong")
    httpResponse(req , res , 200 , responseMessage.SUCCESS)
    
  } catch (error) {
    httpError(next , error , req ,500 )
    
  }

}


