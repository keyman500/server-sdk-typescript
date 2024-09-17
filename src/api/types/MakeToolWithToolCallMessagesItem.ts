/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type MakeToolWithToolCallMessagesItem =
    | Vapi.MakeToolWithToolCallMessagesItem.RequestStart
    | Vapi.MakeToolWithToolCallMessagesItem.RequestComplete
    | Vapi.MakeToolWithToolCallMessagesItem.RequestFailed
    | Vapi.MakeToolWithToolCallMessagesItem.RequestResponseDelayed;

export declare namespace MakeToolWithToolCallMessagesItem {
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