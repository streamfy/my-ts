import { list } from "./list";
import { single } from "./single";
import { IShortList } from "../../interface/IShortList";
import { IShort } from "../../interface/IShort";
import { destroy } from "./destroy";
import { store } from "./store";
import { update } from "./update";
import { IDelete } from "../../interface/IDelete";

export const shorts = () => {
  return {
    list,
    single,
    store,
    update,
    destroy,
  };
};

export interface IShortsModule {
  list: (endpoint?: string | undefined) => Promise<IShortList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<IShort>;
  store: (endpoint?: string | undefined, identifier?: any) => Promise<IShort>;
  update: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IShort>;
  destroy: (
    endpoint?: string | undefined,
    identifier?: any,
    id?: any
  ) => Promise<IDelete>;
}
