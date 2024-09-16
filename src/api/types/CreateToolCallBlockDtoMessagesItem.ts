/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type CreateToolCallBlockDtoMessagesItem =
    | Vapi.CreateToolCallBlockDtoMessagesItem.BlockStart
    | Vapi.CreateToolCallBlockDtoMessagesItem.BlockComplete;

export declare namespace CreateToolCallBlockDtoMessagesItem {
    interface BlockStart extends Vapi.BlockStartMessage {
        type: "block-start";
    }

    interface BlockComplete extends Vapi.BlockCompleteMessage {
        type: "block-complete";
    }
}
