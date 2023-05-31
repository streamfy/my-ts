import { IResponse } from "./IResponse";

export interface IAttachment extends IResponse {
  results: {
    uuid: string;
    type: string;
  };
}
