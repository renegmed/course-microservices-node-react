export abstract class CustomError extends Error {
    abstract statusCode: number; 

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype); 
        // this - The object to change its prototype, CustomError.prototype -  The value of the new prototype or null
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}

