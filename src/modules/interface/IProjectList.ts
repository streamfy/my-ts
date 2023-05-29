import {IResponse} from "./IResponse";
import {IProject} from "./IProject";

export interface IProjectList extends IResponse{
    results: IProject[];
}
