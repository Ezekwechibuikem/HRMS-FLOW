🏢 HR Management System (React + Django + Three.js)

A full-stack HR Management System built with Django REST Framework (backend), React (frontend), and Three.js (3D visualization dashboard).
This system is designed to manage employee data, departments, attendance, and performance while visualizing statistics in an interactive 3D dashboard.

🚀 Project Description

The HR Management System is a modern organizational web application that streamlines how HR teams manage their workforce.
It combines robust backend data management (Django) with an interactive, real-time 3D user experience (Three.js + React).

🎯 Key Objectives

Manage employees, departments, and attendance.

Visualize HR data with engaging 3D models and lighting effects.

Enable API-driven communication between backend and frontend.

Provide secure and scalable architecture with environment isolation.

⚙️ Tech Stack
Layer	Technology	Description
Backend	Django, Django REST Framework, PostgreSQL	RESTful API, ORM, and database management
Frontend	React.js, Axios, React Router, Tailwind CSS (optional)	SPA user interface and state management
3D Graphics	Three.js, @react-three/fiber, @react-three/drei	Dynamic 3D dashboard and visualization
Environment	python-decouple, .env	Secure environment variable handling

```Project Structure

🗂️ Project Structure
hrms/
├── backend/                     # Django API
│   ├── manage.py
│   ├── hrms_backend/
│   ├── employees/
│   └── requirements.txt
├── frontend/                    # React + Three.js client
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── ThreeDashboard.jsx
│   │   └── App.js
│   ├── package.json
│   └── .env
├── .env                         # Root environment file
└── README.md

🧠 Core Features (MVP)

✅ Employee Management — Add, view, edit, and delete employees.
✅ Department Module — Group employees by departments.
✅ Attendance Tracking — Log daily check-in and check-out.
✅ 3D Dashboard Visualization — Display stats (e.g., employee count, attendance rate) using Three.js.
✅ RESTful API Integration — Frontend consumes backend via secure endpoints.
✅ Environment Isolation — Uses .env for secrets and database credentials.