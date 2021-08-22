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
import { login } from "@/service/auth.service";
import { dealful } from "../remotes/dealful";
import DSButton from "ds/DSButton";
import DSInput from "ds/DSInput";

export default {
  name: "Login",
  components: {
    DSButton,DSInput
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
      const token = await login(
        this.credentials.email,
        this.credentials.password
      );
      try {
        const tokenFromSomeRequest = token;
        localStorage.setItem(dealful.STORAGE_KEYS.TOKEN, tokenFromSomeRequest);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
