import {IResponse} from "./IResponse";

export interface IProject extends IResponse{
    uuid: string;
    key: string;
    title: string;
    description?: string;
    logo?: string;
    url?: string;
    webhook_url?: string;
    is_public?: boolean;
    status?: number;
}
