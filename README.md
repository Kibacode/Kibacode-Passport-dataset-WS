
# Test

## Pre-requirements

- NodeJS with NPM (stable version)

- VS Code 

- Rest service client (Postman, Insomnia, curl, etc.)

## Technologies used

- Nest JS

- Angular 13 (with Material Design)

  

# Steps to deploy apps

  

## Prepare your database

  

1. The database is include into Backend project ([Passport-dataset-WS](https://github.com/Kibacode/Passport-dataset-WS)).

  

## Run backend rest-services

1. Clone or download project from [Passport-dataset-WS](https://github.com/Kibacode/Passport-dataset-WS)

2. Run a command line terminal in the generated folder.
3. Compile project using npm
- For linux-based or macOS Terminal and Windows CMD or Powershell.

```bash

npm install

```

4. Run the services using npm
- For linux-based or macOS Terminal and Windows CMD or Powershell.

```bash

npm start

```

4. The web services will be deployed in port 3000.

5. To test the service is working was configured an OpenApi instance, you can see it in http://localhost:3000/api.

## Run front-end app

1. Clone or download project from [Passport-checker](https://github.com/Kibacode/Passport-checker)

2. Run a command line terminal in the generated folder.
3. Compile project using npm.
- For linux-based or macOS Terminal and Windows CMD or Powershell.

```bash

npm install

```

4. Run the services using npm
- For linux-based or macOS Terminal and Windows CMD or Powershell.

```bash

npm start

```

4. The web app will be running in http://localhost:4200/.