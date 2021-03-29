import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    
    constructor(public errors: ValidationError[]) {

        // NOTE: private is equivalent to 
        // errors: ValidationError[]
        // this.errors = errors 

        super();

        // Only because wea reextending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}