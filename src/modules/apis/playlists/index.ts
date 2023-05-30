import { list } from "./list";
import { single } from "./single";
import { IPlaylist } from "../../interface/IPlaylist";
import { destroy } from "./destroy";
import { store } from "./store";
import { update } from "./update";
import { IDelete } from "../../interface/IDelete";

export const playlists = () => {
  return {
    list,
    single,
    store,
    update,
    destroy,
  };
};

export interface IPlaylistsModule {
  list: (endpoint?: string | undefined) => Promise<IPlaylist>;
  single: (endpoint?: string | undefined, id?: string) => Promise<IPlaylist>;
  store: (
    endpoint?: string | undefined,
    identifier?: any
  ) => Promise<IPlaylist>;
  update: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IPlaylist>;
  destroy: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IDelete>;
}
