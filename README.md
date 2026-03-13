# 🚀 My Dev App Project — Full Stack Portfolio

A full-stack portfolio web application built with **HTML, CSS, JavaScript** on the frontend and **Node.js + Express** on the backend, deployed on **Vercel** using serverless functions.

---

## 🌐 Live Demo

> **[https://your-app.vercel.app](https://your-app.vercel.app)**  
> *(Replace with your actual Vercel URL after deployment)*

---

## 📁 Project Structure

```
my-Dev-app-project/
├── index.html                  # Main HTML page
├── style.css                   # Stylesheet
├── script.js                   # Frontend JavaScript + API fetch calls
├── server.js                   # Express app (no app.listen — Vercel serverless)
├── package.json                # Node.js dependencies
├── vercel.json                 # Vercel routing configuration
│
├── api/
│   └── index.js                # Vercel serverless entry point
│
├── routes/
│   ├── projects.js             # GET /api/projects
│   └── contact.js              # POST /api/contact
│
├── controllers/
│   ├── projectsController.js   # Logic for returning projects
│   └── contactController.js    # Logic for contact form validation
│
└── data/
    └── projects.json           # JSON file database (your projects)
```

---

## ✨ Features

- 🖥️ **Frontend** — Responsive portfolio with HTML, CSS & JavaScript
- ⚙️ **Backend** — REST API built with Node.js and Express
- ☁️ **Serverless** — Deployed on Vercel without `app.listen()`
- 📦 **JSON Database** — Simple file-based data storage for beginners
- 📬 **Contact Form** — POST endpoint with input validation
- 🔗 **Projects API** — GET endpoint serving project data dynamically

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api` | Health check — confirms API is running |
| GET | `/api/projects` | Returns all projects from `data/projects.json` |
| POST | `/api/contact` | Accepts contact form data `{ name, email, message }` |

### Example: GET /api/projects response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Portfolio Website",
      "description": "A personal portfolio built with HTML, CSS, and JavaScript.",
      "techStack": ["HTML", "CSS", "JavaScript"],
      "liveUrl": "https://your-portfolio.vercel.app",
      "repoUrl": "https://github.com/poojapooja20029-tech/my-Dev-app-project"
    }
  ]
}
```

### Example: POST /api/contact request body
```json
{
  "name": "Pooja",
  "email": "pooja@example.com",
  "message": "Hello, I'd love to connect!"
}
```

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

**Backend**
- Node.js
- Express.js
- CORS middleware

**Deployment**
- Vercel (Serverless Functions)

---

## ⚙️ Why No `app.listen()`?

Vercel runs each API route as a **short-lived serverless function** — it starts on demand and shuts down after responding. There is no persistent server, so binding a port with `app.listen()` is not needed or supported. Instead, the Express app is exported via `module.exports = app` and Vercel calls it directly.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/poojapooja20029-tech/my-Dev-app-project.git

# 2. Navigate into the project folder
cd my-Dev-app-project

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> The app will run at `http://localhost:3000`

---

## ☁️ Deploying to Vercel

### Option 1 — Automatic (recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel handles everything automatically

### Option 2 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### How Vercel routing works
The `vercel.json` file tells Vercel to send all `/api/*` requests to `api/index.js`:
```json
{
  "version": 2,
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/index.js" }
  ]
}
```

---

## 📝 Adding Your Own Projects

Edit `data/projects.json` and add your projects in this format:

```json
{
  "id": 4,
  "title": "Your Project Name",
  "description": "What your project does.",
  "techStack": ["React", "Node.js", "MongoDB"],
  "liveUrl": "https://your-live-url.com",
  "repoUrl": "https://github.com/your-username/your-repo",
  "image": "https://link-to-screenshot.com/image.png"
}
```

---

## 🧪 Testing the API

After deployment, test these URLs in your browser:

| URL | Expected result |
|-----|----------------|
| `https://your-app.vercel.app/api` | `{"message":"API is running ✅"}` |
| `https://your-app.vercel.app/api/projects` | Your projects JSON array |

To test the POST `/api/contact` endpoint use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

---

## 📌 Common Mistakes to Avoid

- ❌ Never add `app.listen()` — it will cause Vercel to time out
- ❌ Don't use `http://localhost:3000` in fetch calls after deployment — use `/api/projects` (relative URL)
- ✅ Make sure `package.json` is in the **root** of the repository
- ✅ Check **Vercel Function Logs** in the dashboard if something isn't working

---

## 👩‍💻 Author

**Pooja**  
GitHub: [@poojapooja20029-tech](https://github.com/poojapooja20029-tech)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
