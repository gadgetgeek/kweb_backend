# Grocery Store Backend

This is the backend for the Grocery Store App, using MongoDB through Heroku to form the API for the [React frontend.](https://github.com/gadgetgeek/kweb_frontend)

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

#### Product Schema
- name: String
- price: String
- department: String
- aisle: String
- image: String
- location: String

## Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Test | `/` | Test route |
| Index | `/products` | GET request, returns all products |
| Show | `/products/:id` | GET request, shows the product specified |
| Create | `/products` | POST request, uses form data to create product |
| Update | `/products/:id` | PUT request, edits product info |
| Destroy | `/products/:id` | DELETE request, removes specified product from store |
