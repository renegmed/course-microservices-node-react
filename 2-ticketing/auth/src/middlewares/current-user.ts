import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request{
            currentUser?: UserPayload; // adding this property to existing Request
        }
    }
}
export const currentUser = (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
        if (!req.session?.jwt) {
            return next();
        }

        try {
            const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload // ! i.e. JWT_KEY is defined previously
            req.currentUser = payload;
        } catch (err) {
            // do nothing
        }

        next();
    };
