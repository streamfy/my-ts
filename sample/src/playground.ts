import { myTs } from "../../src/index";
import type { IMyTs } from "../../src/index";
import {IProjectList} from "../../src/modules/interface/IProjectList";

export function setupApp() {
  const my = myTs() as unknown as IMyTs;
  // Configuration
  const config = {
    baseURL: "https://api.streamfy.net/v1", // Replace with your API base URL
    defaultEndpoints: {
      tradingAccountsList: "/projects/", // Replace with your default endpoint
    },
    headers: {
      // Replace with any additional headers if needed
    },
  };

  my.config.baseURL = config.baseURL;
  const {
    projects: { getProjects },
  } = my;

  const testFetch = async () => {
    try {
      const response = (await getProjects(
        "/projects/"
      )) as IProjectList;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  testFetch();
}
