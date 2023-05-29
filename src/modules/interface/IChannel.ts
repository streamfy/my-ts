import { IResponse } from "./IResponse";
import { IProject } from "./IProject";

export interface IChannel extends IResponse {
  results: {
    uuid: string;
    project?: IProject;
    title: string;
    description?: string;
    logo?: string;
    cover?: string;
    is_public?: boolean;
    status?: number;
  }
}
