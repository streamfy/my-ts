import { useHeaders, useUrl } from "../../../core";
import responseHandeling from "../../../core/responseHandeling";
import { config } from "../../config";
import { ITag } from "../../interface/ITag";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param id
 */
export const single = async (endpoint?: string, id?: string): Promise<ITag> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.tags + id),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
