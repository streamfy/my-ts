import {list} from "./list";
import {single} from "./single";
import {IProjectList} from "../../interface/IProjectList";
import {IProject} from "../../interface/IProject";
import {destroy} from "./destroy";
import {store} from "./store";
import {update} from "./update";
import {IDelete} from "../../interface/IDelete";

export const projects = () => {
  return {
    list,
    single,
    store,
    update,
    destroy,
  };
};

export interface IProjectsModule {
  list: (endpoint?: string | undefined) => Promise<IProjectList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<IProject>;
  store: (endpoint?: string | undefined, identifier?: any) => Promise<IProject>;
  update: (endpoint?: string | undefined, identifier?: any, id?: any) => Promise<IProject>;
  destroy: (endpoint?: string | undefined, identifier?: any, id?: any) => Promise<IDelete>;
}
