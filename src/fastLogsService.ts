import { FastLogsRepository } from "./fastLogsRepository";

export type Source = {
    name: string;
    id: number;
}

export type Action = {
    name: string;
    id: number;
}

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
}

export type FastLogGet = {
    logs: FastLog[];
    count: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
}

export type FastLogPost = {
    content: string;
    ip_address?: string;
    navigator?: string;
    description: string;
    localisation?: string;
    sourceName?: string;
    actionName: string;
    author?: string;
}

export type FastLogFilter = {
    ip_address?: string;
    navigator?: string;
    localisation?: string;
    sourceName?: string;
    actionName?: string;
    author?: string;
    limit?: string;
    page?: string;
}

export class FastLogsService {
    constructor(secretKey: string) {
        this.fastLogsRepository = new FastLogsRepository(secretKey);
    }

    private fastLogsRepository: FastLogsRepository;

    async getFastLogs(filters?: FastLogFilter): Promise<FastLogGet> {
        return this.fastLogsRepository.getFastLogs(filters);
    }

    async postFastLog(fastLog: FastLogPost): Promise<void> {
        return this.fastLogsRepository.postFastLog(fastLog);
    }

    async deleteFastLog(id: number): Promise<void> {
        return this.fastLogsRepository.deleteFastLog(id);
    }
}