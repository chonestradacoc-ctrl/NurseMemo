# NurseMemo 🩺

### Local AI Nursing Study Assistant powered by Tether QVAC

NurseMemo is a lightweight nursing study assistant that uses **Tether's QVAC SDK** to run AI directly on the user's device.

The app focuses on **on-device speech transcription**, allowing users to turn spoken notes into text without sending the audio to a cloud AI service.

> **Local AI • Speech Transcription • Privacy-Focused**

---

## ✨ Features

* 🎙️ **Speech-to-Text** — Transcribe spoken nursing notes using local AI.
* 🔒 **On-Device AI** — AI inference runs locally through QVAC.
* 📴 **No Cloud AI API Required** — The app does not send inference requests to an external AI API.
* 🧠 **Local Model Execution** — QVAC downloads and runs the required model on the user's device.
* 📚 **Nursing-Focused** — Designed as a simple tool for creating and reviewing nursing-related notes.

---

## 🚀 How It Works

NurseMemo uses Tether's QVAC SDK to load an AI model and perform speech transcription locally.

```text
User Speech
     │
     ▼
NurseMemo
     │
     ▼
QVAC SDK
     │
     ▼
Local AI Model
     │
     ▼
Transcribed Text
```

The application does not rely on a cloud AI service to perform the transcription.

---

## 🤖 QVAC Integration

NurseMemo uses:

| QVAC Component | Purpose                                       |
| -------------- | --------------------------------------------- |
| `loadModel`    | Loads the required AI model on the device     |
| `transcribe`   | Performs speech-to-text transcription locally |

### QVAC SDK Version

```text
@qvac/sdk 0.19.1
```

The QVAC SDK is declared as a project dependency in `package.json`.

---

## 🛠️ Tech Stack

* **JavaScript**
* **Node.js**
* **Tether QVAC SDK**
* **Local AI inference**
* **Speech transcription**

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/chonestradacoc-ctrl/NurseMemo.git
cd NurseMemo
```

### 2. Install dependencies

```bash
npm install
```

The project includes the QVAC SDK as a dependency:

```bash
npm install @qvac/sdk
```

---

## ▶️ Run the App

Start NurseMemo using the command defined in `package.json`.

```bash
npm start
```

On the first run, QVAC may download the required model and assets needed for local inference.

---

## 💻 Requirements

Before running NurseMemo, make sure you have:

* Node.js installed
* npm installed
* A supported Windows, macOS, or Linux environment
* An internet connection for the initial QVAC model download

After the required model is available locally, inference is performed on the device.

---

## 🔐 Privacy & Local Processing

NurseMemo is designed around local AI processing.

The speech transcription is performed through the QVAC SDK and its locally running model rather than by sending the inference request to a cloud AI provider.

This means the application does not require a separate cloud AI API key or per-request AI service.

---

## 🎥 Demo

A screenshot or short screen recording of NurseMemo running with the AI-generated transcription visible is provided as part of the project submission.

**App:**
[Add your deployed app URL here]

**Repository:**
https://github.com/chonestradacoc-ctrl/NurseMemo

---

## 📸 What the Demo Shows

The demonstration shows:

1. NurseMemo running successfully.
2. Speech/input being provided to the application.
3. QVAC loading the required local model.
4. The transcription being generated.
5. The resulting AI output displayed in the application.

---

## 📋 QVAC Requirement Checklist

| Requirement                       | Status     |
| --------------------------------- | ---------- |
| QVAC SDK declared as a dependency | ✅          |
| QVAC SDK version 0.19.0+          | ✅ `0.19.1` |
| Uses `loadModel`                  | ✅          |
| Uses `transcribe`                 | ✅          |
| AI inference runs on-device       | ✅          |
| Public GitHub repository          | ✅          |
| Open-source license               | ✅ MIT      |
| README with setup instructions    | ✅          |
| At least 3 commits                | ✅          |

---

## 📄 License

NurseMemo is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for the complete license text.

---

## 🔗 Links

**GitHub Repository:**
https://github.com/chonestradacoc-ctrl/NurseMemo

**QVAC:**
https://github.com/tetherto/qvac

**QVAC Documentation:**
https://docs.qvac.tether.io/

---

## 👤 Author

**chonestradacoc-ctrl**

Built as a local AI application using **Tether's QVAC SDK**.
