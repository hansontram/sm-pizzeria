# StrongMind Pizzeria 🍕
StrongMind Pizzeria is a fullstack web application that allows a pizza shop owner to manage toppings available for their chefs. Chefs are able to manage the menu by creating pizza masterpieces with what toppings are made available. 

Live Site: https://strongmindpizza.netlify.app/
- Frontend is hosted on netlify & api is hosted on [render](https://strong-pizza-backend.onrender.com/). 


### Features:

StrongMind Pizzeria allows users to:

- Manage Toppings (Pizza store owner) 

    - see a list of available toppings
    - add a new topping
    - delete an existing topping
    -  update an existing topping
    -  not allow user to enter duplicate toppings

- Manage Pizzas (Pizza Chef)

    - see a list of existing pizzas and their toppings
    - create a new pizza and add toppings to it
    - delete an existing pizza
    - update an existing pizza
    - update toppings on an existing pizza
    - enter duplicate pizzas


### Dependencies:

<details>
  <summary>Client</summary>
  <ul>
  <li>@emotion/react (^11.11.3)</li>
  <li>@emotion/styled (^11.11.0)</li>
  <li>@mui/icons-material (^5.15.9)</li>
  <li>@mui/material (^5.15.9)</li>
  <li>react (^18.2.0)</li>
  <li>react-dom (^18.2.0)</li>
  <li>react-router-dom (^6.22.0)</li>
  <li>react-select (^5.8.0)</li>

  </ul>
  
</details>

<details>
  <summary>Server</summary>
  <ul>
  <li>cors (^2.8.5)</li>
  <li>dotenv (^16.4.1)</li>
  <li>express (^4.18.2)</li>
  <li>mongodb (4.1)</li>
  <li>mongoose (^8.1.1)</li>
  </ul>
</details>


## Run Locally:

 ### [Live Site](https://strongmindpizza.netlify.app/)
 
#### 1. Clone project locally:
```javascript
git clone https://github.com/hansontram/sm-pizzeria.git
```
#### 2. Navigate to project directory:
```javascript
cd project-name
```
#### 3. Run Client:
```javascript
cd client
npm install
npm run dev
```
#### 4. Run Server:

Before running the server, make sure you set up environment variables by creating a .env file in the server directory with the following content:

```javascript
MONGO_URI=your_mongo_connection_string
PORT=desired_port_number
```

```javascript
cd server
npm install
npm run dev
```