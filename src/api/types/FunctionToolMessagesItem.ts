/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type FunctionToolMessagesItem =
    | Vapi.FunctionToolMessagesItem.RequestStart
    | Vapi.FunctionToolMessagesItem.RequestComplete
    | Vapi.FunctionToolMessagesItem.RequestFailed
    | Vapi.FunctionToolMessagesItem.RequestResponseDelayed;

export declare namespace FunctionToolMessagesItem {
    interface RequestStart extends Vapi.ToolMessageStart {
        type: "request-start";
    }

    interface RequestComplete extends Vapi.ToolMessageComplete {
        type: "request-complete";
    }

    interface RequestFailed extends Vapi.ToolMessageFailed {
        type: "request-failed";
    }

    interface RequestResponseDelayed extends Vapi.ToolMessageDelayed {
        type: "request-response-delayed";
    }
}