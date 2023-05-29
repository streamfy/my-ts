import { config } from "./modules/config";
import { tags, ITagsModule } from "./modules/apis/tags";
import { IProjectsModule, projects } from "./modules/apis/projects";
import { IChannelsModule, channels } from "./modules/apis/channels";

export interface IMyTs {
  config: typeof config;
  projects: IProjectsModule;
  tags: ITagsModule;
  channel: IChannelsModule;
}

export const myTs = (): IMyTs => {
  return {
    config,
    projects: projects(),
    tags: tags(),
    channel: channels(),
  };
};
