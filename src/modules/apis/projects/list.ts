import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IProjectList } from "../../interface/IProjectList";

/**
 * @description list of Projects
 * @returns a table format projects list
 * @default  endpoint is /projects
 * @param token should be sent in header
 */
export const list = async (
  endpoint?: string,
  token?: string
): Promise<IProjectList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects),
    useHeaders(undefined, undefined, { [config.authorization]: token })
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
