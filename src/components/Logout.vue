<template>
  <div>
    <VBtn color="orange" @click="removeToken">Log out</VBtn>
  </div>
</template>

<script>
import { STORAGE_KEYS } from "../dealful";

export default {
  name: "Logout",
  methods: {
    removeToken() {
      try {
        localStorage.setItem(STORAGE_KEYS.TOKEN, "");
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
