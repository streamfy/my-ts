import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IVideo } from "../../interface/IVideo";

/**
 * @description update a trading account
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param identifier
 * @param id
 */

export const update = async (
  endpoint?: string,
  identifier?: any,
  id?: any
): Promise<IVideo> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.videos + id),
    useHeaders(identifier, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
