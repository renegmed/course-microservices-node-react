import { CustomError } from './custom-error';

import { ValidationError } from 'express-validator';
/*

interface CustomError {
    statusCode: number;
    serializeErrors(): {
        message: string;
        field?: string;
    }[];
}

*/
export class RequestValidationError extends CustomError {  // implements CustomError
    
    statusCode = 400; 
    constructor(public errors: ValidationError[]) {

        // NOTE: private is equivalent to 
        // errors: ValidationError[]
        // this.errors = errors 

        super('Invalid parameter');

        // Only because wea reextending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    
    serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param };
        });
    }
}