/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the tool that the block will call. To use an existing tool, use `toolId`.
 */
export type ToolCallBlockTool =
    | Vapi.ToolCallBlockTool.Dtmf
    | Vapi.ToolCallBlockTool.EndCall
    | Vapi.ToolCallBlockTool.Voicemail
    | Vapi.ToolCallBlockTool.Function
    | Vapi.ToolCallBlockTool.Ghl
    | Vapi.ToolCallBlockTool.Make
    | Vapi.ToolCallBlockTool.TransferCall;

export declare namespace ToolCallBlockTool {
    interface Dtmf extends Vapi.CreateDtmfToolDto {
        type: "dtmf";
    }

    interface EndCall extends Vapi.CreateEndCallToolDto {
        type: "endCall";
    }

    interface Voicemail extends Vapi.CreateVoicemailToolDto {
        type: "voicemail";
    }

    interface Function extends Vapi.CreateFunctionToolDto {
        type: "function";
    }

    interface Ghl extends Vapi.CreateGhlToolDto {
        type: "ghl";
    }

    interface Make extends Vapi.CreateMakeToolDto {
        type: "make";
    }

    interface TransferCall extends Vapi.CreateTransferCallToolDto {
        type: "transferCall";
    }
}
