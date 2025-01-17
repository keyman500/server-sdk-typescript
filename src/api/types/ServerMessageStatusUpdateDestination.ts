/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the destination the call is being transferred to. This is only sent if the status is "forwarding".
 */
export type ServerMessageStatusUpdateDestination = Vapi.TransferDestinationNumber | Vapi.TransferDestinationSip;
