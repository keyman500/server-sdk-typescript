/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type OpenRouterModelToolsItem =
    | Vapi.OpenRouterModelToolsItem.Dtmf
    | Vapi.OpenRouterModelToolsItem.EndCall
    | Vapi.OpenRouterModelToolsItem.Voicemail
    | Vapi.OpenRouterModelToolsItem.Function
    | Vapi.OpenRouterModelToolsItem.Ghl
    | Vapi.OpenRouterModelToolsItem.Make
    | Vapi.OpenRouterModelToolsItem.TransferCall;

export declare namespace OpenRouterModelToolsItem {
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
