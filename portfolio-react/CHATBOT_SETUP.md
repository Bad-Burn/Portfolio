# AI Chatbot Setup

## Get Gemini API Key

1. Go to https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the API key

## Configure

Add your API key to `.env` file:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## Restart Dev Server

After adding the API key, restart your dev server:
```bash
npm run dev
```

The chatbot will appear as a floating button in the bottom-right corner!
