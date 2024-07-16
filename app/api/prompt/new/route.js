import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        // Basic validation
        if (!userId || !prompt || !tag) {
            return new Response("Missing required fields", { status: 400 });
        }

        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error("Error creating prompt:", error.message);
        return new Response("Failed to create a new prompt", { status: 500 });
    }
};