import express from 'express';
import { errorHandler } from '../../../shared/errors/errorHandler';

const router = express.Router();

router.get(
    '/', 
    (req, res) => {
        res.send('Hello World!!!');
    }
);

export default router;