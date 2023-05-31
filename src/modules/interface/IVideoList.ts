import { IResponse } from "./IResponse";
import { IVideo } from "./IVideo";

export interface IVideoList extends IResponse {
  results: IVideo[];
}
