# Pixaura – AI Image Generator

Pixaura is a full‑stack AI image generator that lets users convert text prompts into high‑quality images, manage credits, and give feedback via a polished React frontend and an Express/MongoDB backend.[attached_file:73]

## Features

- User authentication (register/login) with JWT and hashed passwords using bcrypt.[attached_file:73]
- Credit system: new users get default credits; each generated image deducts one credit and the remaining balance is returned from the API.[attached_file:73]
- Auth‑protected image generation using Clipdrop’s Text‑to‑Image API, returning images as base64 data URLs.[attached_file:73]
- React 19 + React Router SPA with login modal, prompt form, and Tailwind‑styled UI components.[attached_file:73]
- Feedback form integrated with Web3Forms for contact/feedback.[attached_file:73]

## Tech Stack

| Layer    | Technologies |
|---------|--------------|
| Frontend | React, Vite, React Router, Tailwind CSS, React Toastify, React Icons[attached_file:73] |
| Backend  | Node.js, Express, MongoDB, Mongoose, bcrypt, jsonwebtoken[attached_file:73] |
| External | Clipdrop Text‑to‑Image API, Web3Forms[attached_file:73] |
| Hosting  | Frontend on Netlify, Backend on Render, MongoDB via `MONGODB_URL` connection[attached_file:73] |
