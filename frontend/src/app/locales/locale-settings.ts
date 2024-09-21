import "server-only";
import { LocaleType } from "./locale-types";

const localeDict = {
  "en-US": () => import("./en.json").then((module) => module.default),
  jp: () => import("./ja.json").then((module) => module.default),
};

export const getLocaleDict = async (locale: LocaleType) => {
  if (localeDict[locale]) {
    return localeDict[locale]();
  } else {
    return localeDict["en-US"]();
  }
};
