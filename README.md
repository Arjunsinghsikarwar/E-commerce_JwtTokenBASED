# E-commerce_JwtTokenBASED # E-commerce_JwtTokenBASED

E-Commerce Website (JWT Token Based)

This is a simple E-commerce project built using Spring Boot, Spring Security, JWT, and React.
It shows how login, registration, and secure API access work using JWT tokens.

Tech Stack

Backend: Spring Boot, Spring Security, JWT, Hibernate, MySQL

Frontend: React, Axios, HTML, CSS, TailwindCSS

Features

User can register and log in.

A JWT token is generated after successful login.

Only users with a valid token can access secure API endpoints.

Unauthorized users cannot access secure pages.

Frontend and backend are connected using REST APIs.

How It Works

User registers → data saved in database.

User logs in → Spring Security checks credentials.

On success → JWT token is generated.

React stores the token in localStorage and sends it with API requests.

Backend verifies the token and allows access to secure routes.

In Simple :

This project helps understand how JWT authentication works between a Spring Boot backend and a React frontend in a simple way.

### Both Frontend and backend run on the default port.