*This is a submission for the [Hacktoberfest Weekend Challenge: Build for a Friend](https://dev.to/challenges/hacktoberfest-weekend-2026-10-01)*

#  LectureBuddy — Turn Dense Lectures Into Crystal-Clear Notes

## What I Built

I built **LectureBuddy** for my friend and study partner, Alex. 

Alex is a brilliant student, but like many college students juggling coursework, jobs, and exams, they frequently get overwhelmed by dense, jargon-stuffed lecture slides and fast-moving professors. Half of Alex's study time wasn't spent actually learning—it was spent deciphering messy smartphone photos of handwritten notebook pages, scrolling through 60-page PDF slide decks, and trying to untangle complex academic jargon into concepts that made intuitive sense.

Alex needed a simple, distraction-free study buddy that could:
1. Take whatever lecture format they have—a **PDF slide deck**, a **Word document (`.docx`)**, or a **quick smartphone photo of handwritten notebook pages**.
2. Strip away the intimidating academic fluff and explain the material in **warm, beginner-friendly language ("Explain Like I'm 5")** with vivid real-world analogies.
3. Automatically distill **The Big Picture**, structured **high-yield key points**, and **important terms with flashcard memory hooks**.
4. Generate an interactive **comprehension quiz** and provide an **audio reader (Text-to-Speech)** so Alex can listen to lecture breakdowns on the bus or while walking across campus.

That is **LectureBuddy**: a clean, minimal, distraction-free web app that runs completely in the browser, respects student privacy, and works out of the box with zero required subscription fees or complex setups.

---

## Demo

- **GitHub Repository**: [https://github.com/huzaifa-devpk/LectureBuddy.git](https://github.com/huzaifa-devpk/LectureBuddy.git)
- **Live Demo / Local Preview**: Simply open `LectureBuddy/index.html` in any web browser.

### Key Interactive Features Walkthrough

- **Multi-Format Dropzone**: Seamlessly accepts `.pdf`, `.docx`, `.png`, `.jpg`, `.jpeg`, and `.webp`.
- **Handwritten Notes OCR Engine**: Upload a photo of handwritten notebook notes; LectureBuddy enhances ink contrast via an HTML5 canvas and runs client-side OCR with a real-time progress bar.
- **1-Click Sample Lectures**: Includes instant pre-loaded sample notes in **Biology** (Photosynthesis & Cellular Respiration), **Computer Science** (Big-O & Data Structures), and **History** (The Industrial Revolution) so anyone can test-drive the app in one click.
- **Tabbed Study Workspace**:
  -  **Simple Summary & Big Picture**: Plain-English intuition, step-by-step breakdown with analogies, and "Why It Matters" in real life.
  -  **Key Points**: High-impact bulleted takeaways with clear priority.
  -  **Important Terms & Glossary**: Clean definition cards + an interactive **3D Flip Flashcards** study mode with Next/Previous card navigation.
  -  **Practice Quiz**: Multiple-choice comprehension questions with instant feedback and explanations.
  -  **Ask LectureBuddy (Q&A)**: Interactive student chat to ask follow-up questions in beginner-friendly terms.
  -  **Text-to-Speech Narration**: Built-in audio reader with play/pause controls for hands-free learning.
  -  **Export & Sharing**: One-click Markdown study guide export (`.md`), copy to clipboard, and print-ready stylesheet.
  -  **Theme Toggle**: Clean Slate Light mode and Obsidian Dark mode for late-night study sessions.

---

## Code

{% embed https://github.com/huzaifa-devpk/LectureBuddy %}

Repository URL: **[https://github.com/huzaifa-devpk/LectureBuddy.git](https://github.com/huzaifa-devpk/LectureBuddy.git)**

### Project Structure

```
LectureBuddy/
├── index.html       # Clean, accessible semantic HTML5 interface
├── style.css        # Minimalist design system (Light & Dark theme)
└── script.js        # Client-side document parsers, OCR, & AI engine
```

---

## How I Built It

I designed LectureBuddy as a **100% frontend-only, zero-server web application** using semantic HTML5, vanilla CSS, and vanilla JavaScript. By eliminating heavy backend frameworks and server maintenance, the app is instantly portable, lightweight, and accessible to students anywhere—even without an active internet connection.

### 1. Client-Side Document & OCR Pipeline
- **PDF Extraction**: Integrated **PDF.js** directly in the browser to extract text, page numbers, and structural hierarchies from raw binary `ArrayBuffers`.
- **Word Document Extraction**: Used **Mammoth.js** to parse `.docx` files into clean plain text directly within client memory.
- **Handwriting OCR**: Implemented **Tesseract.js** coupled with a custom HTML5 Canvas image preprocessor that boosts ink contrast and performs grayscale thresholding, making faint handwriting on lined notebook paper easily readable.

### 2. Open-Source AI Architecture
LectureBuddy is built around open-weight models and open-source NLP:
- **Built-in Smart NLP Engine (Default)**: Runs 100% offline in pure JavaScript using sentence scoring, term extraction heuristics, and analogy-generation templates. This guarantees that any student can use LectureBuddy immediately without needing an API key, credit card, or server.
- **Open-Weight Cloud Inference (Groq & Hugging Face)**: Students who want deep frontier-grade reasoning can connect their free API key to query open-weight powerhouses like **Meta Llama 3.3 70B**, **Llama 3.2 3B**, **Qwen 2.5 7B**, or **Mistral 7B**.
- **Local Ollama Integration**: Privacy-conscious students running models locally on `localhost:11434` can route requests directly to local open-source models with complete data sovereignty.

---

## Why Does Open Innovation Matter?

Open innovation is crucial for education:

1. **Equitable Access for Students**: Closed, proprietary AI platforms are increasingly locked behind costly $20/month subscription walls. A student working part-time or studying in a developing nation shouldn't be priced out of learning tools. Open-source models and browser-native tools make high-quality personalized tutoring universally accessible.
2. **Student Privacy & Data Sovereignty**: Academic notes, research drafts, and student thoughts shouldn't have to be harvested to train closed commercial models. Open innovation makes client-side parsing and local open-weight inference possible—meaning Alex's personal notes never have to leave their own laptop.
3. **No Vendor Lock-In**: Because LectureBuddy is built on open standards and supports multiple open-weight providers (Groq, Hugging Face, Ollama, and local JS), it will never be disabled by a sudden API deprecation or closed-source pricing hike.

---

## My Agent Session

This application was planned, architected, and built with pair-programming assistance from **Google Antigravity Agent**. 

During the session, the agent:
- Established the core study experience (document parsing, ELI5 summaries, flashcards, quiz generator).
- Implemented client-side PDF.js, Mammoth.js, and canvas-contrast OCR pre-processing with Tesseract.js.
- Refactored the architecture into an ultra-clean, dependency-free frontend application (`index.html`, `style.css`, `script.js`).
- Validated multi-format inputs with real test documents.

---

## Prize Categories

- **Build for a Friend**
- **Most Impactful Open-Source Application**
- **Best Use of Open-Weight AI Models**
