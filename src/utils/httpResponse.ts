
import { Request, Response } from "express"
import { ThttpResponse } from "../types/types"
import config from "../config/config"
import { EApplicationEnvironment } from "../constant/application"

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {

    const response: ThttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data: data
    }

    // log controller response 

    console.info("CONTROLLES RESPONSE ", { meta: { response } })

    // remove the ip and other info from response 

    if(config.ENV == EApplicationEnvironment.PRODUCTION){
        delete response.request.ip
    }

    res.status(responseStatusCode).json(response)

}