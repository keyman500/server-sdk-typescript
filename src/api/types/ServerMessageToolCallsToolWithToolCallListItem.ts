/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type ServerMessageToolCallsToolWithToolCallListItem =
    | Vapi.ServerMessageToolCallsToolWithToolCallListItem.Function
    | Vapi.ServerMessageToolCallsToolWithToolCallListItem.Ghl
    | Vapi.ServerMessageToolCallsToolWithToolCallListItem.Make;

export declare namespace ServerMessageToolCallsToolWithToolCallListItem {
    interface Function extends Vapi.FunctionToolWithToolCall {
        type: "function";
    }

    interface Ghl extends Vapi.GhlToolWithToolCall {
        type: "ghl";
    }

    interface Make extends Vapi.MakeToolWithToolCall {
        type: "make";
    }
}
