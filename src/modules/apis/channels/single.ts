import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IChannel } from "../../interface/IChannel";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */

export const single = async (
  endpoint?: string,
  id?: string
): Promise<IChannel> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.channels + id),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
