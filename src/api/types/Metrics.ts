/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Metrics {
    orgId: string;
    rangeStart: string;
    rangeEnd: string;
    bill: number;
    billWithinBillingLimit: boolean;
    billDailyBreakdown: Record<string, unknown>;
    callActive: number;
    callActiveWithinConcurrencyLimit: boolean;
    callMinutes: number;
    callMinutesDailyBreakdown: Record<string, unknown>;
    callMinutesAverage: number;
    callMinutesAverageDailyBreakdown: Record<string, unknown>;
    callCount: number;
    callCountDailyBreakdown: Record<string, unknown>;
}
