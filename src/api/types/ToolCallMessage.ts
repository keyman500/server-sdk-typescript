/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ToolCallMessage {
    /** The role of the tool call in the conversation. */
    role: string;
    /** The list of tool calls made during the conversation. */
    toolCalls: Record<string, unknown>[];
    /** The message content for the tool call. */
    message: string;
    /** The timestamp when the message was sent. */
    time: number;
    /** The number of seconds from the start of the conversation. */
    secondsFromStart: number;
}
