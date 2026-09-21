const qvac = require("@qvac/sdk");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    console.log("=================================");
    console.log("       NURSEMEMO QVAC CLI");
    console.log("=================================");
    console.log("Loading QVAC model...");

    const model = await qvac.loadModel({
        modelSrc: qvac.LLAMA_3_2_1B_INST_Q4_0,
        modelType: "llamacpp-completion"
    });

    console.log("QVAC model loaded.");
    console.log("Type 'exit' to quit.\n");

    function ask() {
        rl.question("Question: ", async (question) => {
            if (question.trim().toLowerCase() === "exit") {
                rl.close();
                return;
            }

            if (!question.trim()) {
                console.log("Please enter a question.\n");
                return ask();
            }

            try {
                const result = await qvac.completion({
                    modelId: model,
                    history: [
                        {
                            role: "user",
                            content:
                                "You are NurseMemo, a nursing study assistant. " +
                                "Answer the question clearly and concisely. " +
                                "Do not invent information.\n\n" +
                                "Question: " + question
                        }
                    ],
                    stream: false
                });

                console.log("\nAnswer:");
                console.log(await result.text);
                console.log("");
            } catch (error) {
                console.error("\nError:", error.message);
                console.log("");
            }

            ask();
        });
    }

    ask();
}

main().catch((error) => {
    console.error("ERROR:", error);
    rl.close();
});