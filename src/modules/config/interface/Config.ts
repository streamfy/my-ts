export interface IConfig {
  baseURL: string;
  baseEndpoint?: string;
  headers?: HeadersInit;
  apiVersion?: string;
  authorization: string;
  endpoints?: any;
}
