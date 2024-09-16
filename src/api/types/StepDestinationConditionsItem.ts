/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type StepDestinationConditionsItem =
    | Vapi.StepDestinationConditionsItem.ModelBased
    | Vapi.StepDestinationConditionsItem.RuleBased;

export declare namespace StepDestinationConditionsItem {
    interface ModelBased extends Vapi.ModelBasedCondition {
        type: "model-based";
    }

    interface RuleBased extends Vapi.RuleBasedCondition {
        type: "rule-based";
    }
}
