import { IAttachment } from "../../interface/IAttachment";
import { store } from "./store";

export const attachments = () => {
  return {
    store,
  };
};

export interface IAttachmentsModule {
  store: (
    endpoint?: string | undefined,
    identifier?: any
  ) => Promise<IAttachment>;
}
