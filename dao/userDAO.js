const User = require('../models/User');

class UserDAO {
    async createUser(user){
        return await User.create(user);
    }

    async getUserById(user){
        return await User.findById(user);
    }

    async updateUser(userId,userData){
        return await User.findByIdAndUpdate(userId,userData,{new : true});
    }

    async deleteUser(userId) {
        return await User.findByIdAndUpdate(userId, { isActive: false });
      }
    
    async listUsers() {
        return await User.find({ isActive: true });
    }
}

module.exports = new UserDAO;