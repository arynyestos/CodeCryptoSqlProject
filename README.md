## SQL project

On this project we installed the Northwind database on Docker using MySQL, SQL Server and PostgreSQL images. Then, using Express we created a server that allowed querying the three databases.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Demo](#demo)

## Overview

This is back-end-only project, in which the main goal was to put into practice some of the concepts learnt about Docker, SQL and Express.

## Features

- Same database deployed on three different Docker containers using three different images:
    - [MySQL](https://hub.docker.com/_/mysql)
    - [PostgreSQL](https://hub.docker.com/_/postgres)
    - [SQL Server](https://hub.docker.com/_/microsoft-mssql-server)
- Express server to query them all.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arynyestos/CodeCryptoSqlProject.git
   ```

2. Navigate to the project directory:

   ```bash
    cd CodeCryptoSqlProject
   ```

3. Install dependencies:

   ```bash
    yarn
   ```
   
4. Create .env: To run the server you will need a .env file of the like like the one in the example below.
   
  ```.env  
  MSQL_HOST=localhost
  MSQL_USER=root
  MSQL_PASSWORD=my-secret-pw
  MSQL_DATABASE=northwind
  
  PG_USER=postgres
  PG_PASSWORD=my-secret-pw
  PG_DATABASE=postgres
  PG_HOST=localhost
  PG_PORT=5437
  
  SQLSERVER_USER=sa
  SQLSERVER_PASSWORD=my-secret-pw
  SQLSERVER_DATABASE=northwind
  SQLSERVER_HOST=localhost
```
   
## Usage

To run this project, clone the repository as explained above and install the databases, following the steps below. We used DBeaver, but you can use any tool of your choice. These steps are for the MySQL database, but the other two work in a similar manner.

1. Launch Docker container. Use the following command to run the Docker container with the MySQL image on which we'll install the Northwind database:
   ```bash
   docker run --name sqlproject-mysql -p :3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.28
   ```
   
2. Install the Northwind database on the container:   
    1. Create a new connection:
        1. Click on New Database Connection:
<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/5b5897f3-ba4f-485c-a430-e576875f8f43">
</p>

        2. Select the database management system of your choice, for this project we used MySQL, PostgreSQL and SQL Server:
<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/b763727b-b34c-4171-abc4-d574f7f362dd">
</p>

        3. Configure the port and the password:
<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/17444749-2244-4791-b2ca-c4393454b651">
</p>

    2. Run the Northwind database creation script:
        1. Create a new SQL script:
<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/5aeb56c1-0cca-45f0-bb56-0fc69e691f4c">
</p>

        2. Paste the [Northwind creation script](https://raw.githubusercontent.com/valoni/northwindextended/master/Northwind.MySQL5.sql) and run it.
        
3. Run the server:
   ```Node.js
   node server.js
   ```

## Technologies Used
- Docker
- Express
- SQL

## Demo

Below you can see the screenshots of all three databases' contents displayed in JSON format in the web browser:

### MySQL database

<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/eecd8381-f0f8-4460-a512-c4d54e9e19f8">
</p>

### PostgreSQL database

<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/31aefc4e-deef-4a2f-916b-4fd043d0b678">
</p>

### SQL Server database

<p align="center">
  <img src="https://github.com/arynyestos/CodeCryptoSqlProject/assets/33223441/aa81c561-a5a1-4799-8916-f6961b25023b">
</p>




