/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ToolCallBlock {
    /** These are the pre-configured messages that will be spoken to the user while the block is running. */
    messages?: Vapi.ToolCallBlockMessagesItem[];
    /**
     * This is the input schema for the block. This is the input the block needs to run. It's given to the block as `steps[0].input`
     *
     * These are accessible as variables:
     *
     * - ({{input.propertyName}}) in context of the block execution (step)
     * - ({{stepName.input.propertyName}}) in context of the workflow
     */
    inputSchema?: Vapi.JsonSchema;
    /**
     * This is the output schema for the block. This is the output the block will return to the workflow (`{{stepName.output}}`).
     *
     * These are accessible as variables:
     *
     * - ({{output.propertyName}}) in context of the block execution (step)
     * - ({{stepName.output.propertyName}}) in context of the workflow (read caveat #1)
     * - ({{blockName.output.propertyName}}) in context of the workflow (read caveat #2)
     *
     * Caveats:
     *
     * 1. a workflow can execute a step multiple times. example, if a loop is used in the graph. {{stepName.output.propertyName}} will reference the latest usage of the step.
     * 2. a workflow can execute a block multiple times. example, if a step is called multiple times or if a block is used in multiple steps. {{blockName.output.propertyName}} will reference the latest usage of the block. this liquid variable is just provided for convenience when creating blocks outside of a workflow with steps.
     */
    outputSchema?: Vapi.JsonSchema;
    /** This is the tool that the block will call. To use an existing tool, use `toolId`. */
    tool?: Vapi.ToolCallBlockTool;
    /** This is the unique identifier for the block. */
    id: string;
    /** This is the unique identifier for the organization that this block belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the block was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the block was last updated. */
    updatedAt: string;
    /** This is the name of the block. This is just for your reference. */
    name?: string;
    /** This is the id of the tool that the block will call. To use a transient tool, use `tool`. */
    toolId?: string;
}
