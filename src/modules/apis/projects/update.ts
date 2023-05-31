import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IProject } from "../../interface/IProject";

/**
 * @description update a trading account
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param payload
 * @param uuid
 */
export const update = async (
  endpoint?: string,
  payload?: IProject,
  uuid?: any
): Promise<IProject> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.projects + uuid),
    useHeaders(payload, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
