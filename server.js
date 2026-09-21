const express = require("express");
const qvac = require("@qvac/sdk");

const app = express();
const PORT = 3000;
const MAX_INPUT_LENGTH = 12000;

let aiModel = null;

async function loadQVACModel() {
    if (aiModel) {
        return aiModel;
    }

    console.log("Loading QVAC AI model...");

    aiModel = await qvac.loadModel({
        modelSrc: qvac.LLAMA_3_2_1B_INST_Q4_0,
        modelType: "llamacpp-completion"
    });

    console.log("QVAC AI model loaded.");

    return aiModel;
}

app.use(express.static(__dirname));
app.use(express.json());

app.post("/process", async (req, res) => {
    try {
        console.log("\n===== NURSEMEMO REQUEST =====");

        const studyMaterial = req.body.text?.trim();

        // Validate that study material was provided.
        if (!studyMaterial) {
            return res.status(400).json({
                error: "Please enter study material."
            });
        }

        // Prevent excessively large inputs from being sent to the
        // local model.
        if (studyMaterial.length > MAX_INPUT_LENGTH) {
            return res.status(400).json({
                error:
                    `Study material is too long. Please keep it under ` +
                    `${MAX_INPUT_LENGTH} characters.`
            });
        }

        await loadQVACModel();

        console.log("\n===== STUDY MATERIAL =====");
        console.log(studyMaterial);

        // =========================
        // CREATE STUDY NOTES
        // =========================

        console.log("\nCreating study notes...");

        const notesResult = qvac.completion({
            modelId: aiModel,
            history: [
                {
                    role: "user",
                    content:
                        "You are NurseMemo, a nursing study assistant.\n\n" +

                        "Your task is to organize the EXACT information provided by the user into short study notes.\n\n" +

                        "STRICT RULES:\n" +
                        "1. Use ONLY information explicitly written in the study material.\n" +
                        "2. Do NOT add outside knowledge.\n" +
                        "3. Do NOT make assumptions.\n" +
                        "4. Do NOT infer missing information.\n" +
                        "5. Do NOT create facts that are not directly stated.\n" +
                        "6. Do NOT add examples unless they appear in the material.\n" +
                        "7. Do NOT add medical or nursing information from your own knowledge.\n" +
                        "8. Keep the meaning of the original material unchanged.\n" +
                        "9. If information is missing, do not fill it in.\n" +
                        "10. Do not use Markdown or asterisks.\n\n" +

                        "Use exactly this format:\n\n" +

                        "TITLE: [short title based only on the material]\n\n" +

                        "KEY POINTS:\n" +
                        "1. [key point directly supported by the material]\n" +
                        "2. [key point directly supported by the material]\n" +
                        "3. [key point directly supported by the material]\n\n" +

                        "IMPORTANT TERMS:\n" +
                        "1. [term]: [meaning stated in the material]\n" +
                        "2. [term]: [meaning stated in the material]\n" +
                        "3. [term]: [meaning stated in the material]\n\n" +

                        "If the material does not contain enough information for three items, do not invent information. Use only the available information.\n\n" +

                        "STUDY MATERIAL:\n" +
                        studyMaterial
                }
            ],
            stream: false
        });

        const studyNotes = await notesResult.text;

        console.log("Study notes created.");

        // =========================
        // CREATE QUIZ
        // =========================

        console.log("Creating Quiz Me questions...");

        const quizResult = qvac.completion({
            modelId: aiModel,
            history: [
                {
                    role: "user",
                    content:
                        "You are NurseMemo, a nursing study assistant.\n\n" +

                        "Create exactly 5 short practice questions using ONLY the information explicitly stated in the study material.\n\n" +

                        "STRICT RULES:\n" +
                        "1. Every question must be answerable directly from the study material.\n" +
                        "2. Every answer must be directly stated or directly supported by the study material.\n" +
                        "3. Do NOT use outside nursing knowledge.\n" +
                        "4. Do NOT add facts that are not in the material.\n" +
                        "5. Do NOT assume missing information.\n" +
                        "6. Do NOT create questions about information that is not provided.\n" +
                        "7. Do NOT use Markdown or asterisks.\n" +
                        "8. Keep questions short and clear.\n\n" +

                        "Use exactly this format:\n\n" +

                        "1. Question\n" +
                        "Answer: Answer\n\n" +

                        "2. Question\n" +
                        "Answer: Answer\n\n" +

                        "3. Question\n" +
                        "Answer: Answer\n\n" +

                        "4. Question\n" +
                        "Answer: Answer\n\n" +

                        "5. Question\n" +
                        "Answer: Answer\n\n" +

                        "STUDY MATERIAL:\n" +
                        studyMaterial
                }
            ],
            stream: false
        });

        const quiz = await quizResult.text;

        console.log("Quiz created.");
        console.log("===== NURSEMEMO COMPLETE =====\n");

        return res.json({
            transcript: studyMaterial,
            studyNotes,
            quiz
        });

    } catch (error) {
        console.error("\n===== NURSEMEMO ERROR =====");
        console.error(error);

        return res.status(500).json({
            error: error.message || "Processing failed."
        });
    }
});

app.listen(PORT, () => {
    console.log("=================================");
    console.log("        NURSEMEMO SERVER");
    console.log("=================================");
    console.log(`Open: http://localhost:${PORT}`);
    console.log("QVAC processing runs locally.");
    console.log(`Maximum input: ${MAX_INPUT_LENGTH} characters`);
    console.log("=================================\n");
});