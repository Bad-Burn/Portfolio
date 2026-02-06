# Backend Setup

Simple Node.js + Express backend for portfolio contact form.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure email in `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

**Gmail Setup:**
- Go to Google Account settings
- Enable 2-Step Verification
- Generate App Password: https://myaccount.google.com/apppasswords
- Use the generated password in `.env`

3. Run the server:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoint

**POST** `/api/contact`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

## Deploy

- **Vercel**: Add `vercel.json` and deploy
- **Render**: Connect repo and deploy as web service
- **Railway**: One-click deploy
