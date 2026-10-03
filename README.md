# 🎓 LectureBuddy (Frontend-Only Edition)

**LectureBuddy** is a clean, minimal, and beginner-friendly web application built with **HTML5, Vanilla CSS, and Vanilla JavaScript**. It runs 100% in the browser with **zero backend or installation needed**.

Simply double-click `index.html` in your browser (Chrome, Edge, Firefox, Safari) and you are ready to study!

---

## 📁 Project Structure

```
LectureBuddy/
├── index.html       # Clean, accessible semantic HTML5 interface
├── style.css        # Minimalist design system (Light & Dark theme)
└── script.js        # Client-side document parsers & AI explainer logic
```

---

## 🌟 Key Features

1. **Client-Side Document Parsing (No Server Required)**:
   - 📕 **PDF Lecture Slides**: Extracted directly in the browser via [PDF.js](https://mozilla.github.io/pdf.js/).
   - 📘 **Word Documents (`.docx`)**: Parsed directly in the browser via [Mammoth.js](https://github.com/mwilliamson/mammoth.js).
   - ✍️ **Photos of Handwritten Lecture Notes**: Automatic canvas contrast boosting and high-accuracy handwriting OCR via [Tesseract.js](https://tesseract.projectnaptha.com/) with live progress tracking.
   - 🚀 **1-Click Sample Lectures**: Instantly test-drive the app with built-in realistic notes in **Biology** (Photosynthesis & ATP), **Computer Science** (Big-O & Data Structures), and **History** (The Industrial Revolution).

2. **Simple Beginner-Friendly Explanations**:
   - **🌟 The Big Picture**: Core intuition explained in plain English without confusing jargon.
   - **💡 Simple Summary**: Step-by-step breakdown using relatable real-world analogies.
   - **🎯 Why It Matters**: Real-world context and practical relevance.
   - **📌 Key Points**: High-impact bulleted takeaways with clear priority.
   - **📖 Important Terms & Glossary**: Memory hooks and simple definitions.
   - **🗂️ Interactive 3D Flip Flashcards**: Practice vocabulary and flip cards to test recall with previous/next controls.
   - **🎯 Comprehension Quiz**: Interactive multiple-choice questions with instant scoring feedback.
   - **💬 Ask LectureBuddy**: Interactive Q&A chat to ask follow-up questions about the notes.
   - **🔊 Text-to-Speech**: Listen to the explanation with play/pause audio controls.
   - **🌓 Clean Theme & Export**: Dark/Light mode toggle, Markdown export, and print stylesheet.

3. **Flexible AI Engine Options**:
   - **Built-in Smart NLP Engine (Default)**: 100% free, runs offline directly in JavaScript, no API key required.
   - **Groq API**: Connect to blazing fast open-source models (`llama-3.3-70b-versatile`, `gemma2-9b-it`).
   - **Hugging Face Inference API**: Connect to `Llama-3.2-3B`, `Qwen 2.5`, or `Mistral 7B`.
   - **Custom / OpenRouter**: Any OpenAI-compatible endpoint.

---

## 🚀 How to Run

1. Open the [LectureBuddy/index.html](file:///e:/Dev%20challene%201/LectureBuddy/index.html) file in any web browser.
2. Drag and drop any PDF, Word document, or photo of handwritten lecture notes (or click one of the sample buttons).
3. Click **"Explain Lecture"** to get your beginner-friendly study guide!
