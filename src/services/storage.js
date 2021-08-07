import { dealful } from "../remotes/dealful";

export const userData = () => {
  const userData = localStorage.getItem(dealful.STORAGE_KEYS.USER_DATA);
  return JSON.parse(userData);
};
