# WebAstro AI

An AI-powered astrology chat app using the Gemini API, with a responsive React frontend and Node.js backend.

## Setup

1. **Backend**:
   - Navigate to `backend/`.
   - Copy `.env` to `.env.local` and add your `GEMINI_API_KEY` and `API_TOKEN`.
   - Run `npm install` and `npm start`.
   - Deploy to Render using `render.yaml`.

2. **Frontend**:
   - Navigate to `frontend/`.
   - Add `REACT_APP_API_TOKEN` to `.env`.
   - Run `npm install` and `npm start`.
   - Deploy to Netlify using `netlify.toml`.

## Deployment

- **Render**: Use the `render.yaml` for backend deployment.
- **Netlify**: Use the `netlify.toml` for frontend deployment.

## Notes

- Ensure the backend URL is updated in `ChatRoom.jsx` for production.
- The API is protected with a token-based authentication.
