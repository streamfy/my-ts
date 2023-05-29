import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IUpdate } from "../../interface/IUpdate";

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
): Promise<IUpdate> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.channels + id),
    useHeaders(identifier, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
