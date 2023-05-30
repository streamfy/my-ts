import { IResponse } from "./IResponse";
import { IProject } from "./IProject";
import { IChannel } from "./IChannel";

export interface IPlaylist extends IResponse {
  results: {
    uuid: string;
    project?: IProject;
    channel?: IChannel;
    title: string;
    description?: string;
    logo?: string;
    cover?: string;
    is_public?: boolean;
    status?: number;
  };
}
