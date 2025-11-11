E-Commerce JWT Token Based

This is a simple E-commerce project built using Spring Boot, Spring Security, JWT, and React.
It demonstrates how login, registration, and secure API access work using JWT tokens.

# Tech Stack

Backend: Spring Boot, Spring Security, JWT, Hibernate, MySQL
Frontend: React, Axios, HTML, CSS, TailwindCSS

# Features

1.Users can register and log in.

2.A JWT token is generated after successful login.

3.Only users with a valid token can access secure API endpoints.

4.Unauthorized users cannot access secure pages.

5.Frontend and backend are connected using REST APIs.

####### I created custom product data for demonstration purposes, showing how secure APIs work with JWT.

# How It Works

1. User Registration: Data is saved in the database.

2 User Login: Spring Security verifies credentials.

3 JWT Generation: On successful login, a token is generated.

4 Frontend Handling: React stores the token in localStorage and sends it with API requests.

5 Backend Verification: The backend validates the token and allows access to protected routes.

In simple terms:
This project demonstrates JWT-based authentication between a Spring Boot backend and a React frontend. It shows how secure APIs work, how tokens are used to verify users, and how only authorized users can access certain data.

How to Run

Backend:

Configure application.properties with your Postgresql database.

Run the Spring Boot application (default port 5173).

Frontend:

Navigate to the React project folder.

Run npm install to install dependencies.

Run npm start (default port 5173).

Open the frontend in your browser and try registering, logging in, and accessing secure routes.
