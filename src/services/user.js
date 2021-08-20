import { STORAGE_KEYS } from "../dealful";

export const fetchUser = () => {
  return new Promise((resolve) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          STORAGE_KEYS.USER_DATA,
          JSON.stringify(res.results[0])
        );
        resolve(res);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export const firstLoadUserData = async () => {
  console.log("%c first load user data - auth", "color: red;");
  return await fetchUser();
};
