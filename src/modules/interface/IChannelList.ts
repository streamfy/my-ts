import {IResponse} from "./IResponse";
import {IChannel} from "./IChannel";

export interface IChannelList extends IResponse{
    results: IChannel[]
}
