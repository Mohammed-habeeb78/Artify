# 🧠 AI Image Generator — React + OpenAI

This mini-project is a **React-powered AI Image Generator** that uses the **OpenAI Image API** to create images from text descriptions.  
Just type what you imagine → click **Generate** → the AI creates the image for you 🔥

---

## 🚀 Features

✨ Converts prompts into realistic images  
⚛ Built with React Hooks (`useState`, `useRef`)  
⏳ Loading animation while image is being generated  
🖼 Shows a default placeholder before generation  
🔐 Works securely with `.env` API key

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React (Vite / CRA) |
| API | OpenAI Images API |
| Styling | CSS |
| State Management | React Hooks |

---

## 📂 Folder Structure

src/
│ ImageGenerator.jsx
│ ImageGenerator.css
│ /assets
│ └─ main.jpg

yaml
Copy code

---

## 🔑 Environment Variables

Create a `.env` file at the **root** of your project:

REACT_APP_OPENAI_API_KEY=your_openai_api_key_here

yaml
Copy code

> ⚠ Must restart the dev server after creating/updating `.env`

---

## ▶️ Run the Project

```bash
npm install
npm start
🧠 Core API Logic
js
Copy code
const response = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    "User-Agent": "Chrome",
  },
  body: JSON.stringify({
    prompt: input_ref.current.value,
    n: 1,
    size: "512x512",
  }),
});
⚠ Common Errors & Fixes (Brief + Useful)
🔥 Error	💡 Cause	🛠 Fix
Image not generating	OpenAI changed image endpoints	Update to latest Image API (DALL-E 3) if needed
undefined API key	.env not loaded	File must be .env, restart server
401: Unauthorized	Wrong or expired API key	Get valid key from OpenAI dashboard
Blank results after clicking generate	Prompt missing / empty	Input validation required before API call

🔍 Tip: Always confirm your key is active and has credits.

🌟 Future Enhancements (Optional)
🔹 Download generated image
🔹 Prompt history & favorites
🔹 Multiple image sizes
🔹 Dark mode UI

