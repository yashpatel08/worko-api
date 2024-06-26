const userDAO = require('../dao/userDAO');
const userDTO = require('../dto/userDto');

class UserService {
    async createUser(userData){
        const user=await userDAO.createUser(userData);
        return new userDTO(user);
    }

    async getUserById(userId){
        const user=await userDAO.getUserById(userId);
        return new userDTO(user);
    }

    async updateUser(userId,userData){
        const user=await userDAO.updateUser(userId,userData);
        return new userDTO(user);
    }

    async deleteUser(userId){
        const user = await userDAO.deleteUser(userId);
    }

    async listUsers(){
        const users = await userDAO.listUsers();
        return users.map(user => new userDTO(user));
    }
}

module.exports = new UserService;