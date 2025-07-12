#  Mini Footfall Monitoring System

A fully Dockerized full-stack MERN (MongoDB, Express, React, Node.js) application designed to monitor and visualize footfall activity using a sensor network. This project supports real-time device tracking, footfall analytics (hourly/daily), and a modern dashboard interface built with React + TailwindCSS.


## Features

*  Real-time footfall tracking and analytics (daily/hourly)
*  RESTful API to manage device and footfall data
*  MongoDB database for persistent storage
*  Beautiful UI using React, TailwindCSS, ShadCN, and Recharts
*  Containerized services with Docker and Docker Compose
*  TypeScript on both frontend and backend
*  Chart visualizations for insights


##  Project Structure

```
mini_footfall_monitoring_system/
├── backend/              # Express.js + MongoDB backend (TypeScript)
│   ├── src/
│   ├── app.ts
│   ├── server.ts
│   └── Dockerfile
├── frontend/             # React + Vite + Tailwind frontend (TypeScript)
│   ├── src/
│   ├── vite.config.ts
│   └── Dockerfile
├── docker-compose.yml    # Docker Orchestration
└── README.md
```


## 🛠️ Docker Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AnanthuSpace/mini_footfall_monitoring_system.git
cd mini_footfall_monitoring_system
```

### 2. Build Containers

```bash
docker-compose build --no-cache
```

### 3. Start Services

```bash
docker-compose up
```

> Services started:
>
> * Frontend: [http://localhost:3000](http://localhost:3000)
> * Backend: [http://localhost:5000](http://localhost:5000)
> * MongoDB: Accessible internally on `mongo:27017`


## Backend API (Express + MongoDB)

### Base URL: `http://localhost:5000`

#### Routes

* `GET /api/footfall/devices` - List all tracked devices
* `GET /api/footfall/analytics?range=day|hour` - Get footfall data aggregated by day or hour

### Technologies

* Node.js + Express
* TypeScript
* Mongoose for MongoDB
* CORS, dotenv, morgan (middleware)

## Frontend (React + Vite + Tailwind)

### Technologies

* React 18 with TypeScript
* Vite for fast bundling
* Tailwind CSS + ShadCN UI
* Recharts for charting
* Axios for API requests

### Pages

* Dashboard with footfall charts
* Device listing with metadata

## 🛠️ Manual Development Setup

> If not using Docker, follow these steps:

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs at: [http://localhost:5000](http://localhost:5000)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

> Ensure MongoDB is installed and running locally

## Environment Variables

### `.env` (Backend)

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/footfall_db
```

## Author

**Ananthu Mohan**

