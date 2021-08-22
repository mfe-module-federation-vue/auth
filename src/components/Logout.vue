<template>
  <div>
    <DSButton color="orange" @click="removeToken">Log out</DSButton>
  </div>
</template>

<script>
import { dealful } from "../remotes/dealful";
import DSButton from "ds/DSButton";

export default {
  name: "Logout",
  components: {
    DSButton,
  },
  methods: {
    removeToken() {
      try {
        localStorage.setItem(dealful.STORAGE_KEYS.TOKEN, "");
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
