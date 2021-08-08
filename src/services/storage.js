import { STORAGE_KEYS } from "../remotes/dealful";

export const userData = () => {
  const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  return JSON.parse(userData);
};
