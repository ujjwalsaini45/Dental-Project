Live URL : https://dental-project-wpcy.vercel.app/
# dr-sharma-dental

Dental clinic website scaffold for Dr. Sharma Dental Clinic, including a static frontend and a Node.js + Express backend with MongoDB support.

## Project Structure

- `frontend/`
  - `index.html` – main landing page
  - `style.css` – frontend styles
  - `main.js` – frontend behavior
  - `images/` – clinic and doctor images
- `backend/`
  - `server.js` – Express app entrypoint
  - `package.json` – backend dependencies and scripts
  - `.env.example` – example environment file
  - `routes/appointments.js` – appointment API route
  - `controllers/appointmentController.js` – appointment logic
  - `models/Appointment.js` – Mongoose appointment schema

## Features

- Static frontend website
- Appointment booking form
- Express API endpoint at `/api/appointments`
- MongoDB Atlas support via Mongoose
- Local fallback storage in memory if MongoDB is unavailable

## Setup

### 1. Backend install

```bash
cd dr-sharma-dental/backend
npm install
```

### 2. Configure environment

Copy the example file and add your MongoDB Atlas URI:

```bash
copy .env.example .env
```

Edit `.env` and set:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.3qxjepm.mongodb.net/dental?retryWrites=true&w=majority&appName=Cluster0
```

### 3. Start backend

```bash
npm run dev
```

The backend will run at:

- `http://localhost:3000`

## Frontend

Open the site in your browser at:

- `http://localhost:3000`

The frontend is served statically from `frontend/` by the backend server.

## API

### POST `/api/appointments`

Submit appointment data as JSON:

```json
{
  "name": "Rahul Sharma",
  "phone": "9876543210",
  "service": "Teeth Cleaning",
  "datetime": "2026-06-18T10:00:00Z",
  "message": "I need a morning appointment"
}
```

## Notes

- Replace the placeholder MongoDB credentials in `.env` with your Atlas username and password.
- If MongoDB auth fails, the backend still starts and stores appointments in memory temporarily.
- To make the frontend complete, copy your original `hello.html` content into `frontend/index.html` and move inline CSS/JS into `style.css` and `main.js` as needed.

## Troubleshooting

- Port already in use: stop any process using port `3000`, then restart the server.
- MongoDB auth errors: verify your Atlas username/password and network access rules.
