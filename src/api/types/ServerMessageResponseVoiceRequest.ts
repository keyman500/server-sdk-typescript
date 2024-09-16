/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ServerMessageResponseVoiceRequest {
    /**
     * DO NOT respond to a `voice-request` webhook with this schema of { data }. This schema just exists to document what the response should look like. Follow these instructions:
     *
     * Here is what the request will look like:
     *
     * POST https://{assistant.voice.server.url}
     * Content-Type: application/json
     *
     * {
     * "messsage": {
     * "type": "voice-request",
     * "text": "Hello, world!",
     * "sampleRate": 24000,
     * ...other metadata about the call...
     * }
     * }
     *
     * The expected response is 1-channel 16-bit raw PCM audio at the sample rate specified in the request. Here is how the response will be piped to the transport:
     *
     * ```
     * response.on('data', (chunk: Buffer) => {
     *   outputStream.write(chunk);
     * });
     * ```
     */
    data: string;
}
