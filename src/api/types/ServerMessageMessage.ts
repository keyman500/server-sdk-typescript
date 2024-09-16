/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * These are all the messages that can be sent to your server before, after and during the call. Configure the messages you'd like to receive in `assistant.serverMessages`.
 *
 * The server where the message is sent is determined by the following precedence order:
 *
 * 1. `tool.server.url` (if configured, and only for "tool-calls" message)
 * 2. `assistant.serverUrl` (if configure)
 * 3. `phoneNumber.serverUrl` (if configured)
 * 4. `org.serverUrl` (if configured)
 */
export type ServerMessageMessage =
    | Vapi.ServerMessageMessage.AssistantRequest
    | Vapi.ServerMessageMessage.ConversationUpdate
    | Vapi.ServerMessageMessage.EndOfCallReport
    | Vapi.ServerMessageMessage.Hang
    | Vapi.ServerMessageMessage.ModelOutput
    | Vapi.ServerMessageMessage.PhoneCallControl
    | Vapi.ServerMessageMessage.SpeechUpdate
    | Vapi.ServerMessageMessage.StatusUpdate
    | Vapi.ServerMessageMessage.ToolCalls
    | Vapi.ServerMessageMessage.TransferDestinationRequest
    | Vapi.ServerMessageMessage.TransferUpdate
    | Vapi.ServerMessageMessage.Transcript
    | Vapi.ServerMessageMessage.UserInterrupted
    | Vapi.ServerMessageMessage.LanguageChanged
    | Vapi.ServerMessageMessage.VoiceInput
    | Vapi.ServerMessageMessage.VoiceRequest;

export declare namespace ServerMessageMessage {
    interface AssistantRequest extends Vapi.ServerMessageAssistantRequest {
        type: "assistant-request";
    }

    interface ConversationUpdate extends Vapi.ServerMessageConversationUpdate {
        type: "conversation-update";
    }

    interface EndOfCallReport extends Vapi.ServerMessageEndOfCallReport {
        type: "end-of-call-report";
    }

    interface Hang extends Vapi.ServerMessageHang {
        type: "hang";
    }

    interface ModelOutput extends Vapi.ServerMessageModelOutput {
        type: "model-output";
    }

    interface PhoneCallControl extends Vapi.ServerMessagePhoneCallControl {
        type: "phone-call-control";
    }

    interface SpeechUpdate extends Vapi.ServerMessageSpeechUpdate {
        type: "speech-update";
    }

    interface StatusUpdate extends Vapi.ServerMessageStatusUpdate {
        type: "status-update";
    }

    interface ToolCalls extends Vapi.ServerMessageToolCalls {
        type: "tool-calls";
    }

    interface TransferDestinationRequest extends Vapi.ServerMessageTransferDestinationRequest {
        type: "transfer-destination-request";
    }

    interface TransferUpdate extends Vapi.ServerMessageTransferUpdate {
        type: "transfer-update";
    }

    interface Transcript extends Vapi.ServerMessageTranscript {
        type: "transcript";
    }

    interface UserInterrupted extends Vapi.ServerMessageUserInterrupted {
        type: "user-interrupted";
    }

    interface LanguageChanged extends Vapi.ServerMessageLanguageChanged {
        type: "language-changed";
    }

    interface VoiceInput extends Vapi.ServerMessageVoiceInput {
        type: "voice-input";
    }

    interface VoiceRequest extends Vapi.ServerMessageVoiceRequest {
        type: "voice-request";
    }
}
