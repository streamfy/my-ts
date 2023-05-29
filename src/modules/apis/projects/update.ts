import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IProject, IProjectResponse } from "../../interface/IProject";

/**
 * @description update a trading account
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param payload
 * @param id
 */
export const update = async (
  endpoint?: string,
  payload?: IProject,
  id?: any
): Promise<IProjectResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects + id),
    useHeaders(payload, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
