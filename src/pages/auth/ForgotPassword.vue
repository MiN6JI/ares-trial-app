<template>
  <q-page class="flex flex-center">
    <div class="text-center q-pa-md">
      <app-identity classes="app-logo"/>

      <h5 class="q-my-md">Reset Password</h5>
      <p class="q-px-lg text-body2 text-grey-9">
        Enter the email address associated with your account and we will send
        you a link to reset your password.
      </p>

      <q-form ref="resetPasswordForm" @submit="resetPassword">
        <q-input
          v-model="userEmail"
          type="email"
          label="Email"
          class="q-pt-sm q-pb-md"
          :rules="[email, required]"
        />

        <q-btn
          unelevated
          no-caps
          size="md"
          color="primary"
          label="Send Link"
          class="w-full q-my-md text-weight-bold"
          @click="resetPassword"
        />
      </q-form>

      <p class="q-py-md">
        <a href="#/auth/login"> Go Back</a>
      </p>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import { email, required } from "../../utils/validations";
import AppIdentity from "components/app/AppIdentity.vue";

const auth = useAuthStore();
const resetPasswordForm = ref(null);
const userEmail = ref("");

function resetPassword() {
  console.log("reset password");
}
</script>
