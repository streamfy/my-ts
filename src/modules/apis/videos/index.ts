import { list } from "./list";
import { single } from "./single";
import { IVideoList } from "../../interface/IVideoList";
import { IVideo } from "../../interface/IVideo";
import { destroy } from "./destroy";
import { store } from "./store";
import { update } from "./update";
import { IDelete } from "../../interface/IDelete";

export const videos = () => {
  return {
    list,
    single,
    store,
    update,
    destroy,
  };
};

export interface IVideosModule {
  list: (endpoint?: string | undefined) => Promise<IVideoList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<IVideo>;
  store: (endpoint?: string | undefined, identifier?: any) => Promise<IVideo>;
  update: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IVideo>;
  destroy: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IDelete>;
}
