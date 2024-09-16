/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateByoSipTrunkCredentialDto {
    /** This can be used to bring your own SIP trunks or to connect to a Carrier. */
    provider?: "byo-sip-trunk";
    /** This is the list of SIP trunk's gateways. */
    gateways: Vapi.SipTrunkGateway[];
    /** This is the name of the SIP trunk. This is just for your reference. */
    name?: string;
    /** This can be used to configure the outbound authentication if required by the SIP trunk. */
    outboundAuthenticationPlan?: Vapi.SipTrunkOutboundAuthenticationPlan;
    /**
     * This ensures the outbound origination attempts have a leading plus. Defaults to false to match conventional telecom behavior.
     *
     * Usage:
     *
     * - Vonage/Twilio requires leading plus for all outbound calls. Set this to true.
     *
     * @default false
     */
    outboundLeadingPlusEnabled?: boolean;
    /** This is an advanced configuration for enterprise deployments. This uses the onprem SBC to trunk into the SIP trunk's `gateways`, rather than the managed SBC provided by Vapi. */
    sbcConfiguration?: Vapi.SbcConfiguration;
}
