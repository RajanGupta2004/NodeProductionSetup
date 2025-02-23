import { Request } from "express";
import { ThttpError } from "../types/types";
import responseMessage from "../constant/responseMessage";
import config from "../config/config";
import { EApplicationEnvironment } from "../constant/application";



export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): ThttpError => {
    const errorObj: ThttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.ERROR : responseMessage.ERROR,
        data: null,
        trace: err instanceof Error ? { error: err.message } : null

    }

    // log error 

    console.error("CONTROLLER ERROR ", { meta: { errorObj } })


    if (config.ENV == EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
    }

    return errorObj

}