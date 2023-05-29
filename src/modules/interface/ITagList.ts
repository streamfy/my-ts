import { IResponse } from "./IResponse";
import { ITag } from "./ITag";

export interface ITagList extends IResponse {
  results: ITag[];
}
