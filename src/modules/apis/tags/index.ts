import { list } from "./list";
import { single } from "./single";
import { ITagList } from "../../interface/ITagList";
import { ITag } from "../../interface/ITag";

export const tags = () => {
  return {
    list,
    single,
  };
};

export interface ITagsModule {
  list: (endpoint?: string | undefined) => Promise<ITagList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<ITag>;
}
