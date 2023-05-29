import { list } from "./list";
import { single } from "./single";
import { IChannelList } from "../../interface/IChannelList";
import { IChannel } from "../../interface/IChannel";
import { destroy } from "./destroy";
import { store } from "./store";
import { update } from "./update";
import { IDelete } from "../../interface/IDelete";

export const channels = () => {
  return {
    list,
    single,
    store,
    update,
    destroy,
  };
};

export interface IChannelsModule {
  list: (endpoint?: string | undefined) => Promise<IChannelList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<IChannel>;
  store: (endpoint?: string | undefined, identifier?: any) => Promise<IChannel>;
  update: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IChannel>;
  destroy: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IDelete>;
}
