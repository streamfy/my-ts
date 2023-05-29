import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IDelete } from "../../interface/IDelete";
import { config } from "../../config";

/**
 * @description delete a project
 * @returns almost nothing
 * @default  endpoint is /my/projects
 * @param uuid
 */

export const destroy = async (
  endpoint?: string,
  id?: string,
  token?: string
): Promise<IDelete> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects + id),
    useHeaders(undefined, "DELETE", { [config.authorization]: token })
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
