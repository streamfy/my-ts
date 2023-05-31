import { IResponse } from "./IResponse";
import { IProject } from "./IProject";
import { IChannel } from "./IChannel";
import { IPlaylist } from "./IPlaylist";

export interface IVideo extends IResponse {
  results: {
    uuid: string;
    project?: IProject;
    channel?: IChannel;
    playlist?: IPlaylist;
    playlist_index: string;
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    watermark: string;
    watermark_position: string;
    watermark_margin: string;
    gif: string;
    vtt: boolean;
    scheduled_at: string;
    started_at: string;
    ended_at: string;
    published_at: string;
    auto_caption: boolean;
    is_public: boolean;
    status: number;
    stream_link?: string;
  };
}
