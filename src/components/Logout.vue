<template>
  <div>
    <DSButton color="orange" @click="removeToken">Log out</DSButton>
  </div>
</template>

<script>
import { STORAGE_KEYS } from "../dealful";
import DSButton from "ds/DSButton";

export default {
  name: "Logout",
  components: {
    DSButton,
  },
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
