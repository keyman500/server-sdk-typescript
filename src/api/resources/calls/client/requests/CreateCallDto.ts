/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../../index";

/**
 * @example
 *     {}
 */
export interface CreateCallDto {
    /** This is the name of the call. This is just for your own reference. */
    name?: string;
    /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
    assistantId?: string;
    /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
    assistant?: Vapi.CreateAssistantDto;
    /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
    assistantOverrides?: Vapi.AssistantOverrides;
    /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
    squadId?: string;
    /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
    squad?: Vapi.CreateSquadDto;
    /**
     * This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.
     *
     * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
     */
    phoneNumberId?: string;
    /**
     * This is the phone number that will be used for the call. To use an existing number, use `phoneNumberId` instead.
     *
     * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
     */
    phoneNumber?: Vapi.ImportTwilioPhoneNumberDto;
    /**
     * This is the customer that will be called. To call a transient customer , use `customer` instead.
     *
     * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
     */
    customerId?: string;
    /**
     * This is the customer that will be called. To call an existing customer, use `customerId` instead.
     *
     * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
     */
    customer?: Vapi.CreateCustomerDto;
}
