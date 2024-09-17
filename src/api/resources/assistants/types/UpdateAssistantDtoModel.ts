/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../index";

/**
 * These are the options for the assistant's LLM.
 */
export type UpdateAssistantDtoModel =
    | Vapi.UpdateAssistantDtoModel.Anyscale
    | Vapi.UpdateAssistantDtoModel.Anthropic
    | Vapi.UpdateAssistantDtoModel.CustomLlm
    | Vapi.UpdateAssistantDtoModel.Deepinfra
    | Vapi.UpdateAssistantDtoModel.Groq
    | Vapi.UpdateAssistantDtoModel.Openai
    | Vapi.UpdateAssistantDtoModel.Openrouter
    | Vapi.UpdateAssistantDtoModel.PerplexityAi
    | Vapi.UpdateAssistantDtoModel.TogetherAi
    | Vapi.UpdateAssistantDtoModel.Vapi;

export declare namespace UpdateAssistantDtoModel {
    interface Anyscale extends Vapi.AnyscaleModel {
        provider: "anyscale";
    }

    interface Anthropic extends Vapi.AnthropicModel {
        provider: "anthropic";
    }

    interface CustomLlm extends Vapi.CustomLlmModel {
        provider: "custom-llm";
    }

    interface Deepinfra extends Vapi.DeepInfraModel {
        provider: "deepinfra";
    }

    interface Groq extends Vapi.GroqModel {
        provider: "groq";
    }

    interface Openai extends Vapi.OpenAiModel {
        provider: "openai";
    }

    interface Openrouter extends Vapi.OpenRouterModel {
        provider: "openrouter";
    }

    interface PerplexityAi extends Vapi.PerplexityAiModel {
        provider: "perplexity-ai";
    }

    interface TogetherAi extends Vapi.TogetherAiModel {
        provider: "together-ai";
    }

    interface Vapi extends Vapi.VapiModel {
        provider: "vapi";
    }
}