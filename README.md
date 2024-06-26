# Worko Backend API

Worko is building a product to help job seekers request referrals from multiple companies they are interested in working for. They can use any job description URL to request a referral. At the same time, candidates have options for requests for services like resume review, interview handholding, career guidance, and mock interviews.

## Milestones

### Backend API Setup

1. **Create a NodeJs project with MVC architecture**
    - Create controller layer
    - Create service layer
    - Create DAO layer
    - Create models for CRUD operations
    - Create DTO for request and response
    - Add validator framework

2. **Create API**
    - Create API for resource `/worko/user`
        - **GET** - List users
        - **GET** `/worko/user/:userId` - Get user details
        - **POST** - Create user
        - **PUT** - Update user
        - **PATCH** - Update user
        - **DELETE** - Soft delete user in DB
    - Required payload for user

## Specifications

Worko is a product designed to help job seekers request referrals from multiple companies using any job description URL. At the same time, candidates can request services such as resume reviews, interview handholding, career guidance, and mock interviews.

## API Endpoints

### User Endpoints

- **GET** `/worko/user`
  - Retrieves a list of users

- **GET** `/worko/user/:userId`
  - Retrieves user details for a specific user ID

- **POST** `/worko/user`
  - Creates a new user
  - Required payload:
    ```json
    {
      "name": "string",
      "email": "string",
      "age": "number",
      "city": "string",
      "zipCode": "string"
    }
    ```

- **PUT** `/worko/user/:userId`
  - Updates an existing user
  - Required payload:
    ```json
    {
      "name": "string",
      "email": "string",
      "age": "number",
      "city": "string",
      "zipCode": "string"
    }
    ```

- **PATCH** `/worko/user/:userId`
  - Partially updates an existing user
  - Required payload:
    ```json
    {
      "name": "string",
      "email": "string",
      "age": "number",
      "city": "string",
      "zipCode": "string"
    }
    ```

- **DELETE** `/worko/user/:userId`
  - Soft deletes a user in the database

 
