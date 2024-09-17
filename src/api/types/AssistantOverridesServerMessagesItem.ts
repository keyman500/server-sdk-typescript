/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type AssistantOverridesServerMessagesItem =
    | "conversation-update"
    | "end-of-call-report"
    | "function-call"
    | "hang"
    | "language-changed"
    | "model-output"
    | "phone-call-control"
    | "speech-update"
    | "status-update"
    | "transcript"
    | "tool-calls"
    | "transfer-destination-request"
    | "transfer-update"
    | "user-interrupted"
    | "voice-input";

export const AssistantOverridesServerMessagesItem = {
    ConversationUpdate: "conversation-update",
    EndOfCallReport: "end-of-call-report",
    FunctionCall: "function-call",
    Hang: "hang",
    LanguageChanged: "language-changed",
    ModelOutput: "model-output",
    PhoneCallControl: "phone-call-control",
    SpeechUpdate: "speech-update",
    StatusUpdate: "status-update",
    Transcript: "transcript",
    ToolCalls: "tool-calls",
    TransferDestinationRequest: "transfer-destination-request",
    TransferUpdate: "transfer-update",
    UserInterrupted: "user-interrupted",
    VoiceInput: "voice-input",
} as const;