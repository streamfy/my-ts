import { IResponse } from "./IResponse";
import { IShort } from "./IShort";

export interface IShortList extends IResponse {
  results: IShort[];
}
