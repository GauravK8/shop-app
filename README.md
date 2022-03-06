# shop-app

## Technologies used

- Node.JS v16.14.0
- Typescript
- Express
- Sequelize ORM
- MySQL2

### Install Dependencies

```sh
  npm i
```

### Run Project in development mode

```sh
  npm dev
```

### Setup Environment

copy env.example file to .env in root of the project and change the values accordingly.

### Run migrations for MySQL Databases
All migrations have been generated along with product insert script.
To run migrations run below command

```sh
  npm run migration:run
```

### Postman collection
Exported Postman collection is added in Postman directory in root directory.
So it can be imported in Postman or similar rest client and run APIs.