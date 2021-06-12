import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);  // so be able to reference message outside this function
    }

    serializeErrors() {
        return [{ message: this.message}]
    }

}