import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IVideoList } from "../../interface/IVideoList";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */

export const list = async (endpoint?: string): Promise<IVideoList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.videos),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
