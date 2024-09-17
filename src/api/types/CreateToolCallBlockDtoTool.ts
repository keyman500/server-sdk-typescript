/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the tool that the block will call. To use an existing tool, use `toolId`.
 */
export type CreateToolCallBlockDtoTool =
    | Vapi.CreateToolCallBlockDtoTool.Dtmf
    | Vapi.CreateToolCallBlockDtoTool.EndCall
    | Vapi.CreateToolCallBlockDtoTool.Voicemail
    | Vapi.CreateToolCallBlockDtoTool.Function
    | Vapi.CreateToolCallBlockDtoTool.Ghl
    | Vapi.CreateToolCallBlockDtoTool.Make
    | Vapi.CreateToolCallBlockDtoTool.TransferCall;

export declare namespace CreateToolCallBlockDtoTool {
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