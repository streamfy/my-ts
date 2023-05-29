import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { ITagList } from "../../interface/ITagList";
import { config } from "../../config";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */

export const list = async (endpoint?: string): Promise<ITagList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.tags),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
