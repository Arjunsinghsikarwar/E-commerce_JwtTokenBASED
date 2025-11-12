## E-Commerce JWT Token Based

This is a simple E-commerce web application built using Spring Boot, Spring Security, JWT, and React.
It demonstrates how login, registration, and secure API access work using JWT authentication in a full-stack setup.

## Tech Stack

Backend: Spring Boot, Spring Security, JWT, Hibernate, MySQL
Frontend: React, Axios, HTML, CSS, TailwindCSS

🚀 Features

1.User registration and login functionality.

2.JWT token generation upon successful login.

3.Secure API endpoints accessible only with a valid JWT token.

4.Unauthorized users are restricted from protected routes.

5.RESTful communication between backend and frontend.

6.Custom product data stored in my own database for demonstration purposes.

## Learning Objective

1.I built this project to gain a deeper understanding of how JWT-based authentication works between a backend and frontend.
It helped me clearly visualize:

2. How RESTful APIs send and receive data between the server and client.

3. How JWT tokens are generated, stored, and validated.

4.How authorization and secure access** are handled in real-world applications.

5.In short, this project acts as a practical demonstration of secure data transfer and authentication using modern full-stack technologies.

## How It Works

User Registration:
User details are stored in the database.

User Login:
Spring Security verifies credentials.

JWT Generation:
On successful login, a JWT token is created.

Frontend Handling:
React stores the token in localStorage and sends it with every API request.

Backend Verification:
The backend validates the token before granting access to protected routes.

###### Developer’s Note

1.The main focus of this project was to understand and implement the complete authentication flow using JWT —
from user registration and login to secure communication between frontend and backend.

2. While I have not included modules like product ordering or cart management yet, the project structure is clean and extendable.
I intentionally designed it this way to focus on core authentication, token validation, and data flow between client and server.

3. This approach helped me gain a strong foundation in how secure APIs work in full-stack applications,
and I can confidently extend this project to include more advanced E-commerce features in the future.

🧾 How to Run
Backend

Configure your application.properties file with your PostgreSQL/MySQL credentials.

Run the Spring Boot application (default port: 8080).

Frontend

Navigate to the React project folder.

Run npm install to install dependencies.

Start the application with npm start (default port: 5173).

Then, open the frontend in your browser and try registering, logging in, and accessing secure routes.
