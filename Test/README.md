# My Application

The project is generated by [LoopBack](http://loopback.io).

## API setup

<pre>
$ npm install -g loopback-cli  -##Install the LoopBack CLI tool.
$ lb model - ##create model
$ npm install  -##install node modules
$ npm install loopback-connector-mysql --save  -##mysql connector
$ node .  -##Run the application
</pre>

<pre>

Task-1 

## when the user first time register in the application using below API and it will registered that user as "Admin". After that admin can create "n" of user with specific ROLE.

Please find the below api details,

Api -- http://localhost:3000/api/users/register

Request data-- {
  
  "name": "xxx",
  "email": "xxx@gmail.com",
  "address": "xxx",
  "contactNumber": "987643210"
}

Response

{
  "message": " Registered successfully"
}

Task-3

## when list the category list API the associated products on the categories will return in response.
Please find the below api details,

API ---http://localhost:3000/api/categories/list

Response

{
  "category": [
    {
      "id": 1,
      "name": "cat1",
      "products": 5
    },
    {
      "id": 2,
      "name": "cat2",
      "products": 5
    },
    {
      "id": 3,
      "name": "cat3",
      "products": 5
    },
    {
      "id": 4,
      "name": "cat4",
      "products": 4
    }
  ]
}