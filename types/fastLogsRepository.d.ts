import { FastLogFilter, FastLogGet, FastLogPost } from "./fastLogsService";
export type PersonalData = {
    address_ip: string;
    browser: string;
};
export declare class FastLogsRepository {
    private API_URL;
    private secretKey;
    private sourceName;
    constructor(secretKey: string, sourceName: string);
    getFastLogs(filters?: FastLogFilter): Promise<FastLogGet>;
    postFastLog(fastLog: FastLogPost): Promise<void>;
    deleteFastLog(id: number): Promise<void>;
    private getUserPersonalData;
}
