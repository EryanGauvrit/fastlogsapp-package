export type Source = {
    name: string;
    id: number;
};
export type Action = {
    name: string;
    id: number;
};
export type FastLog = {
    id: number;
    content: string;
    ip_address: string;
    navigator: string;
    description: string;
    localisation: string;
    author?: string;
    source: Source;
    action: Action;
    createdAt: string;
    updatedAt: string;
};
export type FastLogGet = {
    logs: FastLog[];
    count: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
};
export type FastLogPost = {
    content: string;
    ip_address?: string;
    navigator?: string;
    description: string;
    localisation?: string;
    sourceName?: string;
    actionName: string;
    author?: string;
};
export type FastLogFilter = {
    ip_address?: string;
    navigator?: string;
    localisation?: string;
    sourceName?: string;
    actionName?: string;
    author?: string;
    limit?: string;
    page?: string;
};
export declare class FastLogsService {
    constructor(secretKey: string, sourceName: string);
    private fastLogsRepository;
    getFastLogs(filters?: FastLogFilter): Promise<FastLogGet>;
    postFastLog(fastLog: FastLogPost): Promise<void>;
    deleteFastLog(id: number): Promise<void>;
}
