import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import OpenAI from "openai";
import { NextRequest } from "next/server";

// 1. Create OpenAI client and adapter
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy-key",
});
const serviceAdapter = new OpenAIAdapter({ openai });

// 2. Create the CopilotRuntime instance and connect to our FastAPI backend
const runtime = new CopilotRuntime({
  remoteEndpoints: [
    {
      url: process.env.LANGGRAPH_DEPLOYMENT_URL || "http://localhost:8000/api/v1/copilotkit",
    },
  ],
});

// 3. Build a Next.js API route that handles the CopilotKit runtime requests.
export const POST = async (req: NextRequest) => {
  console.log("🔄 CopilotKit endpoint called");

  try {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: "/api/copilotkit",
    });

    const response = await handleRequest(req);
    console.log("✅ CopilotKit request handled successfully");
    return response;
  } catch (error) {
    console.error("❌ Error in CopilotKit endpoint:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};