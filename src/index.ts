import { config } from "./modules/config";
import { tags, ITagsModule } from "./modules/apis/tags";
import {IProjectsModule, projects} from "./modules/apis/projects";

export interface IMyTs {
  config: typeof config;
  projects: IProjectsModule;
  tags: ITagsModule;
}

export const myTs = (): IMyTs => {
  return {
    config,
    projects: projects(),
    tags: tags(),
  };
};
