import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IProject } from "../../interface/IProject";

/**
 * @description single projects
 * @returns a single project data
 * @default  endpoint is /my/projects/{id}
 * @param token authentication token should be sent in header
 * @param uuid project uuid
 */
export const single = async (
  endpoint?: string,
  id?: string,
  token?: string
): Promise<IProject> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects + id),
    useHeaders(undefined, undefined, { [config.authorization]: token })
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
