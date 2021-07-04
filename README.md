#Storefront backend
This the the backend of the storefront.
Api endpoints will be provided for the full CRUD and other operations to the data model.
Each class respresentation model will be link to each table in PostgreSQL database.
JWTs is used for the authentication and all of the password will be encrypted for the security purpose.

#Set up and connect database
1. open the terminal
2. switch to the postgres
```user su postgres```
3. start psql 
```psql postgres```
in psql run the following:
```CREATE USER store_backend_user WITH PASSWORD 'password123';```
* password and user can be any other name but it need to match with .env file
```CREATE DATABASE store_backend_dev;```
```\c full_stack_dev```
```GRANT ALL PRIVILEGES ON DATABASE full_stack_dev TO full_stack_user;```
4. create .env file in the repository
in .env file enter the value of following variables:
```
BCRYPT_PASSWORD=bcryptgene20898bcrypt
SALT_ROUNDS= 10
PEPPER= **insert your secret text here**

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store_backend_dev
POSTGRES_TEST_DB=store_backend_test
POSTGRES_USER=store_backend_user
POSTGRES_PASSWORD=password123
ENV=dev

TOKEN_SECRET=**inseert your secret text here**
```
5. in the terminal enter the project repo and run the following:
``` npx run db-migrate up```

#Start the server
install package dependency
```npm install```
start by run
```npm run start```

#Api endpoints
##Users 
Create user: send POST request to http://localhost:3000/users with the body in JSON format as following:
```
{
  "username":
  "firstName":
  "lastName":
  "password":
}
```
Authenticate: send POST request to http://localhost:3000/users/authenticate with the body in JSON format as following:
```
{
  "username":
  "password":
}
```
Index: send GET request to http://localhost:3000/users [required JTWs token]
Show: send GET request to http://localhost:3000/users/:id with the body in JSON format as following [required JTWs token]:
```
{
  "id":
}
```
##Product
Create: send POST request to http://localhost:3000/products with the body in JSON format as following [required JTWs token]:
```
{
  "name":
  "price":
  "category"
}
```
Index: send GET request to http://localhost:3000/products
Show: send GET request to http://localhost:3000/product/:id with the body in JSON format as following:
```
{
  "id":
}
```
##Dashboard
Get top five popular product: send GET request to http://localhost:3000/dashboard/top-five-products
Get products from category: send GET request to http://localhost:3000/dashboard/products/:category with the body in JSON format as following [required JTWs token]:
```
{
  "category":
}
```
Get current order from user id: send GET request to app.get http://localhost:3000/dashboard/orders/current/:user_id with the body in JSON format as following [required JTWs token]:
```
{
  "user_id":
}
```
Get complete order from user id: send GET request to app.get http://localhost:3000/dashboard/orders/complete/:user_id with the body in JSON format as following [required JTWs token]:
```
{
  "user_id":
}
```
