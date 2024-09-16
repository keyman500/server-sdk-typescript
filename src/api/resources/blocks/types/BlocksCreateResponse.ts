/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../index";

export type BlocksCreateResponse =
    | Vapi.BlocksCreateResponse.Conversation
    | Vapi.BlocksCreateResponse.ToolCall
    | Vapi.BlocksCreateResponse.Workflow;

export declare namespace BlocksCreateResponse {
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
