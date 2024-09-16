/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface RegexReplacement {
    /** This is the regex pattern to replace. */
    regex: string;
    /**
     * These are the options for the regex replacement. Default all options are disabled.
     *
     * @default []
     */
    options?: Vapi.RegexOption[];
    /** This is the value that will replace the match. */
    value: string;
}
