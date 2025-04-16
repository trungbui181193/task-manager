# 🗂️ Task Manager Application

A full-stack task management application built with **ReactJS (frontend)** and **Spring Boot (backend)**. Users can register, log in, and manage their tasks. It includes JWT-based authentication and is containerized with Docker.

## 📦 Project Structure
```
task-manager/ 

    ├── task-manager-backend/ # Spring Boot backend
    ├── task-manager-frontend/ # ReactJS frontend 
    └── docker-compose.yml # Docker orchestration
```

---

## 🚀 Features

- ✅ User registration & login with JWT authentication
- ✅ Role-based access control (Basic setup)
- ✅ Task CRUD (Create, Read, Update, Delete)
- ✅ Responsive UI using Bootstrap
- ✅ H2 in-memory database (for simplicity)
- ✅ Cross-Origin support (CORS) for frontend-backend interaction
- ✅ Dockerized setup for easy deployment

---

## ⚙️ Technology Stack

**Frontend**
- ReactJS
- Bootstrap
- React Router DOM

**Backend**
- Spring Boot
- Spring Security
- JWT
- H2 Database
- Maven

**DevOps**
- Docker
- Docker Compose

---

## 🧪 Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2.Build the Backend

```bash
cd task-manager-backend
./mvnw clean package -DskipTests
```

### 3. Run the Project with Docker
From the root folder:
```bash
docker-compose up -d
```

Frontend: http://localhost:3000

Backend: http://localhost:8080

---

## 🧾 API Endpoints

### 🔐 Authentication

| Endpoint | Method | Description |
|----------|----------|----------|
| /api/auth/register    | POST     | Register a new user     |
| /api/auth/login    | POST     | Log in and get token     |

✅ Use the JWT token in Authorization header:

Authorization: Bearer <your_token>

---
### 📋 Tasks

| Endpoint | Method | Description |
|----------|----------|----------|
| /api/tasks | GET | Get all tasks |
|/api/tasks|	POST|	Create a new task
|/api/tasks/{id}|	PUT|	Update a task|
|/api/tasks/{id}|	DELETE|	Delete a task|

---
## 🛠️ Environment Configuration
Backend: ```src/main/resources/application.properties```
```
spring.datasource.url=jdbc:h2:mem:taskdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---
## Build Frontend for Production
``` bash
cd task-manager-frontend
npm install
npm run build
```

---
### 📦 Docker Setup
▶️ Running the Full Stack
```
docker-compose up --build -d
```

Frontend will be available at: http://localhost:3000

Backend will be available at: http://localhost:8080

---
## 📄 License
This project is licensed under the MIT License.

---
## 👨‍💻 Author
trungbui181193

GitHub: [@trungbui181193](https://github.com/trungbui181193)