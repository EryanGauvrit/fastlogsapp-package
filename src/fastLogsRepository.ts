import { FastLogFilter, FastLogGet, FastLogPost } from "./fastLogsService";

export type PersonalData = {
    address_ip: string;
    browser: string;
}

export class FastLogsRepository {
    // private API_URL = "http://localhost:8080";
    private API_URL = "https://fast-logs-app.onrender.com";
    private secretKey: string;
    private sourceName: string;

    constructor(secretKey: string, sourceName: string) {
        this.secretKey = secretKey;
        this.sourceName = sourceName;
    }

    async getFastLogs(filters?: FastLogFilter): Promise<FastLogGet> {
        const queryParams = new URLSearchParams(filters).toString();
        
        const res = await fetch(`${this.API_URL}/log${queryParams && `?${queryParams}`}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.secretKey}`
            }
        });
        
        if (res.status !== 200) {
            throw new Error("Failed to fetch fast logs");
        }

        return res.json();
    }

    async postFastLog(fastLog: FastLogPost): Promise<void> {
        const personalData = await this.getUserPersonalData();
        fastLog.sourceName = this.sourceName;
        fastLog.ip_address = personalData.address_ip;
        fastLog.navigator = personalData.browser;
        const res = await fetch(`${this.API_URL}/log`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.secretKey}`
            },
            body: JSON.stringify(fastLog)
        });

        if (res.status !== 200) {
            throw new Error("Failed to post fast log");
        }
    }

    async deleteFastLog(id: number): Promise<void> {
        const res = await fetch(`${this.API_URL}/log/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.secretKey}`
            }
        });

        if (res.status !== 200) {
            throw new Error("Failed to delete fast log");
        }
    }

    private async getUserPersonalData(): Promise<PersonalData> {
        const res = await fetch(`${this.API_URL}/audit`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.secretKey}`
            }
        });

        if (res.status !== 200) {
            throw new Error("Failed to fetch user personal data");
        }

        return res.json();
    }
}