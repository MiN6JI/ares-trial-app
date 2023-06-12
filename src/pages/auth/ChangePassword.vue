<template>
  <q-page class="flex flex-center">
    <div class="text-center q-pa-md">
      <h5 class="q-my-md">Change Password</h5>
      <p class="q-px-lg text-body2 text-grey-9">
        Verify your old password and enter the new password to change.
      </p>

      <q-form ref="changePasswordForm" @submit="changePassword">
        <q-input
          v-model="oldPassword"
          :type="isOldPassword ? 'password' : 'text'"
          label="Old Password"
          class="q-pt-sm q-pb-md"
          :rules="[required]"
        >
          <template v-slot:append>
            <q-icon
              :name="isOldPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isOldPassword = !isOldPassword"
            />
          </template>
        </q-input>

        <q-input
          v-model="newPassword"
          :type="isNewPassword ? 'password' : 'text'"
          label="New Password (8+ characters)"
          class="q-pt-sm q-pb-md"
          :rules="[required]"
        >
          <template v-slot:append>
            <q-icon
              :name="isNewPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isNewPassword = !isNewPassword"
            />
          </template>
        </q-input>

        <q-input
          v-model="confirmNewPassword"
          :type="isConfirmNewPassword ? 'password' : 'text'"
          label="Confirm New Password (8+ characters)"
          class="q-pt-sm q-pb-md"
          :rules="[required]"
        >
          <template v-slot:append>
            <q-icon
              :name="isConfirmNewPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isConfirmNewPassword = !isConfirmNewPassword"
            />
          </template>
        </q-input>

        <q-btn
          unelevated
          no-caps
          size="md"
          color="primary"
          label="Update"
          type="submit"
          class="w-full q-my-md text-weight-bold"
          @click="changePassword"
        />
      </q-form>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { api } from "boot/axios";
import { useAuthStore } from "../../stores/auth";
import { email, required } from "../../utils/validations";
import AppIdentity from "components/app/AppIdentity.vue";
import { Loading, Notify } from "quasar";

const auth = useAuthStore();
const changePasswordForm = ref(null);
const isOldPassword = ref(true);
const isNewPassword = ref(true);
const isConfirmNewPassword = ref(true);
const oldPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");

function changePassword() {
  console.log("reset password");

  if (newPassword.value != confirmNewPassword.value) {
    Notify.create({
      message: "New password and confirm new password do not match",
    });
  } else {
    let payload = {
      current_password: oldPassword.value,
      new_password: newPassword.value,
      confirm_password: confirmNewPassword.value,
    };

    Loading.show();

    api
      .post("/manage/rbac/change-password", payload)
      .then((response) => {
        console.log(response);

        Loading.hide();

        Notify.create({
          message: response.data.message,
        });
      })
      .catch((error) => {
        Loading.hide();
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors;
          for (const errorKey in errors) {
            const errorMessage = errors[errorKey][0];
            // do something with the error message, such as display it to the user
            Notify.create({
              message: errorMessage,
            });
          }
        } else {
          // handle other error responses
        }
      });
  }
}
</script>

