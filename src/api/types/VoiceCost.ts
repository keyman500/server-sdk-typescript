/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VoiceCost {
    /**
     * This is the voice that was used during the call.
     *
     * This matches one of the following:
     *
     * - `call.assistant.voice`,
     * - `call.assistantId->voice`,
     * - `call.squad[n].assistant.voice`,
     * - `call.squad[n].assistantId->voice`,
     * - `call.squadId->[n].assistant.voice`,
     * - `call.squadId->[n].assistantId->voice`.
     */
    voice: Record<string, unknown>;
    /** This is the number of characters that were generated during the call. These should be total characters used in the call for single assistant calls, while squad calls will have multiple voice costs one for each assistant that was used. */
    characters: number;
    /** This is the cost of the component in USD. */
    cost: number;
}
