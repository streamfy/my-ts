import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IShortList } from "../../interface/IShortList";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */

export const list = async (endpoint?: string): Promise<IShortList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.shorts),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
