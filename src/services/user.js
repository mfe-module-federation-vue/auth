import { dealful } from "../remotes/dealful";

const custom = new CustomEvent(dealful.EVENT_KEYS.USER);

export const fetchUser = () => {
  return new Promise((resolve) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          dealful.STORAGE_KEYS.USER_DATA,
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

export const changeUser = async () => {
  try {
    const fakeUserData = {
      name: { first: "Seu", last: "Madruga" },
      age: 22,
      email: "some@some",
      picture: {
        large:
          "https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2021/05/Ramon-Valdes-como-Seu-Madruga-em-Chaves.jpg",
      },
    };
    localStorage.setItem(
      dealful.STORAGE_KEYS.USER_DATA,
      JSON.stringify(fakeUserData)
    );
    console.log("%c set user called - store", "color: red;");
    return await window.dispatchEvent(custom);
  } catch (error) {
    console.error("user set erro request", error);
  }
};
