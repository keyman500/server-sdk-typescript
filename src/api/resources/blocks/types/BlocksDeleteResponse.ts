/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../index";

export type BlocksDeleteResponse =
    | Vapi.BlocksDeleteResponse.Conversation
    | Vapi.BlocksDeleteResponse.ToolCall
    | Vapi.BlocksDeleteResponse.Workflow;

export declare namespace BlocksDeleteResponse {
    interface Conversation extends Vapi.ConversationBlock {
        type: "conversation";
    }

    interface ToolCall extends Vapi.ToolCallBlock {
        type: "tool-call";
    }

    interface Workflow extends Vapi.WorkflowBlock {
        type: "workflow";
    }
}
