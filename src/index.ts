import { config } from "./modules/config";
import { tags, ITagsModule } from "./modules/apis/tags";
import { IProjectsModule, projects } from "./modules/apis/projects";
import { IChannelsModule, channels } from "./modules/apis/channels";
import { IPlaylistsModule, playlists } from "./modules/apis/playlists";
import { attachments, IAttachmentsModule } from "./modules/apis/attachments";

export interface IMyTs {
  config: typeof config;
  projects: IProjectsModule;
  tags: ITagsModule;
  channels: IChannelsModule;
  playlists: IPlaylistsModule;
  attachments: IAttachmentsModule;
}

export const myTs = (): IMyTs => {
  return {
    config,
    projects: projects(),
    tags: tags(),
    channels: channels(),
    playlists: playlists(),
    attachments: attachments(),
  };
};
