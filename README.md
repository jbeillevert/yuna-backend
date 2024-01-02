
## Installation

```bash
$ npm i
```

## Running the app

```bash
# build and development
$ npm run dev
```

## URL
```bash
https://yuna-api.onrender.com
```


## Features 
### getCatFact
Get a fact about cats

```bash
GET
/api/catfacts/fact
```



### signup
Create an account

```bash
POST
/api/signup
```



### login
Log with an account

```bash
POST
/api/login
```



### getAllFamilies (Require Auth)
Get all families 

```bash
GET
/api/families
```



### getOneFamily (Require Auth)
Get one family by id

```bash
GET
/api/families/:id
```


### createFamily (Require Auth)
Create a family

```bash
POST
/api/families/create
```



### updateFamily (Require Auth)
Update any information about a family

```bash
PUT
/api/families/:id
```



### deleteFamily (Require Auth + Require role Admin)
Delete a family with id

```bash
DELETE
/api/families/:id
```