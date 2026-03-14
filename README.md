# CRUD-Backend-project

# Internship Assignment - Scalable REST API

## Tech Stack
Backend: Node.js, Express.js, MySQL
Frontend: React.js
Authentication: JWT
Password Hashing: bcrypt

## Features
- User Registration & Login
- JWT Authentication
- Role Based Access (Admin/User)
- CRUD APIs for Tasks
- React Dashboard UI
- API Versioning (/api/v1)
- Error Handling & Validation

## API Endpoints

POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

## Setup

Backend
npm install
npm start

Frontend
npm install
npm start

## Database

MySQL Database: internship_api
Tables:
- users
- tasks

## Scalability Notes
The system can be scaled using:
- Redis caching
- Microservices architecture
- Load balancing
- Docker containerization