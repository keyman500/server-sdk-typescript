/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the phone number associated with the call.
 *
 * This matches one of the following:
 *
 * - `call.phoneNumber`,
 * - `call.phoneNumberId`.
 */
export type ServerMessageSpeechUpdatePhoneNumber =
    | Vapi.ServerMessageSpeechUpdatePhoneNumber.ByoPhoneNumber
    | Vapi.ServerMessageSpeechUpdatePhoneNumber.Twilio
    | Vapi.ServerMessageSpeechUpdatePhoneNumber.Vonage
    | Vapi.ServerMessageSpeechUpdatePhoneNumber.Vapi;

export declare namespace ServerMessageSpeechUpdatePhoneNumber {
    interface ByoPhoneNumber extends Vapi.CreateByoPhoneNumberDto {
        provider: "byo-phone-number";
    }

    interface Twilio extends Vapi.CreateTwilioPhoneNumberDto {
        provider: "twilio";
    }

    interface Vonage extends Vapi.CreateVonagePhoneNumberDto {
        provider: "vonage";
    }

    interface Vapi extends Vapi.CreateVapiPhoneNumberDto {
        provider: "vapi";
    }
}
