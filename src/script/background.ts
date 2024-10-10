import { logTest } from "./testConsole";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  logTest("from background");
});
