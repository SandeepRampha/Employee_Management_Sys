# Employee Management System

## Overview

The Employee Management System is a web application designed to manage employee data efficiently. This project features a responsive user interface for seamless interaction, RESTful APIs for backend operations, and a robust MySQL database for effective data management.

## Features

- **Responsive User Interface:** Designed with Angular to ensure compatibility across various devices.
- **CRUD Operations:** Implemented using Spring Boot for creating, reading, updating, and deleting employee data.
- **Database Management:** MySQL is used for efficient data storage and retrieval, with an optimized schema design.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** MySQL
- **API Testing:** Postman

## Project Structure

- **Frontend:** Located in the `frontend` directory, built with Angular.
- **Backend:** Located in the `backend` directory, built with Spring Boot.
- **Database:** SQL scripts and configuration files for MySQL.

## Installation and Setup

### Prerequisites

- Node.js
- Angular CLI
- Spring Boot /Java (JDK)
- MySQL

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
2. Install the dependencies:
   ```bash
   npm install
3. Start the Angular development server:
   ```bash
   ng serve
4. The frontend application will be available at http://localhost:4200.
### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install the dependencies and build the project:
   ```bash
   ./mvnw install
3. Start the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
4. The backend application will be available at http://localhost:1234.

### Database
1. Install MySQL and create a database:
   ```bash
   CREATE DATABASE employee_management_Sys

2. Update the database configuration in the application.properties file located in the backend/src/main/resources directory:
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_sys
    spring.datasource.username=yourUsername
    spring.datasource.password=yourPassword

## Usage
1. Access the Angular frontend at http://localhost:4200.
2. Perform CRUD operations on employee data through the user interface.
3. The frontend interacts with the backend APIs hosted at http://localhost:1234.

## ScreenShots

![image](https://github.com/user-attachments/assets/6584f0c6-fd88-4346-bbd5-432a0c1aecae)
![image](https://github.com/user-attachments/assets/83a96c27-1687-464d-9f12-4a5bdab5ce45)
![image](https://github.com/user-attachments/assets/c0060b6b-0cd6-4a9e-82a5-c11ae0ef8b36)
![image](https://github.com/user-attachments/assets/0f8724c0-171c-4e82-902f-5d107a4c148f)
![image](https://github.com/user-attachments/assets/a56ba276-2841-4186-ab1d-4ba3d741ff52)
![image](https://github.com/user-attachments/assets/b06ea399-2c00-4388-b899-d5bbf1884fd9)





    
