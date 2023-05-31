import { IResponse } from "./IResponse";
import { IProject } from "./IProject";
import { IChannel } from "./IChannel";

export interface IShort extends IResponse {
  results: {
    uuid: string;
    project?: IProject;
    channel?: IChannel;
    title: string;
    description: string;
    thumbnail: string;
    watermark: string;
    scheduled_at: string;
    started_at: string;
    ended_at: string;
    published_at: string;
    auto_caption: boolean;
    is_public: boolean;
    status: number;
  };
}
