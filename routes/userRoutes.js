const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const {listUsers,getUserById,createUser,updateUser,deleteUser} = require('../controllers/userController');

router.get('/worko/user',listUsers);
router.get('/worko/user/:userId',getUserById);
router.post('/worko/user',createUser);
router.put('/worko/user/:userId',updateUser);
router.patch('/worko/user/:userId',updateUser);
router.delete('/worko/user/:userId',deleteUser);

module.exports=router;
