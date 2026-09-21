# NurseMemo 🩺

### On-Device AI Nursing Study Assistant

NurseMemo is a lightweight nursing study assistant built with **Tether's QVAC SDK**. It uses local AI to process speech and convert it into text directly on the user's device.

The project demonstrates how QVAC can be integrated into a practical application while keeping AI inference local.

---

## ✨ Features

* 🎙️ **Speech Transcription** — Converts spoken input into text.
* 🧠 **Local AI Inference** — Uses an AI model through QVAC on the user's device.
* 🔒 **Privacy-Focused** — Inference does not require a cloud AI API.
* 📚 **Nursing-Focused** — Designed for creating and reviewing nursing-related notes.
* ⚡ **Simple Interface** — Built as a lightweight application for quick use.

---

## 🤖 QVAC Integration

NurseMemo uses **Tether's QVAC SDK** for local AI inference.

### QVAC Functions Used

| Function     | Purpose                    |
| ------------ | -------------------------- |
| `loadModel`  | Loads the AI model locally |
| `transcribe` | Converts speech into text  |

### SDK Version

```text
@qvac/sdk 0.19.1
```

The QVAC SDK is included as a dependency in the project's `package.json`.

---

## 🔄 How It Works

```text
        User Speech
             │
             ▼
        NurseMemo App
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

The application uses QVAC to perform the AI processing locally instead of sending the inference request to a cloud AI provider.

---

## 🛠️ Built With

* JavaScript
* Node.js
* Tether QVAC SDK
* Local AI inference
* Speech transcription

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

---

## ▶️ Run NurseMemo

Start the application using:

```bash
npm start
```

On the first run, QVAC may download the required model and assets for local inference.

---

## 💻 Requirements

* Node.js
* npm
* A supported desktop environment
* Internet connection for the initial model download

After the required model is available, AI inference is performed locally through QVAC.

---

## 🔐 Local AI & Privacy

NurseMemo is designed around **on-device AI processing**.

The speech transcription functionality uses QVAC and its locally running model rather than relying on a cloud AI inference API.

No separate cloud AI API key is required for the QVAC inference workflow.

---

## 🎥 Demo

The project submission includes a screenshot or short screen recording showing NurseMemo running with the AI-generated transcription visible.

**Repository:**
https://github.com/chonestradacoc-ctrl/NurseMemo

**Local App:**

`http://localhost:3000/`

---

## 📸 Demo Shows

The demonstration shows:

1. NurseMemo running successfully.
2. Speech being provided to the application.
3. QVAC loading the required model.
4. Local speech transcription being performed.
5. The resulting text being displayed in the application.

---

## ✅ QVAC Challenge Requirements

| Requirement                 | Status     |
| --------------------------- | ---------- |
| QVAC SDK dependency         | ✅          |
| SDK version 0.19.0 or newer | ✅ `0.19.1` |
| `loadModel` used            | ✅          |
| `transcribe` used           | ✅          |
| On-device inference         | ✅          |
| Public GitHub repository    | ✅          |
| Open-source license         | ✅ MIT      |
| Installation instructions   | ✅          |
| Run instructions            | ✅          |
| Project documentation       | ✅          |

---

## 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for the full license text.

---

## 🔗 Resources

* [QVAC GitHub Repository](https://github.com/tetherto/qvac)
* [QVAC Documentation](https://docs.qvac.tether.io/)
* [QVAC Examples](https://github.com/tetherto/qvac-examples)

---

## 👤 Author

**chonestradacoc-ctrl**

Built with **Tether's QVAC SDK**.
