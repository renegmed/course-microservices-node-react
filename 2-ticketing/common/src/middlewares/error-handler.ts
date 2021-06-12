import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
        // console.log(err.message);

        if (err instanceof CustomError) {           
            return res.status(err.statusCode).send({ errors:  err.serializeErrors() });   // array of errors
        }
 
        res.status(400).send({
           errors: [{ message: 'Something went wrong' }]
        });
};