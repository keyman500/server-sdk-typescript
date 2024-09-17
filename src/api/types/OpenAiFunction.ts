/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface OpenAiFunction {
    /**
     * This is the the name of the function to be called.
     *
     * Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
     */
    name: string;
    description?: string;
    /**
     * These are the parameters the functions accepts, described as a JSON Schema object.
     *
     * See the [OpenAI guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format.
     *
     * Omitting parameters defines a function with an empty parameter list.
     */
    parameters?: Vapi.OpenAiFunctionParameters;
}