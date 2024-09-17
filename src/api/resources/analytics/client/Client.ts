/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Analytics {
    interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Analytics {
    constructor(protected readonly _options: Analytics.Options) {}

    /**
     * @param {Vapi.AnalyticsQueryDto} request
     * @param {Analytics.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.get({
     *         queries: [{
     *                 table: "call",
     *                 name: "name",
     *                 operations: [{
     *                         operation: "sum",
     *                         column: "id"
     *                     }]
     *             }]
     *     })
     */
    public async get(
        request: Vapi.AnalyticsQueryDto,
        requestOptions?: Analytics.RequestOptions
    ): Promise<Vapi.AnalyticsQueryResult[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "analytics"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "vapi/0.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.AnalyticsQueryResult[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
