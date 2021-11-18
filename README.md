# Grocery Store Backend

This is the backend for the Grocery Store App, using MongoDB through Heroku to form the API for the [React frontend.]()

## Contributors
- [Brian Anderson](https://github.com/gadgetgeek) (team lead and repo owner)
- [Kerlin Lopes](https://github.com/kerlinlopes)
- [Elikya Bokanga](https://github.com/elikyaB)
- [Wensy DeSousa](https://github.com/wensyd)

## Dependencies

- Cors (v2.8.5)
- Dotenev (v10.0.0)
- Express (v4.17.1)
- Mongoose (v6.0.12)
- Morgan (v1.10.0)
- Nodemon (v2.0.15)

## Models

#### User Schema
- username: String
- password: String
- cart: Array

#### Product Schema
- id: String
- name: String
- price: Number
- department: String
- aisle: Number
- location: String

## Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Home | `/` | Homepage |
| Login | `/login` | User authentication |
| Signup | `/signup` | User account creation |
| Index | `/shop` | GET request, returns all products |
| Create | `/shop` | POST request, uses request body to add product to user cart |
| Index | `/cart` | GET request, returns products in user cart |
| Update | `/cart/:id` | PUT request, updates quantity of product in cart |
| Destroy | `/cart/:id` | DELETE request, removes specified product from cart |
| Show | `/shop/:id` | GET request, shows the product specified |
