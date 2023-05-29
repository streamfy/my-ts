import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IProject, IProjectResponse } from "../../interface/IProject";

/**
 * @description post new project
 * @returns new project data
 * @default  endpoint is /my/projects
 * @param token authorization in header
 * @param endpoint
 * @param payload project info
 */
export const store = async (
  endpoint?: string,
  payload?: IProject
): Promise<IProjectResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects),
    useHeaders(payload, "POST")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
