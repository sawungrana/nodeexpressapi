import express from 'express';
import { getUsers, createUser, getUser, deleteUser, patchUser } from '../controllers/users.js';

//inisialisasi router
const router = express.Router();

//gawe GET. kabeh orute mulai seko /users
//browser gur iso gawe GET request
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);

export default router;