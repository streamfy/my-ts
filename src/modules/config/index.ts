import { IConfig } from "./interface/Config";
/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config: IConfig = {
  baseURL: "https://api.streamfy.net/",
  apiVersion: "v1/",
  baseEndpoint: "my/",
  headers: {},
  authorization: "Authorization",
  token: "",
  endpoints: {
    projects: "projects/",
    channels: "channels/",
    playlists: "playlists/",
    videos: "videos/",
    shorts: "shorts/",
    tags: "tags/",
  },
};
