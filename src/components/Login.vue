<template>
  <VCard class="mx-auto mt-4" max-width="344">
    <form>
      <VCardText>
        <DSInput
          placeholder="email"
          label="Email"
          id="email"
          v-model="credentials.email"
        />
        <br />
        <DSInput
          placeholder="password"
          id="password"
          label="Senha"
          v-model="credentials.password"
          type="password"
        />
      </VCardText>
      <VCardActions>
        <DSButton @click="setToken">Sign in </DSButton>
      </VCardActions>
    </form>
  </VCard>
</template>

<script>
import { login } from "@/services/auth.service";
import { STORAGE_KEYS } from "../dealful";
import DSButton from "ds/DSButton";
import DSInput from "ds/DSInput";

export default {
  name: "Login",
  components: {
    DSButton,
    DSInput,
  },
  data: () => {
    return {
      credentials: {
        email: "user@email.com",
        password: "123456",
      },
    };
  },
  methods: {
    async setToken() {
      try {
        const token = await login(
          this.credentials.email,
          this.credentials.password
        );
        localStorage.setItem(STORAGE_KEYS.TOKEN, token);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
