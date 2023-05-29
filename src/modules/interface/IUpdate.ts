import { IResponse } from "./IResponse";

export interface IUpdate extends IResponse {
  uuid: string;
  title: string;
  description?: string;
  logo?: string;
  url: string;
  webhook_url: string;
  is_public?: boolean;
  status?: number;
}
