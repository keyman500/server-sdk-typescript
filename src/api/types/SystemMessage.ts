/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SystemMessage {
    /** The role of the system in the conversation. */
    role: string;
    /** The message content from the system. */
    message: string;
    /** The timestamp when the message was sent. */
    time: number;
    /** The number of seconds from the start of the conversation. */
    secondsFromStart: number;
}
