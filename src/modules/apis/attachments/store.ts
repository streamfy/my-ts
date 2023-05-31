import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IAttachment } from "../../interface/IAttachment";

/**
 * @description post trading accounts
 * @returns trading accounts post response
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param identifier
 */

export const store = async (
  endpoint?: string,
  identifier?: any
): Promise<IAttachment> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.attachments),
    useHeaders(identifier, "POST")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
