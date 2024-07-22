# Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5. The current version app angular version: 17.3.11.

## Project Structure

The project was created from a template: [synto](https://preview.themeforest.net/item/synto-angular-tailwind-admin-dashboard-template/full_screen_preview/48610235) developped by [Spruko](https://spruko.com/index.html), but we decided to restructure it gradually to have a structure recommended for anular apps and often used for large projects. ([See an example project structure](https://github.com/dialloi659/angular/wiki/Recommended-Angular-Project-Structure-for-Large-Projects))

## Coding Style

Any contributor must follow the coding style proposed by Angular, if an exception is needed, this must be approved by at least two people including the tech lead or his replacement if he is not available. To learn more about coding style, please consult the Angular documentation on the subject by clicking [here](https://angular.dev/style-guide).

## Versions

| Name        | Version | Last update |
| ----------- | ------- | ----------- |
| Angular CLI | 17.3.7  | 22/05/24    |
| Node        | 20.11.1 | 22/05/24    |
| NPM         | 10.2.4  | 22/05/24    |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

npm install @types/crypto-js

### Circular dependancy check ([Source here](https://stackoverflow.com/questions/78478974/angular-import-based-on-index-ts-causes-error-typeerror-cannot-read-properti)):

`npx madge --circular --extensions ts ./`

# How To Retrieve API Authentication Information

This section explains how frontend developers can retrieve the username, password, and API key necessary to connect to the API (API container) during development. These credentials pertain to the admin user initially created by default during the application setup. Note that the password may vary depending on the environment (dev, tst, prd) and may be changed in the future, making this documentation particularly important.

## Prerequisites

Before following the steps in this documentation, ensure the backend containers are up and running. Developers should follow the API documentation (README) to start the backend containers using the provided Docker Compose file. The README and Docker Compose file can be found in the project repository at the following locations:

- **README:** smAPI/README.md
- **Docker Compose file:** smAPI/docker-compose.yml

### Steps to Start Backend Containers

1. Navigate to the project directory where the Docker Compose file is located.
2. Run the following command to start the backend containers:
   ```sh
   docker-compose up -d
   ```

Once the backend containers are running, proceed with the following steps to retrieve the authentication information.

## Method 1: Using Docker Commands

### Step 1: Identify the API Container

1. Open your terminal.
2. Run the following command to list all running containers:

   ```sh
   docker ps
   ```

   The output will look like this:

   ```plaintext
   CONTAINER ID   IMAGE                  COMMAND                  CREATED        STATUS         PORTS                           NAMES
   3fe56bc37d27   smapi-web              "uvicorn app.main:ap…"   4 weeks ago    Up 3 minutes   0.0.0.0:8002->8000/tcp          smapi-web-1
   ```

   Note the ID or name of the API container (in this example, `smapi-web-1`).

### Step 2: List the Environment Variables of the Container

1. Run the following command to list the environment variables of the container:

   ```sh
   docker exec smapi-web-1 env
   ```

   The output will look like this:

   ```plaintext
   PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
   HOSTNAME=3fe56bc37d27
   TRUSTED_ORIGINS=http://app.security-mindset.fr,http://app2.security-mindset.fr
   API_KEY=linsan
   DATABASE_URL=postgresql://hello_fastapi:hello_fastapi@db/hello_fastapi_dev
   ROOT_EMAIL=admin@gmail.com
   ROOT_PASSWORD=admin
   ROOT_TEL=33659249838
   LANG=C.UTF-8
   ...
   ```
2. Note the values of the `ROOT_EMAIL`, `ROOT_PASSWORD`, `ROOT_TEL`, and `API_KEY` variables. These will be used for authentication and API requests.

### Note

The values of `ROOT_EMAIL`, `ROOT_PASSWORD`, and `ROOT_TEL` correspond to the default admin user. These values may change depending on the environment (development, testing, production) and may be modified in the future.

## Method 2: Reading the API Source Code

### Step 1: Access the API Source Code

1. Access the repository of the API source code (usually a Git repository).
2. Open the configuration file or the main file where the authentication is implemented. This could be a file like `settings.py` or `config.py`.

### Step 2: Identify the Environment Variables Used for Authentication

1. Look for the environment variables used for authentication. They are often retrieved with `os.getenv` calls.

   Example in Python:

   ```python
   import os

   ROOT_EMAIL = os.getenv('ROOT_EMAIL')
   ROOT_PASSWORD = os.getenv('ROOT_PASSWORD')
   ROOT_TEL = os.getenv('ROOT_TEL')
   API_KEY = os.getenv('API_KEY')
   ```
2. Note the names of the environment variables (`ROOT_EMAIL`, `ROOT_PASSWORD`, `ROOT_TEL`, `API_KEY`).

### Step 3: Connect to the Container and Display Environment Variables

1. Use the following command to connect to the container:

   ```sh
   docker exec -it smapi-web-1 /bin/bash
   ```
2. Once connected to the container, use `echo` to display the values of the environment variables:

   ```sh
   echo $ROOT_EMAIL
   echo $ROOT_PASSWORD
   echo $ROOT_TEL
   echo $API_KEY
   ```
3. Note the values displayed for each variable.

### Note

Examining the source code helps to understand how authentication is implemented and which environment variables are used. This can be useful for troubleshooting or adjusting configurations based on specific environmental needs.

## Conclusion

By following these steps, we can easily retrieve the information needed to connect to the API during development. Use the Docker method for quick access to environment variables and the source code method for a deeper understanding of how authentication is implemented. Note that login information may vary and should be regularly checked to ensure correct access to the API.
