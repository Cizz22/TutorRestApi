import express from 'express';
import { getUsers, saveUser} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', saveUser);


export default router;