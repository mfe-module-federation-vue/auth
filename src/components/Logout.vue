<template>
  <div>
    <VBtn color="orange" @click="removeToken">Log out</VBtn>
  </div>
</template>

<script>
import { dealful } from "../remotes/dealful";

export default {
  name: "Logout",
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
