<template>
  <q-page class="q-pa-md bg-auth">
    <app-identity classes="flex justify-center q-mx-auto q-py-md">
    </app-identity>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 q-mx-auto">
          <q-form ref="signUpForm" @submit="signUp" class="form-auth">
            <div class="row q-pt-md">
              <div class="col-12 q-mx-auto text-center">
                <h4 class="q-my-md text-weight-medium">Sign Up</h4>
                <p class="text-weight-bold">
                  Already have an account?
                  <a href="/#/auth/login">Sign In</a>
                </p>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { Notify } from "quasar";
import { useAuthStore } from "../../stores/auth";
import { email, required } from "../../utils/validations";
import AppIdentity from "components/app/AppIdentity.vue";

const auth = useAuthStore();
const signUpForm = ref(null);
const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");
const confirmUserPassword = ref("");
const isPassword = ref(true);

function signUp() {
  signUpForm.value.validate().then((success) => {
    if (success) {
      const payload = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
      };

      auth.register(payload);
    } else {
      Notify.create({
        message: "Something Went Wrong",
      });
    }
  });
}
</script>
