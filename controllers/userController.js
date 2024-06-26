const userService = require('../services/userService');
const {userSchema,idSchema} = require('../validators/userValidator');

class UserController{

    async listUsers(req,res){
        const users=await userService.listUsers();
        res.json(users);
    }

    async getUserById(req,res){
        const {userId} = req.params;
        // const {error} = idSchema.validate(userId); 

        // if(error) res.status(400).send(error.details[0].message);

        const user = await userService.getUserById(userId);
        if(!user) res.status(404).send('User not found');

        res.json(user);
    }   

    async createUser(req,res){
        // const {error}=userSchema.validate(req.body);
        // if(error) res.status(400).send(error.details[0].message);

        const user=await userService.createUser(req.body);
        res.status(201).json(user);
    }

    async updateUser(req,res){
        const {userId} = req.params;
        // const {error: idError} = idSchema.validate(userId);
        // if(idError) res.status(400).send(error.details[0].message);

        // const {error} = userSchema.validate(req.body);
        // if(error) res.status(400).send(error.details[0].message);
        
        const user= await userService.updateUser(userId,req.body);
        if(!user) res.status(404).send('User not Found');
        res.json(user);
    }

    async deleteUser(req,res){
        const {userId}= req.params;
        // const {error} = idSchema.validate(userId);
        // if(error) res.status(400).send(error.details[0].message);
        
        await userService.deleteUser(userId);
        res.status(204).send();
    }
}

module.exports = new UserController();