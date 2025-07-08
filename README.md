# CodeReviewer Backend

This is the backend for the CodeReviewer project. It is a Node.js/Express server that provides AI-powered code review functionality via REST API endpoints. The backend integrates with an AI service (e.g., Google Gemini) to generate code reviews based on user input.

---

## Features
- REST API for code review requests
- Integration with AI model (configurable via .env)
- CORS enabled for frontend communication
- Error handling and logging

---

## Setup Instructions

### 1. Install Dependencies
```sh
cd Backend
npm install
```

### 2. Environment Variables
Create a `.env` file in the `Backend` directory with the following:
```
API_KEY=your_ai_api_key_here
MODEL_NAME=gemini-2.5-flash
```

### 3. Start the Server
```sh
npm start
# or
node src/app.js
```

The server will run on [http://localhost:8080](http://localhost:8080) by default.

---

## API Endpoints

### POST `/ai/get-review`
- **Description:** Get an AI-generated review for submitted code or text.
- **Request Body:**
  ```json
  {
    "prompt": "your code or text here"
  }
  ```
- **Response:**
  ```json
  {
    "result": "AI-generated review text"
  }
  ```

---

## Development
- Main entry: `src/app.js` or `server.js`
- AI logic: `src/services/ai.service.js`
- Controllers: `src/controller/ai.contoller.js`
- Environment variables loaded with `dotenv`

---

## Environment Variables
- `API_KEY` — Your AI service API key
- `MODEL_NAME` — The AI model to use (e.g., `gemini-2.5-flash`)

---

## Credits
- [Express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Google Gemini API](https://ai.google.dev/) (or your chosen AI provider)

---

## License
MIT 