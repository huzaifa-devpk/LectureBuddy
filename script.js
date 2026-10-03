/**
 * LectureBuddy - Client-Side Application
 * Supports PDF (PDF.js), Word .docx (Mammoth.js), Handwritten Notes (Tesseract.js OCR),
 * and AI explanations (Groq, Hugging Face, OpenRouter, or Built-in NLP).
 */

(function () {
  "use strict";

  // Configure PDF.js worker
  if (typeof pdfjsLib !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  // --- SAMPLE LECTURE DATA ---
  const SAMPLE_LECTURES = {
    biology: {
      title: "Cellular Respiration and Photosynthesis",
      topic: "Biology 101",
      content: `Lecture 4: Cellular Respiration & Energy Flow in Living Systems
Instructor: Dr. Angela Hayes | Bio 101 Notes

Topic Overview:
All living cells need energy to survive. The primary universal currency of energy in biological systems is Adenosine Triphosphate (ATP). Today we explored how plants generate energy through photosynthesis and how cells break down glucose to generate ATP through cellular respiration.

1. Photosynthesis: Converting Sunlight to Chemical Energy
- Takes place in the chloroplasts of plant cells.
- Primary pigment involved: Chlorophyll (absorbs blue and red light, reflects green).
- Chemical Equation: 6 CO2 + 6 H2O + Light Energy -> C6H12O6 (Glucose) + 6 O2.
- Two distinct stages:
  a. Light-dependent reactions (occurs in the thylakoid membrane): Photons split water molecules (photolysis), releasing oxygen gas as a byproduct and charging up electron carriers (NADPH and ATP).
  b. Calvin Cycle / Light-independent reactions (occurs in the stroma): Carbon fixation converts CO2 into 3-carbon sugars (G3P) which later form glucose.

2. Cellular Respiration: Releasing Energy from Food
- Takes place in all aerobic organisms (both plants and animals!).
- Chemical Equation: C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + approx. 30-32 ATP.
- Three major phases:
  a. Glycolysis (in cytoplasm): Glucose (6-carbon) is split into two pyruvate molecules (3-carbon). Yields net 2 ATP and 2 NADH. Does not require oxygen (anaerobic).
  b. Krebs Cycle / Citric Acid Cycle (in mitochondrial matrix): Pyruvate is converted to Acetyl-CoA, producing CO2, NADH, FADH2, and 2 ATP.
  c. Oxidative Phosphorylation & Electron Transport Chain (ETC) (in inner mitochondrial membrane): Electrons pass along membrane protein complexes; protons (H+) are pumped into intermembrane space, creating an electrochemical gradient.
  d. ATP Synthase: A microscopic rotary motor enzyme driven by proton flow (chemiosmosis) that phosphorylates ADP into ATP. This step yields the bulk of ATP (~28 ATP).

3. Fermentation (When Oxygen is Absent):
- When oxygen is depleted (anaerobic conditions), cells undergo fermentation to regenerate NAD+ so glycolysis can continue producing minimal ATP.
- Lactic Acid Fermentation: occurs in human muscle cells during intense sprinting (causes muscle fatigue).
- Alcoholic Fermentation: occurs in yeast (produces ethanol and CO2, used in bread baking and brewing).

Key Takeaways for Exam:
- Oxygen is the final electron acceptor in the electron transport chain. Without oxygen, electrons back up and the whole chain stalls!
- Autotrophs make their own food; heterotrophs consume others.
- Mitochondria is often nicknamed the powerhouse of the cell because of oxidative phosphorylation.`
    },

    cs: {
      title: "Introduction to Big-O Notation & Data Structures",
      topic: "Computer Science 102",
      content: `Lecture 7: Algorithmic Complexity & Fundamental Data Structures
Prof. Marcus Vance | CS 102 Lecture Notes

1. What is Big-O Notation?
Big-O notation is the language programmers use to describe how the runtime or memory consumption of an algorithm grows as the input size (n) increases toward infinity.
It measures the worst-case scenario growth rate, ignoring hardware differences and constant factors.

Common Big-O Complexities (from best to worst):
- O(1) - Constant Time: The operation takes the exact same number of steps regardless of input size. Example: accessing an array element by index (arr[5]).
- O(log n) - Logarithmic Time: The problem size is cut in half at each step. Extremely fast. Example: Binary Search in a sorted list of 1,000,000 items takes only ~20 checks!
- O(n) - Linear Time: Runtime scales directly proportional to input size. Example: Simple loop through an unsorted array searching for an item (Linear Search).
- O(n log n) - Linearithmic Time: Common in efficient comparison sorting algorithms such as Merge Sort and Quick Sort.
- O(n^2) - Quadratic Time: Common in nested loops. Example: Bubble Sort, Selection Sort. Becomes painfully slow on large datasets.
- O(2^n) - Exponential Time: Doubles with each added input element. Example: Naive recursive calculation of Fibonacci numbers.

2. Essential Data Structures:
- Arrays: Contiguous block of memory. Fast random access by index (O(1)), but inserting or deleting from the middle requires shifting elements (O(n)).
- Linked Lists: Nodes connected by pointers. Easy insertions/deletions at known positions (O(1)), but searching requires traversing one by one (O(n)).
- Hash Maps (Dictionaries / Hash Tables): Key-value pairs indexed by a hash function. Average lookup, insertion, and deletion are O(1). Collisions are handled via chaining or open addressing.
- Stacks: LIFO (Last-In, First-Out). Push, pop, and peek operations are O(1). Used in browser back buttons and call stack execution.
- Queues: FIFO (First-In, First-Out). Enqueue and dequeue operations are O(1). Used in print jobs and background task workers.

Practical Tip:
Premature optimization is the root of all evil, but picking the wrong data structure (e.g. searching through an unsorted array of 100,000 elements repeatedly instead of using a Hash Map) can turn a 1-millisecond task into a 10-second freeze.`
    },

    history: {
      title: "The Industrial Revolution & Social Transformation",
      topic: "World History 201",
      content: `History 201: Modern World History
Lecture 12: The Industrial Revolution (1760-1840) and Societal Transformation
Prof. Catherine Edwards

Introduction:
The Industrial Revolution was the transition from agrarian, handcrafted rural economies to machine-driven, factory-based urban industrial societies. It began in Great Britain in the late 18th century before spreading across Western Europe, the United States, and eventually worldwide.

1. Why Great Britain First?
Great Britain was uniquely situated due to several key catalysts:
- Abundant Natural Resources: Large domestic deposits of coal (the fuel of steam engines) and iron ore (building material for machinery).
- Agricultural Revolution: Innovations like Jethro Tull's seed drill and four-field crop rotation increased food yields, leading to population growth and surplus labor.
- Capital and Financial Institutions: Advanced banking systems, patent protections, and capital accumulated through global maritime trade networks.
- Stable Political Climate: Rule of law, strong property rights, and parliamentary support for commercial expansion.

2. Landmark Inventions:
- The Steam Engine (James Watt, 1769): Improved Thomas Newcomen's earlier design, decoupling factories from rushing rivers and allowing manufacturing anywhere coal was available.
- The Spinning Jenny (James Hargreaves) & Power Loom (Edmund Cartwright): Mechanized textile production, multiplying cotton yarn output by hundreds of times.
- Railroads & Steamships (early 1800s): Revolutionized overland and maritime transportation, shrinking geographical distances and creating integrated national markets.

3. Profound Social & Economic Consequences:
- Rapid Urbanization: Millions of rural farmworkers migrated into burgeoning industrial cities like Manchester, Birmingham, and Leeds. Infrastructure lagged behind, resulting in overcrowded tenements, poor sanitation, and cholera outbreaks.
- Emergence of New Social Classes:
  * The Industrial Bourgeoisie (factory owners, bankers, merchants who held capital).
  * The Industrial Proletariat (working class dependent entirely on daily wages).
- Labor Conditions: 12 to 16-hour workdays, 6 days a week, hazardous factory machinery with zero safety guards, and widespread exploitation of child labor in textile mills and coal mines.
- The Rise of New Ideologies:
  * Capitalism & Laissez-Faire (Adam Smith): Free markets driven by the 'invisible hand'.
  * Socialism & Marxism (Karl Marx & Friedrich Engels): 1848 'Communist Manifesto' critiquing class struggle between bourgeoisie and proletariat.
  * Reform Legislation: Factory Acts (1833) progressively regulated child labor and work hours.`
    }
  };

  // --- APPLICATION STATE ---
  const state = {
    currentText: "",
    currentFileName: "",
    currentResult: null,
    activeTab: "summary",
    currentFlashcardIndex: 0,
    isFlashcardFlipped: false,
    quizAnswers: {},
    settings: {
      provider: localStorage.getItem("lb_provider") || "builtin",
      model: localStorage.getItem("lb_model") || "llama-3.3-70b-versatile",
      apiKey: localStorage.getItem("lb_key") || "",
      endpoint: localStorage.getItem("lb_endpoint") || "",
      theme: localStorage.getItem("lb_theme") || "light"
    },
    audio: {
      speaking: false,
      utterance: null
    }
  };

  // --- DOM ELEMENTS ---
  const $ = (id) => document.getElementById(id);
  const el = {
    themeToggleBtn: $("themeToggleBtn"),
    apiSettingsBtn: $("apiSettingsBtn"),
    apiModal: $("apiModal"),
    closeModalBtn: $("closeModalBtn"),
    saveApiBtn: $("saveApiBtn"),
    apiProvider: $("apiProvider"),
    apiModel: $("apiModel"),
    groupModel: $("groupModel"),
    groupEndpoint: $("groupEndpoint"),
    apiEndpoint: $("apiEndpoint"),
    groupKey: $("groupKey"),
    apiKey: $("apiKey"),
    keyHint: $("keyHint"),

    dropzone: $("dropzone"),
    fileInput: $("fileInput"),
    filePreview: $("filePreview"),
    fileIcon: $("fileIcon"),
    fileName: $("fileName"),
    fileDetail: $("fileDetail"),
    removeFileBtn: $("removeFileBtn"),

    ocrProgressBox: $("ocrProgressBox"),
    ocrStatusMsg: $("ocrStatusMsg"),
    ocrPct: $("ocrPct"),
    ocrProgressFill: $("ocrProgressFill"),

    modeSelect: $("modeSelect"),
    explainBtn: $("explainBtn"),
    sampleBioBtn: $("sampleBioBtn"),
    sampleCsBtn: $("sampleCsBtn"),
    sampleHistBtn: $("sampleHistBtn"),

    resultsWorkspace: $("resultsWorkspace"),
    topicBadge: $("topicBadge"),
    modelBadge: $("modelBadge"),
    lectureTitle: $("lectureTitle"),

    audioBar: $("audioBar"),
    audioToggleBtn: $("audioToggleBtn"),
    audioStatusText: $("audioStatusText"),
    audioStopBtn: $("audioStopBtn"),

    copyBtn: $("copyBtn"),
    exportBtn: $("exportBtn"),
    printBtn: $("printBtn"),
    newUploadBtn: $("newUploadBtn"),

    tabsNav: $("tabsNav"),
    tabBtns: document.querySelectorAll(".tab-btn"),
    tabPanels: document.querySelectorAll(".tab-panel"),

    // Tab Content
    bigPictureBody: $("bigPictureBody"),
    summaryContent: $("summaryContent"),
    whyMattersText: $("whyMattersText"),
    pointsList: $("pointsList"),
    countPoints: $("countPoints"),

    termsGrid: $("termsGrid"),
    termsGridWrap: $("termsGridWrap"),
    flashcardsWrap: $("flashcardsWrap"),
    countTerms: $("countTerms"),
    btnViewGrid: $("btnViewGrid"),
    btnViewCards: $("btnViewCards"),
    flipCard: $("flipCard"),
    cardTermName: $("cardTermName"),
    cardTermDef: $("cardTermDef"),
    cardTermAnalogy: $("cardTermAnalogy"),
    cardCounter: $("cardCounter"),
    btnPrevCard: $("btnPrevCard"),
    btnNextCard: $("btnNextCard"),

    quizList: $("quizList"),
    countQuiz: $("countQuiz"),

    chatMsgs: $("chatMsgs"),
    chatInput: $("chatInput"),
    chatSendBtn: $("chatSendBtn"),

    rawTextarea: $("rawTextarea"),
    reExplainBtn: $("reExplainBtn"),
    toastWrap: $("toastWrap")
  };

  // --- INITIALIZATION ---
  function init() {
    initTheme();
    initApiSettings();
    initEventListeners();
  }

  // --- THEME ---
  function initTheme() {
    const theme = state.settings.theme;
    document.documentElement.setAttribute("data-theme", theme);
    el.themeToggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    state.settings.theme = next;
    localStorage.setItem("lb_theme", next);
    el.themeToggleBtn.innerHTML = next === "dark" ? "☀️" : "🌙";
  }

  // --- SETTINGS MODAL ---
  function initApiSettings() {
    el.apiProvider.value = state.settings.provider;
    updateModelDropdown();
    el.apiKey.value = state.settings.apiKey;
    el.apiEndpoint.value = state.settings.endpoint;
    updateProviderVisibility();
  }

  function updateModelDropdown() {
    const provider = el.apiProvider.value;
    el.apiModel.innerHTML = "";

    const models = {
      builtin: [{ id: "builtin", name: "Built-in Structured NLP Explainer" }],
      groq: [
        { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B Versatile" },
        { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B Instant" },
        { id: "gemma2-9b-it", name: "Google Gemma 2 9B IT" }
      ],
      huggingface: [
        { id: "meta-llama/Llama-3.2-3B-Instruct", name: "Llama 3.2 3B Instruct" },
        { id: "meta-llama/Llama-3.1-8B-Instruct", name: "Llama 3.1 8B Instruct" },
        { id: "Qwen/Qwen2.5-7B-Instruct", name: "Qwen 2.5 7B Instruct" },
        { id: "mistralai/Mistral-7B-Instruct-v0.3", name: "Mistral 7B Instruct" }
      ],
      custom: [
        { id: "custom", name: "Custom Model (specified by endpoint)" }
      ]
    };

    const list = models[provider] || models.builtin;
    list.forEach((m) => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      el.apiModel.appendChild(opt);
    });

    if (state.settings.model) {
      el.apiModel.value = state.settings.model;
    }
  }

  function updateProviderVisibility() {
    const provider = el.apiProvider.value;
    if (provider === "builtin") {
      el.groupKey.style.display = "none";
      el.groupEndpoint.style.display = "none";
      el.groupModel.style.display = "none";
    } else if (provider === "custom") {
      el.groupKey.style.display = "flex";
      el.groupEndpoint.style.display = "flex";
      el.groupModel.style.display = "none";
      el.keyHint.textContent = "API key for your custom or OpenAI-compatible endpoint.";
    } else {
      el.groupKey.style.display = "flex";
      el.groupEndpoint.style.display = "none";
      el.groupModel.style.display = "flex";
      if (provider === "groq") {
        el.keyHint.textContent = "Free Groq API key from console.groq.com. Instant and high rate limit.";
      } else {
        el.keyHint.textContent = "Free Hugging Face token from huggingface.co/settings/tokens.";
      }
    }
  }

  function openModal() {
    el.apiModal.classList.add("open");
  }

  function closeModal() {
    el.apiModal.classList.remove("open");
  }

  function saveSettings() {
    state.settings.provider = el.apiProvider.value;
    state.settings.model = el.apiModel.value;
    state.settings.apiKey = el.apiKey.value.trim();
    state.settings.endpoint = el.apiEndpoint.value.trim();

    localStorage.setItem("lb_provider", state.settings.provider);
    localStorage.setItem("lb_model", state.settings.model);
    localStorage.setItem("lb_key", state.settings.apiKey);
    localStorage.setItem("lb_endpoint", state.settings.endpoint);

    closeModal();
    showToast("AI preferences saved!");
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(msg, duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
    el.toastWrap.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(20px)";
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // --- EVENT LISTENERS ---
  function initEventListeners() {
    el.themeToggleBtn.addEventListener("click", toggleTheme);
    el.apiSettingsBtn.addEventListener("click", openModal);
    el.closeModalBtn.addEventListener("click", closeModal);
    el.saveApiBtn.addEventListener("click", saveSettings);
    el.apiProvider.addEventListener("change", () => {
      updateModelDropdown();
      updateProviderVisibility();
    });

    el.apiModal.addEventListener("click", (e) => {
      if (e.target === el.apiModal) closeModal();
    });

    // File Drag & Drop
    el.dropzone.addEventListener("click", () => el.fileInput.click());
    el.dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      el.dropzone.classList.add("dragover");
    });
    el.dropzone.addEventListener("dragleave", () => el.dropzone.classList.remove("dragover"));
    el.dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      el.dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });

    el.fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
      }
    });

    el.removeFileBtn.addEventListener("click", resetFile);

    // Sample Lecture Pills
    el.sampleBioBtn.addEventListener("click", () => loadSample("biology"));
    el.sampleCsBtn.addEventListener("click", () => loadSample("cs"));
    el.sampleHistBtn.addEventListener("click", () => loadSample("history"));

    // Explain Button
    el.explainBtn.addEventListener("click", handleExplain);

    // Tab Switching
    el.tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Terms View Toggle
    el.btnViewGrid.addEventListener("click", () => setTermsView("grid"));
    el.btnViewCards.addEventListener("click", () => setTermsView("cards"));

    // Flashcard Flip & Nav
    el.flipCard.addEventListener("click", toggleCardFlip);
    el.btnPrevCard.addEventListener("click", prevCard);
    el.btnNextCard.addEventListener("click", nextCard);

    // Audio
    el.audioToggleBtn.addEventListener("click", toggleAudio);
    el.audioStopBtn.addEventListener("click", stopAudio);

    // Actions
    el.copyBtn.addEventListener("click", copyMarkdown);
    el.exportBtn.addEventListener("click", exportMarkdown);
    el.printBtn.addEventListener("click", () => window.print());
    el.newUploadBtn.addEventListener("click", resetAll);

    // Chat
    el.chatSendBtn.addEventListener("click", handleSendChat);
    el.chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSendChat();
    });

    // Re-explain from raw notes
    el.reExplainBtn.addEventListener("click", () => {
      state.currentText = el.rawTextarea.value;
      showToast("Updated notes! Generating new explanation...");
      handleExplain();
    });
  }

  // --- CLIENT-SIDE FILE PARSERS ---
  async function handleFileSelect(file) {
    state.currentFileName = file.name;
    const lowerName = file.name.toLowerCase();

    el.fileName.textContent = file.name;
    el.fileDetail.textContent = `${(file.size / 1024).toFixed(1)} KB • Parsing...`;
    el.filePreview.style.display = "flex";
    el.explainBtn.disabled = true;

    try {
      if (lowerName.endsWith(".pdf")) {
        el.fileIcon.textContent = "📕";
        await parsePdfFile(file);
      } else if (lowerName.endsWith(".docx") || lowerName.endsWith(".doc")) {
        el.fileIcon.textContent = "📘";
        await parseDocxFile(file);
      } else if (
        lowerName.endsWith(".png") ||
        lowerName.endsWith(".jpg") ||
        lowerName.endsWith(".jpeg") ||
        lowerName.endsWith(".webp")
      ) {
        el.fileIcon.textContent = "✍️";
        await parseHandwrittenImage(file);
      } else {
        // Plain text
        el.fileIcon.textContent = "📄";
        const text = await file.text();
        onTextExtracted(text, "Text Document");
      }
    } catch (err) {
      console.error(err);
      showToast(`Error reading file: ${err.message}`, 4000);
      el.fileDetail.textContent = "Error parsing file";
    } finally {
      el.explainBtn.disabled = false;
    }
  }

  // 1. PDF Parser via PDF.js
  async function parsePdfFile(file) {
    if (typeof pdfjsLib === "undefined") {
      throw new Error("PDF.js library is not loaded.");
    }
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      if (pageText.trim()) {
        fullText += `--- Page ${i} ---\n${pageText}\n\n`;
      }
    }

    if (!fullText.trim()) {
      throw new Error("No text found in PDF (it might be a scanned image).");
    }

    onTextExtracted(fullText, `PDF • ${pdf.numPages} Page(s)`);
  }

  // 2. Word Parser via Mammoth.js
  async function parseDocxFile(file) {
    if (typeof mammoth === "undefined") {
      throw new Error("Mammoth.js library is not loaded.");
    }
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
    const text = result.value.trim();

    if (!text) {
      throw new Error("No text found in Word document.");
    }

    onTextExtracted(text, "Word Document (.docx)");
  }

  // 3. Handwritten Notes OCR via Canvas Preprocessor + Tesseract.js
  async function parseHandwrittenImage(file) {
    if (typeof Tesseract === "undefined") {
      throw new Error("Tesseract.js OCR library is still loading.");
    }

    el.ocrProgressBox.style.display = "block";
    el.ocrStatusMsg.textContent = "Pre-processing handwriting contrast...";
    el.ocrPct.textContent = "15%";
    el.ocrProgressFill.style.width = "15%";

    // Preprocess on canvas (contrast boost)
    const preprocessedBlob = await preprocessHandwritingCanvas(file);

    el.ocrStatusMsg.textContent = "Recognizing handwritten notes...";

    const result = await Tesseract.recognize(preprocessedBlob, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          const pct = Math.round((m.progress || 0.1) * 100);
          el.ocrStatusMsg.textContent = `Recognizing text (${pct}%)...`;
          el.ocrPct.textContent = `${pct}%`;
          el.ocrProgressFill.style.width = `${pct}%`;
        }
      }
    });

    el.ocrProgressBox.style.display = "none";
    const text = result.data.text.trim();

    if (!text) {
      throw new Error("Could not detect legible handwriting in photo.");
    }

    onTextExtracted(text, "Handwritten Note (OCR)");
  }

  function preprocessHandwritingCanvas(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          let w = img.width;
          let h = img.height;
          const maxDim = 1600;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }

          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);

          // Contrast Boost for Pencil/Ink
          const imgData = ctx.getImageData(0, 0, w, h);
          const data = imgData.data;
          const contrast = 35;
          const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

          for (let i = 0; i < data.length; i += 4) {
            let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            gray = factor * (gray - 128) + 128;
            gray = Math.max(0, Math.min(255, gray));
            data[i] = gray;
            data[i + 1] = gray;
            data[i + 2] = gray;
          }
          ctx.putImageData(imgData, 0, 0);

          canvas.toBlob((b) => resolve(b || file), "image/jpeg", 0.9);
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function onTextExtracted(text, detailLabel) {
    state.currentText = text;
    el.rawTextarea.value = text;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    el.fileDetail.textContent = `${detailLabel} • ${wordCount} words extracted`;
    showToast(`Successfully extracted ${wordCount} words!`);
  }

  function resetFile() {
    state.currentFileName = "";
    state.currentText = "";
    el.fileInput.value = "";
    el.filePreview.style.display = "none";
    el.ocrProgressBox.style.display = "none";
  }

  // --- SAMPLE LECTURES ---
  function loadSample(key) {
    resetFile();
    const sample = SAMPLE_LECTURES[key];
    if (!sample) return;

    state.currentFileName = sample.title;
    state.currentText = sample.content;
    el.rawTextarea.value = sample.content;

    el.fileIcon.textContent = "📚";
    el.fileName.textContent = `${sample.title} (${sample.topic})`;
    el.fileDetail.textContent = `Sample Lecture • ${sample.content.split(/\s+/).length} words`;
    el.filePreview.style.display = "flex";

    showToast(`Loaded ${sample.title}! Explaining...`);
    handleExplain();
  }

  // --- AI EXPLANATION ENGINE ---
  async function handleExplain() {
    const text = state.currentText || el.rawTextarea.value;
    if (!text || text.trim().length < 20) {
      showToast("Please upload a lecture file or pick a sample first!", 3000);
      return;
    }

    el.explainBtn.disabled = true;
    el.explainBtn.innerHTML = `<span class="spin"></span> LectureBuddy is thinking...`;

    try {
      let result = null;
      const provider = state.settings.provider;
      const apiKey = state.settings.apiKey;

      if (provider !== "builtin" && apiKey) {
        // External AI API call
        try {
          result = await callExternalAiApi(text, provider);
        } catch (apiErr) {
          console.warn("External API failed, falling back to built-in engine:", apiErr);
          showToast(`API note: ${apiErr.message}. Used Built-in Engine.`, 4000);
          result = runBuiltinNlpAnalyzer(text);
        }
      } else {
        // Built-in Smart NLP Engine
        result = runBuiltinNlpAnalyzer(text);
      }

      state.currentResult = result;
      renderResults(result);
      showToast("Lecture explained in beginner language!");
    } catch (err) {
      console.error(err);
      showToast(`Error: ${err.message}`, 4000);
    } finally {
      el.explainBtn.disabled = false;
      el.explainBtn.innerHTML = `<span>✨</span><span>Explain Lecture</span>`;
    }
  }

  // External AI API Caller (Groq, Hugging Face, or Custom Endpoint)
  async function callExternalAiApi(text, provider) {
    const apiKey = state.settings.apiKey;
    let endpoint = "";
    let model = state.settings.model || "llama-3.3-70b-versatile";

    if (provider === "groq") {
      endpoint = "https://api.groq.com/openai/v1/chat/completions";
    } else if (provider === "huggingface") {
      endpoint = "https://router.huggingface.co/hf-inference/v1/chat/completions";
    } else {
      endpoint = state.settings.endpoint || "https://api.openai.com/v1/chat/completions";
    }

    const systemPrompt = `You are LectureBuddy, a patient and encouraging tutor who explains dense academic lectures in simple, beginner-friendly language without dumbing down the core substance.
Respond strictly with a valid JSON object matching this schema:
{
  "title": "Clear descriptive title",
  "topic": "Subject/domain",
  "big_picture": "1-2 sentences capturing core intuition in plain everyday language.",
  "simple_summary": "2-3 beginner-friendly paragraphs with everyday analogies explaining step-by-step.",
  "why_it_matters": "Why this matters in the real world.",
  "key_points": [
    {"point": "Key takeaway headline", "detail": "Simple explanation of this point", "importance": "high"}
  ],
  "important_terms": [
    {"term": "Term name", "definition": "Simple definition without jargon", "simple_analogy": "Everyday analogy or memory hook"}
  ],
  "quiz": [
    {"question": "Intuitive question", "options": ["Option A", "Option B", "Option C", "Option D"], "correct_index": 0, "explanation": "Why this answer is right"}
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Please explain this lecture:\n\n${text.slice(0, 12000)}` }
        ],
        temperature: 0.2
      })
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`API returned ${res.status}: ${errTxt.slice(0, 150)}`);
    }

    const data = await res.json();
    const content = data.choices[0].message.content;
    const parsed = parseJsonFromAiResponse(content);

    if (!parsed) {
      throw new Error("Could not parse JSON response from AI model.");
    }
    parsed.model_used = `${provider.toUpperCase()} (${model})`;
    return parsed;
  }

  function parseJsonFromAiResponse(raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {}

    // Match code block ```json ... ```
    const match = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (match) {
      try {
        return JSON.parse(match[1].trim());
      } catch (e) {}
    }

    // Match { ... }
    const firstBrace = raw.indexOf("{");
    const lastBrace = raw.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      try {
        return JSON.parse(raw.slice(firstBrace, lastBrace + 1));
      } catch (e) {}
    }
    return null;
  }

  // --- BUILT-IN SMART CLIENT-SIDE NLP ANALYZER ---
  function runBuiltinNlpAnalyzer(text) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const lower = text.toLowerCase();

    // 1. Topic & Title Detection
    let topic = "General Studies";
    if (/cell|photosynthesis|dna|atp|chloroplast|glycolysis/i.test(lower)) {
      topic = "Biology & Life Sciences";
    } else if (/algorithm|complexity|big-o|array|stack|queue/i.test(lower)) {
      topic = "Computer Science";
    } else if (/revolution|century|empire|bourgeoisie|proletariat/i.test(lower)) {
      topic = "World History & Society";
    } else if (/force|velocity|gravity|momentum|acceleration/i.test(lower)) {
      topic = "Physics & Mechanics";
    } else if (/market|inflation|capital|demand|supply/i.test(lower)) {
      topic = "Economics & Business";
    }

    let title = state.currentFileName || "Lecture Summary";
    for (const l of lines.slice(0, 4)) {
      const clean = l.replace(/^[#\-\*0-9\.\:\s]+/, "").trim();
      if (clean.length > 5 && clean.length < 80) {
        if (/lecture|chapter|introduction|overview|notes/i.test(clean) || l === lines[0]) {
          title = clean;
          break;
        }
      }
    }

    // 2. Sentences & Frequency Analysis
    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 25 && !s.startsWith("---"));

    const stopWords = new Set([
      "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "with",
      "about", "between", "into", "through", "during", "before", "after", "from",
      "then", "there", "when", "where", "why", "how", "all", "each", "this", "that",
      "these", "those", "is", "are", "was", "were", "be", "been", "have", "has", "had",
      "can", "will", "should", "not", "also", "which", "more", "most", "some"
    ]);

    const words = text.match(/\b[A-Za-z]{3,}\b/g) || [];
    const freq = {};
    words.forEach((w) => {
      const lw = w.toLowerCase();
      if (!stopWords.has(lw) && lw.length > 3) {
        freq[lw] = (freq[lw] || 0) + 1;
      }
    });

    const topKeywords = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map((item) => item[0]);

    // 3. The Big Picture
    const primaryConcept = topKeywords[0] ? topKeywords[0].toUpperCase() : "THIS TOPIC";
    const bigPicture = `At its core, this lecture explains how ${primaryConcept} functions within ${topic}, breaking down complicated mechanics into a clear, connected chain of cause and effect.`;

    // 4. Simple Summary (with analogies)
    const p1 = `Imagine breaking down **${title}** into everyday building blocks. Rather than stressing over technical academic jargon, picture the central theme as a coordinated assembly line or team where every part has a specific responsibility.`;
    
    let keySentences = sentences
      .filter((s) => topKeywords.slice(0, 4).some((kw) => s.toLowerCase().includes(kw)))
      .slice(0, 3)
      .map((s) => s.replace(/^[\-\*\d\.\s]+/, "").trim());

    const p2 = keySentences.length > 0
      ? `Here is how it works step-by-step: ${keySentences.join(" ")}`
      : `The lecture walks through the fundamental stages and principles that govern this system.`;

    const p3 = `To remember this as a beginner: think of it like learning the rules of a game. Once you recognize what each piece does, the complex interactions start making intuitive sense without rote memorization.`;

    const simpleSummary = `${p1}\n\n${p2}\n\n${p3}`;
    const whyItMatters = `Mastering ${title} gives you an intuitive mental model in ${topic}. It helps you understand the underlying rules behind complex systems and gives you confidence for future exams.`;

    // 5. Key Points
    const keyPoints = [];
    const bulletCandidates = lines.filter((l) => /^[-\*•\d\.]+\s+/.test(l));

    if (bulletCandidates.length >= 4) {
      bulletCandidates.slice(0, 6).forEach((b) => {
        const clean = b.replace(/^[-\*•\d\.\)\s]+/, "").trim();
        if (clean.length > 15) {
          const parts = clean.split(":");
          if (parts.length >= 2) {
            keyPoints.push({
              point: parts[0].trim(),
              detail: parts.slice(1).join(":").trim(),
              importance: "high"
            });
          } else {
            keyPoints.push({
              point: clean.slice(0, 48) + "...",
              detail: clean,
              importance: "high"
            });
          }
        }
      });
    }

    if (keyPoints.length < 4) {
      sentences.slice(0, 5).forEach((s, i) => {
        keyPoints.push({
          point: `Core Takeaway #${i + 1}`,
          detail: s.replace(/^[-\*•\d\.\s]+/, "").trim(),
          importance: "high"
        });
      });
    }

    // 6. Important Terms & Definitions
    const importantTerms = [];
    const metaIgnore = new Set(["lecture", "chapter", "instructor", "prof", "date", "topic", "section", "overview", "example", "note"]);
    const termRegex = /([A-Z][A-Za-z0-9\s\-\(\)\/]{2,30})\s*(?:\:|\—|(?<!\w)\s*\-\s*(?!\w))\s*([^.\n]+(?:\.[^.\n]+)?)/g;
    let match;
    const seen = new Set();

    while ((match = termRegex.exec(text)) !== null && importantTerms.length < 6) {
      const term = match[1].replace(/^[-\*•\d\.\s]+/, "").trim();
      const def = match[2].trim();
      const firstWord = term.split(/\s+/)[0].toLowerCase();

      if (!stopWords.has(term.toLowerCase()) && !metaIgnore.has(firstWord) && term.length < 35 && def.length > 12) {
        if (!seen.has(term.toLowerCase())) {
          seen.add(term.toLowerCase());
          importantTerms.push({
            term: term,
            definition: def,
            simple_analogy: `Think of ${term} as an indispensable gear or tool for this stage.`
          });
        }
      }
    }

    // Fallback terms from top keywords if regex missed
    if (importantTerms.length < 4) {
      topKeywords.slice(0, 5).forEach((kw) => {
        const capitalized = kw.charAt(0).toUpperCase() + kw.slice(1);
        if (!seen.has(kw)) {
          seen.add(kw);
          const foundSentence = sentences.find((s) => s.toLowerCase().includes(kw)) || `A central building block in ${topic}.`;
          importantTerms.push({
            term: capitalized,
            definition: foundSentence,
            simple_analogy: `Think of ${capitalized} as a fundamental building block in this topic.`
          });
        }
      });
    }

    // 7. Practice Quiz Questions
    const quiz = [];
    if (importantTerms.length >= 2) {
      const t1 = importantTerms[0];
      quiz.push({
        question: `What is the primary role or definition of "${t1.term}" according to the notes?`,
        options: [
          t1.definition.slice(0, 100) + (t1.definition.length > 100 ? "..." : ""),
          `It is an obsolete concept with no practical application in ${topic}.`,
          `It acts solely as passive background noise.`,
          `It indicates an error condition that should always be eliminated.`
        ],
        correct_index: 0,
        explanation: `Correct! ${t1.term} refers to: ${t1.definition}`
      });

      const t2 = importantTerms[1];
      quiz.push({
        question: `Which concept corresponds to: "${t2.definition.slice(0, 85)}..."?`,
        options: [
          "Static Variable",
          t2.term,
          "Unrelated Hypothesis",
          "Random Residual"
        ],
        correct_index: 1,
        explanation: `Exactly! That defines ${t2.term}.`
      });

      quiz.push({
        question: `What is the main takeaway or big picture of ${title}?`,
        options: [
          "To introduce confusion through dense academic jargon.",
          bigPicture.slice(0, 110) + "...",
          "To prove that modern problems cannot be solved.",
          "To test memorization of random disconnected numbers."
        ],
        correct_index: 1,
        explanation: `Spot on! The big picture is: ${bigPicture}`
      });
    }

    return {
      title: title,
      topic: topic,
      big_picture: bigPicture,
      simple_summary: simpleSummary,
      why_it_matters: whyItMatters,
      key_points: keyPoints,
      important_terms: importantTerms,
      quiz: quiz,
      model_used: "Built-in Smart NLP Engine (Offline & Free)"
    };
  }

  // --- RENDER RESULTS WORKSPACE ---
  function renderResults(data) {
    el.resultsWorkspace.style.display = "block";
    el.resultsWorkspace.scrollIntoView({ behavior: "smooth" });

    // Meta & Title
    el.topicBadge.textContent = data.topic || "Lecture Notes";
    el.modelBadge.textContent = data.model_used || "Open-Source AI";
    el.lectureTitle.textContent = data.title || "Lecture Notes Summary";

    // 1. Summary Tab
    el.bigPictureBody.textContent = data.big_picture || "";
    el.summaryContent.innerHTML = "";
    (data.simple_summary || "").split("\n\n").forEach((p) => {
      if (p.trim()) {
        const pElem = document.createElement("p");
        pElem.innerHTML = formatMarkdown(p.trim());
        el.summaryContent.appendChild(pElem);
      }
    });
    el.whyMattersText.textContent = data.why_it_matters || "";

    // 2. Key Points Tab
    el.pointsList.innerHTML = "";
    const keyPoints = data.key_points || [];
    el.countPoints.textContent = keyPoints.length;
    keyPoints.forEach((kp, idx) => {
      const card = document.createElement("div");
      card.className = "point-card";
      card.innerHTML = `
        <div class="point-num">${idx + 1}</div>
        <div>
          <div class="point-headline">${escapeHtml(kp.point)}</div>
          <div class="point-description">${escapeHtml(kp.detail)}</div>
        </div>
      `;
      el.pointsList.appendChild(card);
    });

    // 3. Important Terms & Flashcards Tab
    const terms = data.important_terms || [];
    el.countTerms.textContent = terms.length;
    renderTermsGrid(terms);
    state.currentFlashcardIndex = 0;
    renderFlashcard(terms, 0);

    // 4. Practice Quiz Tab
    const quiz = data.quiz || [];
    el.countQuiz.textContent = quiz.length;
    renderQuiz(quiz);

    // 5. Chat History Reset
    stopAudio();
    el.chatMsgs.innerHTML = `
      <div class="msg buddy">
        <div class="msg-avatar">🎓</div>
        <div class="msg-body">
          Hi! I'm your <strong>LectureBuddy</strong>. I've broken down your notes above.
          Ask me any question if you want another example, need clarification on a concept, or want to know how two ideas connect!
        </div>
      </div>
    `;

    switchTab("summary");
  }

  function formatMarkdown(str) {
    let s = escapeHtml(str);
    s = s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/`([^`]+)`/g, "<code style='background:var(--bg-card-subtle);padding:0.1rem 0.35rem;border-radius:4px;'>$1</code>");
    return s;
  }

  // --- TERMS GRID & FLASHCARDS ---
  function renderTermsGrid(terms) {
    el.termsGrid.innerHTML = "";
    terms.forEach((t) => {
      const box = document.createElement("div");
      box.className = "term-box";
      box.innerHTML = `
        <span class="term-pill">TERM</span>
        <div class="term-title">${escapeHtml(t.term)}</div>
        <div class="term-def">${escapeHtml(t.definition)}</div>
        ${t.simple_analogy ? `
          <div class="term-analogy">
            <span>💡</span>
            <span>${escapeHtml(t.simple_analogy)}</span>
          </div>
        ` : ""}
      `;
      el.termsGrid.appendChild(box);
    });
  }

  function setTermsView(mode) {
    if (mode === "grid") {
      el.btnViewGrid.classList.add("active");
      el.btnViewCards.classList.remove("active");
      el.termsGridWrap.style.display = "block";
      el.flashcardsWrap.style.display = "none";
    } else {
      el.btnViewGrid.classList.remove("active");
      el.btnViewCards.classList.add("active");
      el.termsGridWrap.style.display = "none";
      el.flashcardsWrap.style.display = "block";
    }
  }

  function renderFlashcard(terms, idx) {
    if (!terms || terms.length === 0) return;
    const t = terms[idx];
    el.flipCard.classList.remove("flipped");
    state.isFlashcardFlipped = false;

    el.cardTermName.textContent = t.term;
    el.cardTermDef.textContent = t.definition;
    el.cardTermAnalogy.textContent = t.simple_analogy || "";
    el.cardCounter.textContent = `${idx + 1} of ${terms.length}`;

    el.btnPrevCard.disabled = idx === 0;
    el.btnNextCard.disabled = idx === terms.length - 1;
  }

  function toggleCardFlip() {
    state.isFlashcardFlipped = !state.isFlashcardFlipped;
    el.flipCard.classList.toggle("flipped", state.isFlashcardFlipped);
  }

  function prevCard() {
    const terms = (state.currentResult && state.currentResult.important_terms) || [];
    if (state.currentFlashcardIndex > 0) {
      state.currentFlashcardIndex--;
      renderFlashcard(terms, state.currentFlashcardIndex);
    }
  }

  function nextCard() {
    const terms = (state.currentResult && state.currentResult.important_terms) || [];
    if (state.currentFlashcardIndex < terms.length - 1) {
      state.currentFlashcardIndex++;
      renderFlashcard(terms, state.currentFlashcardIndex);
    }
  }

  // --- PRACTICE QUIZ ---
  function renderQuiz(quiz) {
    el.quizList.innerHTML = "";
    state.quizAnswers = {};

    if (!quiz || quiz.length === 0) {
      el.quizList.innerHTML = `<p style="color:var(--text-muted);">No quiz questions generated.</p>`;
      return;
    }

    quiz.forEach((q, qIdx) => {
      const item = document.createElement("div");
      item.className = "quiz-item";

      const letters = ["A", "B", "C", "D"];
      const opts = q.options
        .map((opt, oIdx) => `
          <button class="quiz-opt-btn" data-q="${qIdx}" data-opt="${oIdx}">
            <span class="opt-key">${letters[oIdx]}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `)
        .join("");

      item.innerHTML = `
        <span class="quiz-header">Question ${qIdx + 1}</span>
        <div class="quiz-q">${escapeHtml(q.question)}</div>
        <div class="quiz-options">${opts}</div>
        <div class="quiz-feedback-box" id="feedback-${qIdx}"></div>
      `;
      el.quizList.appendChild(item);
    });

    el.quizList.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        handleQuizClick(qIdx, optIdx);
      });
    });
  }

  function handleQuizClick(qIdx, chosenIdx) {
    if (state.quizAnswers[qIdx] !== undefined) return;
    state.quizAnswers[qIdx] = chosenIdx;

    const quiz = state.currentResult.quiz[qIdx];
    const isCorrect = chosenIdx === quiz.correct_index;
    const parent = el.quizList.querySelectorAll(".quiz-item")[qIdx];
    const btns = parent.querySelectorAll(".quiz-opt-btn");
    const fb = document.getElementById(`feedback-${qIdx}`);

    btns.forEach((btn, idx) => {
      btn.classList.add("locked");
      if (idx === quiz.correct_index) {
        btn.classList.add("correct");
      } else if (idx === chosenIdx) {
        btn.classList.add("wrong");
      }
    });

    fb.classList.add("show");
    if (isCorrect) {
      fb.className = "quiz-feedback-box show good";
      fb.innerHTML = `<strong>🎉 Correct!</strong> ${escapeHtml(quiz.explanation || "")}`;
      showToast("Great job! Correct answer.");
    } else {
      fb.className = "quiz-feedback-box show bad";
      fb.innerHTML = `<strong>Good effort!</strong> ${escapeHtml(quiz.explanation || "")}`;
    }
  }

  // --- TEXT-TO-SPEECH AUDIO ---
  function toggleAudio() {
    if (!('speechSynthesis' in window)) {
      showToast("Speech synthesis not supported in this browser.");
      return;
    }

    if (window.speechSynthesis.speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        el.audioToggleBtn.innerHTML = "⏸";
        el.audioStatusText.textContent = "Listening...";
      } else {
        window.speechSynthesis.pause();
        el.audioToggleBtn.innerHTML = "▶";
        el.audioStatusText.textContent = "Paused";
      }
    } else {
      startAudio();
    }
  }

  function startAudio() {
    if (!state.currentResult) return;
    const readText = `${state.currentResult.title}. The big picture: ${state.currentResult.big_picture}. ${state.currentResult.simple_summary}`
      .replace(/[#\*`\-_]/g, "");

    const u = new SpeechSynthesisUtterance(readText);
    u.rate = 0.95;
    u.onstart = () => {
      el.audioBar.classList.add("active");
      el.audioToggleBtn.innerHTML = "⏸";
      el.audioStatusText.textContent = "Listening...";
    };
    u.onend = stopAudio;
    u.onerror = stopAudio;

    state.audio.utterance = u;
    window.speechSynthesis.speak(u);
  }

  function stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    el.audioToggleBtn.innerHTML = "▶";
    el.audioStatusText.textContent = "Listen";
    el.audioBar.classList.remove("active");
  }

  // --- ASK LECTUREBUDDY (Q&A) ---
  async function handleSendChat() {
    const q = el.chatInput.value.trim();
    if (!q) return;

    appendMsg("user", q);
    el.chatInput.value = "";

    const typingMsg = appendMsg("buddy", `<span class="spin"></span> Thinking...`);

    // Answering logic: use external API if key exists, else smart keyword responder
    setTimeout(async () => {
      try {
        let answer = "";
        const provider = state.settings.provider;
        const apiKey = state.settings.apiKey;

        if (provider !== "builtin" && apiKey) {
          answer = await callAiChatApi(q);
        } else {
          answer = generateLocalAnswer(q);
        }
        typingMsg.querySelector(".msg-body").innerHTML = formatMarkdown(answer);
      } catch (err) {
        typingMsg.querySelector(".msg-body").innerHTML = `Sorry, I couldn't answer that: ${escapeHtml(err.message)}`;
      }
    }, 400);
  }

  async function callAiChatApi(question) {
    const apiKey = state.settings.apiKey;
    const provider = state.settings.provider;
    let endpoint = provider === "groq"
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://router.huggingface.co/hf-inference/v1/chat/completions";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: state.settings.model || "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are LectureBuddy, a friendly tutor. Answer the student's question about their lecture notes in simple beginner-friendly language with everyday examples." },
          { role: "user", content: `Lecture Notes:\n${(state.currentText || el.rawTextarea.value).slice(0, 7000)}\n\nStudent Question: ${question}` }
        ]
      })
    });

    if (!res.ok) throw new Error("API request failed");
    const json = await res.json();
    return json.choices[0].message.content;
  }

  function generateLocalAnswer(question) {
    const text = state.currentText || el.rawTextarea.value;
    const sentences = text.split(/(?<=[.!?])\s+/);
    const qWords = question.toLowerCase().match(/\b[A-Za-z]{3,}\b/g) || [];

    const matches = sentences
      .map((s) => ({
        s: s.trim(),
        score: qWords.filter((w) => s.toLowerCase().includes(w)).length
      }))
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score);

    if (matches.length > 0) {
      return `Great question! Based on your lecture notes:\n\n${matches.slice(0, 2).map((m) => m.s).join(" ")}\n\n💡 **In plain English:** Whenever you encounter this concept, remember that it's designed to solve a specific problem in the system. Check the **Important Terms** tab if you want to quiz yourself on related definitions!`;
    }

    return `I checked through your notes! While this specific phrasing isn't explicitly defined word-for-word, it connects closely to the core themes in the **Key Points** and **Summary** tabs above.`;
  }

  function appendMsg(sender, content) {
    const d = document.createElement("div");
    d.className = `msg ${sender}`;
    d.innerHTML = `
      <div class="msg-avatar">${sender === "buddy" ? "🎓" : "👤"}</div>
      <div class="msg-body">${content}</div>
    `;
    el.chatMsgs.appendChild(d);
    el.chatMsgs.scrollTop = el.chatMsgs.scrollHeight;
    return d;
  }

  // --- TABS & EXPORTS ---
  function switchTab(tabName) {
    state.activeTab = tabName;
    el.tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.tab === tabName));
    el.tabPanels.forEach((p) => p.classList.toggle("active", p.id === `tab-${tabName}`));
  }

  function copyMarkdown() {
    if (!state.currentResult) return;
    const md = buildMarkdown(state.currentResult);
    navigator.clipboard.writeText(md).then(() => {
      showToast("Copied notes to clipboard!");
    });
  }

  function exportMarkdown() {
    if (!state.currentResult) return;
    const md = buildMarkdown(state.currentResult);
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const name = (state.currentResult.title || "LectureBuddy_Notes").toLowerCase().replace(/[^a-z0-9]/g, "_");
    a.href = url;
    a.download = `${name}_notes.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloaded markdown study guide!");
  }

  function buildMarkdown(d) {
    let md = `# ${d.title}\n*Subject: ${d.topic} | Generated by LectureBuddy*\n\n`;
    md += `## 🌟 The Big Picture\n${d.big_picture}\n\n`;
    md += `## 💡 Beginner-Friendly Summary\n${d.simple_summary}\n\n`;
    md += `## 🎯 Why It Matters\n${d.why_it_matters}\n\n`;
    md += `## 📌 Key Takeaways\n`;
    (d.key_points || []).forEach((kp, i) => {
      md += `${i + 1}. **${kp.point}**: ${kp.detail}\n`;
    });
    md += `\n## 📖 Important Terms & Glossary\n`;
    (d.important_terms || []).forEach((t) => {
      md += `- **${t.term}**: ${t.definition}\n  *Analogy: ${t.simple_analogy}*\n`;
    });
    return md;
  }

  function resetAll() {
    resetFile();
    el.resultsWorkspace.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Run on load
  document.addEventListener("DOMContentLoaded", init);
})();
