/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type UpdateToolTemplateDtoDetails =
    | Vapi.UpdateToolTemplateDtoDetails.Dtmf
    | Vapi.UpdateToolTemplateDtoDetails.EndCall
    | Vapi.UpdateToolTemplateDtoDetails.Voicemail
    | Vapi.UpdateToolTemplateDtoDetails.Function
    | Vapi.UpdateToolTemplateDtoDetails.Ghl
    | Vapi.UpdateToolTemplateDtoDetails.Make
    | Vapi.UpdateToolTemplateDtoDetails.TransferCall;

export declare namespace UpdateToolTemplateDtoDetails {
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
