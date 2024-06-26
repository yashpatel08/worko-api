const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Adjust the path to your server file
const URL = '/users/worko/user'; // Adjust the base URL according to your API route
let count=Math.random()*10,prevCount=0;
const credentials = {
  username: 'admin',
  password: 'password'
};

// let server;
 
// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   server = app.listen(process.env.PORT || 4000, () => {
//     console.log(`Test server running on port ${process.env.PORT || 4000}`);
//   });
// });

// afterAll(async () => {
//   await mongoose.connection.close();

//   await server.close();
// });

describe('User Controller', () => {
  // GET /users/worko/user
  describe('GET /users/worko/user', () => {
    it('should return status 200 and a list of users', async () => {
      const response = await request(app)
        .get('/users/worko/user')
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(200);
    });
  });

  // GET /users/worko/user/:userId
  describe('GET /users/worko/user/:userId', () => {
    it('should return status 200 and the user object', async () => {
      const userId = '66795259b4bb72994ea00613'; // Adjust as per your test data

      const response = await request(app)
        .get(`${URL}/${userId}`)
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', userId);
    });

    it('should return status 404 for non-existent user', async () => {
      const userId = 'abc95259b4bb72994ea00613'; // Assuming this ID does not exist

      const response = await request(app)
        .get(`${URL}/${userId}`)
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(404);
    
    });
  });


  // POST /users/worko/user
  describe('POST /users/worko/user', () => {
    it('should create a new user and return status 201', async () => {
      const newUser = {
        name: 'John Doe',
        email: `john${count}@example.com`,
        age: '19',
        city: 'new york',
        zipCode: '134432'
      };
      prevCount=count;
      const response = await request(app)
        .post(`${URL}`)
        .send(newUser)
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('name', newUser.name ,newUser.email,newUser.age,newUser.city,newUser.zipCode); // Adjust based on your schema
    });

  });

  // PUT /users/worko/user/:userId
  describe('PUT /users/worko/user/:userId', () => {
    it('should update an existing user and return status 200', async () => {
      const userId = '66795259b4bb72994ea00613'; // Assuming userId 123 exists in your test database
      const updatedUserData = {
        name: 'John Doe',
        email: `john${count}@example.com`,
        age: '19',
        city: 'new york',
        zipCode: '134432'
      };
      prevCount=count;
      const response = await request(app)
        .put(`${URL}/${userId}`)
        .send(updatedUserData)
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', updatedUserData.name,updatedUserData.email,updatedUserData.age,updatedUserData.city,updatedUserData.zipCode); 
    });
  });

  // DELETE /users/worko/user/:userId
  describe('DELETE /users/worko/user/:userId', () => {
    it('should delete an existing user and return status 204', async () => {
      const userId = '66795259b4bb72994ea00613'; // Assuming userId 123 exists in your test database

      const response = await request(app)
        .delete(`${URL}/${userId}`)
        .auth(credentials.username, credentials.password);

      expect(response.status).toBe(204);
    });

  });
});
