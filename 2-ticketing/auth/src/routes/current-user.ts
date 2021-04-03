import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    if (!req.session?.jwt) { // ? same as  if (!req.session || !req.session.jwt) 
        return res.send({ currentUser: null });
    }

    try {
        const payload = jwt.verify(
            req.session.jwt, 
            process.env.JWT_KEY! // ! is already defined previously
        );
        res.send({ currentUser: payload });
    } catch (err) {
        res.send({ currentUSer: null });
    }
});

export  { router as currentUserRouter };
