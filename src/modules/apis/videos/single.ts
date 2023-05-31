import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IVideo } from "../../interface/IVideo";

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
): Promise<IVideo> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.videos + id),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
