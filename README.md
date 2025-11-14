# Social Login Frontend + CRUD Dashboard
A full-stack authentication and dashboard application built for SWENG 861.

# Project Overview

This project implements a modern full-stack web application featuring:

- Google and Facebook OAuth 2.0 Login
- Secure session-based authentication
- Protected dashboard with user avatar and name
- Full CRUD operations
- Modern UI with responsive design
- React frontend + Express backend with CORS and cookies

Developed as part of the SWENG 861 – Frontend Development Assignment.

# Features

## Authentication
- Google OAuth 2.0
- Facebook OAuth 2.0
- Session-based authentication using express-session
- Protected routes enforced by backend and frontend

## Frontend (React)
- React Router navigation
- Modular component architecture
- Avatar dashboard
- ItemForm and ItemList CRUD components

## Backend (Node.js + Express)
- Passport.js strategies for Google and Facebook
- CORS configured with credentials enabled
- REST API for CRUD operations

# Architecture

```
social-login-app/
│
├── server.js
├── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── App.css
    │   └── index.js
    └── package.json
```

Frontend: http://localhost:3001  
Backend: http://localhost:3000  

# Installation and Setup

## 1. Clone Repository
```
git clone https://github.com/your-username/social-login-app.git
cd social-login-app
```

## 2. Backend Setup

### Install dependencies:
```
npm install
```

### Create `.env`:
```
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
FACEBOOK_CLIENT_ID=your_facebook_id
FACEBOOK_CLIENT_SECRET=your_facebook_secret
SESSION_SECRET=your_session_secret
```

### Start backend:
```
npm start
```

## 3. Frontend Setup
```
cd frontend
npm install
npm start
```

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /profile | Returns authenticated user |
| GET | /logout | Logs out user and destroys session |
| GET | /api/items | Retrieve all items |
| POST | /api/items | Create new item |
| PUT | /api/items/:id | Update an item |
| DELETE | /api/items/:id | Delete an item |

All `fetch()` calls must include:

```
credentials: "include"
```

# Testing

## Manual UI Testing
- Google and Facebook login flows
- Dashboard protection and redirect behavior
- CRUD operations verified
- Refresh persistence of session
- Logout validation

## API Testing
- Verified endpoints through browser and Postman
- Checked session cookies and 401 responses

# Security

- OAuth secrets stored securely in `.env`
- Sessions managed with express-session
- CORS restricted to frontend origin
- httpOnly cookies for session protection

# Technologies

Frontend: React, React Router  
Backend: Node.js, Express, Passport.js  
Other: ES Modules, Fetch API, JSON



